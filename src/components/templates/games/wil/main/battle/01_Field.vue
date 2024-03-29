<template>
  <div class="c-field">
    <div class="c-field__frame">
      <div class="c-field__frame__computer" @click.prevent.stop>
        <WilBattleField
          :reverse="true"
          :field="props.battle.computer.field"
          :damageResults="damageResults"
          @click="onClickComputerCell"
          @hover="onHoverCell"
          @leave="onLeaveCell"
        />
      </div>
      <div class="c-field__frame__player" @click.prevent.stop>
        <WilBattleField
          :field="props.battle.player.field"
          :damageResults="damageResults"
          @click="onClickPlayerCell"
          @hover="onHoverCell"
          @leave="onLeaveCell"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType, computed } from "vue";
import WilBattleField from "@/components/molecules/games/wil/WilBattleField.vue";
import {
  WilBattle,
  WilBattleMoveResult,
} from "@/composables/games/wil/types/battle";
import { WilFieldCell } from "@/composables/games/wil/types/field";

const props = defineProps({
  battle: {
    type: Object as PropType<WilBattle>,
    required: true,
  },
  moveResult: {
    type: Object as PropType<WilBattleMoveResult>,
    default: undefined,
  },
});

const emits = defineEmits([
  "selectComputerCell",
  "selectPlayerCell",
  "hover",
  "leave",
]);

const damageResults = computed(() => props.moveResult?.damage);
const onClickComputerCell = (cell: WilFieldCell) => {
  emits("selectComputerCell", cell);
};
const onClickPlayerCell = (cell: WilFieldCell) => {
  emits("selectPlayerCell", cell);
};
const onHoverCell = (cell: WilFieldCell | undefined) => {
  emits("hover", cell);
};
const onLeaveCell = () => {
  emits("leave");
};
</script>

<style scoped lang="scss">
.c-field {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: visible;
  &__frame {
    display: flex;
    justify-content: space-between;
    width: 100%;
    transform: perspective(300px) rotateX(20deg);
    transform-origin: 50% 50%;
    padding: 0 5%;
    &__computer,
    &__player {
      width: 30%;
    }
  }
}

@keyframes flash {
  0%,
  100% {
    opacity: 1;
  }

  50% {
    opacity: 0.5;
  }
}
</style>
