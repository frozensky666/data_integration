//!!!!  请使用commonjs的语法导入导出(require/module.exports)
//!!!!  不要用es6语法导入导出(import/export)
const API = require("../../apis");

const ORDER_CHART_VO = {
    message: "ok",
    data: [
        ['2020/4/1',1000,2],
        ['2020/4/2',2000,4],
        ['2020/4/3',5000,2],
        ['2020/4/4',1200,2],
        ['2020/4/5',1200,9],
        ['2020/4/6',80,2],
        ['2020/4/7',5550,20],
        ['2020/4/8',1230,5],
        ['2020/4/9',8000,2],
        ['2020/4/10',10000,0],
        ['2020/4/11',3000,2]
    ]
};

module.exports = {
    ORDER_CHART: [API.ORDER_CHART,"get",ORDER_CHART_VO],
};
