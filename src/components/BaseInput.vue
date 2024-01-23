<!-- CustomInput.vue -->
<template>
  <input
    type="text"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    placeholder="Type something..."
  />
</template>

<script>
export default {
  props: {
    modelValue: String,
  },
};
</script>

<style scoped>
input {
  padding: 10px;
  font-size: 16px;
}
</style>
