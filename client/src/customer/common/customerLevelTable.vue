<template>
  <div class="customer_tag_table">
    <div class="customer_tag_table_main">
      <div class="customer_tag_list">
        功能暂未提供
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
