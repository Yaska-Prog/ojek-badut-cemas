<?php
  $conn = new mysqli('localhost', 'root', '', 'badut_ojol');

  $username = $_POST['username'];
  $password = $_POST['password'];
  $nama_lengkap = $_POST['nama_lengkap'];
  $tanggal_lahir = $_POST['tanggal_lahir'];
  $plat_nomor = $_POST['plat_nomor'];
  $merk_kendaraan = $_POST['merk_kendaraan'];
  $warna_kendaraan = $_POST['warna_kendaraan'];

  $method = "AES-128-CTR";
  $options = 0;
  $key = "BadutISACemas";
  $iv = "1234567812345678";

  $username = openssl_encrypt($username, $method, $key, $options, $iv);
  $password = openssl_encrypt($password, $method, $key, $options, $iv);
  $nama_lengkap = openssl_encrypt($nama_lengkap, $method, $key, $options, $iv);
  $tanggal_lahir = openssl_encrypt($tanggal_lahir, $method, $key, $options, $iv);
  $plat_nomor = openssl_encrypt($plat_nomor, $method, $key, $options, $iv);

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
        $sql = "INSERT INTO drivers (username, password, nama_lengkap, tanggal_lahir, plat_nomor, merk_kendaraan, warna_kendaraan) VALUES (?, SHA2(?, 256), ?, ?, ?, ?, ?)";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("sssssss", $username, $password, $nama_lengkap, $tanggal_lahir, $plat_nomor, $merk_kendaraan, $warna_kendaraan);

        $stmt->execute();

        if($stmt->errno != 0){
          echo json_encode(["status"=>"Fail", "message"=>"Username sudah digunakan"]);
        }
        echo json_encode(["status"=>"Success"]);
      }
      else{
        echo json_encode(["status"=>"Fail", "message"=>"Username sudah digunakan"]);
      }
    }
    else{
      echo json_encode(["status"=>"Fail", "message"=>"Username sudah digunakan"]);
    }
  }
  else{
    echo json_encode(["status"=>"Fail", "message"=>"Username sudah digunakan"]);
  }
?>