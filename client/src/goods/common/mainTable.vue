<template>
  <div class="main_table">
    <div class="push_goods">
      <el-button type="primary">发布商品</el-button>
    </div>
    <div class="search_goods">
      <ul>
        <li>
          <span>商品名称或编码：</span>
          <span><el-input v-model="searchByNameOrId" size="mini"></el-input></span>
        </li>
        <li>
          <span>总销量：</span>
          <span class="sum_sale">
            <el-input v-model="searchBySaleNumMin" size="mini"></el-input>
            <span>-</span>
            <el-input v-model="searchBySaleNumMax" size="mini"></el-input>
          </span>
        </li>
      </ul>
      <ul>
        <li>
          <span>商品分组：</span>
          <span class="group_goods">
            <el-select v-model="searchByGoodsGroups" placeholder="请选择" size="mini">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </span>
        </li>
        <li>
          <span>价格：</span>
          <span class="sum_sale">
            <el-input v-model="searchByPriceMin" size="mini"></el-input>
            <span>-</span>
            <el-input v-model="searchByPriceMax" size="mini"></el-input>
          </span>
        </li>
      </ul>
      <ul>
        <li>
          <span>商品类型：</span>
          <span class="group_goods">
            <el-select v-model="searchByGoodsType" placeholder="请选择" size="mini">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </span>
        </li>
        <li>
          <span>库存扣减方式：</span>
          <span class="group_goods">
            <el-select v-model="abc" placeholder="请选择" size="mini">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </span>
        </li>
      </ul>
      <div class="search_goods_but">
        <el-button type="primary">筛选</el-button>
        <el-button>清空筛选条件</el-button>
      </div>
    </div>
    <main-table-list />
  </div>
</template>

<script>
import MainTableList from './mainTableList';
export default {
  components: {
    'main-table-list': MainTableList
  },
  props: {
    activeName: String
  },
  data () {
    return {
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      searchByNameOrId: '',
      searchBySaleNumMax: '',
      searchBySaleNumMin: '',
      searchByGoodsGroups: '',
      searchByPriceMin: '',
      searchByPriceMax: '',
      searchByGoodsType: '',
      abc: '',
    }
  },
  methods: {
   
  }
}
</script>

<style lang="scss" scoped>
.main_table {

  .push_goods {

  }

  .search_goods {
    box-sizing: border-box;
    border-radius: 3px;
    background: #f8f8f8;
    padding: 20px 10px;
    margin-top: 20px;

    ul {
      list-style: none;
      display: inline-block;
      overflow: hidden;

      li {
        height: 30px;
        margin-bottom: 20px;
        width: 265px;
        &>span {
          display: inline-block;
        }
        &>span:nth-child(1) {
          width: 100px; 
          font-size: 12px;
          text-align: right;
        }

        .sum_sale .el-input {
          width: 70px;
        }

        .group_goods {
          width: 150px;
        }
      }
    }

    .search_goods_but {
      margin-left: 100px;
    }
  }
}
</style>
