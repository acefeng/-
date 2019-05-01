<template>
  <div class="nav_main">
    <div class="logo">
    </div>
    <ul>
      <li :class="{thischeck: isCheck === 1}">
        <i class="el-icon-s-home"></i>
        <span>概述</span>
      </li>
      <li :class="{thischeck: isCheck === 2}">
        <i class="el-icon-price-tag"></i>
        <span>商品</span>
      </li>
      <li :class="{thischeck: isCheck === 3}">
        <i class="el-icon-tickets"></i>
        <span>订单</span>
      </li>
      <li :class="{thischeck: isCheck === 4}">
        <i class="el-icon-s-custom"></i>
        <span>客户</span>
      </li>
      <li :class="{thischeck: isCheck === 5}">
        <i class="el-icon-s-data"></i>
        <span>数据</span>
      </li>
      <li :class="{thischeck: isCheck === 6}">
        <i class="el-icon-money"></i>
        <span>资产</span>
      </li>
    </ul>
      
  </div>
</template>

<script>
export default {
  data () {
    return {  
    }
  },
  props: {
    isCheck: Number
  },
  mounted() {
    
  },
  methods: {
   
  }
}
</script>

<style lang="scss" scoped>
.nav_main {
  background-color: #444; 
  width: 100px;
  height: 100%;
  position: fixed;
  left: 0px;
  top: 0px;

  .logo {
    width: 32px;
    height: 32px;
    margin: 12px auto;
    background: url('../../shop/assets/logo.jpg') no-repeat;
    background-size: 32px;
    border-radius: 50%;
  }

  ul li {
    list-style: none;
    height: 40px;
    color: #c8c9cc;
    text-align: center;
    line-height: 40px;

    &:hover {
      background: #666;
      cursor: pointer;
    }
  }

  .thischeck {
    color: #333;
    background: white;
  } 
}
</style>
