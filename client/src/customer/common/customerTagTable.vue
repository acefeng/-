<template>
  <div class="customer_tag_table">
    <div class="customer_tag_table_main">
      <div class="customer_tag_list">
        <div class="search_but">
          <el-button type="primary" size="mini" @click="addTagDialog = true">新建标签</el-button>
        </div>
      </div>
      <div class="">
        <el-table
          :data="tableData"
          style="width: 100%">
          <el-table-column
            label="标签名"
            width="200">
            <template slot-scope="scope">
              <span>{{ scope.row.tag_name }}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="客户"
            width="220">
            <template slot-scope="scope">
              <span v-for="(item, index) in scope.row.tagCustomerList" :key="index" class="customer_name">
                {{item.customer_name}}
                <span @click="deleteTagCustomer(item.id)">✘</span>
              </span>
            </template>
          </el-table-column>
          <el-table-column
            label="操作"
            align="right">
            <template slot-scope="scope">
              <el-button size="mini" type="primary" @click="choiceAddTagIn(scope.row.id)">添加用户</el-button>
              <el-button size="mini" @click="deleteTag(scope.row.id)">删除标签</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <el-dialog
        title="添加标签"
        :visible.sync="addTagDialog"
        width="30%">
        <span>标签名称：</span>
        <el-input v-model="tagName" placeholder="请输入内容" size="mini" class="tagInput"></el-input>
        <span slot="footer" class="dialog-footer">
          <el-button @click="addTagDialog = false">取 消</el-button>
          <el-button type="primary" @click="addTagDialogFun">确 定</el-button>
        </span>
      </el-dialog>
      <el-dialog
        title="添加用户"
        :visible.sync="addTagInCustomer"
        width="30%">
        <span>用户列表：</span>
        <el-select v-model="addChoice" placeholder="请选择" size="mini">
          <el-option
            v-for="item in customerList"
            :key="item.customer_id"
            :label="item.customer_name"
            :value="item.customer_id">
          </el-option>
        </el-select>
        <span slot="footer" class="dialog-footer">
          <el-button @click="addTagInCustomer = false">取 消</el-button>
          <el-button type="primary" @click="addTagInCustomerFun">确 定</el-button>
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
      tableData: [],
      addTagDialog: false,
      tagName: '',
      addTagInCustomer: false,
      tagId: 0,
      customerList: [],
      addChoice: ''
    }
  },
  created() {
    this.getALlTag();
  },
  watch: {
    addTagInCustomer(next) {
      if(next === false) {
        this.addChoice = '';
      }
    },
    addTagDialog(next) {
      if(next === false) {
        this.tagName = '';
      }
    } 
  },
  methods: {
    choiceAddTagIn(tagId) {
      this.addTagInCustomer = true;
      this.tagId = tagId;
    },
    addTagInCustomerFun() {
      let customerName = '';
      this.customerList.forEach(element => {
        if(element.customer_id === this.addChoice) {
          customerName = element.customer_name;
        }
      });
      let data = {
        addChoiceCustomer: this.addChoice,
        tag_id: this.tagId,
        customerName
      }
      if(customerName === '') {
        this.$message.error('请选择');
        return;
      }
      this.$axios({
        method: "post",
        url: "/addTagCustomerMain",
        data
      }).then(res => {
        this.getALlTag();
        this.addTagInCustomer = false;
      }).catch(err => {
        console.log(err);
      })
    },
    getALlTag() {
      this.$axios({
        method: "post",
        url: "/getALlCustomerTag",
      }).then(res => {
        this.tableData = res.data.result;
      }).catch(err => {
        console.log(err);
      });
      this.$axios({
        method: "post",
        url: "/getCustomerList",
      }).then((res) => {
        this.customerList = res.data.result;
      }).catch((err) => {
        console.log(err);
      })
    },
    addTagDialogFun() {
      this.$axios({
        method: "post",
        url: "/addCustomerTag",
        data: {
          tagName: this.tagName
        }
      }).then(res => {
        this.getALlTag();
        this.addTagDialog = false;
      }).catch(err => {
        console.log(err);
      })
    },
    deleteTagCustomer(id) {
      this.$axios({
        method: "post",
        url: "/deleteTagCustomer",
        data: {
          id
        }
      }).then(res => {
        this.getALlTag();
      }).catch(err => {
        console.log(err);
      })
    },
    deleteTag(id) {
      this.$axios({
        method: "post",
        url: "/deleteCustomerTag",
        data: {
          id
        }
      }).then(res => {
        console.log(res);
        this.getALlTag();
      }).catch(err => {
        console.log(err);
      })
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

    .customer_name {
      padding: 0px 5px;
      position: relative;
      
      &>span {
        display: none;
        cursor: pointer;
      }
    }
    .customer_name:hover span{
      cursor: pointer;
      display: block;
      position: absolute;
      top: -9px;
      right: -1px;
    }
    
    .tagInput {
      width: 180px;
    }
  }

  
}
</style>
