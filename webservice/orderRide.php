<?php
  header("Access-Control-Allow-Origin: *");
  $conn = new mysqli('localhost', 'root', '', 'badut_ojol');

  $alamat_jemput = $_POST['alamat_jemput'];
  $alamat_tujuan = $_POST['alamat_tujuan'];
  $jarak = $_POST['jarak'];
  $tarif = $_POST['tarif'];
  $customer_id = $_POST['customer_id'];
  $status = "Mencari driver";

  $method = "AES-128-CTR";
  $options = 0;
  $key = "BadutISACemas";
  $iv = "1234567812345678";

  $alamat_jemput = openssl_encrypt($alamat_jemput, $method, $key, $options, $iv);
  $alamat_tujuan = openssl_encrypt($alamat_tujuan, $method, $key, $options, $iv);

  $sql = "INSERT INTO order_rides (alamat_jemput, alamat_tujuan, jarak, tarif, status, customer_id) VALUES (?, ?, ?, ?, ?, ?)";
  $stmt = $conn->prepare($sql);
  $stmt->bind_param("ssdisi", $alamat_jemput, $alamat_tujuan, $jarak, $tarif, $status, $customer_id);
  $stmt->execute();

  if($stmt->errno == 0){
    $id = $stmt->insert_id;

    $sql = "SELECT o.id AS id, o.alamat_jemput AS alamat_jemput, o.alamat_tujuan AS alamat_tujuan, o.jarak AS jarak, o.tarif AS tarif, o.status AS status, c.nama_lengkap AS customer_name
            FROM order_rides o
            INNER JOIN customers c on o.customer_id = c.id
            WHERE o.id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $id);
    $stmt->execute();

    if($stmt->errno == 0){
      $result = $stmt->get_result();
      $data = $result->fetch_assoc();

      $data['alamat_jemput'] = openssl_decrypt($data['alamat_jemput'], $method, $key, $options, $iv);
      $data['alamat_tujuan'] = openssl_decrypt($data['alamat_tujuan'], $method, $key, $options, $iv);
      $data['customer_name'] = openssl_decrypt($data['customer_name'], $method, $key, $options, $iv);

      echo json_encode(["status"=>"Success", "data"=>$data]);
    }
    else{
      echo json_encode(["status"=>"Fail", "message"=>"Terjadi kesalahan pada saat mengambil data"]);
    }
  }
  else{
    echo json_encode(["status"=>"Fail", "message"=>"Terjadi kesalahan pada saat memasukkan data"]);
  }

  $stmt->close();
  $conn->close();
?>