<?php
  $token = $_GET["token"];
  require("jwt.php");

  $json = JWT::decode($token, "DAY_LA_MA_BI_MAT", true);
  echo json_encode($json);
?>
