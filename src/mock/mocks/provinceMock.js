//const ALL_PROVINCE = "/allProvince"; //获取全部省份的名称

//!!!!  请使用commonjs的语法导入导出(require/module.exports)
//!!!!  不要用es6语法导入导出(import/export)
const API = require("../../apis");

const ALL_PROVINCE_VO = {
    message: "ok",
    data: ["四川省","江苏省","北京市","广东省","浙江省"]
};

module.exports = {
    ALL_PROVINCE: [API.ALL_PROVINCE,"get",ALL_PROVINCE_VO],
};
