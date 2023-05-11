<?php
  header("Access-Control-Allow-Origin: *");
  $conn = new mysqli('localhost', 'root', '', 'badut_ojol');

  $id = $_POST['id'];
  $nominal = $_POST['nominal'];
  $password = $_POST['password'];

  $method = "AES-128-CTR";
  $options = 0;
  $key = "BadutISACemas";
  $iv = "1234567812345678";

  $password = openssl_encrypt($password, $method, $key, $options, $iv);

  $sql = "SELECT saldo FROM customers WHERE id = ? AND password = SHA2(?, 256)";
  $stmt = $conn->prepare($sql);
  $stmt->bind_param("is", $id, $password);
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
      echo json_encode(["status"=>"Wrong Password", "message"=>"Password yang diinputkan salah"]);
    }
  }
  else{
    echo json_encode(["status"=>"Fail", "message"=>"Terjadi kesalahan pada saat mengambil data"]);
  }

  $stmt->close();
  $conn->close();
?>