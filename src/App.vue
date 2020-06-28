<template>
  <div id="app">
    <div>
      <h2>用户</h2>
      <RankCard :date-picker="true" :url="API.USER_PURCHASE_AMOUNT_DAILY" title="用户按日购买金额排名"></RankCard>
      <RankCard :date-picker="true" :url="API.USER_ORDER_AMOUNT_DAILY" title="用户按日订单订单量排名"></RankCard>
      <RankCard :url="API.PROVINCE_PURCHASE_AMOUNT" title="省份订单总量排名"></RankCard>
      <RankCard :url="API.PROVINCE_ORDER_AMOUNT" title="省份总金额排名"></RankCard>
      <RankCard :address-picker="true" :url="API.ITEMS_MOST_PURCHASED_PROVINCE" title="每个省份购买最多的商品排名"></RankCard>
      <RankCard :url="API.ITEMS_MOST_PURCHASED_MALE" title="男性购买最多的商品排名"></RankCard>
      <RankCard :url="API.ITEMS_MOST_PURCHASED_FEMALE" title="女性购买最多的商品排名"></RankCard>
    </div>
    <div>
      <h2>商品</h2>
      <RankCard :date-picker="true" :url="API.ITEMS_SALES_VOLUME_DAILY" title="商品日销量排名"></RankCard>
      <RankCard :url="API.ITEMS_SALES_VOLUME" title="商品总销量排名"></RankCard>
      <RankCard :date-picker="true" :url="API.ITEMS_PROFIT_DAILY" title="商品日利润排名"></RankCard>
      <RankCard :url="API.ITEMS_PROFIT" title="商品总利润排名"></RankCard>
    </div>
    <div>
      <h2>餐厅</h2>
      <RankCard :date-picker="true" :url="API.CANTEEN_ORDER_AMOUNT_MONTHLY" title="餐厅按月订单量排名" date-type="month"></RankCard>
      <RankCard :url="API.CANTEEN_ORDER_AMOUNT" title="餐厅总订单量排名"></RankCard>
      <RankCard :date-picker="true" :url="API.CANTEEN_TURNOVER_MONTHLY" title="餐厅按月营业额排名" date-type="month"></RankCard>
      <RankCard :url="API.CANTEEN_TURNOVER" title="餐厅总营业额排名"></RankCard>
      <RankCard :address-picker="true" :date-picker="true" :url="API.CANTEEN_ORDER_AMOUNT_MONTHLY_BY_PROVINCE" title="每个省份内餐厅按月订单量排名"></RankCard>
      <RankCard :address-picker="true" :date-picker="true" :url="API.CANTEEN_ORDER_AMOUNT_BY_PROVINCE" title="每个省份内餐厅总订单量排名"></RankCard>
    </div>
    <div>
      <h2>订单</h2>
      <MixLineBar type1="总金额" type2="销量" :url="API.ORDER_CHART"></MixLineBar>
    </div>
    <div>
      <h2>访问量</h2>
      <h3>PV/UV</h3>
      <RankCard :date-picker="true" :url="API.ACCESS_UV" title="商品UV（即每日只算一次）排名"></RankCard>
      <RankCard :date-picker="true" :url="API.ACCESS_PV_DAILY" title="商品PV按日排名"></RankCard>
      <RankCard :url="API.ACCESS_PV" title="商品PV总排名"></RankCard>
      <h3>Cart</h3>
      <RankCard :date-picker="true" :url="API.ACCESS_CART_DAILY" title="商品收藏按日排名"></RankCard>
      <RankCard :address-picker="true" :date-picker="true" :url="API.ACCESS_CART" title="商品收藏总排名"></RankCard>
      <h3>User</h3>
      <RankCard :date-picker="true" :url="API.ACCESS_USER_DAILY" title="日活跃用户排名"></RankCard>
      <RankCard :address-picker="true" :date-picker="true" :url="API.ACCESS_USER" title="总活跃用户排名"></RankCard>
      <h3>View</h3>
      <StackedAreaChart :url="API.VIEW_CHART" type1="男" type2="女"></StackedAreaChart>
    </div>
    <h2>分布</h2>
    <div class="distribution">
        <Pie :url="API.DISTRIBUTION_USER_PROVINCE" width="360px" height="360px" title="用户省份分布"></Pie>
        <Pie :url="API.DISTRIBUTION_GENDER" width="360px" height="360px" title="用户男女比例"></Pie>
        <Pie :url="API.DISTRIBUTION_CANTEEN_PROVINCE" width="360px" height="360px" title="餐厅省份分布"></Pie>
    </div>
  </div>
</template>
<script>
  import RankCard from "@/components/RankCard";
  import Pie from "@/components/Pie";
  import MixLineBar from "@/components/MixLineBar";
  import StackedAreaChart from "@/components/StackedAreaChart";
  const API = require("@/apis");
  export default {
    name: "App",
    components: {
      RankCard,
      Pie,
      MixLineBar,
      StackedAreaChart
    },
    data() {
      return {
        v1:null,
        v2:null,
        API: API
      }
    }
  }
</script>
<style>
  body {
    padding: 10px;
  }
  .distribution {
    display: flex;
    justify-content: space-between;
  }
</style>
