<?php
  header("Access-Control-Allow-Origin: *");
  $conn = new mysqli('localhost', 'root', '', 'badut_ojol');

  $id = $_POST['id'];
  $nominal = $_POST['nominal'];

  $sql = "SELECT saldo FROM customers WHERE id = ?";
  $stmt = $conn->prepare($sql);
  $stmt->bind_param("i", $id);
  $stmt->execute();

  if($stmt->errno == 0){
    $result = $stmt->get_result();
    if($result->num_rows > 0){
      $saldo = $result->fetch_assoc()['saldo'];
      $saldo = $saldo - 1 + 1 + $nominal;

      $sql = "UPDATE customers SET saldo = ? WHERE id = ?";
      $stmt = $conn->prepare($sql);
      $stmt->bind_param("ii", $saldo, $id);
      $stmt->execute();

      if($stmt->errno == 0){
        echo json_encode(["status"=>"Success", "saldo"=>$saldo]);
      }
      else{
        echo json_encode(["status"=>"Fail", "message"=>"Terjadi kesalahan pada saat mengubah data"]);
      }
    }
    else{
      echo json_encode(["status"=>"Fail", "message"=>"Data customer tidak ditemukan"]);
    }
  }
  else{
    echo json_encode(["status"=>"Fail", "message"=>"Terjadi kesalahan pada saat mengambil data"]);
  }

  $stmt->close();
  $conn->close();
?>