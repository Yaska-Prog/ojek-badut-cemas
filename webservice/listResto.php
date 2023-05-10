<?php
  header("Access-Control-Allow-Origin: *");
  $conn = new mysqli('localhost', 'root', '', 'badut_ojol');

  $sql = "SELECT nama_resto, alamat FROM merchants";
  $stmt = $conn->prepare($sql);
  $stmt->execute();

  $data = array();

  if($stmt->errno == 0){
    $result = $stmt->get_result();
    while($resto = $result->fetch_assoc()){
      array_push($data, $resto);
    }
    echo json_encode(["status"=>"Success", "data"=>$data]);
  }
  else{
    echo json_encode(["status"=>"Fail", "message"=>"Terjadi kesalahan pada saat mengambil data"]);
  }
?>