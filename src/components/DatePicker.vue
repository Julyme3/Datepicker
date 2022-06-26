<template>
  <div class="datepicker">
    <div class="datepicker-container" @click="onDatePickerClick" @keypress="onDatePickerClick">
      <form id="datepicker-form">
        <div class="datepicker-group">
          <label for="date" class="datepicker-label">
            Select the date
            <input
              type="text"
              id="date"
              class="datepicker-input"
              @focus="onInputFocus"
              @click.stop="onInputFocus"
            />
          </label>
          <div class="datepicker-list" :class="{ shown }" @click.stop>
            <ControlDate />
            <CalendarBody />
          </div>
        </div>

        <button class="datepicker-submit">submit</button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import ControlDate from '@/components/ControlDate.vue';
import CalendarBody from '@/components/CalendarBody.vue';

export default Vue.extend({
  name: 'DatePicker',
  components: {
    ControlDate,
    CalendarBody,
  },
  data() {
    return {
      shown: false,
    };
  },

  methods: {
    onInputFocus(): void {
      this.shown = true;
    },
    onDatePickerClick(): void {
      this.shown = false;
    },
  },
});
</script>

<style scoped lang="less">
.datepicker {
  &-container {
    width: 50%;
    margin: 50px auto;
    padding: 10px;
    width: 80%;
    border-radius: 3px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    text-align: left;
    max-width: 600px;
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

  //TODO: &-list Вынести в отдельный компонент
  &-list {
    display: none;
    position: absolute;
    top: 50px;
    padding: 5px;
    width: 50%;
    box-sizing: border-box;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    border-radius: 3px;
    background-color: #fefcff;

    &.shown {
      display: block;
    }
  }

  &-group {
    position: relative;
  }
}
</style>
