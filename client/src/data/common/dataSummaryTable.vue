<template>
  <div class="data_summary">
    <div class="data_order_num">
      <div class="data_order_num_title">
        <span>订单数量</span>
      </div>
      <div class="data_order_num_bac">
        <canves-chart :can_width="orderShow.can_width" :can_height="orderShow.can_height" :y_num="orderShow.y_num" :x_xnum="orderShow.x_xnum"/>
      </div>
      <div class="data_order_num_main">
        <ul>
          <li>
            <div>总支付订单数</div>
            <div>{{ orderNum }}</div>
            <div>昨日全天：{{ yesOrderNum }}</div>
          </li>
          <li>
            <div>总购买人数</div>
            <div>{{ customer }}</div>
            <div>昨日全天：{{ yesCustomer }}</div>
          </li>
        </ul>
      </div>
    </div>
    <div class="data_order_num" style="margin-top:10px">
      <div class="data_order_num_title">
        <span>商品发布种类</span>
      </div>
      <div class="data_order_num_bac">
        <canves-chart :can_width="goodsShow.can_width" :can_height="goodsShow.can_height" :y_num="goodsShow.y_num" :x_xnum="goodsShow.x_xnum"/>
      </div>
      <div class="data_order_num_main">
        <ul>
          <li>
            <div>在售总商品种类</div>
            <div>{{ goodsKind }}</div>
            <div>昨日全天：{{ yesGoodsKind }}</div>
          </li>
        </ul>
      </div>
    </div>
    <div class="data_order_num" style="margin-top:10px">
      <div class="data_order_num_title">
        <span>销售额</span>
      </div>
      <div class="data_order_num_bac">
        <canves-chart :can_width="salesVolume.can_width" :can_height="salesVolume.can_height" :y_num="salesVolume.y_num" :x_xnum="salesVolume.x_xnum"/>
      </div>
      <div class="data_order_num_main">
        <ul>
          <li>
            <div>总销售额</div>
            <div>￥ {{ salesVolumeNum }}</div>
            <div>昨日全天：{{ yesSalesVolumeNum }}</div>
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
      goodsShow: {
        can_width: 500,
        can_height: 300,
        y_num: [0, 10, 20, 30, 40],
        x_xnum: [['2019-5-10', 12], ['2019-5-11', 15], ['2019-5-12', 30], ['2019-5-13', 35]]
      },
      orderShow: {
        can_width: 500,
        can_height: 300,
        y_num: [],
        x_xnum: []
      },
      salesVolume: {
        can_width: 500,
        can_height: 300,
        y_num: [],
        x_xnum: []
      },
      salesVolumeNum: 0,
      yesSalesVolumeNum: 0,
      customer: 0,
      yesCustomer: 0,
      orderNum: 0,
      yesOrderNum: 0,
      yesGoodsKind: 0,
      goodsKind: 0
    }
  },
  created() {
    this.addData();
  },
  methods: {
    changeIs() {
      // this.$set(this.ctx, 'y_num', [0, 10, 20, 30, 40, 60, 80]);
    },
    addData() {
      this.$axios({
        method: "post",
        url: "/getDataSummary",
      }).then((res) => {
        console.log(res.data.result);
        const data = res.data.result;
        this.salesVolume.x_xnum = data.order.salesVolumeArr;
        this.salesVolume.y_num = this.spaceY(data.order.salesVolumeArr);
        this.salesVolumeNum = data.order.salesVolumeNum;
        this.yesSalesVolumeNum = data.order.salesVolumeArr[4][1];
        this.orderShow.x_xnum = data.order.orderShow;
        this.orderShow.y_num = this.spaceY(data.order.orderShow);
        this.yesOrderNum = data.order.orderShow[4][1];
        this.orderNum = data.order.orderSize;
        this.yesCustomer = data.order.yesCustomer;
        this.customer = data.order.customer;

        this.goodsShow.x_xnum = data.goods.goodsKindArr;
        this.goodsShow.y_num = this.spaceY(data.goods.goodsKindArr);
        this.yesGoodsKind = data.goods.goodsKindArr[4][1];
        this.goodsKind = data.goods.goodsKindSum;
      }).catch((err) => {
        console.log(err);
      })
    },
    spaceY(arr) {
      let result = [];
      let innArr = [];
      for(let i=0;i<arr.length;i++) {
        innArr[i] = arr[i][1];
      }
      innArr.sort((a, b) => a-b);
      const max = innArr[4];
      if(innArr[4]<1) {
        result = [0, 1];
      } if(innArr[4]<4) {
        result = [0, 1, 2, 3];
      } else {
        const c = innArr / 4; 
        result = [0, c, 2*c, 3*c, innArr];
      }
      return result;
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
