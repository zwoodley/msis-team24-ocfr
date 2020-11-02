<?php

require 'common.php';


$db = DbConnection::getConnection();


$stmt = $db->prepare(
  'INSERT INTO certification (certificationID, certName, certAgency, certExp)
  VALUES (?, ?, ?, ?)'
);

$stmt->execute([
  $_POST['certificationID'],
  $_POST['certName'],
  $_POST['certAgency'],
  $_POST['certExp']
]);

$certificationID = $db->lastInsertID();

header('HTTP/1.1 303 See Other');
header('Location: ../certifications/');
