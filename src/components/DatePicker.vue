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
          <DatepickerBody v-if="isShown" />
        </div>

        <button class="datepicker-submit">submit</button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import DatepickerBody from '@/components/DatepickerBody.vue';

export default Vue.extend({
  name: 'DatePicker',
  components: {
    DatepickerBody,
  },
  data() {
    return {
      isShown: false,
    };
  },

  methods: {
    onInputFocus(): void {
      this.isShown = true;
    },
    onDatePickerClick(): void {
      this.isShown = false;
    },
  },
});
</script>

<style lang="less">
@import '../styles/main.less';
</style>

<style scoped lang="less">
@import '../styles/variables.less';
@import '../styles/mixins.less';

.datepicker {
  &-container {
    width: 50%;
    margin: 50px auto;
    padding: 30px;
    width: 80%;
    border-radius: @border-radius-medium;
    box-shadow: @box-shadow-grey;
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
    height: 30px;
    box-sizing: border-box;
    border: 2px solid #ccc;
    border-radius: @border-radius-medium;
    padding: 2px;
    margin-top: 4px;
  }

  &-submit {
    border: none;
    border-radius: 8px;
    background-color: #38acec;
    padding: 10px 14px;
    color: #fefcff;
    font-weight: bold;
    text-transform: capitalize;
    cursor: pointer;
    .transition(background-color, 0.2s, ease-in);

    &:hover {
      background-color: #3fc2d9;
    }
  }

  &-group {
    position: relative;
  }
}
</style>
