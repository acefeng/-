<template>
  <div class="order_evaluate_table">
    <div class="order_evaluate_table_main">
      <div class="order_evaluate_list">
        <div class="evaluate_list">
          <div>订单编号：</div>
          <div>
            <el-input v-model="orderNum" placeholder="请输入内容" size="mini"></el-input>
          </div>
        </div>
        <div class="evaluate_list">
          <div>评价时间：</div>
          <div>
            <el-date-picker
              v-model="orderTimeMin"
              align="right"
              type="date"
              placeholder="开始日期"
              size="mini"
              :picker-options="pickerOptions">
            </el-date-picker>
            <span>至</span>
            <el-date-picker
              v-model="orderTimeMax"
              align="right"
              type="date"
              placeholder="结束日期"
              size="mini"
              :picker-options="pickerOptions">
            </el-date-picker>
          </div>
        </div>
        <div class="evaluate_list">
          <div>商品名称：</div>
          <div>
            <el-input v-model="shopNameSearch" placeholder="请输入内容" size="mini"></el-input>
          </div>
        </div>
        <div class="evaluate_but">
          <el-button type="primary" size="mini">筛选</el-button>
        </div>
      </div>
      <div class="">
        <el-table
          :data="tableData"
          style="width: 100%">
          <el-table-column
            label="商品"
            width="170">
            <template slot-scope="scope">
              <span>{{ scope.row.shopName }}</span>
            </template>
          </el-table-column>
          <el-table-column
            prop="orderNum"
            label="订单编号"
            width="180">
          </el-table-column>
          <el-table-column
            prop="goodsEvaluate"
            label="商品评价"
            width="300">
          </el-table-column>
          <el-table-column
            prop="customer"
            label="收货人"
            width="100">
          </el-table-column>
          <el-table-column
            prop="truePay"
            label="实付金额(元)"
            width="100">
          </el-table-column>
          <el-table-column
            label="操作"
            align="right">
            <template>
              <el-button type="primary" size="mini">删除</el-button>
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
      tableData: [{
        truePay: '1.00',
        customer: '王小虎',
        goodsEvaluate: '上门取货真的很忙',
        shopName: '测试商品三',
        orderNum: '1289378912789372189'
      }],
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
        shortcuts: [{
          text: '今天',
          onClick(picker) {
            picker.$emit('pick', new Date());
          }
        }, {
          text: '昨天',
          onClick(picker) {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24);
            picker.$emit('pick', date);
          }
        }, {
          text: '一周前',
          onClick(picker) {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', date);
          }
        }]
      },
      orderTimeMin: '',
      orderTimeMax: '',
      orderNum: '',
      shopNameSearch: ''
    }
  },
  methods: {
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
