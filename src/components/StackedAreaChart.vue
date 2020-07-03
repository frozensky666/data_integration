<template>
    <div :style="{ width: width, height: height }"></div>
</template>

<script>
    import request from "@/network/request";

    export default {
        name: "StackedAreaChart",
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
                // console.log(resp);
                let dataSource = resp.data;
                let option = {
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross',
                            label: {
                                backgroundColor: '#6a7985'
                            }
                        }
                    },
                    toolbox: {
                        feature: {
                            saveAsImage: {}
                        }
                    },
                    legend: {
                        data: [this.type1, this.type2]
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
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
                            min: 0,
                            axisLabel: {
                                formatter: "{value}"
                            }
                        },
                    ],
                    series: [
                        {
                            name: this.type1,
                            type: "line",
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
