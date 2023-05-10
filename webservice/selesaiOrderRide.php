<?php
  $conn = new mysqli('localhost', 'root', '', 'badut_ojol');

  $id = $_POST['id'];

  $method = "AES-128-CTR";
  $options = 0;
  $key = "BadutISACemas";
  $iv = "1234567812345678";

  $sql = "UPDATE order_rides SET status = ? WHERE id = ?";
  $stmt = $conn->prepare($sql);
  $stmt->bind_param("si", "Selesai", $id);
  $stmt->execute();

  if($stmt->errno == 0){
    echo json_encode(["status"=>"Success"]);
  }
  else{
    echo json_encode(["status"=>"Fail", "message"=>"Terjadi kesalahan pada saat mengubah data"]);
  }
?>