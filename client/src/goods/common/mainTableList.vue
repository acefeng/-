<template>
  <div class="main_table_list">
    <el-table
      :data="tableData"
      style="width: 100%"
      @selection-change="handleSelectionChange">
      <el-table-column
        type="selection">
      </el-table-column>

      <el-table-column
        label="商品"
        width="180">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.shopmain.shopName }}</span>
        </template>
      </el-table-column>

      <el-table-column
        prop="stock"
        label="库存"
        width="180">
      </el-table-column>

      <el-table-column
        prop="saleVolume"
        label="总销量">
      </el-table-column>

      <el-table-column
        prop="date"
        label="更改日期"
        width="180">
      </el-table-column>

      <el-table-column
        label="操作">
        <template>
          <span>推广</span>
        </template>
      </el-table-column>
    </el-table>
    <div class="table_but_list">
      <el-button size="small">下架</el-button>
    </div>
  </div>
</template>

<script>
export default {
  components: {

  },
  props: {
    activeName: String
  },
  data () {
    return {
      tableData: [{
        date: '2016-05-02',
        stock: '王小虎',
        saleVolume: '上海市普陀区金沙江路 1518 弄',
        shopmain: {
          shopName: '测试商品三',
          shopPrice: '1.00'
        }
      }, {
        date: '2016-05-04',
        stock: '王小虎',
        saleVolume: '上海市普陀区金沙江路 1517 弄',
        shopmain: {
          shopName: '测试商品四',
          shopPrice: '2.00'
        }
      }],
      multipleSelection: []
    }
  },
  methods: {
    // 表格变更函数
    handleSelectionChange(val) {
      this.multipleSelection = val;
    }
  }
}
</script>

<style lang="scss">
.main_table_list {
  margin-top: 20px;
  font-size: 12px;

  .table_but_list {
    margin-top: 20px;
    margin-left: 40px;
  }
}
</style>
