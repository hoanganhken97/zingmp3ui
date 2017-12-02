<?php
  $json = file_get_contents("php://input");
  $obj = json_decode($json, TRUE);
  $un = $obj["USERNAME"];
  $pa = md5($obj["PASSWORD"]);

  require("jwt.php");
  require("dbCon.php");

  /*$un = "nguyen";
  $pa = md5("123");   // thực tế: Nhớ escapte tránh Injection
  */

  $qr = "SELECT * FROM Users
        WHERE Username = '$un'
        AND Password = '$pa'
        ";
  $users = mysqli_query($con, $qr);
  if(mysqli_num_rows($users) == 1){
    //login đúng
    $u = mysqli_fetch_array($users);
    $token = array();
    $token["id"] = $u["id"];
    $token["Username"] = $u["Username"];
    $token["HoTen"] = $u["HoTen"];
    $token["Email"] = $u["Email"];

    $jsonwebtoken = JWT::encode($token, "DAY_LA_MA_BI_MAT");
    echo JsonHelper::getJson("token", $jsonwebtoken);
  }else{
    //login sai
    echo '{"token":"ERROR"}';
  }
?>
