<template>
  <div class="c-games">
    <div class="c-games__title">ゲームの一覧！</div>
    <LinkCardList :contents="games" class="u-margin_top--10">
      <template v-slot:default="slotProps">
        <div class="c-games__list">
          <div class="c-games__list__title">
            {{ slotProps.content.title }}
          </div>
          <div class="c-games__list__playtime">
            推定プレイ時間: {{ slotProps.content.playtime }}
          </div>
          <div class="c-games__list__description">
            {{ slotProps.content.description }}
          </div>
          <div class="c-games__list__tags">
            <div
              v-for="tag in slotProps.content.tags"
              class="c-games__list__tags__content"
            >
              {{ tag }}
            </div>
          </div>
        </div>
      </template>
    </LinkCardList>
  </div>
</template>

<script setup lang="ts">
import LinkCardList from "@/components/atoms/lists/LinkCardList.vue";

const games = [
  {
    path: "Tbh",
    title: "ヒーローになろう",
    tags: ["育成", "短時間"],
    playtime: "10分",
    description:
      "ヒーローを目指すフリーターの主人公を育成するゲーム。独特なSEも見どころだが、実は多すぎるエンディングも見どころの一つ。",
  },
  {
    path: "Was",
    title: "僕が魔王！？",
    tags: ["RPG", "短時間", "スマホ対応"],
    playtime: "30分",
    description:
      "人間である主人公が魔王を目指して世界を支配していくゲーム。ゴブリンやエルフなど個性豊かなキャラクターたちとの戦闘・会話をお楽しみください。",
  },
  {
    path: "Mp",
    title: "守銭奴の壺",
    tags: ["ミニゲーム", "短時間", "スマホ対応"],
    playtime: "1分",
    description: "壺にお金を貯めるゲームです。",
  },
  {
    path: "Wil",
    title: "世界平和はその聖騎士が導く",
    tags: ["RPG", "スマホ対応"],
    playtime: "10分",
    description:
      "ベータ版。田舎育ちの青年が聖騎士団に入り、世界を救うゲーム。キャラクターの配置が戦闘の勝敗を分ける！？",
  },
];
</script>

<style scoped lang="scss">
.c-games {
  &__title {
    text-wrap: nowrap;
  }
  &__list {
    padding: 10px;
    &__title {
      font-size: 20px;
      font-weight: bold;
      margin-top: 2px;
    }
    &__playtime,
    &__description {
      font-size: 14px;
      margin-top: 2px;
    }
    &__tags {
      margin-top: 8px;
      font-size: 12px;
      display: flex;
      gap: 4px;
      &__content {
        background-color: lightgray;
        border-radius: 20px;
        width: fit-content;
        padding: 2px 10px;
      }
    }
  }
}
</style>
