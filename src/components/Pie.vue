<template>
    <div :style="{ width: width, height: height }"></div>
</template>

<script>
    import request from "@/network/request";

    export default {
        name: "StackedAreaChart",
        data() {
            return {
                myChart: null,
                dataSource: null
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
                required:true
            },
            config: {
                type: Object,
                default() {
                    return {}
                }
            },
            title: {
                type: String,
                default() {
                    return "妙啊"
                }
            }
        },
        mounted() {
            this.myChart = this.$echarts.init(this.$el);
            request._get(this.url,this.config).then(resp => {
                this.dataSource = resp.data;
                let option = {
                    title: [{
                        text: this.title
                    }],
                    series: [{
                        name: '姓名',
                        type: 'pie',
                        radius: '55%',
                        center: ['50%', '50%'],
                        data: this.dataSource,
                        emphasis: {
                            itemStyle: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }],
                    tooltip: {
                        formatter: "name : {b}<br>value : {c}<br>rate : {d}%"
                    }
                };
                this.myChart.setOption(option);
            });

        }
    };
</script>

<style scoped></style>
