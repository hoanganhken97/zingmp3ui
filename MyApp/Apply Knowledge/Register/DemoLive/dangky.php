<?php

  /*mysql_connect("localhost", "root", "");
  mysql_select_db("DemoLive");
  mysql_query("SET NAMES 'utf8'");

  $hoten = "Van Minh Nguyen";
  $username = "vanminhnguyen";
  $password = md5("123");

  $qr = "INSERT INTO NhanVien VALUES(
    null, '$hoten', '$username', '$password'
  )";

  mysql_query($qr);*/

  $json = file_get_contents("php://input");
  $obj = json_decode($json, TRUE);
  $hoten    = $obj["HOTEN"];
  $username = $obj["USERNAME"];
  $password = $obj["PASSWORD"];

  $con = mysqli_connect("localhost", "root", "", "DemoLive");
  mysqli_query($con, "SET NAMES 'utf8'");

  $hoten = "Văn Minh Nguyên";
  $username = "vanminhnguyen";
  $password = md5("123");

  $qr = "INSERT INTO NhanVien VALUES(null, '$hoten', '$username', '$password')";
  mysqli_query($con, $qr);

  $id = mysqli_insert_id($con);
?>

{
  "id" : "<?= $id ?>"
}
