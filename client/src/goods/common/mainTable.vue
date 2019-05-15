<template>
  <div class="main_table">
    <div class="push_goods">
      <el-button type="primary" @click="push_goods">发布商品</el-button>
    </div>
    <div class="search_goods">
      <ul>
        <li>
          <span>商品名称或编码：</span>
          <span>
            <el-input v-model="searchByNameOrId" size="mini"></el-input>
          </span>
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
                v-for="item in goodsGroupsList"
                :key="item.id"
                :label="item.group_name"
                :value="item.id"
              ></el-option>
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
                v-for="item in pushGoodsTypeList"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </span>
        </li>
      </ul>
      <div class="search_goods_but">
        <el-button type="primary" @click="getSelectGoods">筛选</el-button>
        <el-button @click="resetBut">清空筛选条件</el-button>
      </div>
    </div>
    <main-table-list :table-show-data="tableShowData" :active-name="activeName"/>
    
    <el-dialog title="商品发布" :visible.sync="pushGoodsDialog" width="30%" :before-close="handleClose">
      <table>
        <tr>
          <td>商品名称：</td>
          <td>
            <el-input v-model="pushGoodsName" placeholder="请输入内容" size="mini"></el-input>
          </td>
        </tr>
        <tr>
          <td>商品类型：</td>
          <td>
            <el-select v-model="pushGoodsType" placeholder="请选择" size="mini">
              <el-option
                v-for="item in pushGoodsTypeList"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </td>
        </tr>
        <tr>
          <td>商品分组：</td>
          <td>
            <el-select v-model="pushGoodsGroup" placeholder="请选择" size="mini">
              <el-option
                v-for="item in goodsGroupsList"
                :key="item.id"
                :label="item.group_name"
                :value="item.id"
              ></el-option>
            </el-select>
          </td>
        </tr>
        <tr>
          <td>商品价格：</td>
          <td>
            <el-input v-model="pushShopPrice" placeholder="请输入内容" size="mini"></el-input>
          </td>
        </tr>
        <tr>
          <td>商品数量：</td>
          <td>
            <el-input v-model="pushGoodsNum" placeholder="请输入内容" size="mini"></el-input>
          </td>
        </tr>
        <tr>
          <td>配送方式：</td>
          <td>
            <el-select v-model="pushGoodsDelivery" placeholder="请选择" size="mini">
              <el-option
                v-for="item in pushGoodsDeliveryList"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </td>
        </tr>
        <tr>
          <td>商品图片：</td>
          <td>
            <input type="file" ref="imgfile">
          </td>
        </tr>
      </table>
      <span slot="footer" class="dialog-footer">
        <el-button @click="pushGoodsDialog = false">取 消</el-button>
        <el-button type="primary" @click="addGoods">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import MainTableList from "./mainTableList";
