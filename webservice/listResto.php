<?php
  header("Access-Control-Allow-Origin: *");
  $conn = new mysqli('localhost', 'root', '', 'badut_ojol');

  $method = "AES-128-CTR";
  $options = 0;
  $key = "BadutISACemas";
  $iv = "1234567812345678";

  $sql = "SELECT nama_resto, alamat FROM merchants";
  $stmt = $conn->prepare($sql);
  $stmt->execute();

  $data = array();

  if($stmt->errno == 0){
    $result = $stmt->get_result();
    while($resto = $result->fetch_assoc()){
      $resto['nama_resto'] = openssl_decrypt($resto['nama_resto'], $method, $key, $options, $iv);
      $resto['alamat'] = openssl_decrypt($resto['alamat'], $method, $key, $options, $iv);
      array_push($data, $resto);
    }
    echo json_encode(["status"=>"Success", "data"=>$data]);
  }
  else{
    echo json_encode(["status"=>"Fail", "message"=>"Terjadi kesalahan pada saat mengambil data"]);
  }

  $stmt->close();
  $conn->close();
?>