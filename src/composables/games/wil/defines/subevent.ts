import { WIL_CHARACTER_ID } from "../enums/character";
import { WilTrainingResult } from "../types/training";
import { WIL_SUB_TALK_DEFINES, WilTalkDefine } from "./talk";

export type WilSubEventDefine = {
  isStartable: (trainingResult: WilTrainingResult) => boolean;
  talk: WilTalkDefine;
};

export const WIL_SUBEVENT_DEFINES: {
  [key: string]: WilSubEventDefine;
} = {
  HERO_1: {
    isStartable: (__trainingResult: WilTrainingResult): boolean => {
      return true;
    },
    talk: WIL_SUB_TALK_DEFINES.HERO_1,
  },
  HERO_2: {
    isStartable: (trainingResult: WilTrainingResult): boolean => {
      return (
        trainingResult.character.isModel(WIL_CHARACTER_ID.HERO) &&
        trainingResult.character.defaultStatus.life >= 110
      );
    },
    talk: WIL_SUB_TALK_DEFINES.HERO_2,
  },
  HERO_3: {
    isStartable: (trainingResult: WilTrainingResult): boolean => {
      return (
        trainingResult.character.isModel(WIL_CHARACTER_ID.HERO) &&
        trainingResult.character.defaultStatus.magic >= 8
      );
    },
    talk: WIL_SUB_TALK_DEFINES.HERO_3,
  },
};
