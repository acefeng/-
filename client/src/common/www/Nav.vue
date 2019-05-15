<template>
  <div class="nav_main">
    <div class="logo" />
    <ul>
      <li :class="{thischeck: isCheck === 1}" @mouseover="navHoverOver(0)">
        <i class="el-icon-s-home"></i>
        <span><a href="/">概述</a></span>
      </li>
      <li :class="{thischeck: isCheck === 2, li_hover: isHover === 2}" @mouseover="navHoverOver(2)">
        <i class="el-icon-price-tag"></i>
        <span><a href="/goods">商品</a></span>
      </li>
      <li :class="{thischeck: isCheck === 3, li_hover: isHover === 3}" @mouseover="navHoverOver(3)">
        <i class="el-icon-tickets"></i>
        <span><a href="/order">订单</a></span>
      </li>
      <li :class="{thischeck: isCheck === 4, li_hover: isHover === 4}" @mouseover="navHoverOver(4)">
        <i class="el-icon-s-custom"></i>
        <span><a href="/customer">客户</a></span>
      </li>
      <li :class="{thischeck: isCheck === 5, li_hover: isHover === 5}" @mouseover="navHoverOver(5)">
        <i class="el-icon-s-data"></i>
        <span><a href="/data">数据</a></span>
      </li>
      <li :class="{thischeck: isCheck === 6, li_hover: isHover === 6}" @mousemove="navHoverOver(6)" @mouseleave="navHoverLeave('isLastOut')">
        <i class="el-icon-money"></i>
        <span><a href="/capital">资产</a></span>
      </li>
    </ul>
    <child-nav v-show="[2,3,4,5,6].indexOf(isHover) !== -1" :navHoverLeave="navHoverLeave" :is-hover="isHover" :change-last-in="changeLastIn"/>
  </div>
</template>

<script>
import ChildNav from './childNav';
import { setTimeout, clearTimeout } from 'timers';
export default {
  components: {
    'child-nav': ChildNav
  },
  data () {
    return {
      isHover: 0,
      isLastInChild: false,
      leaveTimer: null
    }
  },
  props: {
    isCheck: Number
  },
  mounted() {
    if(this.isCheck!==1) {
      this.isHover = this.isCheck;
    }
  },
  methods: {
    navHoverOver(isLi) {
      if(this.leaveTimer) {
        clearTimeout(this.leaveTimer);
      }
      if(isLi===0) {
        this.isHover = this.isCheck;
      }else {
        this.isHover = isLi;
      }
    },
    navHoverLeave() {
      this.leaveTimer = setTimeout(() => {
        this.isHover = this.isCheck;
      }, 5);
    },
    changeLastIn(is_hover) {
      setTimeout(() => {
        this.navHoverOver(is_hover)
      }, 0);
    }
  }
}
</script>

<style lang="scss" scoped>
.nav_main {
  background-color: #444; 
  width: 100px;
  height: 100%;
  position: fixed;
  z-index: 999;
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
    cursor: pointer;

    span a {
      color: #c8c9cc;
      text-decoration: none;
    }
  }
  
  .li_hover {
    background: #666;
  }

  .thischeck {
    color: #333;
    background: white;

    a {
      color: #333;
    }
  } 
}
</style>
