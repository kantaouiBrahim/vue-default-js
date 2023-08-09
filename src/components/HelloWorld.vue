<template>
  <h1>{{ count }}</h1>
  <input type="text" v-model.number="incValue" />
  <button @click="inc">inc</button>
</template>

<script setup>
import { ref } from "vue";

const count = ref(0);
const incValue = ref(1);

function inc() {
  count.value += incValue.value;
}
</script>

<style scoped></style>
