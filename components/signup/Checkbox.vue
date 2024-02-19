<template>
  <div class="flex flex-col gap-2 mt-4">
    <UCheckbox v-model="inputValue" :required="req" :label="label" :ui="{
      label:
        'leading-tight text-left line-clamp-2 font-regular text-[#5C6D82] text-Footer',
    }" />

  </div>
</template>

<script lang="ts" setup>

const emit = defineEmits(['update:modelValue']);
const props = defineProps({
  modelValue: Boolean,
  label: String,
  req: Boolean,
})

const inputValue = ref(props.modelValue);

watch(inputValue, (newVal) => {
  emit('update:modelValue', newVal);
});

watch(() => props.modelValue, (newVal) => {
  inputValue.value = newVal;
});
</script>

<style></style>