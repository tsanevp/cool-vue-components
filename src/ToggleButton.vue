<template>
  <button
    :class="modelValue ? 'bg-white' : 'bg-[#8c8c8c]'"
    @click="toggle"
    class="w-14 transition ease-in-out duration-200 h-100 flex items-center rounded-full p-1"
  >
    <div
      :class="{ 'translate-x-6': modelValue }"
      class="w-6 h-6 transition-all ease-in-out duration-200 transform bg-white rounded-full shadow-md flex content-center justify-center"
    >
      <!-- <Transition name="fade"> -->
        <!-- <div class="w-100 h-100 text-lg"> -->
          <!-- <Icon v-if="modelValue" :name="onIcon" style="color: #8c8c8c" class="w-100" /> -->
          <!-- <Icon v-else :name="offIcon" style="color: #00dc82" class="w-100" /> -->
        <!-- </div> -->
      <!-- </Transition> -->
    </div>
  </button>
</template>

<script setup>
const props = defineProps({
  onIcon: {
    type: String,
    required: true,
  },
  offIcon: {
    type: String,
    required: true,
  },
  modelValue: {
    type: Boolean,
  },
});

const emit = defineEmits(["update:modelValue"]);

function toggle() {
  emit("update:modelValue", !props.modelValue);
}
</script>
