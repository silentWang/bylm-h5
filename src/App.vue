<template>
  <home-page></home-page>
</template>

<script>
import HomePage from './HomePage.vue'

export default {
  name: 'App',
  components: {
    HomePage
  }
}
</script>

<style>
* {
  padding: 0px;
  margin: 0px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
