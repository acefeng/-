<template>
  <div class="order_evaluate_table">
    <div class="order_evaluate_table_main">
      <div class="order_evaluate_list">
        <div class="evaluate_list">
          <div>评价时间：</div>
          <div>
            <el-date-picker
              v-model="orderTime"
              type="daterange"
              align="right"
              unlink-panels
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              size="mini"
              value-format="yyyy-MM-dd HH:mm:ss"
              :default-time="['00:00:00', '23:59:59']">
            </el-date-picker>
          </div>
        </div>
        <div class="evaluate_list">
          <div>商品名称：</div>
          <div>
            <el-input v-model="goodsNameSearch" placeholder="请输入内容" size="mini"></el-input>
          </div>
        </div>
        <div class="evaluate_but">
          <el-button type="primary" size="mini" @click="getOrderCommentSelectList">筛选</el-button>
        </div>
      </div>
      <div class="">
        <el-table
          :data="tableData"
          style="width: 100%">
          <el-table-column
            label="商品"
            width="160">
            <template slot-scope="scope">
              <span>{{ scope.row.goodsName }}</span>
            </template>
          </el-table-column>
          <el-table-column
            prop="created_time"
            label="评价时间"
            width="180">
          </el-table-column>
          <el-table-column
            prop="goods_comment_main"
            label="商品评价"
            width="400">
          </el-table-column>
          <el-table-column
            prop="comment_user_name"
            label="收货人"
            width="100">
          </el-table-column>
          <el-table-column
            label="操作"
            align="right">
            <template slot-scope="scope">
              <el-button type="primary" size="mini" @click="deleteComment(scope.row.id)">删除</el-button>
            </template>
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
  data () {
    return {
      tableData: [],
      orderTime: '',
      goodsNameSearch: ''
    }
  },
  created() {
    this.getOrderCommentAllList();
  },
  methods: {
    deleteComment(commentId) {
      this.$axios({
        method: 'post',
        url: '/deleteComment',
        data: {
          commentId
        }
      }).then((res) => {
        if(res.data.result) {
          this.getOrderCommentSelectList();          
        }
      }).catch(err => {
        console.log(err);
      })
    },
    getOrderCommentSelectList() {
      let data = {
        orderTime: this.orderTime === '' ? null : this.orderTime,
        goodsNameSearch: this.goodsNameSearch === '' ? null : this.goodsNameSearch,
      };
      this.$axios({
        method: 'post',
        url: '/getOrderCommentSelectList',
        data
      }).then((res) => {
        this.tableData = res.data.result;
      }).catch(err => {
        console.log(err);
      })
    },
    getOrderCommentAllList() {
      this.$axios({
        method: 'post',
        url: '/getOrderCommentAllList',
      }).then((res) => {
        console.log(res.data.result);
        this.tableData = res.data.result;
      }).catch(err => {
        console.log(err);
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.order_evaluate_table {
  padding: 10px;

  .order_evaluate_table_main {
    padding: 10px;
    background: white;

    .order_evaluate_list {
      padding: 20px;
      background: #f8f8f8;

      .evaluate_but {
        margin-left: 60px;
      }
      .evaluate_list {
        margin-bottom: 15px;
      }
      .evaluate_list>div {
        display: inline-block;
        font-size: 12px;
        color: #333;

        .el-select, .el-input {
          width: 160px;
        }
      }
    }
  }

  
}
</style>
