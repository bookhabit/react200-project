var express = require("express");

var router = express.Router();
const bodyParser = require("body-parser"); // body에 있는 파라미터 추출해서 사용
router.use(bodyParser.urlencoded({ extended: true }));

router.post("/", (req, res, next) => {
  var type = req.query.type;
  if (type == "list") {
    //Swtool 리스트 조회
    try {
      //Mysql Api 모듈(crud)
      var dbconnect_Module = require("./dbconnect_Module");

      // Mysql 쿼리 호출 정보 입력
      req.body.mapper = "SwToolsMapper"; //mybatis xml 파일명
      req.body.crud = "select"; // select, insert, update, delete 중에입력
      req.body.mapper_id = "selectSwToolsList";

      router.use("/", dbconnect_Module);
      next("route");
    } catch (error) {
      console.log("Module > dbconnect error :" + error);
    }
  }
});

module.exports = router;
