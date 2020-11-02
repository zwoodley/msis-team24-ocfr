<?php

require 'common.php';

$db = DbConnection::getConnection();

$stmt = $db->prepare(
  'UPDATE certification 
  SET certName = ?, certAgency = ?, certExp = ?
  WHERE certificationID = ?'
);

$stmt->execute([
  $_POST['certificationID'],
  $_POST['certName'],
  $_POST['certAgency'],
  $_POST['certExp']
]);

header('HTTP/1.1 303 See Other');
header('Location: ../certifications/');
