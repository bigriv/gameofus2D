<template>
  <div class="c-training">
    <div class="c-training__characters">
      <WilCardList
        :selected="selectedCharacter?.id"
        :dataList="(training.selectableCharacters as Array<WilCharacter>)"
        @selectCharacter="onSelectUnplanedCharacter"
      />
    </div>
    <div class="c-training__plan">
      <div class="c-training__plan__cards">
        <div
          v-for="plan in training.plan"
          class="c-training__plan__cards__content"
        >
          <div class="c-training__plan__cards__content__training">
            <WilTrainingCard
              :training="(plan.menu as WilTrainingMenu)"
              @click="onSelectTraining(plan.menu.id)"
            />
          </div>
          <template v-if="plan.character">
            <div class="c-training__plan__cards__content__character">
              <WilCharacterCard
                :selected="plan.character.id === selectedCharacter?.id"
                :character="(plan.character as WilCharacter)"
                @click="
                  (character) => onSelectPlanedCharacter(character, plan.menu as WilTrainingMenu)
                "
              />
            </div>
            <div class="c-training__plan__cards__content__button">
              <GameButton
                label="選択を解除"
                :fontColor="WIL_BUTTON_FONT_COLOR"
                :backgroundColor="WIL_BUTTON_BACKGROUND_COLOR"
                @click="onRemoveCharacter(plan.menu.id)"
              />
            </div>
          </template>
        </div>
      </div>
    </div>
    <div class="c-training__log" @click="isShowLog = true">&lt;&lt;ログ</div>
    <div class="c-training__infomation">
      <div>残り日数 {{ training.lastDay - training.days + 1 }}日</div>
      <div class="c-training__infomation__buttons">
        <div class="c-training__infomation__buttons__content">
          <GameButton
            v-if="selectedCharacter"
            label="ステータス"
            :fontColor="WIL_BUTTON_FONT_COLOR"
            :backgroundColor="WIL_BUTTON_BACKGROUND_COLOR"
            @click="isShowStatusDialog = true"
          />
        </div>
        <div class="c-training__infomation__buttons__content">
          <GameButton
            v-if="isStartableTraining"
            label="訓練開始"
            :fontColor="WIL_BUTTON_FONT_COLOR"
            :backgroundColor="WIL_BUTTON_BACKGROUND_COLOR"
            @click="onStartTraining"
          />
        </div>
      </div>
    </div>
    <div class="c-training__dialog">
      <WilLogDialog v-model:isShow="isShowLog" :log="training.log" />
    </div>
    <div class="c-training__dialog">
      <WilTrainingResultDialog
        v-model:isShow="resultModal.isShow"
        :result="resultModal.result"
        @submit="onClickOk"
      />
    </div>
    <div v-if="selectedCharacter" class="c-training__dialog">
      <WilTrainingStatusDialog
        v-model:isShow="isShowStatusDialog"
        :character="selectedCharacter"
        :menu="selectedPlan"
        @submit="isShowStatusDialog = false"
      />
    </div>
    <div class="c-training__dialog">
      <WilConfirmDialog
        v-model:isShow="confirmModal.isShow"
        :cancelable="!!confirmModal.onClickCancel"
        :message="confirmModal.message"
        @submit="confirmModal.onClickOk"
        @cancel="confirmModal.onClickCancel"
      />
    </div>

    <div v-if="talkEvent.isStart" class="c-training__subevent">
      <WilTalk :events="talkEvent.talk" @end="talkEvent.endTalk" />
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  PropType,
  Ref,
  computed,
  onMounted,
  onUnmounted,
  reactive,
  ref,
} from "vue";
import GameButton from "@/components/atoms/interfaces/GameButton.vue";
import WilCardList from "@/components/molecules/games/wil/WilCardList.vue";
import WilCharacterCard from "@/components/molecules/games/wil/WilCharacterCard.vue";
import WilTrainingCard from "@/components/molecules/games/wil/WilTrainingCard.vue";
import WilTalk from "@/components/molecules/games/wil/WilTalk.vue";
import WilConfirmDialog from "@/components/molecules/games/wil/WilConfirmDialog.vue";
import WilTrainingStatusDialog from "@/components/molecules/games/wil/WilTrainingStatusDialog.vue";
import WilTrainingResultDialog from "@/components/molecules/games/wil/WilTrainingResultDialog.vue";
import WilLogDialog from "@/components/molecules/games/wil/WilLogDialog.vue";
import { GOUReadAudio } from "@/composables/types/audio/GOUReadAudio";
import { useGameStore } from "@/pinia/game";
import {
  WIL_BUTTON_FONT_COLOR,
  WIL_BUTTON_BACKGROUND_COLOR,
} from "@/composables/games/wil/const";
import { WIL_TRAINING_ID } from "@/composables/games/wil/enums/training";
import { WilCharacter } from "@/composables/games/wil/types/character";
import {
  WilTraining,
  WilTrainingMenu,
  WilTrainingResult,
} from "@/composables/games/wil/types/training";
import { WilPlayer } from "@/composables/games/wil/types/player";
import { WilSkill } from "@/composables/games/wil/types/skill";
import {
  WilTalkEvent,
  WilTrainingEvent,
} from "@/composables/games/wil/types/event";

