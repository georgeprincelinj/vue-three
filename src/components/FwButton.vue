<template>
  <div v-show="isDisplayed">
    <button
      v-on="$listeners"
      v-bind="$attrs"
      @click="onClick"
      class="button"
      :class="buttonClass"
    >
      <label v-if="label">{{ label }}</label>
    </button>
  </div>
</template>

<script>
import { BaseComponent } from "./BaseComponent";

export default {
  inheritAttrs: false,
  props: {
    buttonClass: {
      type: String,
    },
    label: {
      type: String,
      default: "",
    },
  },
  setup() {
    return { ...BaseComponent() };
  },
  methods: {
    onClick(event) {
      // Do Framework Side Stuffs Here
      this.$emit("fw_click", event);
    },
  },
};
</script>

<style scoped></style>
