<template>
  <div class="child_nav" @mouseover="changeLastIn(isHover)" @mouseleave="navHoverLeave('isChildDiv')">
    <div class="child_nav_title">{{ navTitle }}</div>
    <ul>
      <li v-for="(item,index) in navList" :key="index">
        <span><a :href="navUrlList[index]">{{ item }}</a></span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      navTitle: '',
      navList: [],
      navUrlList: []
    }
  },
  props: {
    isHover: Number,
    navHoverLeave: Function,
    navHoverOver: Function,
    changeLastIn: Function
  },
  watch: {
    isHover(next, pre) {
      this.changeShow(next);
    }
  },
  methods: {
    changeShow(next) {
      if(next === 2) {
        this.navTitle = '商品管理';
        this.navList = ['商品管理', '商品分组'];
        this.navUrlList = ['/goods#/', '/goods#/goods_group'];
      } else if(next === 3) {
        this.navTitle = '订单管理';
        this.navList = ['订单查询', '批量发货', '评价管理'];
        this.navUrlList = ['/order#/', '/order#/orderDeliver', '/order#/orderEvaluate'];
      } else if(next === 4) {
        this.navTitle = '客户管理';
        this.navList = ['客户查询', '标签管理', '等级管理'];
        this.navUrlList = ['/customer#/', '/customer#/customerTag', '/customer#/customerLevel'];
      } else if(next === 5) {
        this.navTitle = '数据管理';
        this.navList = ['数据概览', '商品概览', '交易概览'];
        this.navUrlList = ['/data#/', '/data#/goodsSummary', '/data#/tradeSummary'];
      } else if(next === 6) {
        this.navTitle = '资产管理';
        this.navList = ['账户总揽', '店铺余额'];
        this.navUrlList = ['/capital#/', '/capital#/capitalShop'];
      }
    }
  }
}
</script>
<style lang="scss">
.child_nav {
  position: absolute;
  top: 0px;
  left: 100px;
  height: 100%;
  width: 150px;
  border-right: 1px solid #F2F2F2;
  background: white;
  font-size: 16px;

  .child_nav_title {
    height: 60px;
    border-bottom: 1px solid #F2F2F2;
    box-sizing: border-box;
    padding: 20px 20px 20px;
  }

  ul li {
    list-style: none;
    font-size: 14px;
    line-height: 50px;
    padding-left: 25px;
    
    span {
      cursor: pointer;

      a {
        color: #000;
        text-decoration: none;
      }
      &:hover {
        color: #38f;
      }
    }
  }
}
</style>
