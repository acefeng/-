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
              v-model="customerPayTimeMin"
              align="right"
              type="date"
              placeholder="开始日期"
              size="mini"
              :picker-options="pickerOptions">
            </el-date-picker>
            <span>至</span>
            <el-date-picker
              v-model="customerPayTimeMax"
              align="right"
              type="date"
              placeholder="结束日期"
              size="mini"
              :picker-options="pickerOptions">
            </el-date-picker>
          </div>
        </div>
        <div class="search_but">
          <el-button type="primary" size="mini">筛选</el-button>
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
              <span>{{ scope.row.customerName }}</span>
            </template>
          </el-table-column>
          <el-table-column
            prop="phoneNum"
            label="手机号"
            width="220">
          </el-table-column>
          <el-table-column
            prop="payTime"
            label="上次购买时间"
            width="220">
          </el-table-column>
          <el-table-column
            prop="truePay"
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
      tableData: [{
        phoneNum: '19827462345',
        customerName: '王小虎',
        payTime: '2018-09-02',
        truePay: '1.00'
      }],
      customerSearch: '',
      customerSearchMain: '',
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
      customerPayTimeMin: '',
      customerPayTimeMax: ''
    }
  },
  methods: {
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