const props = defineProps({
  skills: {
    type: Object as PropType<{ [key: string]: WilSkill }>,
    required: true,
  },
  event: {
    type: WilTrainingEvent,
    required: true,
  },
  player: {
    type: Object as PropType<WilPlayer>,
    required: true,
  },
});
const emits = defineEmits(["end"]);

const gameStore = useGameStore();
const bgm: GOUReadAudio = gameStore.getSounds.BGM_TRAINING1 as GOUReadAudio;

const training = ref(
  new WilTraining(props.event.days, props.player.allCharacters)
);
// 選択中キャラクター
const selectedCharacter: Ref<WilCharacter | undefined> = ref();

// 選択中トレーニング
const selectedPlan: Ref<WilTrainingMenu | undefined> = ref();

// ステータスダイアログ表示フラグ
const isShowStatusDialog = ref(false);

// ログ表示フラグ
const isShowLog = ref(false);

// 会話イベント
const talkEvent: {
  isStart: boolean;
  talk: Array<WilTalkEvent> | undefined;
  endTalk: Function;
} = reactive({
  isStart: false,
  talk: undefined,
  endTalk: () => {},
});

// 訓練開始可否フラグ
const isStartableTraining = computed(() => {
  // 一人でも訓練に設定されていれば訓練開始可能
  if (training.value.plan.attack.character) {
    return true;
  }
  if (training.value.plan.defense.character) {
    return true;
  }
  if (training.value.plan.migration.character) {
    return true;
  }
  if (training.value.plan.magic.character) {
    return true;
  }
  if (training.value.plan.phisic.character) {
    return true;
  }
  return false;
});

// 訓練結果表示モーダル
const resultModal: {
  isShow: boolean;
  result?: WilTrainingResult;
} = reactive({
  isShow: false,
  result: undefined,
});

// 確認モーダル
const confirmModal: {
  isShow: boolean;
  message: string;
  onClickOk: Function;
  onClickCancel?: Function;
} = reactive({
  isShow: false,
  message: "",
  onClickOk: () => {},
  onClickCancel: undefined,
});

