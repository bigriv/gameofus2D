<template>
  <Header class="u-margin_top--10" />
  <BreadCrumbList class="u-margin_top--20" />
  <main>
    <router-view v-if="!isReload" class="u-margin_top--20" />
  </main>
</template>

<script setup lang="ts">
import { ref, watch, nextTick } from "vue";
import Header from "@/components/templates/Header.vue";
import BreadCrumbList from "@/components/atoms/lists/BreadCrumbList.vue";
import { useDisplayStore } from "@/pinia/display";

const store = useDisplayStore();
const isReload = ref(false);
watch(
  () => store.isReflesh,
  async () => {
    console.log("watch store reflesh", store.isReflesh);
    if (store.isReflesh) {
      isReload.value = true;
      await nextTick();
      store.refleshEnd();
      isReload.value = false;
    }
  }
);
</script>

<style scoped lang="scss">
main {
  padding: 0 20px;
}
</style>
