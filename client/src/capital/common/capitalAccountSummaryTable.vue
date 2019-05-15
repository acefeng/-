<template>
  <div class="capital_account">
    <div class="capital_account_num">
      <div class="capital_account_num_title">
        <span>账户概览</span>
      </div>
      <div class="capital_account_num_main">
        <div>可用店铺余额(元)</div>
        <div>
          <span>0.00</span>
          <el-button type="primary" class="button_recharge" size="mini">充值</el-button>
          <el-button size="mini">提现</el-button>
        </div>
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
      dataSection:''
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

  .capital_account_num {
    .capital_account_num_title {
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
    .capital_account_num_main {
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
  }
}
</style>
