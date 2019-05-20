<template>
  <div class="customer_search_table">
    <div class="customer_search_table_main">
      <div class="customer_search_list">
        <div class="search_list">
          <div>关键词：</div>
          <div>
            <el-select v-model="customerSearch" placeholder="请选择" size="mini">
              <el-option
                v-for="item in customerSearchCondition"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            <el-input v-model="customerSearchMain" placeholder="请输入内容" size="mini"></el-input>
          </div>
        </div>
        <div class="search_list">
          <div>上次消费时间：</div>
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
        <div class="search_but">
          <el-button type="primary" size="mini" @click="searchSelectCustomer">筛选</el-button>
        </div>
      </div>
      <div class="">
        <el-table
          :data="tableData"
          style="width: 100%">
          <el-table-column
            label="姓名"
            width="200">
            <template slot-scope="scope">
              <span>{{ scope.row.customer_name }}</span>
            </template>
          </el-table-column>
          <el-table-column
            prop="phone"
            label="手机号"
            width="220">
          </el-table-column>
          <el-table-column
            prop="updated_time"
            label="上次购买时间"
            width="220">
          </el-table-column>
          <el-table-column
            prop="goods_true_price"
            label="花费金额"
            align="right">
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
      customerSearchCondition: [{
        value: '手机号',
        label: '手机号'
      }, {
        value: '姓名',
        label: '姓名'
      }],
      tableData: [],
      customerSearch: '',
      customerSearchMain: '',
      orderTime: ''
    }
  },
  created () {
    this.searchCustomer();
  },
  methods: {
    searchCustomer() {
      this.$axios({
        method: "post",
        url: "/getCustomerList",
      }).then((res) => {
        this.tableData = res.data.result;
      }).catch((err) => {
        console.log(err);
      })
    },
    searchSelectCustomer() {
      let data = {
        orderTime: this.orderTime !== '' ? this.orderTime : null,
        customerName: this.customerSearch === '姓名' ? this.customerSearchMain : '',
        customerPhone: this.customerSearch === '手机号' ? this.customerSearchMain : '',
      };
      this.$axios({
        method: "post",
        url: "/getSelectCustomerList",
        data
      }).then((res) => {
        this.tableData = res.data.result;
      }).catch((err) => {
        console.log(err);
      })
    },
  }
}
</script>

<style lang="scss" scoped>
.customer_search_table {
  padding: 10px;

  .customer_search_table_main {
    padding: 10px;
    background: white;

    .customer_search_list {
      padding: 20px;
      background: #f8f8f8;

      .search_but {
        margin-left: 60px;
      }
      .search_list {
        margin-bottom: 15px;
      }
      .search_list>div {
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
