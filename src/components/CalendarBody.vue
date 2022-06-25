<template>
  <div class="calendar-body calendar-body-days-row">
    <button class="calendar-body-days-unit">1</button>
    <button class="calendar-body-days-unit">2</button>
    <button class="calendar-body-days-unit">3</button>
    <button class="calendar-body-days-unit">4</button>
    <button class="calendar-body-days-unit">5</button>
    <button class="calendar-body-days-unit">6</button>
    <button class="calendar-body-days-unit">7</button>
    <button class="calendar-body-days-unit">8</button>
    <button class="calendar-body-days-unit">9</button>
    <button class="calendar-body-days-unit">10</button>
    <button class="calendar-body-days-unit">11</button>
    <button class="calendar-body-days-unit">12</button>
    <button class="calendar-body-days-unit">13</button>
    <button class="calendar-body-days-unit">14</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'CalendarBody',
});
</script>

<style scoped lang="less">
.calendar-body {
  &-days-row {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  &-days-unit {
    flex-basis: calc(100% / 7);
    padding: 2px;
    box-sizing: border-box;
    cursor: pointer;
    text-align: center;
    background-color: transparent;
    border: none;
  }
}
</style>
