<template>
  <div class="capital_account">
    <div class="capital_shop_num">
      <div class="capital_shop_num_title">
        <span>店铺余额</span>
      </div>
      <div class="capital_shop_num_main">
        <div>可用店铺余额(元)</div>
        <div>
          <span>0.00</span>
          <el-button type="primary" class="button_recharge" size="mini">充值</el-button>
          <el-button size="mini">提现</el-button>
        </div>
      </div>
      <div class="capital_shop_num_title">
        <span>最近交易记录(只显示最近10条)</span>
      </div>
      <div class="capital_shop_main_table">
        <el-table
          :data="tableData"
          style="width: 100%">
          <el-table-column
            prop="date"
            label="时间"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="名称"
            width="180">
          </el-table-column>
          <el-table-column
            prop="orderId"
            label="订单号"
            width="180">
          </el-table-column>
          <el-table-column
            prop="price"
            label="金额"
            width="180">
          </el-table-column>
          <el-table-column
            prop="customer"
            label="对方">
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  props: {

  },
  data () {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '测试商品aaa',
        orderId: '12938912731298',
        price: '100',
        customer: '王小虎'
      }, {
        date: '2016-05-02',
        name: '测试商品aaa',
        orderId: '12938912731298',
        price: '100',
        customer: '王小虎'
      }, {
        date: '2016-05-02',
        name: '测试商品aaa',
        orderId: '12938912731298',
        price: '100',
        customer: '王小虎'
      }, {
        date: '2016-05-02',
        name: '测试商品aaa',
        orderId: '12938912731298',
        price: '100',
        customer: '王小虎'
      }]
    }
  },
  watch:{
    value1(next, pre){
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.capital_account {
  margin: 10px;
  background: white;
  padding: 10px;
  box-sizing: border-box;

  .capital_shop_num {
    .capital_shop_num_title {
      font-size: 14px;
      padding: 10px;
      background: #f8f8f8;
      box-sizing: border-box;
      margin-bottom: 10px;
      span {
        padding-left: 5px;
        border-left: 4px solid #38f;
      }
    }
    .capital_shop_num_main {
      overflow: hidden;
      padding-left: 25px;
      margin: 25px 0px;

      &>div:nth-child(1) {
        font-size: 12px;
        color: #333;
      }
      &>div:nth-child(2) {
        font-size: 26px;
        color: #333;
        margin-top: 10px;
        span {
          vertical-align: middle;
        }

        .button_recharge {
          margin-left: 100px;
        }
        .button_withdrawal {

        }

      }
    }
    .capital_shop_main_table {

    }
  }
}
</style>
