<template>
  <div class="goods_show">
    <div class="goods_img">
      <img :src="goodsImg" alt="">
    </div>
    <div class="goods_title">
      <div>{{ goodsName }}</div>
      <div>￥ {{ Math.min(goodsPrice, goodsActivityPrice) }}</div>
      <div>
        <span>剩余 {{ goodsNumber-goodsPayNumber }}</span>
      </div>
    </div>
    <div class="goods_deliver">
      <span>配送方式：</span>
      <span>{{ goodsDelivery }}</span>
    </div>
    <div class="goods_evaluate">
      <span>宝贝评价</span>
      <span>{{commentList.length>0 ? `共有 ${commentList.length} 条评价` : '暂无评价'}}</span>
    </div>
    <ul class="goods_comment">
      <li v-for="(item,index) in commentList" :key="index">
        <div>{{item.comment_user_name}}：</div>
        <div>{{item.goods_comment_main}}</div>
        <div>{{item.created_time}}</div>
      </li>
    </ul>
    <div class="comment_push">
      <el-input
        type="textarea"
        :rows="3"
        placeholder="请输入内容"
        v-model="textarea">
      </el-input>
       <el-button type="primary" class="comment_btn" @click="pushComment">提交评论</el-button>
    </div>
    <div class="goods_buy_but">
      <div class="this_but" @click.self="disDiv(true)">立即购买</div>
    </div>
    <div class="poper" v-show="poper" @click.self="disDiv(false)">
      <div>
        <div>
          <span>购买数量</span>
          <span>剩余： {{ goodsNumber-goodsPayNumber }}</span>
          <el-input-number class="input_num" v-model="num" :min="1" @change="handleChange" :max="goodsNumber-goodsPayNumber" label="描述文字" size="mini"></el-input-number>
        </div>
        <div>
          <span>价格：</span>
          <span>{{ orderTruePrice }}</span>
        </div>
        <div>
          <span>收货地址</span>
          <el-input v-model="address" placeholder="请输入" size="mini" class="order_address"></el-input>
        </div>
        <div class="this_but" @click="pushOrder">下一步</div>
      </div>
    </div>
    <check-login :check-login="checkLogin" :disDiv="disDiv" :disLogin="disLogin"/>
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
      checkLogin: false,
      goodsImg: '',
      goodsActivityPrice: 0,
      goodsPrice: 0,
      orderTruePrice: 0,
      orderGoodsNum: 0,
      goodsName: '',
      commentList: [],
      textarea: ''
    }
  },
  created() {
    this.goodsImg = _globalGoods.goods_img;
    this.goodsActivityPrice = _globalGoods.goods_activity_price;
    this.goodsPrice = _globalGoods.goods_price;
    this.goodsDelivery = _globalGoods.goods_delivery;
    this.goodsNumber = _globalGoods.goods_number;
    this.goodsPayNumber = _globalGoods.goods_pay_number;
    this.goodsName = _globalGoods.goods_name;
    this.commentList = _globalComment;
  },
  methods: {
    handleChange(val) {
      this.orderTruePrice = val * this.goodsPrice;
      this.orderGoodsNum = val;
    },
    pushComment() {
      console.log(this.textarea);
    },
    pushOrder() {
      this.$axios({
        method: "post",
        url: "/pushOrder",
        data: {
          orderGoodsNum: this.orderGoodsNum,
          orderTruePrice: this.orderTruePrice,
          orderGoodsId: _globalGoods.id,
          orderGoodsName: _globalGoods.goods_name,
          customerId: _global.userId,
          shopkeeperId: _globalGoods.user_id,
          deliveryType: _globalGoods.goods_delivery,
          goodsPrice: _globalGoods.goods_price,
          orderAddress: this.address,
          customerName: _global.userName
        }
      }).then((res) => {
        if(res.data.result) {
          this.$router.push({ name: 'showOrderId', params: { id: res.data.result }});
        }
      }).catch((err) => {
        console.log(err)
      })
    },
    disDiv(isShow) {
      if(!window._global) {
        this.checkLogin = true;
      } else {
        this.poper = isShow;
      }
    },
    disLogin() {
      this.checkLogin = false;
    }
  }
}
</script>

<style lang="scss">
body {
  background-color: #f8f8f8;
}
.goods_show {
  margin-bottom: 100px;
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

    span {
      font-size: 14px;
      color: #343452;
    }

    &>span:nth-child(2) {
      float: right;
    }
  }

  .goods_comment {
    list-style: none;
    margin-top: 10px;
    line-height: 24px;
    overflow: hidden;
    color: #343452;
    font-size: 14px;
    padding: 10px;
    background: white;

    li {
      margin-bottom: 10px;  
      padding-bottom: 10px;
      border-bottom: 1px solid #f8f8f8;

      &>div:nth-child(1) {
        margin-bottom: 5px;
      }
      &>div:nth-child(2) {
        font-size: 15px;
      }
      &>div:nth-child(3) {
        text-align: right;
        margin-top: 5px;
        color: #909399;
      }
    }
  }

  .comment_push {
    padding: 10px;
    background: white;
    margin-top: 10px;

    .comment_btn {
      margin: 0 auto;
      margin-top: 10px;
      display: block;
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

      &>div:nth-child(1), &>div:nth-child(2) {
        padding: 12px 15px;
        height: 30px;
        line-height: 30px;

        span:nth-child(2) {
          font-size: 12px;
          color: #969799;
        }
      }

      &>div:nth-child(3) {
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
