<template>
  <div>
    <label v-if="dynamicLabel">{{ dynamicLabel }}</label>
    <ol>
      <li v-bind="$attrs" v-bind:key="row" v-for="row in rowList">
        {{ row }}
      </li>
    </ol>
  </div>
</template>

<script>
import { BaseComponent } from "./BaseComponent";
import { ref, computed } from "@vue/composition-api";
export default {
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      default: "List",
    },
  },
  setup(props) {
    const rowList = ref([]);

    let dynamicLabel = ref(props.label);

    computed({
      dynamicLabel: {
        set: function(value) {
          dynamicLabel = value;
        },
        get: function() {
          return dynamicLabel;
        },
      },
    });

    return { ...BaseComponent(), rowList, dynamicLabel };
  },
  methods: {
    addRow(value) {
      this.rowList.push(value);
    },
  },
};
</script>

<style scoped></style>
