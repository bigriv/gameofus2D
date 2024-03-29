<template>
  <div v-if="isShow" class="c-dialog_backgrond"></div>
  <transition>
    <div v-show="isShow" class="c-result_dialog">
      <MessageFrame
        v-if="props.result"
        :fontColor="WIL_FRAME_FONT_COLOR"
        :backgroundColor="WIL_FRAME_BACKGROUND_COLOR"
        :borderColor="WIL_FRAME_BORDER_COLOR"
      >
        <div class="c-result_dialog__cards">
          <div
            v-if="props.result.character"
            class="c-result_dialog__cards__character"
          >
            <WilCharacterCard :character="props.result.character" />
          </div>
          <div v-if="props.result" class="c-result_dialog__cards__training">
            <WilTrainingCard :training="props.result.menu" />
          </div>
        </div>
        <template v-if="props.result">
          <div class="c-result_dialog__result">
            <dl v-for="result in resultList">
              <dt>{{ result.label }}</dt>
              <dd>{{ result.before }}</dd>
              <dd>⇒</dd>
              <dd
                :class="{
                  'u-color--red': result.rise,
                }"
              >
                {{ result.after }}
              </dd>
            </dl>
          </div>
          <div v-if="props.result.learned" class="c-result_dialog__learned">
            <span class="c-result_dialog__learned--caution">★</span>
            {{ props.result.learned.name }}を習得した！
          </div>
          <div class="c-result_dialog__button">
            <GameButton
              label="OK"
              :fontColor="WIL_BUTTON_FONT_COLOR"
              :backgroundColor="WIL_BUTTON_BACKGROUND_COLOR"
              @click="onSubmit"
            />
          </div>
        </template>
      </MessageFrame>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { PropType, computed } from "vue";
import MessageFrame from "@/components/atoms/frames/MessageFrame.vue";
import GameButton from "@/components/atoms/interfaces/GameButton.vue";
import WilCharacterCard from "@/components/molecules/games/wil/WilCharacterCard.vue";
import WilTrainingCard from "@/components/molecules/games/wil/WilTrainingCard.vue";
import {
  WIL_FRAME_FONT_COLOR,
  WIL_FRAME_BORDER_COLOR,
  WIL_FRAME_BACKGROUND_COLOR,
  WIL_BUTTON_FONT_COLOR,
  WIL_BUTTON_BACKGROUND_COLOR,
} from "@/composables/games/wil/const";
import { WilTrainingResult } from "@/composables/games/wil/types/training";

const props = defineProps({
  isShow: {
    type: Boolean,
    required: true,
  },
  result: {
    type: Object as PropType<WilTrainingResult>,
    default: undefined,
  },
});
const emits = defineEmits(["submit", "cancel", "update:isShow"]);

const isShow = computed({
  get: () => props.isShow,
  set: (newValue: boolean) => emits("update:isShow", newValue),
});

const resultList = computed(() => {
  if (!props.result) {
    return [];
  }
  return [
    {
      label: "体力",
      before: props.result.before.life,
      after: props.result.after.life,
      rise: props.result.before.life < props.result.after.life,
    },
    {
      label: "攻撃力",
      before: props.result.before.attack,
      after: props.result.after.attack,
      rise: props.result.before.attack < props.result.after.attack,
    },
    {
      label: "防御力",
      before: props.result.before.defense,
      after: props.result.after.defense,
      rise: props.result.before.defense < props.result.after.defense,
    },
    {
      label: "魔力",
      before: props.result.before.magic,
      after: props.result.after.magic,
      rise: props.result.before.magic < props.result.after.magic,
    },
    {
      label: "敏捷力",
      before: props.result.before.speed,
      after: props.result.after.speed,
      rise: props.result.before.speed < props.result.after.speed,
    },
  ];
});
const onSubmit = () => {
  emits("submit");
};
</script>

<style scoped lang="scss">
.c-result_dialog {
  width: 65%;
  height: 65%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
  &__cards {
    display: flex;
    justify-content: space-around;
    height: 36%;
    width: 100%;
    color: black;
    padding: 0% 2%;
    &__character {
      width: 36%;
      height: 100%;
    }
    &__training {
      width: 36%;
      height: 100%;
    }
  }
  &__result {
    width: 85%;
    color: white;
    padding: 0% 2%;
    dl {
      display: flex;
      justify-content: space-between;
      dt {
        width: 50%;
      }
      dd {
        width: 20%;
        text-align: right;
      }
    }
  }
  &__learned {
    width: 85%;
    padding: 0% 2%;
    margin: 2% auto 0 auto;
    &--caution {
      color: yellow;
    }
  }
  &__button {
    width: 20%;
    height: 8%;
    padding: 0% 2%;
    margin-top: auto;
    margin-bottom: 2%;
    align-self: center;
  }
}
.c-dialog_backgrond {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.v-enter-active,
.v-leave-active {
  transition: height 0.2s ease;
}
.v-enter-from,
.v-leave-to {
  height: 0;
}
@media screen and (max-width: 400px) {
  .c-result_dialog__result {
    margin: 2% auto 0 auto;
  }
  .c-result_dialog__result,
  .c-result_dialog__learned,
  .c-result_dialog__learned--caution,
  .c-result_dialog__button {
    font-size: 10px;
  }
}

@media screen and (max-width: 600px) and (min-width: 400px) {
  .c-result_dialog__result {
    margin: 2% auto 0 auto;
  }
  .c-result_dialog__result,
  .c-result_dialog__learned,
  .c-result_dialog__learned--caution,
  .c-result_dialog__button {
    font-size: 10px;
  }
}
@media screen and (min-width: 600px) {
  .c-result_dialog__result {
    margin: 4% auto 0 auto;
  }
  .c-result_dialog__result,
  .c-result_dialog__learned,
  .c-result_dialog__learned--caution,
  .c-result_dialog__button {
    font-size: 16px;
  }
}
</style>
