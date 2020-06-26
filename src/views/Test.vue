<template>
    <div>
            <el-table
                    @expand-change="getDataSource"
                    v-loading="loading"
                    :data="tableData"
                    style="width: 100%">
                <el-table-column type="expand">
                    <template slot-scope="props">
                        <MixLineBar
                                :data-source="props.row.dataSource" :type1="type1" :type2="type2"
                                v-if="props.row.isShow"
                        ></MixLineBar>
                    </template>
                </el-table-column>
                <el-table-column
                        label="用户 ID"
                        prop="id">
                </el-table-column>
            </el-table>
    </div>
</template>

<script>
    import MixLineBar from "@/components/MixLineBar";
    import {testPost} from "@/network/test";

    export default {
        name: "Test",
        components: {
            MixLineBar
        },
        data() {
            return {
                ip: "",
                dataSource: [],
                type1: "消费金额",
                type2: "消费次数",
                loading: false,
                tableData: [
                    {
                        id:0,
                        dataSource: [],
                        isShow: false
                    },
                    {
                        id:1,
                        dataSource: [],
                        isShow: false
                    },
                    {
                        id:2,
                        dataSource: [],
                        isShow: false
                    },
                ]
            }
        },
        methods: {
            getDataSource(row) {
                if(!row.isShow) {
                    if(!row.dataSource || row.dataSource.length===0){
                        this.loading = true;
                        setTimeout(()=>{
                            row.dataSource = [
                                [new Date('2020/4/1'),1000,2],
                                [new Date('2020/4/2'),2000,4],
                                [new Date('2020/4/3'),5000,2],
                                [new Date('2020/4/4'),1200,2],
                                [new Date('2020/4/6'),80,2],
                                [new Date('2020/4/7'),5550,20],
                                [new Date('2020/4/8'),1230,5],
                                [new Date('2020/4/9'),8000,2],
                                [new Date('2020/4/10'),10000,0],
                                [new Date('2020/4/11'),3000,2]
                            ];
                            row.isShow = true;
                            this.loading = false;
                        },0);
                    } else {
                        row.isShow = true
                    }
                } else {
                    row.isShow = false
                }
            }
        },
        mounted() {
            testPost({aaa:'hahaha'}).then(resp => {
                console.log(resp);
            })
        }

    }
</script>

<style scoped>

</style>