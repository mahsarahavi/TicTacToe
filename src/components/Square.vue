<script setup>
const props = defineProps(["value"]);
</script>

<template>
  <div
    class="h-32 w-32 flex justify-center bg-fuchsia-500 hover:bg-fuchsia-400 items-center"
    v-on:click="$emit('squareClick')"
  >
    {{ value }}
  </div>
</template>
