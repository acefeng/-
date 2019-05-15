<template>
  <div class="data_summary">
    <div class="data_trade_num">
      <div class="data_trade_num_title">
        <span>交易概况</span>
      </div>
      <div class="data_trade_main">
        <div>
          <ul>
            <li>
              <div>访客数</div>
              <div>0</div>
            </li>
          </ul>
        </div>
        <div>
          <ul>
           <li>
              <div>下单人数</div>
              <div>0</div>
            </li>
            <li>
              <div>下单笔数</div>
              <div>0</div>
            </li>
            <li>
              <div>下单金额</div>
              <div>0</div>
            </li>
          </ul>
        </div>
        <div>
          <ul>
           <li>
              <div>支付人数</div>
              <div>0</div>
            </li>
            <li>
              <div>支付订单数</div>
              <div>0</div>
            </li>
            <li>
              <div>支付金额</div>
              <div>0</div>
            </li>
            <li>
              <div>支付件数</div>
              <div>0</div>
            </li>
          </ul>
        </div>
        <div class="data_trade_img">
          <div>
            <div>转化率</div>
            <div>0%</div>
          </div>
          <div>
            <div>转化率</div>
            <div>0%</div>
          </div>
          <div>
            <div>转化率</div>
            <div>0%</div>
          </div>
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
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.data_summary {
  margin: 10px;
  background: white;
  padding: 10px;
  box-sizing: border-box;

  .data_trade_num {
    .data_trade_num_title {
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

    .data_trade_main {
      margin-top: 10px;
      position: relative;

      &>div:nth-child(1),&>div:nth-child(2),&>div:nth-child(3) {
        box-sizing: border-box;
        height: 104px;
        margin-top: 2px;
        margin-right: 190px;
        padding-left: 20px;

        ul {
          list-style: none;
          li {
            display: inline-block;
            width: 105px;
            box-sizing: border-box;
            padding: 20px;
            &>div:nth-child(1) {
              color: #666;
              font-size: 12px;
            }
            &>div:nth-child(2) {
              color: #333;
              font-size: 26px;
              font-weight: 700;
              margin-top: 10px;
            }
          }
        }
      }
      &>div:nth-child(1) {
        background: #e5f0ff;
      }
      &>div:nth-child(2) {
        background: #f3f7fd;
      }
      &>div:nth-child(3) {
        background: #f0f8f0;
      }

      .data_trade_img {
        position: absolute;
        width: 210px;
        height: 315px;
        background-image: url('../assets/423241cf9e4a5674e498410ee41afdec.png');
        background-size: 210px 315px;
        background-repeat: no-repeat;
        margin-right: 50px;
        right: 0px;
        top: 0px;

        &>div {
          line-height: 18px;
          font-size: 12px;
          color: #666;
          position: absolute;
          white-space: nowrap;
        }

        &>div:nth-child(1) {
          top: 80px;
          left: 140px;
        }
        &>div:nth-child(2) {
          top: 118px;
          left: 200px;
        }
        &>div:nth-child(3) {
          top: 185px;
          left: 130px;
        }
      }
    }
  }
}
</style>
