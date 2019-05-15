<template>
  <div class="data_summary">
    <div class="data_order_num">
      <div class="data_order_num_title">
        <span>商品整体概况</span>
      </div>
      <div class="goods_summary_main">
        <ul>
          <li>商品概况</li>
          <li>
            <div>在架商品数</div>
            <div>4</div>
          </li>
          <li>
            <div>被访问商品数</div>
            <div>0</div>
          </li>
        </ul>
        <ul>
          <li>商品流量</li>
          <li>
            <div>商品浏览量</div>
            <div>0</div>
          </li>
          <li>
            <div>商品曝光量</div>
            <div>0</div>
          </li>
          <li>
            <div>商品访客数</div>
            <div>0</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  props: {

  },
  data () {
    return {
    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.data_summary {
  margin: 10px;
  background: white;
  padding: 10px;
  box-sizing: border-box;

  .data_order_num {
    .data_order_num_title {
      font-size: 14px;
      padding: 10px;
      background: #f8f8f8;
      box-sizing: border-box;
      margin-bottom: 10px;
      span {
        padding-left: 5px;
        border-left: 4px solid #f70;
      }
    }

    .goods_summary_main {

      ul {
        list-style: none;
        padding: 20px 30px; 
        border-bottom: 1px solid #e5e5e5;

        li {
          display: inline-block;
          color: #333;
          font-size: 16px;
          font-weight: 700;
          overflow: hidden;
        }
        li:nth-child(1) {
          line-height: 42px;
          width: 190px;
        }
        li:nth-child(2),li:nth-child(3),li:nth-child(4) {
          width: 220px;

          div:nth-child(1) {
            font-size: 12px;
            font-weight: 300;
          }

          div:nth-child(2) {
            font-size: 20px;
            margin-top: 5px;
          }
        }
      }
    }
  }
}
</style>
