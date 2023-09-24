import { computed } from "vue";
import { WAS_BUTTON_EVENT } from "./const";
import { WAS_ITEM } from "./defines/item";
import { WAS_SKILL } from "./defines/skill";
import { WasPlayerCharacter } from "./types/playerCharacter";

export const useWasButton = (player: WasPlayerCharacter) => {
  const EXLPORE_BUTTON_LIST = [
    {
      eventId: WAS_BUTTON_EVENT.EXPLORE,
      label: "探索する",
    },
    {
      eventId: WAS_BUTTON_EVENT.BACK_TO_MAP,
      label: "戻る",
    },
  ];
  const PERSUADE_BUTTON_LIST = computed(() => {
    const ROW_NUM = 4;
    const COL_NUM = 4;
    let buttons = new Array(COL_NUM);
    const items = player.items.filter((item) => item.amount > 0);
    for (let i = 0; i < COL_NUM; i++) {
      buttons[i] = new Array(ROW_NUM);
      for (let j = 0; j < ROW_NUM; j++) {
        if (i == COL_NUM - 1 && j == ROW_NUM - 1) {
          buttons[i][j] = {
            label: "戻る",
            eventId: WAS_BUTTON_EVENT.BACK_TO_FACE,
          };
          break;
        }
        const item = items[i * ROW_NUM + j];
        if (item) {
          buttons[i][j] = {
            label: WAS_ITEM[item.id].name,
            eventId: WAS_BUTTON_EVENT.USE_PERSUADE_ITEM,
            eventArgs: item.id,
          };
        } else {
          buttons[i][j] = {
            label: "...",
            eventId: WAS_BUTTON_EVENT.NONE,
          };
        }
      }
    }
    return buttons;
  });
  const FACE_BUTTON_DEFINE_LIST = [
    {
      label: "説得する",
      eventId: WAS_BUTTON_EVENT.PERSUADE,
    },
    {
      label: "戦う",
      eventId: WAS_BUTTON_EVENT.BATTLE,
    },
    {
      label: "帰る",
      eventId: WAS_BUTTON_EVENT.BACK_TO_MAP,
    },
  ];
  const SKILL_BUTTON_LIST = computed(() => {
    const ROW_NUM = 4;
    const COL_NUM = 4;
    let buttons = new Array(COL_NUM);
    for (let i = 0; i < COL_NUM; i++) {
      buttons[i] = new Array(ROW_NUM);
      for (let j = 0; j < ROW_NUM; j++) {
        if (i == COL_NUM - 1 && j == ROW_NUM - 1) {
          buttons[i][j] = {
            label: "戻る",
            eventId: WAS_BUTTON_EVENT.BACK_TO_BATTLE,
          };
          break;
        }
        const skillId = player.skills[i * ROW_NUM + j];
        if (skillId) {
          buttons[i][j] = {
            label: WAS_SKILL[skillId].name,
            eventId: WAS_BUTTON_EVENT.ACTIVATE_SKILL,
            eventArgs: skillId,
          };
        } else {
          buttons[i][j] = {
            label: "...",
            eventId: WAS_BUTTON_EVENT.NONE,
          };
        }
      }
    }
    return buttons;
  });
  const BATTLE_ITEM_BUTTON_LIST = computed(() => {
    const ROW_NUM = 4;
    const COL_NUM = 4;
    let buttons = new Array(COL_NUM);
    const items = player.items.filter((item) => item.amount > 0);
    for (let i = 0; i < COL_NUM; i++) {
      buttons[i] = new Array(ROW_NUM);
      for (let j = 0; j < ROW_NUM; j++) {
        if (i == COL_NUM - 1 && j == ROW_NUM - 1) {
          buttons[i][j] = {
            label: "戻る",
            eventId: WAS_BUTTON_EVENT.BACK_TO_BATTLE,
          };
          break;
        }
        const item = items[i * ROW_NUM + j];
        if (item) {
          buttons[i][j] = {
            label: WAS_ITEM[item.id].name,
            eventId: WAS_BUTTON_EVENT.USE_BATTLE_ITEM,
            eventArgs: item.id,
          };
        } else {
          buttons[i][j] = {
            label: "...",
            eventId: WAS_BUTTON_EVENT.NONE,
          };
        }
      }
    }
    return buttons;
  });
  const BATTLE_BUTTON_LIST = [
    {
      label: "攻撃",
      eventId: WAS_BUTTON_EVENT.ATTACK,
    },
    {
      label: "特技",
      eventId: WAS_BUTTON_EVENT.SKILL,
    },
    {
      label: "アイテム",
      eventId: WAS_BUTTON_EVENT.BATTLE_ITEM,
    },
  ];

  return {
    WAS_BUTTON_EVENT,
    EXLPORE_BUTTON_LIST,
    FACE_BUTTON_DEFINE_LIST,
    PERSUADE_BUTTON_LIST,
    BATTLE_BUTTON_LIST,
    SKILL_BUTTON_LIST,
    BATTLE_ITEM_BUTTON_LIST,
  };
};
