<template>
  <div :style="{ width: width, height: height }"></div>
</template>

<script>
import request from "@/network/request";

export default {
  name: "MixLineBar",
  data() {
    return {
      myChart: null
    };
  },
  props: {
    width: {
      type: String,
      default: () => "600px"
    },
    height: {
      type: String,
      default: () => "400px"
    },
    url: {
      type: String,
      required: true
    },
    config: {
      type: Object,
      default() {
        return {}
      }
    },
    type1: {
      type: String,
      required: true
    },
    type2: {
      type: String,
      required: true
    }
  },
  mounted() {
    this.myChart = this.$echarts.init(this.$el);
    request._get(this.url,this.config).then(resp => {
      console.log(resp);
      let dataSource = resp.data;
      let option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            crossStyle: {
              color: "#999"
            }
          }
        },
        toolbox: {
          feature: {
            magicType: { show: true, type: ["line", "bar"] },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        legend: {
          data: [this.type1, this.type2]
        },
        dataZoom: [
          {
            id: "dataZoomX",
            type: "slider",
            xAxisIndex: [0],
            filterMode: "filter"
          }
        ],
        dataset: {
          source: [["date", this.type1, this.type2], ...dataSource]
        },
        xAxis: [
          {
            type: "time",
            axisPointer: {
              type: "shadow"
            },
          }
        ],
        yAxis: [
          {
            type: "value",
            name: this.type1,
            min: 0,
            axisLabel: {
              formatter: "￥{value}"
            }
          },
          {
            type: "value",
            name: this.type2,
            min: 0,
            axisLabel: {
              formatter: "{value}"
            }
          }
        ],
        series: [
          {
            name: this.type1,
            type: "bar",
            yAxisIndex: 0,
            encode: {
              // 将 "amount" 列映射到 X 轴。
              x: 'date',
              // 将 "product" 列映射到 Y 轴。
              y: this.type1
            }
          },
          {
            name: this.type2,
            type: "line",
            yAxisIndex: 1,
            encode: {
              // 将 "amount" 列映射到 X 轴。
              x: 'date',
              // 将 "product" 列映射到 Y 轴。
              y: this.type2
            }
          }
        ]
      };
      this.myChart.setOption(option);
    });
  }
};
</script>

<style scoped></style>
