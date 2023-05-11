<?php
  header("Access-Control-Allow-Origin: *");
  $conn = new mysqli('localhost', 'root', '', 'badut_ojol');

  $username = $_POST['username'];
  $password = $_POST['password'];

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
        echo json_encode(["status"=>"Fail", "message"=>"Akun tidak ditemukan"]);

        $stmt->close();
        $conn->close();
        die;
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

      $status = "Selesai";
  
      $sql = "SELECT o.id AS id, o.alamat_jemput AS alamat_jemput, o.alamat_tujuan AS alamat_tujuan, o.jarak AS jarak, o.tarif AS tarif, o.status AS status, c.nama_lengkap AS customer_name, d.nama_lengkap as driver_name
              FROM order_rides o
              INNER JOIN customers c on o.customer_id = c.id
              INNER JOIN drivers d on o.driver_id = d.id
              WHERE d.id = ? AND o.status != ?";
      $stmt = $conn->prepare($sql);
      $stmt->bind_param("is", $data['id'], $status);
      $stmt->execute();
  
      $result = $stmt->get_result();
      if($result->num_rows > 0){
        $order = $result->fetch_assoc();
        $data['order_id'] = $order['id'];
  
        $order['alamat_jemput'] = openssl_encrypt($order['alamat_jemput'], $method, $key, $options, $iv);
        $order['alamat_tujuan'] = openssl_encrypt($order['alamat_tujuan'], $method, $key, $options, $iv);
        $order['customer_name'] = openssl_encrypt($order['customer_name'], $method, $key, $options, $iv);
        $order['driver_name'] = openssl_encrypt($order['driver_name'], $method, $key, $options, $iv);
  
        $data['order'] = $order;
      }
      else{
        $data['order_id'] = -1;
      }
    }
  }
  else{
    $role = "Customer";

    $data = $result->fetch_assoc();
    $data['username'] = openssl_decrypt($data['username'], $method, $key, $options, $iv);
    $data['nama_lengkap'] = openssl_decrypt($data['nama_lengkap'], $method, $key, $options, $iv);
    $data['tanggal_lahir'] = openssl_decrypt($data['tanggal_lahir'], $method, $key, $options, $iv);

    $status = "Selesai";

    $sql = "SELECT o.id AS id, o.alamat_jemput AS alamat_jemput, o.alamat_tujuan AS alamat_tujuan, o.jarak AS jarak, o.tarif AS tarif, o.status AS status, c.nama_lengkap AS customer_name
            FROM order_rides o
            INNER JOIN customers c on o.customer_id = c.id
            WHERE c.id = ? AND o.status != ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("is", $data['id'], $status);
    $stmt->execute();

    $result = $stmt->get_result();
    if($result->num_rows > 0){
      $order = $result->fetch_assoc();
      $data['order_id'] = $order['id'];

      $order['alamat_jemput'] = openssl_encrypt($order['alamat_jemput'], $method, $key, $options, $iv);
      $order['alamat_tujuan'] = openssl_encrypt($order['alamat_tujuan'], $method, $key, $options, $iv);
      $order['customer_name'] = openssl_encrypt($order['customer_name'], $method, $key, $options, $iv);
      $order['driver_name'] = openssl_encrypt($order['driver_name'], $method, $key, $options, $iv);

      $data['order'] = $order;
    }
    else{
      $data['order_id'] = -1;
    }
  }

  echo json_encode(["status"=>"Success", "role"=>$role, "data"=>$data]);

  $stmt->close();
  $conn->close();
?>