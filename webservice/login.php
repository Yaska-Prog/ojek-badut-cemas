<?php
  $conn = new mysqli('localhost', 'root', '', 'badut_ojol');

  $username = $_GET['username'];
  $password = $_GET['password'];

  $method = "AES-128-CTR";
  $options = 0;
  $key = "BadutISACemas";
  $iv = "1234567812345678";

  $username = openssl_encrypt($username, $method, $key, $options, $iv);
  $password = openssl_encrypt($password, $method, $key, $options, $iv);

  $sql = "SELECT * FROM customers WHERE username = ? AND password = SHA2(?, 256)";
  $stmt = $conn->prepare($sql);
  $stmt->bind_param('ss', $username, $password);
  $stmt->execute();

  $data = array();
  $role = "";

  $result = $stmt->get_result();
  if($result->num_rows == 0){
    $sql = "SELECT * FROM drivers WHERE username = ? AND password = SHA2(?, 256)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param('ss', $username, $password);
    $stmt->execute();

    $data = array();
    $role = "";

    $result = $stmt->get_result();
    if($result->num_rows == 0){
      $sql = "SELECT * FROM merchants WHERE username = ? AND password = SHA2(?, 256)";
      $stmt = $conn->prepare($sql);
      $stmt->bind_param('ss', $username, $password);
      $stmt->execute();

      $data = array();
      $role = "";

      $result = $stmt->get_result();
      if($result->num_rows == 0){
        return json_encode(["status"=>"Fail", "message"=>"Akun tidak ditemukan"]);
      }
      else{
        $role = "Merchant";

        $data = $result->fetch_assoc();
        $data['username'] = openssl_decrypt($data['username'], $method, $key, $options, $iv);
        $data['nama_lengkap'] = openssl_decrypt($data['nama_lengkap'], $method, $key, $options, $iv);
        $data['tanggal_lahir'] = openssl_decrypt($data['tanggal_lahir'], $method, $key, $options, $iv);
        $data['nama_resto'] = openssl_decrypt($data['nama_resto'], $method, $key, $options, $iv);
        $data['alamat'] = openssl_decrypt($data['alamat'], $method, $key, $options, $iv);
      }
    }
    else{
      $role = "Driver";

      $data = $result->fetch_assoc();
      $data['username'] = openssl_decrypt($data['username'], $method, $key, $options, $iv);
      $data['nama_lengkap'] = openssl_decrypt($data['nama_lengkap'], $method, $key, $options, $iv);
      $data['tanggal_lahir'] = openssl_decrypt($data['tanggal_lahir'], $method, $key, $options, $iv);
      $data['plat_nomor'] = openssl_decrypt($data['plat_nomor'], $method, $key, $options, $iv);
    }
  }
  else{
    $role = "Customer";

    $data = $result->fetch_assoc();
    $data['username'] = openssl_decrypt($data['username'], $method, $key, $options, $iv);
    $data['nama_lengkap'] = openssl_decrypt($data['nama_lengkap'], $method, $key, $options, $iv);
    $data['tanggal_lahir'] = openssl_decrypt($data['tanggal_lahir'], $method, $key, $options, $iv);
  }

  echo json_encode(["status"=>"Success", "role"=>$role, "data"=>$data]);
?>