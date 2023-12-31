<template>
  <div class="c-training">
    <div class="c-training__character">
      <GOUVisualCanvas :objects="{ training: characterVisual }" />
    </div>
    <div v-if="modal.isShown" class="c-training__dialog">
      <MessageFrame
        :backgroundColor="TBH_MESSAGEFRAME_BACKGROUND_COLOR"
        :borderColor="TBH_MESSAGEFRAME_BORDER_COLOR"
        vertical="center"
        horizontal="center"
      >
        <div class="c-training__dialog__message">
          <div class="c-training__dialog__message__text">
            {{ modal.message }}
          </div>
          <div class="c-training__dialog__message__button">
            <GameButton
              label="OK"
              :backgroundColor="COLOR.WHITE"
              :borderColor="COLOR.ORANGE"
              :sounds="{ click: props.sounds.BUTTON }"
              @click="modal.onAgree"
            />
          </div>
        </div>
      </MessageFrame>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, onMounted, onBeforeUnmount, ref, PropType } from "vue";
import MessageFrame from "@/components/atoms/frames/MessageFrame.vue";
import GameButton from "@/components/atoms/interfaces/GameButton.vue";
import GOUVisualCanvas from "@/components/molecules/GOUVisualCanvas.vue";
import GOUVisual from "@/composables/types/visuals/GOUVisual";
import { GOUReadAudio } from "@/composables/types/audio/GOUReadAudio";
import { COLOR } from "@/composables/types/GOUColor";
import { TbhPlayer } from "@/composables/games/tbh/types/player";
import {
  TBH_MESSAGEFRAME_BACKGROUND_COLOR,
  TBH_MESSAGEFRAME_BORDER_COLOR,
} from "@/composables/games/tbh/const";

const props = defineProps({
  player: {
    type: TbhPlayer,
    required: true,
  },
  sounds: {
    type: Object as PropType<{ [key: string]: GOUReadAudio }>,
    required: true,
  },
  images: {
    type: Object as PropType<{ [key: string]: GOUVisual }>,
    required: true,
  },
});
const emits = defineEmits(["success"]);

let timeoutId: NodeJS.Timeout | undefined = undefined;
let intervalId: NodeJS.Timeout | undefined = undefined;

const characterVisual = ref(props.images.PUSHUP);
const modal = reactive({
  isShown: false,
  message: "筋力がアップした！",
  onAgree: () => emits("success", { stamina: -15, power: 10 }),
});

onMounted(() => {
  timeoutId = setTimeout(() => {
    if (props.sounds.POWERUP) {
      props.sounds.POWERUP.play();
    }
    modal.isShown = true;
    clearTimeout(timeoutId);
    clearInterval(intervalId);
  }, 2800);

  let show = "PUSHUP";
  intervalId = setInterval(() => {
    if (props.sounds.SHOUT) {
      props.sounds.SHOUT.play();
    }

    if (show == "PUSHUP") {
      characterVisual.value = props.images.PUSHDOWN;
      show = "PUSHDOWN";
    } else {
      characterVisual.value = props.images.PUSHUP;
      show = "PUSHUP";
    }
  }, 400);
});
onBeforeUnmount(() => {
  clearTimeout(timeoutId);
  clearInterval(intervalId);
});
</script>

<style scoped lang="scss">
.c-training {
  font-family: "DotGothic16";
  &__character {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translate(-50%, -100%);
    width: 60%;
    height: 40%;
  }
  &__dialog {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50%;
    height: 20%;
    &__message {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      white-space: break-spaces;
      &__button {
        width: 30%;
        height: 30%;
        font-size: 16px;
      }
    }
  }
}
</style>
