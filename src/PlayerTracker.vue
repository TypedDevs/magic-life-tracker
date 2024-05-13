<template>
  <section>
    <button>-</button>
    {{ lives }}
    <button @click="lives++">+</button>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      lives: 20
    }
  }
})
</script>

<style scoped></style>
