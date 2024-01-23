<template>
  <div class="custom-dropdown">
    <div class="selected-item" @click="toggleDropdown">
      {{ selectedOption.text }}
      <i :class="{ 'arrow-up': isOpen, 'arrow-down': !isOpen }"></i>
    </div>
    <transition name="fade">
      <ul v-if="isOpen" class="dropdown-list">
        <li
          v-for="option in options"
          :key="option.value"
          @click="selectOption(option)"
        >
          {{ option.text }}
        </li>
      </ul>
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const { options } = defineProps(['options']);
const isOpen = ref(false);
const selectedOption = ref({ value: null, text: 'Select an option' });

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const emit = defineEmits(['update:modelValue']);
const selectOption = (option) => {
  selectedOption.value = option;
  isOpen.value = false;
  emit('update:modelValue', option.value);
};
</script>

<style scoped>
.custom-dropdown {
  position: relative;
}

.selected-item {
  padding: 10px;
  border: 1px solid #ccc;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.arrow-up {
  transform: rotate(180deg);
}

.dropdown-list {
  list-style: none;
  padding: 0;
  margin: 0;
  border: 1px solid #ccc;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: #fff;
}

.dropdown-list li {
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.dropdown-list li:hover {
  background-color: #f0f0f0;
}
</style>
