<template>
  <div class="shopMain">
    <div class="header">
      <div class="shopName">
        {{userName}}
        <span :class="{'tag': true, 'isVip': isVip}">SVIP</span>
      </div>
      <div class="userName">
        <img src="https://img.yzcdn.cn/upload_files/avatar.png" alt="" width="20">
        <span>{{phone}}</span>
        <i class="el-icon-arrow-right" style="vertical-align: middle;"></i>
      </div>
    </div>
    <div class="showMain">
      <survey />
    </div>
  </div>
</template>

<script>
import Survey from './survey';
export default {
  name: 'app',
  components: {
    'survey': Survey
  },
  data () {
    return {
      isVip: true,
      phone: 0,
      userName: ''
    }
  },
  created () {
    this.phone = _global.phone;
    this.userName = _global.userName;
  },
  methods: {
   
  }
}
</script>
<style lang="scss" scoped>
.header {
  height: 56px;
  background: white;
  line-height: 56px;
  
  .shopName {
    font-size: 20px;
    color: #333;
    font-weight: 700;
    padding-left: 40px;
    display: inline-block;

    .tag {
      border: 1px solid rgb(153, 153, 153);
      padding: 1px 5px;
      font-size: 12px;
      font-weight: 300;
      font-family: inherit;
      margin-left: 5px;
    }
    .isVip {

    }
  }

  .userName {
    float: right;
    margin-right: 50px;

    img {
      border-radius: 50%;
      vertical-align: middle;
      margin-right: 5px;
    }
    span {
       vertical-align: middle;
    }
  }
}

.showMain {
  width: 1308px;
  height: auto;
  margin: 20px auto 0px;
}
</style>
