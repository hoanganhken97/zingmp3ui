<?php

$mang = array(
  new CaSi("Son Tung MTP", "https://zmp3-photo.zadn.vn/thumb/240_240/avatars/e/e/ee58fcc0ff45002b8d416bd7685809ce_1487040461.jpg"),
  new CaSi("Sobin Hoang Son", "https://zmp3-photo.zadn.vn/thumb/240_240/avatars/7/f/7fdee502b70e45b4f5864df7f136ed26_1489566519.jpg"),
  new CaSi("Bao Anh", "https://zmp3-photo.zadn.vn/thumb/240_240/avatars/6/8/68bcf97b41cd37e918cdf2dc0b85e895_1509438182.jpg"),
  new CaSi("Huong Tram","https://zmp3-photo.zadn.vn/thumb/240_240/avatars/5/0/50e613e21b499290633d17cff0776e61_1489400757.jpg")
);

echo json_encode($mang);

class CaSi{
  public $Ten;
  public $Hinh;
  function CaSi($t, $h){
    $this->Ten = $t;
    $this->Hinh = $h;
  }
}

?>
