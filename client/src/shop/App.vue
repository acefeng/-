<template>
  <div id="app">
    <common-nav :is-check="1" />
    <div class="main">
      <shop-main />
    </div>
  </div>
</template>

<script>
import CommonNav from '../common/www/Nav';
import ShopMain from './components/shopMain';
export default {
  name: 'app',
  components: {
    'common-nav': CommonNav,
    'shop-main': ShopMain
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      num: 1
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
    margin-left: 100px;
    background-color:rgb(242,242,242);
  }
}
</style>
