//!!!!  请使用commonjs的语法导入导出(require/module.exports)
//!!!!  不要用es6语法导入导出(import/export)
const API = require("../../apis");

module.exports = {
  testGET: [
    API.TEST_GET,
    "get",
    {
      message: "ok",
      data: ["GET", 2, 3, 4, 5]
    }
  ],
  testPOST: [
    API.TEST_POST,
    "post",
    {
      message: "ok",
      data: ["POST", 2, 3, 4, 5]
    }
  ]
};
