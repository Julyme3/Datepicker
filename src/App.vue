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
#app {
  font-family: system, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Segoe WP', Roboto, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 16px;
}
</style>
