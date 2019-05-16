<template>
  <div class="main_table_list">
    <el-table
      :data="tableData"
      style="width: 100%"
      @selection-change="handleSelectionChange">
      <el-table-column
        type="selection"
        v-if="activeName==='marketing'">
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
        label="更改日期">
      </el-table-column>

      <el-table-column
        label="操作" 
        v-if="activeName==='marketing'"
        width="100">
        <template slot-scope="scope">
          <el-popover
            placement="top-start"
            title="请复制下面链接"
            width="200"
            trigger="click"
            :content="extensionGoods(scope.row.id)">
            <el-button slot="reference" size="mini">推广</el-button>
          </el-popover>
        </template>
      </el-table-column>
    </el-table>
    <div class="table_but_list" v-if="activeName==='marketing'">
      <el-button size="small" @click="offLoadingGoods">下架</el-button>
    </div>
  </div>
</template>

<script>
export default {
  components: {

  },
  props: {
    tableShowData: Array,
    activeName: String,
    getSelectGoods: Function
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
        let _ = this;
        val.forEach(item => {
          if (item.goods_state == 1) {
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
          }
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
            obj.goods_group_id = item.goods_group_id;
            obj.groupType = item.goods_type;
            obj.goodsPrice = item.goods_activity_price < item.goods_price ? item.goods_activity_price : item.goods_price;
            _.tableData.push(obj);
          }
        });
      }
      if(this.activeName === 'offLoading') {
        let _ = this;
        val.forEach(item => {
          if(item.goods_state == 2) {
            let obj = {};
            obj.shopName = item.goods_name;
            obj.stock = (item.goods_number-item.goods_pay_number);
            obj.saleVolume = item.goods_pay_number;
            obj.date = item.updated_time;
            obj.id = item.id;
            obj.goods_group_id = item.goods_group_id;
            obj.groupType = item.goods_type;
            obj.goodsPrice = item.goods_activity_price < item.goods_price ? item.goods_activity_price : item.goods_price;
            _.tableData.push(obj);
          }
        });
      }
    }
  },
  methods: {
    //
    extensionGoods(id) {
      return window.location.host+`/goodsH5?goods_id=${id}`;
    },
    // 表格变更函数
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    // 下架商品
    offLoadingGoods() {
      this.$axios({
        method: "post",
        url: "/changeGoodsState",
        data: this.multipleSelection
      }).then((res) => {
        if(res.data.result) {
          this.$message.success('下架成功');
          this.getSelectGoods();
        }
      }).catch((err) => {
        console.log(err);
      })
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
