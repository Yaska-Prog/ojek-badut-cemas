<?php
  header("Access-Control-Allow-Origin: *");
  $conn = new mysqli('localhost', 'root', '', 'badut_ojol');

  $driver_id = $_POST['id'];
  $status = "Selesai";

  $method = "AES-128-CTR";
  $options = 0;
  $key = "BadutISACemas";
  $iv = "1234567812345678";

  $sql = "SELECT o.id AS id, o.alamat_jemput AS alamat_jemput, o.alamat_tujuan AS alamat_tujuan, o.jarak AS jarak, o.tarif AS tarif, o.status AS status, c.nama_lengkap AS customer_name, d.nama_lengkap as driver_name
          FROM order_rides o
          INNER JOIN customers c on o.customer_id = c.id
          LEFT JOIN drivers d on o.driver_id = d.id
          WHERE o.status = ? AND d.id = ?";
  $stmt = $conn->prepare($sql);
  $stmt->bind_param("si", $status, $driver_id);
  $stmt->execute();

  $data = array();

  if($stmt->errno == 0){
    $result = $stmt->get_result();
    while($order = $result->fetch_assoc()){
      $order['alamat_jemput'] = openssl_decrypt($order['alamat_jemput'], $method, $key, $options, $iv);
      $order['alamat_tujuan'] = openssl_decrypt($order['alamat_tujuan'], $method, $key, $options, $iv);
      $order['customer_name'] = openssl_decrypt($order['customer_name'], $method, $key, $options, $iv);
      $order['driver_name'] = openssl_decrypt($order['driver_name'], $method, $key, $options, $iv);

      array_push($data, $order);
    }
    echo json_encode(["status"=>"Success", "data"=>$data]);
  }
  else{
    echo json_encode(["status"=>"Fail", "message"=>"Terjadi kesalahan pada saat mengambil data"]);
  }

  $stmt->close();
  $conn->close();
?>