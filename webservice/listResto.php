<?php
  $conn = new mysqli('localhost', 'root', '', 'badut_ojol');

  $sql = "SELECT nama_resto, alamat FROM merchants";
  $stmt = $conn->prepare($sql);
  $stmt->execute();

  if($stmt->errno == 0){
    $result = $stmt->get_result
  }
?>