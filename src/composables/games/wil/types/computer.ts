import { WrongImplementationError } from "@/composables/types/errors/WrongImplementationError";
import { WIL_SKILL_TARGET } from "@/composables/games/wil/enums/skill";
import { WIL_BATTLE_TEAM } from "@/composables/games/wil/enums/battle";
import { WilOperator } from "@/composables/games/wil/types/operator";
import { WilField, WilFieldCell } from "@/composables/games/wil/types/field";
import { WilBattle } from "@/composables/games/wil/types/battle";
import { WilSkill } from "@/composables/games/wil/types/skill";

export class WilComputer extends WilOperator {
  private readonly level: number;
  constructor(teamName: string, level: number) {
    super(WIL_BATTLE_TEAM.COMPUTER, teamName);
    this.level = level;
  }

  /**
   * キャラクターを配置する
   * @param deploy 配置定義リスト
   */
  deployCharacters(deploy: Array<WilFieldCell>) {
    for (let cell of deploy) {
      if (!cell.character) {
        this.field.removeCharacter(cell.x, cell.y);
        continue;
      }
      this.field.setCharacter(cell.x, cell.y, cell.character);
    }
  }

  /**
   * 発動するスキルを決定する
   */
  private decideUseSkill() {
    switch (this.level) {
      case 1:
        this.selectSkill = this.decideUseSkill_level1();
        break;
    }
  }

  /**
   * AIレベル1のスキル選択
   * @returns 選択されたスキル
   */
  private decideUseSkill_level1(): WilSkill {
    if (!this.moveCharacter) {
      throw new WrongImplementationError("Move character is not set.");
    }
    // 相手が対象となるスキルのみを候補とする
    const skillCandidates = this.moveCharacter.skills.filter(
      (skill) => skill.target === WIL_SKILL_TARGET.ENEMY
    );
    // スキルをランダムに選択
    const skillRnd = Math.floor(Math.random() * skillCandidates.length);
    return skillCandidates[skillRnd];
  }

  /**
   * 行動対象を選択する
   * @param enemyField 相手のフィールド
   */
  private decideTarget(enemyField: WilField) {
    switch (this.level) {
      case 1:
        this.targetCell = this.decideTarget_level1(enemyField);
        break;
    }
  }

  /**
   * AIレベル1の対象選択
   * @param enemyField 相手のフィールド
   * @returns 選択したマス
   */
  private decideTarget_level1(enemyField: WilField): WilFieldCell {
    // 選択可能なキャラクターから対象をランダムに選択
    const targetCandidates = enemyField.cells.filter(
      (cell) => cell.selectable && cell.character
    );
    const cellRand = Math.floor(Math.random() * targetCandidates.length);
    const target = targetCandidates[cellRand];

    return target;
  }

  /**
   * 処理する行動を決定する
   * @param enemyField 相手チームのフィールド
   * @param skills スキル定義リスト
   */
  decideBattleMove(battle: WilBattle) {
    this.decideUseSkill();
    battle.updateFieldSelectable();
    this.decideTarget(battle.player.field);
  }
}
