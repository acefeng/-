<template>
  <div class="customer_tag_table">
    <div class="customer_tag_table_main">
      <div class="customer_tag_list">
        <div class="search_but">
          <el-button type="primary" size="mini" @click="dialogVisible = true">新建标签</el-button>
        </div>
      </div>
      <div class="">
        <el-table
          :data="tableData"
          style="width: 100%"
          @selection-change="handleSelectionChange">
          <el-table-column
            type="selection"
            width="55">
          </el-table-column>
          <el-table-column
            label="标签名"
            width="200">
            <template slot-scope="scope">
              <span>{{ scope.row.tagName }}</span>
            </template>
          </el-table-column>
          <el-table-column
            prop="customerName"
            label="客户"
            width="220">
          </el-table-column>
          <el-table-column
            label="操作"
            align="right">
            <template>
              <span>删除</span>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <el-dialog
        title="提示"
        :visible.sync="dialogVisible"
        width="30%">
        <span>标签名称：</span>
        <el-input v-model="tagName" placeholder="请输入内容" size="mini" class="tagInput"></el-input>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogTrue">确 定</el-button>
        </span>
      </el-dialog>
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
        tagName: '123',
        customerName: 'what'
      }],
      dialogVisible: false,
      tagName: '',
    }
  },
  methods: {
    handleSelectionChange(val) {
      
    },
    dialogTrue() {
      this.dialogVisible = false
    }
  }
}
</script>

<style lang="scss" scoped>
.customer_tag_table {
  padding: 10px;

  .customer_tag_table_main {
    padding: 10px;
    background: white;

    .customer_tag_list {
      padding: 20px;

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
    .tagInput {
      width: 180px;
    }
  }

  
}
</style>
