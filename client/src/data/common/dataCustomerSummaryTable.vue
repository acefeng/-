<template>
  <div class="data_summary">
    <div class="data_summary_num">
      <div class="data_summary_num_title">
        <span>客户概况</span>
      </div>
      <div class="data_summary_num_main">
        <div>
          <span>时间筛选：</span>
          <el-date-picker
            v-model="dataSection"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期">
          </el-date-picker>
        </div>
        <div>
          <ul>
            <li>
              <div>访客数</div>
              <div>0</div>
            </li>
            <li>
              <div>成交客户数</div>
              <div>0</div>
            </li>
          </ul>
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
.data_summary {
  margin: 10px;
  background: white;
  padding: 10px;
  box-sizing: border-box;

  .data_summary_num {
    .data_summary_num_title {
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
    .data_summary_num_main {
      overflow: hidden;
      &>div:nth-child(1) {
        background: #f8f8f8;
        overflow: hidden;
        padding: 10px;
        margin-top: 10px;
      }
      &>div:nth-child(2) {
        height: 100px;
        margin-top: 10px;
        background: #f8f8f8;

        ul {
          list-style: none;
          li {
            display: inline-block;
            width: 170px;
            padding: 20px 0px 0px 60px;

            &>div:nth-child(1) {
              font-size: 12px;
              color: #333;
            }

            &>div:nth-child(2) {
              font-size: 24px;
              color: #333;
              margin-top: 5px;
            }
          }
        }
      }
    }
  }
}
</style>
