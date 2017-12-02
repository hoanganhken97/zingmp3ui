<?php

$mang = array(
  new CaSi(0, "Son Tung MTP", "https://zmp3-photo.zadn.vn/thumb/240_240/avatars/e/e/ee58fcc0ff45002b8d416bd7685809ce_1487040461.jpg"),
  new CaSi(1, "Sobin Hoang Son", "https://zmp3-photo.zadn.vn/thumb/240_240/avatars/7/f/7fdee502b70e45b4f5864df7f136ed26_1489566519.jpg"),
  new CaSi(2, "Bao Anh", "https://zmp3-photo.zadn.vn/thumb/240_240/avatars/6/8/68bcf97b41cd37e918cdf2dc0b85e895_1509438182.jpg"),
  new CaSi(3, "Huong Tram","https://zmp3-photo.zadn.vn/thumb/240_240/avatars/5/0/50e613e21b499290633d17cff0776e61_1489400757.jpg"),
  new CaSi(4, "Son Tung MTP", "https://zmp3-photo.zadn.vn/thumb/240_240/avatars/e/e/ee58fcc0ff45002b8d416bd7685809ce_1487040461.jpg"),
  new CaSi(5, "Sobin Hoang Son", "https://zmp3-photo.zadn.vn/thumb/240_240/avatars/7/f/7fdee502b70e45b4f5864df7f136ed26_1489566519.jpg"),
  new CaSi(6, "Bao Anh", "https://zmp3-photo.zadn.vn/thumb/240_240/avatars/6/8/68bcf97b41cd37e918cdf2dc0b85e895_1509438182.jpg"),
  new CaSi(7, "Huong Tram","https://zmp3-photo.zadn.vn/thumb/240_240/avatars/5/0/50e613e21b499290633d17cff0776e61_1489400757.jpg"),
  new CaSi(8, "Son Tung MTP", "https://zmp3-photo.zadn.vn/thumb/240_240/avatars/e/e/ee58fcc0ff45002b8d416bd7685809ce_1487040461.jpg"),
  new CaSi(9, "Sobin Hoang Son", "https://zmp3-photo.zadn.vn/thumb/240_240/avatars/7/f/7fdee502b70e45b4f5864df7f136ed26_1489566519.jpg"),
  new CaSi(10, "Bao Anh", "https://zmp3-photo.zadn.vn/thumb/240_240/avatars/6/8/68bcf97b41cd37e918cdf2dc0b85e895_1509438182.jpg"),
  new CaSi(11, "Huong Tram","https://zmp3-photo.zadn.vn/thumb/240_240/avatars/5/0/50e613e21b499290633d17cff0776e61_1489400757.jpg"),
  new CaSi(12, "Son Tung MTP", "https://zmp3-photo.zadn.vn/thumb/240_240/avatars/e/e/ee58fcc0ff45002b8d416bd7685809ce_1487040461.jpg"),
  new CaSi(13, "Sobin Hoang Son", "https://zmp3-photo.zadn.vn/thumb/240_240/avatars/7/f/7fdee502b70e45b4f5864df7f136ed26_1489566519.jpg"),
  new CaSi(14, "Bao Anh", "https://zmp3-photo.zadn.vn/thumb/240_240/avatars/6/8/68bcf97b41cd37e918cdf2dc0b85e895_1509438182.jpg"),
  new CaSi(15, "Huong Tram","https://zmp3-photo.zadn.vn/thumb/240_240/avatars/5/0/50e613e21b499290633d17cff0776e61_1489400757.jpg"),
);

$soItem1trang = 3;
$page = $_GET["trang"];
//$page =  0; 0,1,2
//$page =  1; 3,4,5
//$page =  2; 6,7,8
//$page =  3; 9,10,11
//$page =  7; 21
$from = $page * $soItem1trang;

$mangMoi = array();

for($i=$from; $i<=$from + 2; $i++){
  array_push($mangMoi, $mang[$i]);
}

echo json_encode($mangMoi);

class CaSi{
  public $Id;
  public $Ten;
  public $Hinh;
  function CaSi($i, $t, $h){
    $this->Id = $i;
    $this->Ten = $t;
    $this->Hinh = $h;
  }
}

?>
