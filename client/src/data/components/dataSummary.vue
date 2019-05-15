<template>
  <div class="data_main">
    <div class="data_center">
      <div class="data_title">数据概览</div>
      <div class="data_center_bac">
        <data-summary-table /> 
      </div>
    </div>
    <div class="data_help">
      <div class="data_title">帮助和服务</div>
      <div class="data_help_main">
        <div class="help_main_list">
          <h2>帮助中心</h2>
          <span>如何新建／发布商品？</span>
          <span>如何管理商品？</span>
          <span>商品如何排序？</span>
          <span>商品销量找不到对应的订单？</span>
          <span>商品二维码使用说明</span>
          <span>商品可以设置用积分兑换吗？</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DataSummaryTable from '../common/dataSummaryTable'
export default {
  components: {
    'data-summary-table': DataSummaryTable
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
.data_main {
  .data_center {
    margin-right: 225px;

    .data_center_bac {
      background: #f8f8f8;
      overflow: hidden;
    }
  }
  .data_help {
    position: fixed;
    right: 0px;
    top: 0px;
    height: 100%;
    width: 225px;
    border-left: 1px solid #F2F2F2;
    
    .data_help_main {
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
  .data_title {
    font-size: 14px;
    color: #333;
    padding: 20px;
    height: 60px;
    box-sizing: border-box;
    border-bottom: 1px solid #F2F2F2;
  }
}
</style>
