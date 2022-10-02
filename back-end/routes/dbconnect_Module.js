var express = require("express");
var router = express.Router();
const mysql = require("mysql");
const bodyParser = require("body-parser");

router.use(bodyParser.json());

// Connection Pool 세팅
const pool = mysql.createPool({
  connectionLimit: 66,
  waitForConnections: true,
  //mysql 서버 접속 정보
  host: "react200.chlq28a07dcl.ap-northeast-1.rds.amazonaws.com",
  port: "3306",
  database: "react",
  user: "admin",
  password: "ho08270827!",
});

router.post("/", (req, res) => {
  const mybatisMapper = require("mybatis-mapper");
  var param = req.body;

  console.log("param", param);

  //mybatis mapper경로 설정
  console.log("param.mapper" + param.mapper);
  mybatisMapper.createMapper(["./models/" + param.mapper + ".xml"]);
  var time = new Date();
  console.log("## " + time + " ##");
  console.log("\n Called Mapper Name  = " + param.mapper);

  var format = { language: "sql", indent: "  " };
  //mysql 쿼리 정보 세팅, F12
  var query = mybatisMapper.getStatement(
    param.mapper,
    param.mapper_id,
    param,
    format
  );
  console.log("\n========= Node Mybatis Query Log Start =========");
  console.log(
    "* mapper namespce : " + param.mapper + "." + param.mapper_id + " *\n"
  );
  console.log(query + "\n");

  pool.getConnection(function (err, connection) {
    connection.query(query, function (error, results) {
      if (error) {
        console.log("db error************* : " + error);
      }
      var time2 = new Date();
      console.log("## " + time2 + " ##");
      console.log("## RESULT DATA LIST ## : \n", results);
      if (results != undefined) {
        string = JSON.stringify(results);
        var json = JSON.parse(string);
        if (req.body.crud == "select") {
          // 조회할 때는 DB에서 조회한 데이터를 json형태로 담아서 react페이지로 보낸다.
          res.send({ json });
        } else {
          //등록insert 수정update 삭제 delete인 경우에 해당하는데, 쿼리 실행이 성공했을 경우 succ라는 문자열을 전송한다
          res.send("succ");
        }
      } else {
        res.send("error");
      }

      connection.release();
      console.log("========= Node Mybatis Query Log End =========\n");
    });
  });
});

module.exports = router;
