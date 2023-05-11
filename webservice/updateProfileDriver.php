<?php
  header("Access-Control-Allow-Origin: *");
  $conn = new mysqli('localhost', 'root', '', 'badut_ojol');

  $id = $_POST['id'];
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

  $password = openssl_encrypt($password, $method, $key, $options, $iv);
  $nama_lengkap = openssl_encrypt($nama_lengkap, $method, $key, $options, $iv);
  $tanggal_lahir = openssl_encrypt($tanggal_lahir, $method, $key, $options, $iv);
  $plat_nomor = openssl_encrypt($plat_nomor, $method, $key, $options, $iv);

  $sql = "UPDATE drivers SET password = SHA2(?, 256), nama_lengkap = ?, tanggal_lahir = ?, plat_nomor = ?, merk_kendaraan = ?, warna_kendaraan = ? WHERE id = ?";
  $stmt = $conn->prepare($sql);
  $stmt->bind_param("ssssssi", $password, $nama_lengkap, $tanggal_lahir, $plat_nomor, $merk_kendaraan, $warna_kendaraan, $id);
  $stmt->execute();

  if($stmt->errno == 0){
    $sql = "SELECT * FROM drivers WHERE id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param('i', $id);
    $stmt->execute();
    if($stmt->errno == 0){
      $result = $stmt->get_result();
      $data = $result->fetch_assoc();

      $data['username'] = openssl_decrypt($data['username'], $method, $key, $options, $iv);
      $data['nama_lengkap'] = openssl_decrypt($data['nama_lengkap'], $method, $key, $options, $iv);
      $data['tanggal_lahir'] = openssl_decrypt($data['tanggal_lahir'], $method, $key, $options, $iv);
      $data['plat_nomor'] = openssl_decrypt($data['plat_nomor'], $method, $key, $options, $iv);

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