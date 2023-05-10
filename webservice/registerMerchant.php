<?php
  $conn = new mysqli('localhost', 'root', '', 'badut_ojol');

  $username = $_POST['username'];
  $password = $_POST['password'];
  $nama_lengkap = $_POST['nama_lengkap'];
  $tanggal_lahir = $_POST['tanggal_lahir'];
  $nama_resto = $_POST['nama_resto'];
  $alamat = $_POST['alamat'];

  $method = "AES-128-CTR";
  $options = 0;
  $key = "BadutISACemas";
  $iv = "1234567812345678";

  $username = openssl_encrypt($username, $method, $key, $options, $iv);
  $password = openssl_encrypt($password, $method, $key, $options, $iv);
  $nama_lengkap = openssl_encrypt($nama_lengkap, $method, $key, $options, $iv);
  $tanggal_lahir = openssl_encrypt($tanggal_lahir, $method, $key, $options, $iv);
  $nama_resto = openssl_encrypt($nama_resto, $method, $key, $options, $iv);
  $alamat = openssl_encrypt($alamat, $method, $key, $options, $iv);

  $sql = "SELECT username FROM customers WHERE username = ?";
  $stmt = $conn->prepare($sql);
  $stmt->bind_param('s', $username);
  $stmt->execute();

  $result = $stmt->get_result();
  if($result->num_rows == 0){
    $sql = "SELECT username FROM drivers WHERE username = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param('s', $username);
    $stmt->execute();

    $result = $stmt->get_result();
    if($result->num_rows == 0){
      $sql = "SELECT username FROM merchants WHERE username = ?";
      $stmt = $conn->prepare($sql);
      $stmt->bind_param('s', $username);
      $stmt->execute();

      $result = $stmt->get_result();
      if($result->num_rows == 0){
        $sql = "INSERT INTO merchants (username, password, nama_lengkap, tanggal_lahir, nama_resto, alamat) VALUES (?, SHA2(?, 256), ?, ?, ?, ?)";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("ssssss", $username, $password, $nama_lengkap, $tanggal_lahir, $nama_resto, $alamat);

        $stmt->execute();

        if($stmt->errno != 0){
          return json_encode(["status"=>"Fail", "message"=>"Username sudah digunakan"]);
        }
        return json_encode(["status"=>"Success"]);
      }
      else{
        return json_encode(["status"=>"Fail", "message"=>"Username sudah digunakan"]);
      }
    }
    else{
      return json_encode(["status"=>"Fail", "message"=>"Username sudah digunakan"]);
    }
  }
  else{
    return json_encode(["status"=>"Fail", "message"=>"Username sudah digunakan"]);
  }
?>