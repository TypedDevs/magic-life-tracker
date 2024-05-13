<template>
  <main>
    <PlayerTracker />

    <PlayerTracker />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PlayerTracker from '@/PlayerTracker.vue'

export default defineComponent({
  components: { PlayerTracker }
})
</script>

<style scoped></style>