export default {
  components: {
    "main-table-list": MainTableList
  },
  props: {
    activeName: String,
    goodsGroupsList: Array,
    tableShowData: Array,
    resetTalbeData: Function,
    selectTalbeData: Function
  },
  data() {
    return {
      searchByNameOrId: "",
      searchBySaleNumMax: "",
      searchBySaleNumMin: "",
      searchByGoodsGroups: "",
      searchByPriceMin: "",
      searchByPriceMax: "",
      searchByGoodsType: "",
      
      pushGoodsDialog: false,
      pushGoodsName: "",
      pushGoodsType: "",
      pushGoodsTypeList: [
        {
          value: "衣服",
          label: "衣服"
        },
        {
          value: "鞋子",
          label: "鞋子"
        },
        {
          value: "食品",
          label: "食品"
        },
        {
          value: "生活用品",
          label: "生活用品"
        },
        {
          value: "家电",
          label: "家电"
        },
        {
          value: "数码",
          label: "数码"
        }
      ],
      pushGoodsGroup: "",
      pushShopPrice: 0,
      pushGoodsNum: 0,
      pushGoodsDelivery: "",
      pushGoodsDeliveryList: [
        {
          value: "上门自提",
          label: "上门自提"
        },
        {
          value: "快递",
          label: "快递"
        }
      ]
    };
  },
  methods: {
    getSelectGoods() {
      let data = {};
      this.searchByNameOrId !== "" ? data.searchByNameOrId=this.searchByNameOrId : null;
      this.searchBySaleNumMax !== "" ? data.searchBySaleNumMax=this.searchBySaleNumMax : null;
      this.searchBySaleNumMin !== "" ? data.searchBySaleNumMin=this.searchBySaleNumMin : null;
      this.searchByGoodsGroups !== "" ? data.searchByGoodsGroups=this.searchByGoodsGroups : null;
      this.searchByPriceMin !== "" ? data.searchByPriceMin=this.searchByPriceMin : null;
      this.searchByPriceMax !== "" ? data.searchByPriceMax=this.searchByPriceMax : null;
      this.searchByGoodsType !== "" ? data.searchByGoodsType=this.searchByGoodsType : null;
      this.$axios({
        method: "post",
        url: "/selectSearchGoods",
        data,
      }).then((res) => {
        this.selectTalbeData(res.data.result, this.activeName);
      }).catch((err) => {
        console.log(err);
      })
    },
    resetBut() {
      this.searchByNameOrId="";
      this.searchBySaleNumMax="";
      this.searchBySaleNumMin="";
      this.searchByGoodsGroups="";
      this.searchByPriceMin="";
      this.searchByPriceMax="";
      this.searchByGoodsType="";
      this.resetTalbeData();
    },
    push_goods() {
      this.pushGoodsDialog = true;
    },
    handleClose() {
      this.pushGoodsDialog = false;
    },
    // 以下均为添加商品代码
    addGoods() {
      let reader = new FileReader();
      let _ = this;
      reader.readAsDataURL(this.$refs.imgfile.files[0]);
      reader.onloadend = function() {
        _.dealImage(reader.result, 300, _.reqAddGoods)
      };
    },
    reqAddGoods(imgBase64) {
      this.$axios({
        method: "post",
        url: "/addGoods",
        data: {
          pushGoodsName: this.pushGoodsName,
          pushGoodsType: this.pushGoodsType,
          pushGoodsGroup: this.pushGoodsGroup,
          pushShopPrice: this.pushShopPrice,
          pushGoodsNum: this.pushGoodsNum,
          pushGoodsDelivery: this.pushGoodsDelivery,
          imgURL: imgBase64
        }
      })
      .then(res => {
        this.$message.success('添加成功');
        this.resetTalbeData(res.data.result);
        this.pushGoodsDialog = false;
      })
      .catch(err => {
        console.log(err);
      });
    },
    dealImage(base64, w, callback) {
      var newImage = new Image();
      var quality = 0.6; //压缩系数0-1之间
      newImage.src = base64;
      newImage.setAttribute("crossOrigin", "Anonymous"); //url为外域时需要
      var imgWidth, imgHeight;
      newImage.onload = function() {
        imgWidth = this.width;
        imgHeight = this.height;
        var canvas = document.createElement("canvas");
        var ctx = canvas.getContext("2d");
        if (Math.max(imgWidth, imgHeight) > w) {
          if (imgWidth > imgHeight) {
            canvas.width = w;
            canvas.height = (w * imgHeight) / imgWidth;
          } else {
            canvas.height = w;
            canvas.width = (w * imgWidth) / imgHeight;
          }
        } else {
          canvas.width = imgWidth;
          canvas.height = imgHeight;
          quality = 0.6;
        }
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(this, 0, 0, canvas.width, canvas.height);
        var base64 = canvas.toDataURL("image/jpeg", quality); //压缩语句
        // 如想确保图片压缩到自己想要的尺寸,如要求在50-150kb之间，请加以下语句，quality初始值根据情况自定
        // while (base64.length / 1024 > 150) {
        // 	quality -= 0.01;
        // 	base64 = canvas.toDataURL("image/jpeg", quality);
        // }
        // 防止最后一次压缩低于最低尺寸，只要quality递减合理，无需考虑
        // while (base64.length / 1024 < 50) {
        // 	quality += 0.001;
        // 	base64 = canvas.toDataURL("image/jpeg", quality);
        // }
        callback(base64); //必须通过回调函数返回，否则无法及时拿到该值
      };
    }
  }
};
</script>

<style lang="scss">
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
      vertical-align: top;

      li {
        height: 30px;
        margin-bottom: 20px;
        width: 265px;
        & > span {
          display: inline-block;
        }
        & > span:nth-child(1) {
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

  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409eff;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 50px;
    height: 50px;
    line-height: 50px;
    text-align: center;
  }
  .avatar {
    width: 50px;
    height: 50px;
    display: block;
  }
}
</style>
