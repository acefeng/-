<template>
  <div class="order_deliver_table">
    <div class="order_deliver_table_main">
      <div class="order_deliver_list">
        <div class="search_list">
          <div>下单时间：</div>
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
          <el-button type="primary" size="mini" @click="getSelectOrder">筛选</el-button>
        </div>
      </div>
      <div class="">
        <el-table
          :data="tableData"
          style="width: 100%">
          <el-table-column
            label="商品"
            width="130">
            <template slot-scope="scope">
              <i class="el-icon-time"></i>
              <span style="margin-left: 10px">{{ scope.row.shopName }}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="单价(元) / 数量"
            width="130">
            <template slot-scope="scope">
              <span>{{ scope.row.shopPrice }} / {{ scope.row.goodsNum }}</span>
            </template>
          </el-table-column>
          <el-table-column
            prop="id"
            label="订单号"
            width="100">
          </el-table-column>
          <el-table-column
            prop="creatDate"
            label="操作时间"
            width="180">
          </el-table-column>
          <el-table-column
            prop="customer"
            label="收货人"
            width="100">
          </el-table-column>
          <el-table-column
            prop="orderState"
            label="状态"
            width="100">
          </el-table-column>
          <el-table-column
            label="操作"
            align="right">
            <template slot-scope="scope">
              <el-button type="primary" size="mini" @click="sendGoods(scope.row.id)">发货</el-button>
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
      orderTime: ''
    }
  },
  mounted() {
    this.getAllOrder();
  },
  methods: {
    sendGoods(id) {
      this.$axios({
        method: 'post',
        url: '/changeOrderState',
        data: {
          id
        }
      }).then((res) => {
        if(res.data.result) {
          this.getSelectOrder();
          this.$message({
            message: '发货成功',
            type: 'success'
          });
        } else {
          this.$message({
            message: '发货失败',
            type: 'error'
          });
        }
      }).catch((err) => {
        console.log(err);
      })
    },
    getAllOrder() {
      this.$axios({
        method: 'post',
        url: '/getAllOrder',
      }).then((res) => {
        const data = res.data.result;
        this.tableData = [];
        data.forEach(item => {
          if(item.order_state === 1) {
            this.tableData.push({
              truePay: item.goods_true_price,
              customer: item.customer_name,
              shopPriceType: item.delivery_type,
              shopName: item.goods_name,
              shopPrice: item.goods_price,
              goodsNum: item.goods_number,
              id: item.id,
              orderState: item.order_state === 1 ? '未发货':'已发货',
              creatDate: new Date(item.created_time).toLocaleString()
            })
          }
        });
      }).catch((err) => {
        console.log(err);
      })
    },
    getSelectOrder() {
      let data = {};
      data.orderId = null;
      data.customerName = null;
      data.orderTime = this.orderTime !== '' ? this.orderTime : null;
      data.orderGoodsName = null;
      data.orderDelivery = null;
      this.$axios({
        method: 'post',
        url: '/getSelectOrder',
        data
      }).then((res) => {
        console.log(res);
        const data = res.data.result;
        this.tableData = [];
        data.forEach(item => {
          if(item.order_state === 1) {
            this.tableData.push({
              truePay: item.goods_true_price,
              customer: item.customer_name,
              shopPriceType: item.delivery_type,
              shopName: item.goods_name,
              shopPrice: item.goods_price,
              goodsNum: item.goods_number,
              id: item.id,
              creatDate: new Date(item.created_time).toLocaleString()
            })
          }
        });
      }).catch(err => {
        console.log(err);
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.order_deliver_table {
  padding: 10px;

  .order_deliver_table_main {
    padding: 10px;
    background: white;

    .order_deliver_list {
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
