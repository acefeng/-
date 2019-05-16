<template>
  <div class="goods_main">
    <div class="goods_center">
      <div class="goods_title">商品管理</div>
      <div class="goods_center_bac">
        <div class="goods_center_main">
          <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
            <el-tab-pane label="销售中" name="marketing">
              <main-table 
                active-name="marketing" 
                :goods-groups-list="goodsGroupsList" 
                :table-show-data="tableShowDataInMar" 
                :resetTalbeData="resetTalbeData" 
                :selectTalbeData="selectTalbeData"
                ref="marketing_table"/>
            </el-tab-pane>
            <el-tab-pane label="已售罄" name="soldOut">
              <main-table active-name="soldOut" 
                :goods-groups-list="goodsGroupsList" 
                :table-show-data="tableShowDataInOut" 
                :resetTalbeData="resetTalbeData"
                :selectTalbeData="selectTalbeData"/>
            </el-tab-pane>
            <el-tab-pane label="已下架" name="offLoading">
              <main-table active-name="offLoading" 
                :goods-groups-list="goodsGroupsList" 
                :table-show-data="tableShowDataInOff" 
                :resetTalbeData="resetTalbeData"
                :selectTalbeData="selectTalbeData"/>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </div>
    <div class="goods_help">
      <div class="goods_title">帮助和服务</div>
      <div class="goods_help_main">
        <div class="help_main_list">
          <h2>帮助中心</h2>
          <span>如何新建／发布商品？</span>
          <span>如何管理商品？</span>
          <span>商品如何排序？</span>
          <span>商品销量找不到对应的订单？</span>
          <span>商品二维码使用说明</span>
          <span>商品可以设置用积分兑换吗？</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MainTable from '../common/mainTable';
export default {
  components: {
    'main-table': MainTable
  },
  data () {
    return {
      activeName: 'marketing',
      goodsGroupsList: [],
      tableShowDataInOut: [],
      tableShowDataInMar: [],
      tableShowDataInOff: []
    }
  },
  mounted() {
    this.resetTalbeData();
    if(this.$route.params.groupId) {
      this.$refs.marketing_table.getSelectGoods(this.$route.params.groupId);
    }
  },
  methods: {
    selectTalbeData(sel, type) {
      const goodsList = sel;
      const goodsTagList = this.goodsGroupsList;
      for(let o=0;o<goodsList.length;o++) {
        for(let i=0;i<goodsTagList.length;i++) {
          if(goodsList[o].goods_group_id == goodsTagList[i].id) {
            goodsList[o].goods_group_id = goodsTagList[i].group_name;
          }
        }
      }
      if(type === 'marketing') {
        this.tableShowDataInMar = sel;
      } else if(type === 'soldOut') {
        this.tableShowDataInOut = sel;
      } else if(type === 'offLoading') {
        this.tableShowDataInOff = sel;
      }
    },
    resetTalbeData(data, type) {
      if(data) {
        this.tableShowDataInMar = data;
      } else {
        this.$axios({
          method: "post",
          url: "/resetMainData",
        })
        .then(res => {
          const goodsList = res.data.result.goodsList;
          const goodsTagList = res.data.result.goodsTagList;
          for(let o=0;o<goodsList.length;o++) {
            for(let i=0;i<goodsTagList.length;i++) {
              if(goodsList[o].goods_group_id == goodsTagList[i].id) {
                goodsList[o].goods_group_id = goodsTagList[i].group_name;
              }
            }
          }
          this.goodsGroupsList = goodsTagList;
          this.tableShowDataInMar = goodsList;
          this.tableShowDataInOut = goodsList;
          this.tableShowDataInOff = goodsList;
        })
        .catch(err => {
          console.log(err);
        });
      }
    },
    handleClick(tab, event) {
      
    }
  }
}
</script>

<style lang="scss" scoped>
.goods_main {
  .goods_center {
    margin-right: 225px;

    .goods_center_bac {
      background: #f8f8f8;
      overflow: hidden;

      .goods_center_main {
        margin: 10px;
        padding: 10px;
        box-sizing: border-box;
        background: white;
      }
    }
  }
  .goods_help {
    position: fixed;
    right: 0px;
    top: 0px;
    height: 100%;
    width: 225px;
    border-left: 1px solid #F2F2F2;
    
    .goods_help_main {
      padding: 10px;
      box-sizing: border-box;

      .help_main_list {
        font-size: 12px;
        color: #38f;
        margin-top: 20px;
        padding-bottom: 20px;
        border-bottom: 1px solid #e5e5e5;

        h2 {
          font-size: 12px;
          color: #333;
          border-left: 2px solid #3283fa;
          padding-left: 8px;
        }

        span:nth-child(2) {
          margin-top: 15px;
        }

        span {
          display: block;
          margin-top: 5px;
          margin-left: 8px;
        }
      }
    }
  }
  .goods_title {
    font-size: 14px;
    color: #333;
    padding: 20px;
    height: 60px;
    box-sizing: border-box;
    border-bottom: 1px solid #F2F2F2;
  }
}
</style>
