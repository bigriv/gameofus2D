import {
  WAS_AREA_ID,
  WAS_EVENT_TIMMING,
  WAS_ITEM_ID,
  WAS_SKILL_ID,
  WAS_SKILL_TYPE,
} from "@/composables/games/was/const";
import { WasCharacter } from "@/composables/games/was/types/character";
import { WasNonPlayerCharacter } from "@/composables/games/was/types/nonPlayerCharacter";
import { WasPlayerCharacter } from "@/composables/games/was/types/palyerCharacter";
import {
  WAS_BOSS_GOBLIN,
  WAS_DARK_ELF,
  WAS_DORAGON,
  WAS_ELF,
  WAS_GOBLIN,
  WAS_HERO,
  WAS_KRAKEN,
  WAS_PRINCESS,
  WAS_SAHAGIN,
  WAS_SATAN,
  WAS_SLIME,
  WAS_SOLDIER,
} from "@/composables/games/was/defines/character";
import ConstructGOUVisual from "@/composables/types/visuals/ConstructGOUVisual";
import {
  WAS_CAVE,
  WAS_KINGDOM_CASTLE,
  WAS_MOUNTAIN,
  WAS_SATAN_CASTLE,
  WAS_SEA,
  WAS_VILLAGE,
} from "@/composables/games/was/defines/area";
import { reactive } from "vue";
import { WAS_MAP } from "@/composables/games/was/defines/map";
import GOUVisual from "@/composables/types/visuals/GOUVisual";
import { WasArea } from "@/composables/games/was/types/area";
import { WasStatus } from "@/composables/games/was/types/status";
import { WasSkill } from "@/composables/games/was/types/skill";
import { WAS_SKILL } from "@/composables/games/was/defines/skill";
import { WasPhysicalAttackSkill } from "@/composables/games/was/types/phisicalAttackSkill";
import { WasMagicalAttackSkill } from "@/composables/games/was/types/magicalAttackSkill";
import { WasHealSkill } from "@/composables/games/was/types/healSkill";
import { WasBuffSkill } from "@/composables/games/was/types/buffSkill";

