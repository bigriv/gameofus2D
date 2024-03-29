<template>
  <div
    class="c-battle_field"
    :class="{ 'c-battle_field--reverse': props.reverse }"
  >
    <template v-for="column in WilField.HEIGHT">
      <template v-for="row in WilField.WIDTH">
        <div
          class="c-battle_field__cell"
          :class="[
            `c-battle_field__cell--${
              field.cells[(column - 1) * WilField.WIDTH + (row - 1)].color
            }`,
          ]"
          @click.prevent="
            onClickCell(field.cells[(column - 1) * WilField.WIDTH + (row - 1)])
          "
          @mouseenter="
            onHoverCharacter(
              field.cells[(column - 1) * WilField.WIDTH + (row - 1)]
            )
          "
          @mouseleave="onLeave"
        >
          <div
            v-if="
              field.cells[(column - 1) * WilField.WIDTH + (row - 1)].character
            "
            class="c-battle_field__cell__character"
          >
            <GOUVisualCanvas
              :objects="{
                army: field.cells[(column - 1) * WilField.WIDTH + (row - 1)].character!.visual.current,
                animation: field.cells[(column - 1) * WilField.WIDTH + (row - 1)].animation,
              }"
            />
          </div>
        </div>
      </template>
    </template>
    <template v-for="(event, index) in damageResults">
      <div
        class="c-battle_field__damage a-fade"
        :style="{
          left: `${event.cell.x * 33}%`,
          top: `${event.cell.y * 20}%`,
          '--delay': `${index * 0.3}s`,
          '--duration': '1s',
          '--iteration': '1',
          '--easing': 'ease-in-out',
        }"
      >
        {{ event?.damage }}
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { PropType, Ref, computed, ref, watch } from "vue";
import GOUVisualCanvas from "@/components/molecules/GOUVisualCanvas.vue";
import { WIL_CELL_COLOR } from "@/composables/games/wil/enums/cell";
import { WilBattleDamegeResult } from "@/composables/games/wil/types/battle";
import { WilField, WilFieldCell } from "@/composables/games/wil/types/field";

const props = defineProps({
  reverse: {
    type: Boolean,
    default: false,
  },
  field: {
    type: Object as PropType<WilField>,
    required: true,
  },
  damageResults: {
    type: Array<WilBattleDamegeResult>,
    default: () => [],
  },
});
const emits = defineEmits(["click", "hover", "leave"]);

const field = computed(() => props.field);
const damageResults: Ref<Array<WilBattleDamegeResult>> = ref([]);
const onClickCell = (cell: WilFieldCell) => {
  if (cell.color !== WIL_CELL_COLOR.BLUE) {
    return;
  }
  emits("click", cell);
};
const onHoverCharacter = (cell: WilFieldCell | undefined) => {
  emits("hover", cell);
};
const onLeave = () => {
  emits("leave");
};

watch(
  () => props.damageResults,
  () => {
    const temp = props.damageResults.filter((result) => {
      return result.cell.team === props.field.team;
    });
    if (!temp || temp.length <= 0) {
      return;
    }
    damageResults.value = [];
    // ダメージのアニメーションをリセットするために遅延させる
    setTimeout(() => {
      damageResults.value = temp;
      // ダメージ表示
      damageResults.value.forEach((event, index) => {
        setTimeout(() => event.process(), index * 300);
      });
    }, 1);
  }
);
</script>

<style scoped lang="scss">
.c-battle_field {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  border-radius: 4px;
  box-sizing: content-box;
  &--reverse {
    transform: scaleX(-1);
    .c-battle_field__damage {
      transform: translate(-50%, -50%) scaleX(-1);
    }
  }
  &__cell {
    position: relative;
    width: 33%;
    aspect-ratio: 1;
    border-top: 2px solid black;
    border-left: 2px solid black;
    border-radius: 4px;
    &--WHITE {
      background-color: rgba(255, 255, 255, 0.5);
      border-color: white;
    }
    &--RED {
      background-color: rgba(255, 0, 0, 0.5);
      border-color: red;
    }
    &--BLUE {
      background-color: rgba(0, 0, 255, 0.5);
      border-color: blue;
      cursor: pointer;
      &:hover {
        animation: flash 1s infinite;
      }
    }
    &--YELLOW {
      background-color: rgba(255, 255, 0, 0.5);
      border-color: yellow;
    }
    &--selected {
      animation: flash 1s infinite;
    }
    &__character {
      width: 100%;
      height: 100%;
      transform: perspective(40px) translate(-20%, -25%);
      transform-origin: 50% 50%;
    }
  }
  &__damage {
    position: absolute;
    color: white;
    text-shadow: 2px 0 black, 0px 2px black, -2px 0 black, 0 -2px black;
    font-weight: bold;
    animation-delay: var(--delay);
    transform: translate(-50%, -50%);
  }
}
@media screen and (max-width: 400px) {
  .c-battle_field__damage {
    font-size: 14px;
  }
}

@media screen and (max-width: 600px) and (min-width: 400px) {
  .c-battle_field__damage {
    font-size: 16px;
  }
}
@media screen and (min-width: 600px) {
  .c-battle_field__damage {
    font-size: 20px;
  }
}
</style>
