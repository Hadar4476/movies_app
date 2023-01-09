<template>
  <div class="the-actors">
    <h1>Actors</h1>
    <div class="container">
      <TheActor
        v-for="actor in props.actors"
        :key="actor.id"
        :image="actor.image"
        :fullname="actor.fullname"
        :character="actor.character"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { MappedActor } from "@/interfaces/person";

  import TheActor from "./TheActor/TheActor.vue";

  interface Props {
    actors: MappedActor[];
  }

  const props = defineProps<Props>();
</script>

<style scoped></style>
