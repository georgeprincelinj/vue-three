<template>
  <div>
    <FwRow>
      <FwInput ref="empInstance" v-bind="map.emp" />
    </FwRow>
    <FwRow>
      <FwInput
        ref="leaveDaysInstance"
        v-bind="map.leaveDays"
        v-on:fw_input="fw_input_leavedays_change"
      />
    </FwRow>
    <FwRow>
      <FwInput
        ref="reasonInstance"
        v-bind="map.reason"
        v-on:fw_input="fw_input_reason_change"
      />
    </FwRow>
    <FwRow>
      <FwButton v-bind="map.showButton" v-on:fw_click="fw_click_show" />
    </FwRow>
    <FwRow>
      <FwButton v-bind="map.applyButton" v-on:fw_click="fw_click_apply" />
    </FwRow>
    <FwRow>
      <FwList ref="listIns" v-bind="resultData" />
    </FwRow>
  </div>
</template>

<script>
import FwButton from "@/components/FwButton.vue";
import FwInput from "@/components/FwInput.vue";
import FwRow from "@/components/FwRow.vue";
import FwList from "@/components/FwList.vue";
// import { toRefs } from "vue";
import { ref } from "@vue/composition-api";
import { BaseApp } from "@/fw/BaseApp";

export default {
  components: {
    FwButton,
    FwInput,
    FwRow,
    FwList,
  },

  setup() {
    const { map, getServiceId } = BaseApp("LeaveDetail");
    const resultData = ref([]);
    return {
      map,
      getServiceId,
      resultData,
    };
  },

  methods: {
    // listen dispatched event from component
    fw_input_leavedays_change: function(event) {
      if (event.target.value > 10) {
        alert("Confirm for GT 10");
      }

      this.map["leaveDays"].value = event.target.value;
    },

    fw_input_reason_change: function(event) {
      this.map["reason"].value = event.target.value;
    },

    fw_click_apply: function() {
      // way 1
      let empId = this.$refs.empInstance.value;

      // way 2
      let leaveDays = this.map["leaveDays"].value;
      let reason = this.map["reason"].value;

      // dynamic component label change
      this.$refs.listIns.dynamicLabel = this.getServiceId();
      this.$refs.listIns.addRow(empId + " " + leaveDays + " " + reason);
    },

    fw_click_show: function() {
      if (this.$refs.leaveDaysInstance.isDisplayed === true) {
        // accessing parent component method from application
        this.$refs.leaveDaysInstance.setDisplayed(false);
        this.$refs.reasonInstance.setDisplayed(false);
      } else {
        this.$refs.leaveDaysInstance.setDisplayed(true);
        this.$refs.reasonInstance.setDisplayed(true);
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
