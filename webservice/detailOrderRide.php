<?php
  header("Access-Control-Allow-Origin: *");
  $conn = new mysqli('localhost', 'root', '', 'badut_ojol');

  $id = $_POST['id'];

  $method = "AES-128-CTR";
  $options = 0;
  $key = "BadutISACemas";
  $iv = "1234567812345678";

  $sql = "SELECT o.id AS id, o.alamat_jemput AS alamat_jemput, o.alamat_tujuan AS alamat_tujuan, o.jarak AS jarak, o.tarif AS tarif, o.status AS status, c.nama_lengkap AS customer_name, d.nama_lengkap as driver_name
          FROM order_rides o
          INNER JOIN customers c on o.customer_id = c.id
          LEFT JOIN drivers d on o.driver_id = d.id
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
    $data['driver_name'] = openssl_decrypt($data['driver_name'], $method, $key, $options, $iv);

    echo json_encode(["status"=>"Success", "data"=>$data]);
  }
  else{
    echo json_encode(["status"=>"Fail", "message"=>"Terjadi kesalahan pada saat mengambil data"]);
  }

  $stmt->close();
  $conn->close();
?>