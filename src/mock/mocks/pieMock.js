//!!!!  请使用commonjs的语法导入导出(require/module.exports)
//!!!!  不要用es6语法导入导出(import/export)
const API = require("../../apis");

const PIE_VO = {
    message: "ok",
    data: [
        {
            name: "aaa",
            value: 456
        },
        {
            name: "bbb",
            value: 567
        },
        {
            name: "ccc",
            value: 678
        },
        {
            name: "ddd",
            value: 234
        }
    ]
};

module.exports = {
    DISTRIBUTION_USER_PROVINCE: [API.DISTRIBUTION_USER_PROVINCE,"get",PIE_VO],
    DISTRIBUTION_CANTEEN_PROVINCE: [API.DISTRIBUTION_CANTEEN_PROVINCE,"get",PIE_VO],
    DISTRIBUTION_GENDER: [API.DISTRIBUTION_GENDER,"get",PIE_VO]
};
