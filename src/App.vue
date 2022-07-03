<template>
  <div id="app">
    <DatePicker />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import DatePicker from './components/DatePicker.vue';

export default Vue.extend({
  name: 'App',
  components: {
    DatePicker,
  },
});
</script>

<style lang="less">
@import './styles/main.less';
</style>
