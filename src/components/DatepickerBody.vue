<template>
  <div class="datepicker-body-list" @click.stop>
    <ControlDate />

    <div class="datepicker-body datepicker-body-days-row">
      <button type="button" class="datepicker-body-days-unit">1</button>
      <button type="button" class="datepicker-body-days-unit">2</button>
      <button class="datepicker-body-days-unit">3</button>
      <button class="datepicker-body-days-unit">4</button>
      <button class="datepicker-body-days-unit">5</button>
      <button class="datepicker-body-days-unit">6</button>
      <button class="datepicker-body-days-unit">7</button>
      <button class="datepicker-body-days-unit">8</button>
      <button class="datepicker-body-days-unit">9</button>
      <button class="datepicker-body-days-unit">10</button>
      <button class="datepicker-body-days-unit">11</button>
      <button class="datepicker-body-days-unit">12</button>
      <button class="datepicker-body-days-unit">13</button>
      <button class="datepicker-body-days-unit">14</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import ControlDate from '@/components/ControlDate.vue';

export default Vue.extend({
  name: 'DatepickerBody',
  components: {
    ControlDate,
  },
});
</script>

<style scoped lang="less">
@import '../styles/variables.less';

.datepicker-body {
  &-days-row {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  &-days-unit {
    font-family: @font-family;
    font-size: 16px;
    flex-basis: calc(100% / 7);
    padding: 2px;
    box-sizing: border-box;
    cursor: pointer;
    text-align: center;
    background-color: transparent;
    border: none;
  }

  &-list {
    position: absolute;
    top: 60px;
    padding: 10px;
    width: 50%;
    box-sizing: border-box;
    box-shadow: @box-shadow-grey;
    border-radius: @border-radius-medium;
    background-color: #fefcff;
  }
}
</style>
