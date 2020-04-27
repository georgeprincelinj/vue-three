<template>
  <div v-show="isDisplayed">
    <label v-if="label">{{ label }}</label>
    <input :value="value" @input="updateValue" v-bind="$attrs" />
  </div>
</template>

<script>
import { BaseComponent } from "./BaseComponent";

export default {
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      default: "",
    },
    value: [String, Number],
  },

  setup() {
    return { ...BaseComponent() };
  },

  methods: {
    updateValue(event) {
      // Do Framework Side Stuffs Here

      this.$emit("fw_input", event);
    },
  },
};
</script>
