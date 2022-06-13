<template>
  <div class="datepicker">
    <form id="datepicker-form">
      <label for="date" class="datepicker-label">Select the date
        <input type="text" id="date" class="datepicker-input" />
      </label>
      <button class="datepucker-submit">submit</button>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'DatePicker',
});
</script>

<style scoped lang="less"></style>
