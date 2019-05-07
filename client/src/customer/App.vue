<template>
  <div id="app">
    <common-nav :is-check="4" />
    <div class="main">
      <router-view />
    </div>
  </div>
</template>

<script>
import CommonNav from '../common/www/Nav';
export default {
  name: 'app',
  components: {
    'common-nav': CommonNav,

  },
  data () {
    return {
    }
  },
  methods: {
   
  }
}
</script>

<style lang="scss">
#app {
  font-family: Helvetica,STHeiti,Microsoft YaHei,Verdana,Arial,Tahoma,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  .main {
    margin-left: 251px; 
  }
}
</style>
