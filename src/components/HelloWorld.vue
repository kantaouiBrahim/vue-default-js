<template>
  <h1>My count {{ count }}</h1>
  <input type="text" v-model.number="incValue" />
  <button @click="inc">inc</button>
  <button @click="dec">dec</button>
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
