<template>
  <div>
    <div class="survey_main">
      <div class="manage">
        <div class="header_title">
          <h2>经营概况</h2>
          <div class="reset_time">
            更新时间：2019-04-28 10:36:00
          </div>
        </div>
        <ul class="money">
          <li>
            <div>支付金额（元）</div>
            <div>0.00</div>
            <div>昨日：0.00</div>
          </li>
          <li>
            <div>支付订单数</div>
            <div>0</div>
            <div>昨日：0</div>
          </li>
          <li>
            <div>支付人数</div>
            <div>0</div>
            <div>昨日：0</div>
          </li>
          <li>
            <div>访客数</div>
            <div>0</div>
            <div>昨日：0</div>
          </li>
        </ul>
        <ul class="order">
          <li>
            <div>待发货订单</div>
            <div>0</div>
          </li>
          <li>
            <div>维权订单</div>
            <div>0</div>
          </li>
          <li>
            <div>未回复客户数</div>
            <div>0</div>
          </li>
        </ul>
      </div>
      <div class="often_fun">
        <div class="header_title">
          <h2>常用功能</h2>
        </div>
        <ul class="show_menu">
          <li>发布商品</li>
          <li>编辑微页面</li>
          <li>微信公众号</li>
          <li>帮助中心</li>
          <li>收入提现</li>
          <li>人工客服</li>
        </ul>
      </div>
      <div class="suggest">
        <div class="header_title">
          <h2>经营建议</h2>
        </div>
        <ul class="show_suggest">
          <li>
            <h3>跨境解决方案</h3>
            <div>一站式服务，全程无忧</div>
          </li>
          <li>
            <h3>精品活动</h3>
            <div>高转化导购，帮你做推广</div>
          </li>
          <li>
            <h3>营销分析功能上线</h3>
            <div>量化营销效果，让运营决策更高效</div>
          </li>
          <li>
            <h3>教育正式上线</h3>
            <div>立享7日免费试用机会</div>
          </li>
        </ul>
      </div>
    </div>
    <div class="survey_advertisement">
    广告位置
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
    }
  },
  methods: {
   
  }
}
</script>

<style lang="scss" scoped>
.survey_main, .survey_advertisement {
  display: inline-block;
  vertical-align: top;
}
.survey_advertisement {
  height: 1000px;
  width: 240px;
  background: white;
  margin-left: 15px;
}
.manage {
  width: 1048px;
  box-sizing: border-box;
  padding: 20px;
  background: white;
  margin-bottom: 20px;

  .header_title {
    h2 {
      font-size: 16px;
      color: #333;
      font-weight: 900;
      display: inline-block
    }

    .reset_time {
      color: #999;
      font-size: 12px;
      float: right;
      margin-right: 10px;
    }
  }

  .money {
    list-style: none;
    margin: 40px 20px 20px;
    position: relative;
    z-index: 1;
    padding-bottom: 20px;
    padding-left: 68px;
    border-bottom: 1px solid #eee;
     
    li {
      width: 222px;
      display: inline-block;

      &>div:nth-child(1) {
        font-size: 12px;
        height: 24px;
        color: #333;
      }
      &>div:nth-child(2) {
        font-size: 24px;
        height: 24px;
        color: #38f;
        margin: 6px 0px 10px 0px;
      }
      &>div:nth-child(3) {
        font-size: 12px;
        height: 24px;
        color: #333;
      }
    }
    &::before{
      content: '';
      display: block;
      width: 45px;
      height: 45px;
      background: url('../assets/sprite.png') no-repeat;
      background-position: 0 0;
      position: absolute;
      top: 0px;
      left: 0px;
    }
  }

  .order {
    list-style: none;
    margin: 40px 20px 20px;
    position: relative;
    z-index: 1;
    padding-left: 68px;

    li {
      width: 222px;
      display: inline-block;

      &>div:nth-child(1) {
        font-size: 12px;
        height: 24px;
        color: #333;
      }
      &>div:nth-child(2) {
        font-size: 24px;
        height: 24px;
        color: #f44;
        margin: 6px 0px 10px 0px;
      }
      &>div:nth-child(3) {
        font-size: 12px;
        height: 24px;
        color: #333;
      }
    }
    &::before{
      content: '';
      display: block;
      width: 45px;
      height: 45px;
      background: url('../assets/sprite.png') no-repeat;
      background-position: 0 -45px;
      position: absolute;
      top: 0px;
      left: 0px;
    }
  }
}
.often_fun {
  width: 1048px;
  box-sizing: border-box;
  padding: 20px;
  background: white;
  margin-bottom: 20px;

  .header_title {
    h2 {
      font-size: 16px;
      color: #333;
      font-weight: 900;
      display: inline-block
    }
  }
  
  .show_menu {
    list-style: none;
    margin-top: 40px;

    li {
      width: 248px;
      padding-left: 50px;
      height: 24px;
      line-height: 24px;
      box-sizing: border-box;
      margin-bottom: 30px;
      display: inline-block;
      color: #333;
      font-size: 12px;

      &:nth-child(1) {
        background: url('../assets/sprite.png') no-repeat;
        background-position: 15px -722px;
      }
      &:nth-child(2) {
        background: url('../assets/sprite.png') no-repeat;
        background-position: 15px -794px;
      }
      &:nth-child(3) {
        background: url('../assets/sprite.png') no-repeat;
        background-position: 15px -650px;
      }
      &:nth-child(4) {
        background: url('../assets/sprite.png') no-repeat;
        background-position: 15px -650px;
      }
      &:nth-child(5) {
        background: url('../assets/sprite.png') no-repeat;
        background-position: 15px -914px;
      }
      &:nth-child(6) {
        background: url('../assets/sprite.png') no-repeat;
        background-position: 15px -816px;
      }
    }
  }
}
.suggest {
  width: 1048px;
  box-sizing: border-box;
  padding: 20px;
  background: white;

  .header_title {
    h2 {
      font-size: 16px;
      color: #333;
      font-weight: 900;
      display: inline-block
    }
  }

  .show_suggest {
    list-style: none;
    margin-top: 20px;

    li {
      width: 242px;
      box-sizing: border-box;
      background: #f8f8f8;
      padding: 30px 0px;
      text-align: center;
      display: inline-block;
      margin-left: 5px;

      h3 {
        height: 24px;
        line-height: 24px;
        margin-bottom: 10px;
        font-size: 20px;
        color: #333;
      }
      div {
        height: 24px;
        line-height: 24px;
        font-size: 14px;
        color: #999;
      }
    }
  }
}
</style>
