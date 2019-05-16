<template>
  <div class="orderId">
    <h3>下单成功</h3>
    <h4>订单编号：{{orderId}}</h4>
    <h5>请妥善保管订单号</h5>
  </div>
</template>

<script>
export default {
  data () {
    return {
      orderId: 0,
    }
  },
  mounted () {
    if(this.$route.params.id) {
      this.orderId = this.$route.params.id;
    } else {
      this.$router.push({ name: 'goodsShow', params: { userId: '123' }})
    }
  },
  methods: {
   
  }
}
</script>

<style lang="scss">
body {
  background-color: #f8f8f8;
  margin-top: 100px;
}
.orderId {
  text-align: center;
}
h4 {
  margin-top: 10px;
}

</style>
