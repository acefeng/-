<template>
  <div class="goods_main">
    <div class="goods_center">
      <div class="goods_title">商品管理</div>
      <div class="goods_center_bac">
        <div class="goods_center_main">
          <div>
            <el-button @click="open">新增分组</el-button>
          </div>
          <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column
              label="分组名称"
              width="180">
              <template slot-scope="scope">
                <span class="groupNameStyle" @click="changeUrlToGoods(scope.row.id)">{{ scope.row.group_name }}</span>
              </template>
            </el-table-column>
            <el-table-column
              prop="countGoods"
              label="商品种类数目"
              width="180">
            </el-table-column>
            <el-table-column
              prop="created_time"
              label="创建时间">
            </el-table-column>
            <el-table-column
              label="操作"
              align="right"
              header-align="right">
              <template slot-scope="scope">
                <span @click="deleteGoodsGroup(scope.row.id, scope.row.countGoods)" class="delete_but">删除</span>
              </template>
            </el-table-column>
          </el-table>
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
    <el-dialog
      title="新增标签"
      :visible.sync="dialogVisible"
      width="30%">
      <el-input v-model="groupName" placeholder="请输入内容"></el-input>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogCancel">取 消</el-button>
        <el-button type="primary" @click="dialogAdd">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  components: {
    
  },
  data () {
    return {
      tableData: [],
      dialogVisible: false,
      groupName: ''
    }
  },
  mounted() {
    this.getGroupListMain();
  },
  methods: {
    getGroupListMain() {
      this.$axios({
        method: "post",
        url: "/getGoodsGroupMain",
      }).then((res) => {
        this.tableData = res.data.result;
        console.log(res);
      }).catch((err) => {
        console.log(err);
      })
    },
    deleteGoodsGroup(id, countGoods) {
      if(countGoods > 0) {
        this.$message({
          type: 'info',
          message: '删除失败，分组内还有商品。'
        });
        return;
      }
      this.$axios({
        method: "post",
        url: "/deleteGoodsGroup",
        data: {
          id
        }
      }).then((res) => {
        if(res.data.result) {
          this.getGroupListMain();
          this.$message({
            type: 'success',
            message: '删除成功'
          });
        }
      }).catch((err) => {
        console.log(err);
      })
    },
    // 更改路由到指定位置
    changeUrlToGoods(groupId) {
      this.$router.push({ name: 'goodsMain', params: { groupId }});
    },
    dialogAdd() {
      this.$axios({
        method: 'post',
        url: '/addGoodsTag',
        data: {
          groupName: this.groupName
        }
      }).then((res) => {
        if(res.data.result) {
          this.getGroupListMain();
          this.$message({
            type: 'success',
            message: '添加成功'
          });
          this.dialogVisible = false;
        } else {
          this.$message({
            type: 'info',
            message: '后台错误，添加失败'
          });    
        }
      }).catch((err) => {
        this.$message({
          type: 'info',
          message: '网络错误，添加失败。'
        });    
      })
    },
    dialogCancel() {
      this.dialogVisible = false;
    },
    open() {
      this.dialogVisible = true;
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

        .delete_but {
          color: #999;
          cursor: pointer;
        }

        .groupNameStyle:hover{
          color: #999;
          cursor: pointer;
        }
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
