<template>
  <div class="canves_chart">
    <canvas :width="can_width" :height="can_height" ref="isCan"></canvas>
  </div>
</template>

<script>
/**
 * 此处使用canves实现折线图功能
 * data数据格式为
 * [
 *  {can_width:画布宽度，can_height:画布高度},
 *  [0, 10, 20, 30, 40], ————y轴坐标值
 *  [[2017, 120], [2018, 50], [2029, 100]],  ————[[纵坐标， 纵坐标值]]
 * ]
 */
export default {
  components: {

  },
  props: {
    can_width: Number,
    can_height: Number,
    y_num: Array,
    x_xnum: Array
  },
  mounted() {
    this.displayChart();
    this.displayPoint();
  },
  watch: {
    can_width() {
      this.displayChart();
      this.displayPoint();
    },
    can_height() {
      this.displayChart();
      this.displayPoint();
    },
    y_num() {
      this.displayChart();
      this.displayPoint();
    },
    x_xnum() {
      this.displayChart();
      this.displayPoint();
    }
  },
  data () {
    return {
      
    }
  },
  methods: {
    // 绘制折线图横纵坐标
    displayChart() {
      let c = this.$refs.isCan;
      let ctx = c.getContext('2d');
      c.height=c.height; 
      ctx.strokeStyle = "#566a80";

      // 绘制横纵坐标
      ctx.moveTo(30,0);
      ctx.lineTo(30, this.can_height-30);
      ctx.stroke();
      ctx.moveTo(30, this.can_height-30);
      ctx.lineTo(this.can_width, this.can_height-30);
      ctx.stroke();

      // 绘制横纵坐标点
      const x_length = this.x_xnum.length;
      const y_length = this.y_num.length;

      const x_space = parseInt((this.can_width-30)/(x_length + 1));
      for (let i=1;i<=x_length;i++) {
        ctx.beginPath();
        ctx.fillStyle='#566a80';
        ctx.arc(30+x_space*i,this.can_height-30,3,0,2*Math.PI);
        ctx.fill();
        ctx.font="12px Arial";
        ctx.fillText(this.x_xnum[i-1][0],20+x_space*i,this.can_height-10);
        ctx.closePath();

        ctx.beginPath();
        ctx.strokeStyle = "#E0E0E0";
        ctx.moveTo(30+x_space*i,0);
        ctx.lineTo(30+x_space*i, this.can_height-30);
        ctx.stroke();
        ctx.closePath();
      }
      const y_space = parseInt((this.can_height-30)/(y_length - 1));
      for (let i=0;i<y_length;i++) {
        ctx.beginPath();
        ctx.fillStyle='#566a80';
        ctx.arc(30,this.can_height-30-y_space*i,3,0,2*Math.PI);
        ctx.fill();
        ctx.font="12px Arial";
        ctx.fillText(this.y_num[i],10,this.can_height-20-y_space*i);
        ctx.closePath();

        if(i === 0) continue;
        ctx.beginPath();
        ctx.strokeStyle = "#E0E0E0";
        ctx.moveTo(30,this.can_height-30-y_space*i);
        ctx.lineTo(this.can_width, this.can_height-30-y_space*i);
        ctx.stroke();
        ctx.closePath();
      }
    },

    // 绘制图中标点并连线
    displayPoint() {
      let c = this.$refs.isCan;
      let ctx = c.getContext('2d');
      const x_length = this.x_xnum.length;
      const y_length = this.y_num.length;
      const x_space = parseInt((this.can_width-30)/(x_length + 1));
      for (let i=0;i<x_length;i++) {
        const y_index = parseInt((this.can_height-30)*(1-(this.x_xnum[i][1]/(this.y_num[y_length-1]-this.y_num[0]))));
        ctx.beginPath();
        ctx.fillStyle='rgb(255, 120, 52)';
        ctx.arc(30+x_space*(i+1),y_index,3,0,2*Math.PI);
        ctx.fill();
        ctx.font="12px Arial";
        ctx.fillText(this.x_xnum[i][1],35+x_space*(i+1),y_index+10);
        ctx.closePath();

        if(i===0) continue;
        ctx.beginPath();
        ctx.strokeStyle = "rgb(255, 120, 52)";
        ctx.moveTo(30+x_space*i,parseInt((this.can_height-30)*(1-(this.x_xnum[i-1][1]/(this.y_num[y_length-1]-this.y_num[0])))));
        ctx.lineTo(30+x_space*(i+1), parseInt((this.can_height-30)*(1-(this.x_xnum[i][1]/(this.y_num[y_length-1]-this.y_num[0])))));
        ctx.stroke();
        ctx.closePath();
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.canves_chart {
  display: inline-block;
  canvas {
    background: white;
  }
}
</style>
