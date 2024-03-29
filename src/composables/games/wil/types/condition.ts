import { WIL_CONDITION_ID } from "@/composables/games/wil/enums/condition";

export class WilConditionUtil {
  static readonly SUSTAINED_TURN = 3; // 状態異常継続ターン数
  static readonly LITTELE_DECREASE_RATE = 10; // ステータス減少率弱
  static readonly MEDIUM_DECREASE_RATE = 20; // ステータス減少率中
  static readonly LITTELE_DAMAGE_RATE = 10; // ダメージ率弱
  static readonly MEDIUM_DAMAGE_RATE = 20; // ダメージ率中
  static readonly LITTELE_STACK_RATE = 10; // スタック増加率弱
  static readonly MEDIUM_STACK_RATE = 20; // スタック増加率中

  /**
   * 状態異常の表示名を取得する
   * @param id 状態異常ID
   * @returns 状態異常の表示名
   */
  static getLabel(id: WIL_CONDITION_ID): string {
    switch (id) {
      case WIL_CONDITION_ID.HEALTH:
        return "健康";
      case WIL_CONDITION_ID.BURN:
        return "火傷";
      case WIL_CONDITION_ID.PARALYSIS:
        return "麻痺";
      case WIL_CONDITION_ID.DEBILITY:
        return "衰弱";
      case WIL_CONDITION_ID.WEATHERING:
        return "風化";
      case WIL_CONDITION_ID.SLOW:
        return "鈍足";
      case WIL_CONDITION_ID.FAST:
        return "加速";
      case WIL_CONDITION_ID.POISON:
        return "被毒";
      case WIL_CONDITION_ID.REGENERATION:
        return "活性";
      case WIL_CONDITION_ID.HOLY:
        return "神聖";
    }
  }

  static getDescription(id: WIL_CONDITION_ID): string {
    switch (id) {
      case WIL_CONDITION_ID.HEALTH:
        return "影響なし";
      case WIL_CONDITION_ID.BURN:
        return `防御力が弱減少、さらにターン終了時に弱ダメージ`;
      case WIL_CONDITION_ID.PARALYSIS:
        return `攻撃力が弱減少、さらに行動時に増加するスタック数が弱増加`;
      case WIL_CONDITION_ID.DEBILITY:
        return `攻撃力と防御力が弱減少`;
      case WIL_CONDITION_ID.WEATHERING:
        return `防御力が中減少`;
      case WIL_CONDITION_ID.SLOW:
        return `行動時に増加するスタック数が中増加`;
      case WIL_CONDITION_ID.FAST:
        return `行動時に増加するスタック数が中減少`;
      case WIL_CONDITION_ID.POISON:
        return `ターン終了時に中ダメージ`;
      case WIL_CONDITION_ID.REGENERATION:
        return "ターン終了時に中回復";
      case WIL_CONDITION_ID.HOLY:
        return `${WilConditionUtil.SUSTAINED_TURN}ターンの間、状態異常が上書きされない`;
    }
  }

  /**
   * ステータスの減少値を計算する
   * @param status 現在ステータス
   * @param defaultStatus デフォルトステータス
   * @param rate 減少率
   * @returns 減少値
   */
  static calcDecrease(
    status: number,
    defaultStatus: number,
    rate: number
  ): number {
    const decrease = Math.round(defaultStatus * rate * 0.01);
    if (status - decrease < 0) {
      return status;
    }
    return decrease;
  }
  /**
   * ステータスの上昇値(戻し値)を計算する
   * 初期値を超えた場合は別のパッシブが働いているとみなすため、超過判定は行わない
   * @param status 現在ステータス
   * @param defaultStatus デフォルトステータス
   * @param rate 減少率
   * @returns 上昇値(戻し値)
   */
  static calcIncrease(defaultStatus: number, rate: number): number {
    return Math.round(defaultStatus * rate * 0.01);
  }

  /**
   * 状態異常によるダメージを計算
   * @param defaultLife デフォルトの体力
   * @param rate ダメージ率
   * @returns ダメージ量
   */
  static calcDamage(defaultLife: number, rate: number): number {
    let damage = defaultLife * rate * 0.01;
    // ダメージの最大10%を加算
    damage += damage * Math.random() * 0.1;
    return Math.round(damage);
  }

  /**
   * 状態異常による回復量を計算
   * @param defaultLife デフォルトの体力
   * @param rate 回復率
   * @returns 回復量
   */
  static calcHeal(defaultLife: number, rate: number): number {
    return this.calcDamage(defaultLife, rate);
  }

  /**
   * 状態異常によるスタック数増加量を計算
   * @param cost コスト
   * @param rate 増加率
   * @returns 増加スタック量
   */
  static calcIncreaseStack(cost: number, rate: number): number {
    return Math.round(cost * rate * 0.01);
  }

  /**
   * 状態異常が悪影響かを判定する
   * @param condition 判定する状態異常
   * @returns 悪影響ならtrue、それ以外ならfalse
   */
  static isBadCondition(condition: WIL_CONDITION_ID) {
    return [
      WIL_CONDITION_ID.BURN,
      WIL_CONDITION_ID.PARALYSIS,
      WIL_CONDITION_ID.DEBILITY,
      WIL_CONDITION_ID.WEATHERING,
      WIL_CONDITION_ID.SLOW,
      WIL_CONDITION_ID.POISON,
    ].includes(condition);
  }
}