export const useWasInit = (loadData?: any) => {
  // プレイヤーの初期化
  const initPlayer = (): WasPlayerCharacter => {
    return new WasPlayerCharacter(
      WAS_SATAN.name,
      new WasStatus(WAS_SATAN.initStatus),
      WAS_SATAN.skills,
      WAS_SATAN.items
    );
  };

  // 敵キャラクターの初期化
  const initCharacter = (
    defines: { [key: string]: any },
    isBoss: boolean
  ): { [key: string]: WasNonPlayerCharacter } => {
    let characters: { [key: string]: WasNonPlayerCharacter } = {};
    for (const key of Object.keys(defines)) {
      characters[key] = new WasNonPlayerCharacter(
        defines[key].name,
        ConstructGOUVisual(defines[key].visual),
        new WasStatus(defines[key].initStatus),
        isBoss,
        defines[key].dropItem,
        defines[key].persuadItem,
        defines[key].occupySkill,
        defines[key].serif
      );
    }

    return characters;
  };

  // エリアの初期化
  const initArea = (): { [key: string]: WasArea } => {
    let areas: { [key: string]: WasArea } = {};
    areas["SATAN_CASTLE"] = new WasArea(
      WAS_SATAN_CASTLE.name,
      ConstructGOUVisual(WAS_SATAN_CASTLE.outside),
      ConstructGOUVisual(WAS_SATAN_CASTLE.inside),
      PRINCESS
    );
    const defines: { [key: string]: any } = {
      CAVE: WAS_CAVE,
      SEA: WAS_SEA,
      VILLAGE: WAS_VILLAGE,
      MOUNTAIN: WAS_MOUNTAIN,
      KINGDOM_CASTLE: WAS_KINGDOM_CASTLE,
    };
    for (const key of Object.keys(defines)) {
      areas[key] = new WasArea(
        defines[key].name,
        ConstructGOUVisual(defines[key].outside),
        ConstructGOUVisual(defines[key].inside),
        CHARACTERS[key],
        BOSSES[key]
      );
    }
    return areas;
  };

  // スキルの初期化
  const initSkill = () => {
    let skills: { [key: string]: WasSkill } = {};
    for (const key of Object.keys(WAS_SKILL)) {
      switch (WAS_SKILL[key].type) {
        case WAS_SKILL_TYPE.PHISICAL_ATTACK:
          skills[key] = new WasPhysicalAttackSkill(
            WAS_SKILL[key].name,
            WAS_SKILL[key].element,
            WAS_SKILL[key].cost,
            WAS_SKILL[key].power,
            WAS_SKILL[key].beforeEffect,
            WAS_SKILL[key].effect,
            WAS_SKILL[key].afterEffect
          );
          break;
        case WAS_SKILL_TYPE.MAGICAL_ATTACK:
          skills[key] = new WasMagicalAttackSkill(
            WAS_SKILL[key].name,
            WAS_SKILL[key].element,
            WAS_SKILL[key].cost,
            WAS_SKILL[key].power,
            WAS_SKILL[key].beforeEffect,
            WAS_SKILL[key].effect,
            WAS_SKILL[key].afterEffect
          );
          break;
        case WAS_SKILL_TYPE.HEAL:
          skills[key] = new WasHealSkill(
            WAS_SKILL[key].name,
            WAS_SKILL[key].element,
            WAS_SKILL[key].cost,
            WAS_SKILL[key].power,
            WAS_SKILL[key].beforeEffect,
            WAS_SKILL[key].effect,
            WAS_SKILL[key].afterEffect
          );
          break;
        case WAS_SKILL_TYPE.BUFF:
          skills[key] = new WasBuffSkill(
            WAS_SKILL[key].name,
            WAS_SKILL[key].element,
            WAS_SKILL[key].cost,
            WAS_SKILL[key].beforeEffect,
            WAS_SKILL[key].effect,
            WAS_SKILL[key].afterEffect
          );
          break;
      }
    }
    return skills;
  };
  const PRINCESS: WasCharacter = new WasCharacter(
    WAS_PRINCESS.name,
    ConstructGOUVisual(WAS_PRINCESS.visual),
    new WasStatus()
  );
  const CHARACTERS: { [key: string]: WasNonPlayerCharacter } = initCharacter(
    {
      CAVE: WAS_GOBLIN,
      SEA: WAS_SAHAGIN,
      VILLAGE: WAS_ELF,
      MOUNTAIN: WAS_SLIME,
      KINGDOM_CASTLE: WAS_SOLDIER,
    },
    false
  );
  const BOSSES: { [key: string]: WasNonPlayerCharacter } = initCharacter(
    {
      CAVE: WAS_BOSS_GOBLIN,
      SEA: WAS_KRAKEN,
      VILLAGE: WAS_DARK_ELF,
      MOUNTAIN: WAS_DORAGON,
      KINGDOM_CASTLE: WAS_HERO,
    },
    true
  );
  const MAP: GOUVisual = ConstructGOUVisual(WAS_MAP);
  const AREAS: { [key: string]: WasArea } = initArea();
  const SKILLS: { [key: string]: WasSkill } = initSkill();

  const state: {
    timming: WAS_EVENT_TIMMING;
    area: WAS_AREA_ID | null;
    player: WasPlayerCharacter;
    character: WasCharacter | null;
  } = reactive({
    timming: WAS_EVENT_TIMMING.OPENING,
    area: null,
    player: initPlayer(),
    character: null,
  });

  const load = () => {
    if (!loadData) {
      return;
    }
    if (loadData.player) {
      state.player.status = new WasStatus(loadData.status);
      state.player.defaultStatus = new WasStatus(loadData.defaultStatus);
      state.player.skills = loadData.skills as Array<WAS_SKILL_ID>;
      state.player.items = loadData.items as Array<WAS_ITEM_ID>;
    }

    if (loadData.timming) {
      state.timming = loadData.timming as WAS_EVENT_TIMMING;
    }

    if (loadData.bosses) {
      for (const key of Object.keys(BOSSES)) {
        if (!loadData.bosses[key]) {
          continue;
        }
        BOSSES[key].defaultStatus = new WasStatus(
          loadData.bosses[key].defaultStatus
        );
        BOSSES[key].status = new WasStatus(loadData.bosses[key].status);
        BOSSES[key].isPersuaded = loadData.bosses[key].isPersuaded;
      }
    }

    if (loadData.charachters) {
      for (const key of Object.keys(CHARACTERS)) {
        if (!loadData.charachters[key]) {
          continue;
        }
        CHARACTERS[key].defaultStatus = new WasStatus(
          loadData.charachters[key].defaultStatus
        );
        CHARACTERS[key].status = new WasStatus(
          loadData.charachters[key].status
        );
        CHARACTERS[key].isPersuaded = loadData.charachters[key].isPersuaded;
      }
    }

    if (loadData.areas) {
      for (const key of Object.keys(AREAS)) {
        if (!loadData.areas[key]) {
          continue;
        }
        AREAS[key].isClear = loadData.areas[key].isClear;
      }
    }
  };
  load();

  return {
    PRINCESS,
    CHARACTERS,
    BOSSES,
    MAP,
    AREAS,
    state,
  };
};
