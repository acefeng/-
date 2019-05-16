<template>
  <div class="order_search_table">
    <div class="order_search_table_main">
      <div class="order_search_list">
        <div class="search_list">
          <div>订单搜索：</div>
          <div>
            <el-select v-model="orderSearch" placeholder="请选择" size="mini">
              <el-option
                v-for="item in orderSearchCondition"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
            <el-input v-model="orderSearchMain" placeholder="请输入内容" size="mini"></el-input>
          </div>
        </div>
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
        <div class="search_list">
          <div>商品名称：</div>
          <div>
            <el-input v-model="shopNameSearch" placeholder="请输入内容" size="mini"></el-input>
          </div>
        </div>
        <div class="search_list">
          <div>配送方式：</div>
          <div>
            <el-select v-model="orderDelivery" placeholder="请选择" size="mini">
              <el-option
                v-for="item in orderDeliveryList"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
        </div>
        <div class="search_but">
          <el-button type="primary" size="mini" @click="getSelectOrder">筛选</el-button>
        </div>
      </div>
      <div class>
        <el-table :data="tableData" style="width: 100%">
          <el-table-column label="商品" width="100">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.shopName }}</span>
            </template>
          </el-table-column>
          <el-table-column label="单价(元) / 数量" width="120">
            <template slot-scope="scope">
              <span>{{ scope.row.shopPrice }} / {{ scope.row.goodsNum }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="id" label="订单编号" width="80"></el-table-column>
          <el-table-column prop="shopPriceType" label="配送方式" width="90"></el-table-column>
          <el-table-column prop="orderState" label="状态" width="60"></el-table-column>
          <el-table-column prop="creatDate" label="创建时间" width="180"></el-table-column>
          <el-table-column prop="customer" label="收货人" width="90"></el-table-column>
          <el-table-column prop="truePay" label="实付金额(元)" width="100"></el-table-column>
          <el-table-column label="操作" align="right">
            <template slot-scope="scope">
              <el-button type="primary" size="mini" @click="deleteOrder(scope.row.id)">删除订单</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      orderSearchCondition: [
        {
          value: "订单号",
          label: "订单号"
        },
        {
          value: "收货人姓名",
          label: "收货人姓名"
        }
      ],
      orderDeliveryList: [
        {
          value: null,
          label: "全部"
        },
        {
          value: "快递",
          label: "快递"
        },
        {
          value: "上门自提",
          label: "上门自提"
        }
      ],
      tableData: [],
      orderSearch: "",
      orderSearchMain: "",
      orderTime: "",
      shopNameSearch: "",
      orderDelivery: ""
    };
  },
  mounted() {
    this.getAllOrder();
  },
  methods: {
    deleteOrder(order_id) {
      console.log(order_id);
    },
    getAllOrder() {
      this.$axios({
        method: 'post',
        url: '/getAllOrder',
      }).then((res) => {
        const data = res.data.result;
        this.tableData = [];
        console.log(data);
        data.forEach(item => {
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
        });
      }).catch((err) => {
        console.log(err);
      })
    },
    getSelectOrder() {
      let data = {};
      if(this.orderSearch === '订单号') {
        data.orderId = this.orderSearchMain!=='' ? this.orderSearchMain : null;
        data.customerName = null;
      } else if(this.orderSearch === '收货人姓名') {
        data.orderId = null;
        data.customerName = this.orderSearchMain!=='' ? this.orderSearchMain : null;
      } else {
        data.orderId = null;
        data.customerName = null;
      }
      data.orderTime = this.orderTime !== '' ? this.orderTime : null;
      data.orderGoodsName = this.shopNameSearch !== '' ? this.shopNameSearch : null;
      data.orderDelivery = this.orderDelivery !== '' ? this.orderDelivery : null;
      this.$axios({
        method: 'post',
        url: '/getSelectOrder',
        data
      }).then((res) => {
        const data = res.data.result;
        this.tableData = [];
        console.log(data);
        data.forEach(item => {
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
        });
      }).catch(err => {
        console.log(err);
      })
    }
  }
};
</script>

<style lang="scss" scoped>
.order_search_table {
  padding: 10px;

  .order_search_table_main {
    padding: 10px;
    background: white;

    .order_search_list {
      padding: 20px;
      background: #f8f8f8;

      .search_but {
        margin-left: 60px;
      }
      .search_list {
        margin-bottom: 15px;
      }
      .search_list > div {
        display: inline-block;
        font-size: 12px;
        color: #333;

        .el-select,
        .el-input {
          width: 160px;
        }
      }
    }
  }
}
</style>
