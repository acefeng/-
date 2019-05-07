<template>
  <div class="order_main">
    <div class="order_center">
      <div class="order_title">退款订单</div>
      <div class="order_center_bac">
        <order-refund-table />
      </div>
    </div>
    <div class="order_help">
      <div class="order_title">帮助和服务</div>
      <div class="order_help_main">
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
import orderRefundTable from '../common/orderRefundTable';
export default {
  components: {
    'order-refund-table': orderRefundTable
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
.order_main {
  .order_center {
    margin-right: 225px;

    .order_center_bac {
      background: #f8f8f8;
      overflow: hidden;

      .order_center_main {
        margin: 10px;
        padding: 10px;
        box-sizing: border-box;
        background: white;
      }
    }
  }
  .order_help {
    position: fixed;
    right: 0px;
    top: 0px;
    height: 100%;
    width: 225px;
    border-left: 1px solid #F2F2F2;
    
    .order_help_main {
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
  .order_title {
    font-size: 14px;
    color: #333;
    padding: 20px;
    height: 60px;
    box-sizing: border-box;
    border-bottom: 1px solid #F2F2F2;
  }
}
</style>
