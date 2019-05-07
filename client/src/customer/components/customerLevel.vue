<template>
  <div class="customer_main">
    <div class="customer_center">
      <div class="customer_title">等级管理</div>
      <div class="customer_center_bac">
        <customer-level-table />
      </div>
    </div>
    <div class="customer_help">
      <div class="customer_title">帮助和服务</div>
      <div class="customer_help_main">
        <div class="help_main_list">
          <h2>帮助中心</h2>
          <span>店铺后台如何管理订单？ </span>
          <span>如何解决订单导出乱码问题？ </span>
          <span>怎么导出后台的订单？</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CustomerLevelTable from '../common/customerLevelTable';
export default {
  components: {
    'customer-level-table': CustomerLevelTable
  },
  data () {
    return {
      
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.customer_main {
  .customer_center {
    margin-right: 225px;

    .customer_center_bac {
      background: #f8f8f8;
      overflow: hidden;

      .customer_center_main {
        margin: 10px;
        padding: 10px;
        box-sizing: border-box;
        background: white;
      }
    }
  }
  .customer_help {
    position: fixed;
    right: 0px;
    top: 0px;
    height: 100%;
    width: 225px;
    border-left: 1px solid #F2F2F2;
    
    .customer_help_main {
      padding: 10px;
      box-sizing: border-box;

      .help_main_list {
        font-size: 12px;
        color: #38f;
        margin-top: 20px;
        padding-bottom: 20px;
        border-bottom: 1px solid #e5e5e5;

        h2 {
          font-size: 12px;
          color: #333;
          border-left: 2px solid #3283fa;
          padding-left: 8px;
        }

        span:nth-child(2) {
          margin-top: 15px;
        }

        span {
          display: block;
          margin-top: 5px;
          margin-left: 8px;
        }
      }
    }
  }
  .customer_title {
    font-size: 14px;
    color: #333;
    padding: 20px;
    height: 60px;
    box-sizing: border-box;
    border-bottom: 1px solid #F2F2F2;
  }
}
</style>
