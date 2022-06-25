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
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
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
});
</script>

<style scoped lang="less">
.control {
  padding: 5px;
  width: 50%;
  box-sizing: border-box;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 3px;
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
