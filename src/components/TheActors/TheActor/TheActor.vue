<template>
  <div class="the-actor">
    <img :src="imageSource" :alt="props.fullname" />
    <span>{{ props.fullname }}</span>
    <span>{{ props.character }}</span>
  </div>
</template>

<script setup lang="ts">
  import config from "@/config";
  import { computed } from "vue";
  import noImage from "@/assets/images/no-image.jpeg";

  interface Props {
    image: string | null;
    fullname: string;
    character: string;
  }

  const props = defineProps<Props>();

  const imageSource = computed(() => {
    return props.image ? `${config.imagesUrl}${props.image}` : noImage;
  });
</script>

<style scoped></style>
