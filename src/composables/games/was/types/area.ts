import { WAS_ITEM_ID } from "@/composables/games/was/const";
import GOUVisual from "@/composables/types/visuals/GOUVisual";
import { WasCharacter } from "@/composables/games/was/types/character";
import { WasNonPlayerCharacter } from "@/composables/games/was/types/nonPlayerCharacter";
import { GOUReadAudio } from "@/composables/types/audio/GOUReadAudio";

export class WasArea {
  readonly name: string;
  readonly outside: GOUVisual;
  readonly inside: GOUVisual;
  readonly bgm: GOUReadAudio;
  readonly character: WasCharacter;
  readonly boss?: WasNonPlayerCharacter;
  isClear: boolean;
  exploreCount: number;
  dropItems: Array<{
    probability: number;
    amount: number;
    id: WAS_ITEM_ID;
  }>;
  constructor(
    name: string,
    outside: GOUVisual,
    inside: GOUVisual,
    bgm: GOUReadAudio,
    character: WasCharacter,
    boss?: WasNonPlayerCharacter,
    dropItems?: Array<{ probability: number; amount: number; id: WAS_ITEM_ID }>
  ) {
    this.name = name;
    this.outside = outside;
    this.bgm = bgm;
    this.inside = inside;
    this.character = character;
    this.boss = boss;
    this.dropItems = dropItems ?? [];
    this.isClear = false;
    this.exploreCount = 0;
  }

  /**
   * 探索結果を取得する
   * @returns 探索結果（エンカウント時はキャラクター、ドロップ判定にかかればアイテム、それ以外はnull）
   */
  explore(): WasCharacter | WAS_ITEM_ID | null {
    if (this.isClear || !this.dropItems.find((item) => item.amount > 0)) {
      // クリア済みでドロップ可能なアイテムがない場合は強制エンカウント
      return this.encount();
    }

    this.exploreCount++;
    if (this.exploreCount < 5) {
      // 探索回数が5回未満の場合はアイテムドロップのみ
      return this.drop();
    }

    if (Math.random() < 0.8) {
      return this.drop();
    }
    return this.encount();
  }

  /**
   * 進行状況に応じてキャラクターを返す
   * @returns エンカウントしたキャラクター（エンカウントするキャラクターがいない場合はnull）
   */
  encount(): WasCharacter | null {
    // ボスが設定されていない場合は会話のみのエリアとみなして、キャラクターを強制で返す
    if (!this.boss) {
      return this.character;
    }

    const character = this.character as WasNonPlayerCharacter;
    if (this.boss.status.life <= 0 && !this.boss.isPersuaded) {
      // ボスが未説得で倒されている場合は何も表示しない
      return null;
    } else if (character.isPersuaded || character.status.life <= 0) {
      // 雑魚敵だけが倒されているまたは説得済みの場合はボスキャラを表示
      return this.boss;
    } else {
      // 上記以外は雑魚敵を表示
      return character;
    }
  }

  /**
   * ドロップするアイテムを返す
   * @returns ドロップしたアイテム（ドロップしない場合はnullを返却する）
   */
  drop(): WAS_ITEM_ID | null {
    for (const dropItem of this.dropItems) {
      if (dropItem.amount <= 0) {
        continue;
      }
      // ドロップ判定
      // 探索回数が増えるほどアイテムがドロップしやすくなるように調整
      const additional = this.exploreCount * dropItem.probability * 0.1;
      if (Math.random() < dropItem.probability + additional) {
        dropItem.amount--;
        return dropItem.id;
      }
    }
    return null;
  }

  /**
   * 保持データをjson形式に変換する
   * @returns json形式のデータ
   */
  toJson() {
    return {
      isClear: this.isClear,
      dropItems: this.dropItems,
      exploreCount: this.exploreCount,
    };
  }
}
