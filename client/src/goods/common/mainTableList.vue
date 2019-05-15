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
          <span style="margin-left: 10px">{{ scope.row.shopName }}</span>
        </template>
      </el-table-column>

      <el-table-column
        prop="stock"
        label="库存"
        width="100">
      </el-table-column>

      <el-table-column
        prop="saleVolume"
        label="总销量"
        width="100">
      </el-table-column>

      <el-table-column
        prop="goodsPrice"
        label="价格"
        width="100">
      </el-table-column>

      <el-table-column
        prop="goods_group_id"
        label="分组"
        width="100">
      </el-table-column>

      <el-table-column
        prop="groupType"
        label="类型"
        width="100">
      </el-table-column>

      <el-table-column
        prop="date"
        label="更改日期"
        width="100">
      </el-table-column>

      <el-table-column
        label="操作">
        <template slot-scope="scope">
          <span :data-goodsid="scope.row.id">推广</span>
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
    tableShowData: Array,
    activeName: String
  },
  data () {
    return {
      tableData: [],
      multipleSelection: []
    }
  },
  watch:{
    tableShowData(val) {
      this.tableData = [];
      if(this.activeName === 'marketing') {
        console.log(val);
        let _ = this;
        val.forEach(item => {
          let obj = {};
          obj.shopName = item.goods_name;
          obj.stock = (item.goods_number-item.goods_pay_number);
          obj.saleVolume = item.goods_pay_number;
          obj.goods_group_id = item.goods_group_id;
          obj.date = item.updated_time;
          obj.id = item.id;
          obj.groupType = item.goods_type;
          obj.goodsPrice = item.goods_activity_price < item.goods_price ? item.goods_activity_price : item.goods_price;
          _.tableData.push(obj);
        });
      }
      if(this.activeName === 'soldOut') {
        let _ = this;
        val.forEach(item => {
          if((item.goods_number-item.goods_pay_number) <= 0) {
            let obj = {};
            obj.shopName = item.goods_name;
            obj.stock = (item.goods_number-item.goods_pay_number);
            obj.saleVolume = item.goods_pay_number;
            obj.date = item.updated_time;
            obj.id = item.id;
            _.tableData.push(obj);
          }
        });
      }
    }
  },
  methods: {
    // 表格变更函数
    handleSelectionChange(val) {
      this.multipleSelection = val;
      console.log(val);
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
