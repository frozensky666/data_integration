<template>
    <div class="card">
        <div class="card-head">
            <span>{{title}}</span>
            <div class="card-selectors">
                <span v-if="datePicker">
                    <el-date-picker
                            style="width: 140px"
                            v-model="v1"
                            size="mini"
                            :type="dateType"
                            placeholder="选择日期"
                            @change="getList"
                    >
                    </el-date-picker>
                </span>
                <span v-if="addressPicker">
                    <el-select v-model="v2" placeholder="请选择"
                               style="width: 100px"
                               size="mini"
                                @change="getList"
                    >
                        <el-option v-for="address in addressOptions" :key="address" :value="address">

                        </el-option>
                    </el-select>
                </span>
            </div>
        </div>
        <div class="card-body" v-if="list.length!==0">
            <div v-for="i in list" :key="i[1]">
                <div class="progress">
                    <div class="progress-bar">
                        <el-progress :show-text="false" :percentage="100*i[0]/maxNum"></el-progress>
                    </div>
                    <el-tooltip class="item" effect="dark" :content="i[0].toString()" placement="left">
                        <span class="progress-num">{{i[0]}}</span>
                    </el-tooltip>
                    <el-tooltip class="item" effect="dark" :content="i[1]" placement="right">
                        <span class="progress-text">{{i[1]}}</span>
                    </el-tooltip>
                </div>
            </div>
        </div>
        <div class="card-message" v-else>
            {{msg}}
        </div>
    </div>
</template>

<script>
    import {
        ALL_PROVINCE,
    } from "@/network/all";
    import request from "@/network/request";
    import {deepCopy} from "@/utils";

    export default {
        name: "RankCard",
        props: {
          datePicker: {
              type: Boolean,
              default() {
                  return false;
              }
          },
            addressPicker: {
              type: Boolean,
                default() {
                    return false;
                }
            },
            url: {
              required: true,
                type: String
            },
            config: {
              type: Object,
              default(){
                  return {
                      num: 5
                  }
              }
            },
            title: {
                required: true,
                type: String
            },
            dateType: {
                type: String,
                default() {
                  return "date";
                }
            }
        },
        data() {
            return {
                v1: '2020-03-31T16:00:00.000Z', //其实是北京时间4月1日0点
                v2: null,
                addressOptions: [],
                list: [],
                maxNum: -1,
                msg: "请稍后"
            }
        },
        methods: {
            isEmpty(item) {
                return !item || item==="" || item.length===0;
            },
            getMax(list) {
                let m = -1;
                for(let i of list) {
                    if(i[0]>m) m = i[0]
                }
                return m;
            },
            getList() {
                this.msg = "请稍后";
                this.list = [];
                let params = deepCopy(this.config);
                if(this.addressPicker) {
                    if(this.isEmpty(this.v2))return;
                    Object.defineProperty(params,"province",{
                        value: this.v2,
                        enumerable: true,
                    });
                }
                if(this.datePicker) {
                    if(this.isEmpty(this.v1))return;
                    if(this.dateType === "date") {
                        let d = new Date(this.v1);
                        Object.defineProperty(params,"dateStr",{
                            value: `${d.getFullYear()}/${d.getMonth()+1}/${d.getDate()}`,
                            enumerable: true,
                        });
                    } else if(this.dateType === "month") {
                        let d = new Date(this.v1);
                        Object.defineProperty(params,"year",{
                            value: d.getFullYear(),
                            enumerable: true,
                        });
                        Object.defineProperty(params,"month",{
                            value: d.getMonth()+1,
                            enumerable: true,
                        });
                    }
                }
                request._get(this.url,{params}).then(resp => {
                    this.list = resp.data;
                    this.maxNum = this.getMax(this.list);
                    this.list.sort((a,b)=>b[0]-a[0]);
                    if(this.list.length===0)this.msg = "空数据"
                });
            },
            async init() {
                if(this.addressPicker) {
                    await ALL_PROVINCE({}).then(resp => {
                        this.addressOptions = resp.data;
                        this.v2 = resp.data[0];
                    }).catch(err => console.error(err));
                }
                this.getList();
            }
        },
        mounted() {
            this.init();
        }
    }
</script>

<style scoped>
    .card {
        width: 268px;
        border: 1px solid #cccccc;
        padding: 10px;
        border-radius: 10px;
        display: inline-block;
        margin: 10px;
    }
    .card-head>span {
        display: block;
        color: #757175;
        padding-left: 10px;
        margin-bottom: 10px;
        font-size: 14px;
    }
    .card-selectors {
        height: 25px;
        margin-left: 10px;
        display: flex;
        justify-content: space-between;
    }
    .card-body .progress {
        margin: 15px;
        font-size: 10px;
    }
    .progress .progress-bar {
        width: 110px;
        display: inline-block;
        margin-right: 10px;
    }
    .progress .progress-num {
        display: inline-block;
        width: 40px;
        padding-left: 10px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .progress .progress-text {
        display: inline-block;
        width: 50px;
        padding-left: 10px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .card-message {
        color: #757175;
        margin-top: 20px;
    }
</style>