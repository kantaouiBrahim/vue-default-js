<template>
  <h1>My count {{ count }}</h1>
  <input type="text" v-model.number="incValue" />
  <w-flex justify-space-between>
    <w-button @click="inc">inc</w-button>
    <w-button @click="dec">dec</w-button></w-flex
  >
</template>

<script setup>
import { ref } from "vue";

const count = ref(0);
const incValue = ref(1);

function dec() {
  count.value -= incValue.value;
}

function inc() {
  count.value += incValue.value;
}
</script>

<style scoped></style>
