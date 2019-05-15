<template>
  <div class="data_summary">
    <div class="data_order_num">
      <div class="data_order_num_title">
        <span>订单数量</span>
      </div>
      <div class="data_order_num_bac">
        <canves-chart :can_width="ctx.can_width" :can_height="ctx.can_height" :y_num="ctx.y_num" :x_xnum="ctx.x_xnum"/>
      </div>
      <div class="data_order_num_main">
        <ul>
          <li>
            <div>总支付订单数</div>
            <div>0</div>
            <div>昨日全天：0</div>
          </li>
          <li>
            <div>总购买人数</div>
            <div>0</div>
            <div>昨日全天：0</div>
          </li>
        </ul>
      </div>
    </div>
    <div class="data_order_num" style="margin-top:10px">
      <div class="data_order_num_title">
        <span>商品数量</span>
      </div>
      <div class="data_order_num_bac">
        <canves-chart :can_width="ctx.can_width" :can_height="ctx.can_height" :y_num="ctx.y_num" :x_xnum="ctx.x_xnum"/>
      </div>
      <div class="data_order_num_main">
        <ul>
          <li>
            <div>在售总商品种类</div>
            <div>0</div>
            <div>昨日全天：0</div>
          </li>
        </ul>
      </div>
    </div>
    <div class="data_order_num" style="margin-top:10px">
      <div class="data_order_num_title">
        <span>销售额</span>
      </div>
      <div class="data_order_num_bac">
        <canves-chart :can_width="ctx.can_width" :can_height="ctx.can_height" :y_num="ctx.y_num" :x_xnum="ctx.x_xnum"/>
      </div>
      <div class="data_order_num_main">
        <ul>
          <li>
            <div>总销售额</div>
            <div>0</div>
            <div>昨日全天：0</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import CanvesChart from '../../common/www/canvesChart'
export default {
  components: {
    'canves-chart': CanvesChart
  },
  props: {

  },
  data () {
    return {
      ctx: {
        can_width: 500,
        can_height: 300,
        y_num: [0, 10, 20, 30, 40],
        x_xnum: [['2019-5-10', 12], ['2019-5-11', 15], ['2019-5-12', 30], ['2019-5-13', 35]]
      }
    }
  },
  methods: {
    changeIs() {
      // this.$set(this.ctx, 'y_num', [0, 10, 20, 30, 40, 60, 80]);
    }
  }
}
</script>

<style lang="scss" scoped>
.data_summary {
  margin: 10px;
  background: white;
  padding: 10px;
  box-sizing: border-box;

  .data_order_num {
    .data_order_num_title {
      font-size: 14px;
      padding: 10px;
      background: #f8f8f8;
      box-sizing: border-box;
      margin-bottom: 10px;
      span {
        padding-left: 5px;
        border-left: 4px solid #f70;
      }
    }

    .data_order_num_bac {
      display: inline-block;
      border: 1px solid #e5e5e5;
      padding: 10px;
    }

    .data_order_num_main {
      display: inline-block;
      background: #f8f8f8;
      height: 320px;
      width: 397px;
      vertical-align: top;

      ul {
        list-style: none;
        li {
          display: inline-block;
          width: 190px;
          font-size: 12px;
          color: #333;
          margin-top: 120px;
          padding-left: 25px;
          box-sizing: border-box;

          &>div:nth-child(1) {
            
          }
          &>div:nth-child(2) {
            font-size: 26px;
            margin: 5px;
          }
          &>div:nth-child(3) {
            color: #9b9b9b;
          }
        }
      }
    }
  }
}
</style>