const onSelectUnplanedCharacter = (character: WilCharacter) => {
  selectedCharacter.value = character;
  selectedPlan.value = undefined;
};
const onSelectPlanedCharacter = (
  character: WilCharacter,
  menu: WilTrainingMenu
) => {
  selectedCharacter.value = character;
  selectedPlan.value = menu;
};
const onSelectTraining = (trainingId: WIL_TRAINING_ID) => {
  if (!selectedCharacter.value) {
    return;
  }
  if (training.value.getTrainingPlan(trainingId).character) {
    return;
  }
  training.value.setCharacter(trainingId, selectedCharacter.value);
  selectedPlan.value = training.value.getTrainingPlan(trainingId).menu;
  selectedCharacter.value = undefined;
};
const onRemoveCharacter = (trainingId: WIL_TRAINING_ID) => {
  training.value.resetTrainingPlan(trainingId);
  selectedPlan.value = undefined;
};
const endDay = () => {
  // 最終日の場合は訓練自体を終わる
  if (training.value.isEnd()) {
    setTimeout(() => {
      confirmModal.message = "訓練を終了します。";
      confirmModal.onClickOk = () => {
        props.player.allCharacters.forEach((character) => character.reset());
        confirmModal.isShow = false;
        emits("end");
      };
      confirmModal.onClickCancel = undefined;
      confirmModal.isShow = true;
    }, 50);
    return;
  }

  // 次の日の訓練を開始
  selectedCharacter.value = undefined;
  training.value.startDay();
};
const chainTrainingResult = () => {
  const result = training.value.results.shift();

  if (!result) {
    // 次の訓練結果がない場合はその日の訓練を終わる
    confirmModal.message = `${training.value.days}日目の訓練が終了しました。`;
    confirmModal.onClickOk = () => {
      if (talkEvent.talk) {
        bgm?.stop();
        talkEvent.isStart = true;
        talkEvent.endTalk = () => {
          talkEvent.isStart = false;
          talkEvent.talk = undefined;
          bgm?.play();
          endDay();
        };
      } else {
        endDay();
      }

      confirmModal.isShow = false;
    };
    confirmModal.onClickCancel = undefined;
    confirmModal.isShow = true;
    return;
  }

  // 結果モーダル表示
  resultModal.result = result as WilTrainingResult;
  resultModal.isShow = true;
};
const onStartTraining = () => {
  training.value.process(props.skills);
  talkEvent.talk = props.event.getTalk(training.value as WilTraining);
  chainTrainingResult();
};
const onClickOk = () => {
  resultModal.isShow = false;

  // 次の結果表示
  // 前のモーダルが閉じたのと時差をつけるために50ms遅らせて処理
  setTimeout(chainTrainingResult, 50);
};

onMounted(() => {
  if (bgm) {
    bgm.loop = true;
    bgm.play();
  }
  training.value.startDay();
  talkEvent.talk = props.event.getTalk(training.value as WilTraining);
  if (talkEvent.talk) {
    bgm?.stop();
    talkEvent.isStart = true;
    talkEvent.endTalk = () => {
      talkEvent.isStart = false;
      talkEvent.talk = undefined;
    };
  }
});
onUnmounted(() => {
  if (bgm) {
    bgm.stop();
  }
});
</script>

<style scoped lang="scss">
.c-training {
  position: relative;
  width: 100%;
  height: 100%;
  &__characters {
    position: absolute;
    top: 5%;
    left: 0;
    width: 100%;
    height: 30%;
  }

  &__plan {
    position: absolute;
    top: 36%;
    width: 100%;
    height: 40%;
    &__cards {
      position: relative;
      display: flex;
      justify-content: space-between;
      width: 90%;
      height: 100%;
      margin: auto;
      &__content {
        position: relative;
        width: 19.2%;
        height: 100%;
        &__training {
          position: absolute;
          top: 0;
          width: 100%;
          height: 70%;
        }
        &__character {
          position: absolute;
          top: 16%;
          width: 100%;
          height: 70%;
        }
        &__button {
          position: absolute;
          bottom: 0;
          width: 100%;
          height: 14%;
        }
      }
    }
  }
  &__log {
    position: absolute;
    bottom: 16%;
    right: 5%;
    text-decoration: underline;
    color: white;
    cursor: pointer;
    opacity: 0.6;
    &:hover {
      opacity: 1;
    }
  }
  &__infomation {
    position: absolute;
    bottom: 5%;
    left: 5%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    height: 10%;
    border: 2px solid white;
    color: white;
    padding: 0 2%;
    margin: auto;
    &__buttons {
      width: 50%;
      height: 80%;
      display: flex;
      justify-content: space-between;
      margin-left: auto;
      &__content {
        width: 40%;
      }
    }
  }
  &__subevent {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
@media screen and (max-width: 400px) {
  .c-training__infomation,
  .c-training__plan__cards__content__button {
    font-size: 8px;
  }
}
@media screen and (max-width: 600px) and (min-width: 400px) {
  .c-training__infomation,
  .c-training__plan__cards__content__button {
    font-size: 10px;
  }
}
@media screen and (min-width: 600px) {
  .c-training__infomation,
  .c-training__plan__cards__content__button {
    font-size: 14px;
  }
  .c-training__plan__cards__content__menu {
    font-size: 16px;
  }
}
</style>
