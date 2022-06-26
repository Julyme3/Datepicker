<template>
  <div class="control">
    <div class="control-header-inner">
      <button class="control-btn control-btn-prev" type="button">&lt;</button>
      <div class="control-year-month-select">
        <select id="month-select" class="control-select control-month-select">
          <option value="January">January</option>
          <option value="February">February</option>
          <option value="March">March</option>
        </select>
        <select id="year-select" class="control-select control-year-select">
          <option v-for="(option, i) in getListYears" :key="i" :value="option">{{ option }}</option>
        </select>
      </div>
      <button class="control-btn control-btn-prev" type="button">&gt;</button>
    </div>

    <div class="control-days-row">
      <span class="control-days-unit">M</span>
      <span class="control-days-unit">T</span>
      <span class="control-days-unit">W</span>
      <span class="control-days-unit">T</span>
      <span class="control-days-unit">F</span>
      <span class="control-days-unit">S</span>
      <span class="control-days-unit">S</span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'ControlDate',
  props: {
    fromYear: {
      type: Number,
      default: 1900,
      required: false,
    },
    endYear: {
      type: Number,
      default: new Date().getFullYear() + 50, // 99 возможно вынести параметром
      required: false,
    },
  },
  computed: {
    getListYears(): number[] {
      return Array.from({ length: this.endYear - this.fromYear }, (_, i) => this.fromYear + i);
    },
  },
});
</script>

<style scoped lang="less">
.control {
  &-header-inner {
    display: flex;
    justify-content: space-between;
    background-color: #82cafa;
    margin-bottom: 8px;
  }

  &-btn,
  &-select {
    padding: 2px 5px;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  &-select {
    -webkit-appearance: none;
    -moz-appearance: none;
  }

  &-days-row {
    display: flex;
    justify-content: space-between;
  }

  &-days-unit {
    flex: 1 1 0px;
    padding: 2px;
    box-sizing: border-box;
    cursor: pointer;
    text-align: center;
  }
}
</style>
