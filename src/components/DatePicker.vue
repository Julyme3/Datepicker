<template>
  <div class="datepicker">
    <div class="datepicker-container">
      <form id="datepicker-form">
        <label for="date" class="datepicker-label">
          Select the date
          <input type="text" id="date" class="datepicker-input" />
        </label>
        <button class="datepicker-submit">submit</button>
        <ControlDate />
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import ControlDate from '@/components/ControlDate.vue';

export default Vue.extend({
  name: 'DatePicker',
  components: {
    ControlDate,
  },
});
</script>

<style scoped lang="less">
.datepicker {
  &-container {
    width: 50%;
    margin: 50px auto;
    padding: 10px;
    width: 50%;
    border-radius: 3px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    text-align: left;
  }

  &-label {
    display: block;
    margin-bottom: 16px;
    color: #555;
    font-size: 16px;
    font-weight: bold;
  }

  &-input {
    width: 100%;
    height: 24px;
    box-sizing: border-box;
    border: 2px solid #ccc;
    border-radius: 3px;
    padding: 2px;
    margin-top: 4px;
  }

  &-submit {
    border: none;
    border-radius: 3px;
    background-color: #38acec;
    padding: 10px 14px;
    color: #fefcff;
    font-weight: bold;
    text-transform: capitalize;
    cursor: pointer;
  }
}
</style>
