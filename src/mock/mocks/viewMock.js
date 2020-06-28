//!!!!  请使用commonjs的语法导入导出(require/module.exports)
//!!!!  不要用es6语法导入导出(import/export)
const API = require("../../apis");

const VIEW_CHART_VO = {
    message: "ok",
    data: [
        ['2020/4/1',50,26],
        ['2020/4/2',45,54],
        ['2020/4/3',33,77],
        ['2020/4/4',48,60],
        ['2020/4/5',40,80],
        ['2020/4/6',96,30],
        ['2020/4/7',23,62],
        ['2020/4/8',45,54],
        ['2020/4/9',33,77],
        ['2020/4/10',48,60],
        ['2020/4/11',96,30],
        ['2020/4/12',23,62],
        ['2020/4/13',45,54],
        ['2020/4/14',40,66],
        ['2020/4/15',33,77],
        ['2020/4/16',48,60],
        ['2020/4/17',96,30],
        ['2020/4/18',23,62],
    ]
};

module.exports = {
    VIEW_CHART: [API.VIEW_CHART,"get",VIEW_CHART_VO],
};
