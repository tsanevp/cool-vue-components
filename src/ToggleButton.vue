<template>
  <button id="toggle-button" :class="modelValue ? 'background-on' : 'background-off'" @click="toggle">
    <div id="toggle-icon" :class="{ 'translate-x': modelValue }"></div>
  </button>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: Boolean
  },
});

const emit = defineEmits(["update:modelValue"]);

function toggle() {
  emit("update:modelValue", !props.modelValue);
}
</script>

<style lang="css">
#toggle-button {
  width: 3.5rem;
  height: 100%;
  transition: ease-in-out 200ms;
  display: flex;
  align-items: center;
  border-radius: 9999px;
  padding: 0.25rem;
  border: none;
  cursor: pointer;
}

.background-off {
  background-color: white;
}

.background-on {
  background-color: #8c8c8c;
}

#toggle-icon {
  width: 1.5rem;
  height: 1.5rem;
  transition: transform 200ms ease-in-out;
  background-color: white;
  border-radius: 50%;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.translate-x {
  transform: translateX(1.5rem);
}
</style>
