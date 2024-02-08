import { SequenceId } from "@/composables/utils/id";
import { WIL_SKILL_DEFINES } from "@/composables/games/wil/defines/skill";
import { WIL_CHARACTER_DEFINES } from "@/composables/games/wil/defines/character";
import { WilSkill } from "@/composables/games/wil/types/skill";
import { WilCharacter } from "@/composables/games/wil/types/character";
import { WilPlayer } from "@/composables/games/wil/types/player";

export const useWilInit = () => {
  const initSkills = (): { [key: string]: WilSkill } => {
    let skills: { [key: string]: WilSkill } = {};
    for (const define of WIL_SKILL_DEFINES) {
      skills[define.id] = new WilSkill(define);
    }
    return skills;
  };
  const WIL_SKILLS = initSkills();

  const characterSequence = new SequenceId();
  const initPlayer = (): WilPlayer => {
    const player = new WilPlayer();

    player.allCharacters = [
      new WilCharacter(
        characterSequence.generateId(),
        WIL_CHARACTER_DEFINES.HERO,
      ),
    ];
    return player;
  };
  const player: WilPlayer = initPlayer();

  return {
    WIL_SKILLS,
    WIL_CHARACTER_DEFINES,
    characterSequence,
    player,
  };
};
