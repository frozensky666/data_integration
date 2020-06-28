const TEST_GET = "/api/test/get";
const TEST_POST = "/api/test/post";

const USER_PURCHASE_AMOUNT_DAILY = "/user/purchaseAmountDaily"; //用户按日购买金额排名
const USER_ORDER_AMOUNT_DAILY = "/user/orderAmountDaily"; //用户按日订单订单量排名
const PROVINCE_PURCHASE_AMOUNT = "/province/purchaseAmountDaily"; //省份订单总量排名
const PROVINCE_ORDER_AMOUNT = "/province/orderAmountDaily"; //省份总金额排名
const ITEMS_MOST_PURCHASED_PROVINCE = "/items/mostPurchased/province"; //每个省份购买最多的商品排名
const ITEMS_MOST_PURCHASED_MALE = "/items/mostPurchased/male"; //男性购买最多的商品排名
const ITEMS_MOST_PURCHASED_FEMALE = "/items/mostPurchased/female"; //女性购买最多的商品排名

const ITEMS_SALES_VOLUME_DAILY = "/items/salesVolumeDaily"; //商品日销量排名
const ITEMS_SALES_VOLUME = "/items/salesVolume"; //商品总销量排名
const ITEMS_PROFIT_DAILY = "/items/profitDaily"; //商品日利润排名
const ITEMS_PROFIT = "/items/profit"; //商品总利润排名

const CANTEEN_ORDER_AMOUNT_MONTHLY = "/canteen/orderAmountMonthly"; //餐厅按月订单量排名
const CANTEEN_ORDER_AMOUNT = "/canteen/orderAmount"; //餐厅总订单量排名
const CANTEEN_TURNOVER_MONTHLY = "/canteen/turnoverMonthly"; //餐厅按月营业额排名
const CANTEEN_TURNOVER = "/canteen/turnover"; //餐厅总营业额排名
const CANTEEN_ORDER_AMOUNT_MONTHLY_BY_PROVINCE = "/canteen/orderAmountMonthlyByProvince"; //每个省份内餐厅按月订单量排名
const CANTEEN_ORDER_AMOUNT_BY_PROVINCE = "/canteen/orderAmountByProvince"; //每个省份内餐厅总订单量排名

const ORDER_CHART = "/orderChart"; //订单柱状图

const ACCESS_UV = "/access/UV"; //商品UV（即每日只算一次）排名
const ACCESS_PV_DAILY = "/access/PVDaily"; //商品PV按日排名
const ACCESS_PV = "/access/PV"; //商品PV总排名
const ACCESS_CART_DAILY = "/access/cartDaily"; //商品收藏按日排名
const ACCESS_CART = "/access/cart"; //商品收藏总排名
const ACCESS_USER_DAILY = "/access/userDaily"; //日活跃用户排名
const ACCESS_USER = "/access/user"; //总活跃用户排名

const VIEW_CHART = "/viewChart"; //访问量折线图

const DISTRIBUTION_USER_PROVINCE = "/distribution/userProvince"; //用户省份分布
const DISTRIBUTION_CANTEEN_PROVINCE = "/distribution/canteenProvince"; //餐厅省份分布
const DISTRIBUTION_GENDER = "/distribution/gender"; //用户男女比例分布

const ALL_PROVINCE = "/allProvince"; //获取全部省份的名称

module.exports = {
  TEST_GET,
  TEST_POST,

  USER_PURCHASE_AMOUNT_DAILY,
  USER_ORDER_AMOUNT_DAILY,
  PROVINCE_PURCHASE_AMOUNT,
  PROVINCE_ORDER_AMOUNT,
  ITEMS_MOST_PURCHASED_PROVINCE,
  ITEMS_MOST_PURCHASED_MALE,
  ITEMS_MOST_PURCHASED_FEMALE,
  ITEMS_SALES_VOLUME_DAILY,
  ITEMS_SALES_VOLUME,
  ITEMS_PROFIT_DAILY,
  ITEMS_PROFIT,
  CANTEEN_ORDER_AMOUNT_MONTHLY,
  CANTEEN_ORDER_AMOUNT,
  CANTEEN_TURNOVER_MONTHLY,
  CANTEEN_TURNOVER,
  CANTEEN_ORDER_AMOUNT_MONTHLY_BY_PROVINCE,
  CANTEEN_ORDER_AMOUNT_BY_PROVINCE,
  ORDER_CHART,
  ACCESS_UV,
  ACCESS_PV_DAILY,
  ACCESS_PV,
  ACCESS_CART_DAILY,
  ACCESS_CART,
  ACCESS_USER_DAILY,
  ACCESS_USER,
  VIEW_CHART,
  DISTRIBUTION_USER_PROVINCE,
  DISTRIBUTION_CANTEEN_PROVINCE,
  DISTRIBUTION_GENDER,
  ALL_PROVINCE
};
