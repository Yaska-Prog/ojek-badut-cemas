<?php
  header("Access-Control-Allow-Origin: *");
  $conn = new mysqli('localhost', 'root', '', 'badut_ojol');

  $id = $_POST['id'];
  $password = $_POST['password'];
  $nama_lengkap = $_POST['nama_lengkap'];
  $tanggal_lahir = $_POST['tanggal_lahir'];
  $nama_resto = $_POST['nama_resto'];
  $alamat = $_POST['alamat'];

  $method = "AES-128-CTR";
  $options = 0;
  $key = "BadutISACemas";
  $iv = "1234567812345678";

  $password = openssl_encrypt($password, $method, $key, $options, $iv);
  $nama_lengkap = openssl_encrypt($nama_lengkap, $method, $key, $options, $iv);
  $tanggal_lahir = openssl_encrypt($tanggal_lahir, $method, $key, $options, $iv);
  $nama_resto = openssl_encrypt($nama_resto, $method, $key, $options, $iv);
  $alamat = openssl_encrypt($alamat, $method, $key, $options, $iv);

  $sql = "UPDATE merchants SET password = SHA2(?, 256), nama_lengkap = ?, tanggal_lahir = ?, nama_resto = ?, alamat = ? WHERE id = ?";
  $stmt = $conn->prepare($sql);
  $stmt->bind_param("sssssi", $password, $nama_lengkap, $tanggal_lahir, $nama_resto, $alamat, $id);
  $stmt->execute();

  if($stmt->errno == 0){
    $sql = "SELECT * FROM merchants WHERE id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param('i', $id);
    $stmt->execute();
    if($stmt->errno == 0){
      $result = $stmt->get_result();
      $data = $result->fetch_assoc();

      $data['username'] = openssl_decrypt($data['username'], $method, $key, $options, $iv);
      $data['nama_lengkap'] = openssl_decrypt($data['nama_lengkap'], $method, $key, $options, $iv);
      $data['tanggal_lahir'] = openssl_decrypt($data['tanggal_lahir'], $method, $key, $options, $iv);
      $data['nama_resto'] = openssl_decrypt($data['nama_resto'], $method, $key, $options, $iv);
      $data['alamat'] = openssl_decrypt($data['alamat'], $method, $key, $options, $iv);

      echo json_encode(["status"=>"Success", "data"=>$data]);
    }
    else{
      echo json_encode(["status"=>"Fail", "message"=>"Terjadi kesalahan pada saat mengambil data"]);
    }
  }
  else{
    echo json_encode(["status"=>"Fail", "message"=>"Terjadi kesalahan pada saat mengubah data"]);
  }

  $stmt->close();
  $conn->close();
?>