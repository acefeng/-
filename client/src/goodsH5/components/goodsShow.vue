<template>
  <div class="goods_show">
    <div class="goods_img">
      <img src="../assets/logo.jpg" alt="">
    </div>
    <div class="goods_title">
      <div>测试商品二</div>
      <div>￥ 6.00</div>
      <div>
        <span>剩余 100</span>
      </div>
    </div>
    <div class="goods_deliver">
      <span>配送方式：</span>
      <span>快递</span>
    </div>
    <div class="goods_evaluate">
      <span>宝贝评价</span>
      <span>暂无评价</span>
    </div>
    <div class="goods_buy_but">
      <div class="this_but" @click.self="disDiv(true)">立即购买</div>
    </div>
    <div class="poper" v-show="poper" @click.self="disDiv(false)">
      <div>
        <div>
          <span>购买数量</span>
          <span>剩余： 100</span>
          <el-input-number class="input_num" v-model="num" @change="handleChange" :min="1" :max="100" label="描述文字" size="mini"></el-input-number>
        </div>
        <div>
          <span>收货地址</span>
          <el-input v-model="address" placeholder="请输入" size="mini" class="order_address"></el-input>
        </div>
        <div class="this_but">下一步</div>
      </div>
    </div>
    <check-login :check-login="checkLogin" :disDiv="disDiv"/>
  </div>
</template>

<script>
import CheckLogin from '../common/checkLogin'
export default {
  components: {
    'check-login': CheckLogin
  },
  data () {
    return {
      poper: false,
      num: 1,
      address: '',
      checkLogin: false
    }
  },
  methods: {
    handleChange(value) {
      console.log(value);
    },
    disDiv(isShow) {
      this.checkLogin = isShow; // 登录弹窗
      // this.poper = isShow; //购买页面
    }
  }
}
</script>

<style lang="scss">
body {
  background-color: #f8f8f8;
}
.goods_show {
  .goods_img {
    height: 414px;
    display: flex;
    align-items: center;
    
    img {
      width: 300px;
      height: 300px;
      margin: 0 auto;
    }
  }

  .goods_title {
    padding: 10px;
    box-sizing: border-box;
    background: white;
    &>div:nth-child(1) {
      font-size: 16px;
      color: #333;
    }
    &>div:nth-child(2) {
      font-size: 18px;
      color: #f44;
      padding: 10px 0px;
    }
    &>div:nth-child(3) {
      font-size: 14px;
      color: #999;
    }
  }
  
  .goods_deliver {
    padding: 10px;
    background: white;
    margin-top: 10px;
    line-height: 24px;

    span {
      font-size: 14px;
      color: #343452;
    }
  }

  .goods_evaluate {
    padding: 10px;
    background: white;
    margin-top: 10px;
    line-height: 24px;
    overflow: hidden;
    margin-bottom: 200px;

    span {
      font-size: 14px;
      color: #343452;
    }

    &>span:nth-child(2) {
      float: right;
    }
  }

  .goods_buy_but {
    height: 50px;
    width: 100%;
    position: fixed;
    z-index: 66;
    bottom: 0px;
    left: 0px;
    background: white;

    .this_but {
      height: 50px;
      text-align: center;
      line-height: 50px;
      background: #f44;
      color: #fff;
    }
  }
  .poper {
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    transition: 1s;
    background: rgba(0,0,0,0.7);
    z-index: 99;

    &>div {
      position: absolute;
      width: 100%;
      bottom: 0px;
      left: 0px;
      transition: 1s;
      background: white;
      overflow: hidden;

      &>div:nth-child(1) {
        padding: 12px 15px;
        height: 30px;
        line-height: 30px;

        span:nth-child(2) {
          font-size: 12px;
          color: #969799;
        }
      }

      &>div:nth-child(2) {
        padding: 12px 15px;
        height: 30px;
        line-height: 30px;

        .order_address {
          display: inline-block;
          width: 70%;
          margin-left: 10px;
        }
        span:nth-child(2) {
          font-size: 12px;
          color: #969799;
        }
      }
      .input_num {
        float: right;
      }
    }
    .this_but {
      height: 50px;
      text-align: center;
      line-height: 50px;
      background: #f44;
      color: #fff;
    }
  }
}
</style>
