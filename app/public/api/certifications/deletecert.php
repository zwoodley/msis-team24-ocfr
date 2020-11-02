<?php

require 'common.php';


$db = DbConnection::getConnection();


$stmt = $db->prepare(
  'DELETE FROM certification WHERE certificationID = ?'
);

$stmt->execute([
  $_POST['certificationID'],
]);

header('HTTP/1.1 303 See Other');
header('Location: ../certifications/?certificationID=' .$_POST['certificationID']);
?>