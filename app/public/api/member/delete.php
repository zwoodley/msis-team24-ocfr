<?php

require 'common.php';


$db = DbConnection::getConnection();


$stmt = $db->prepare(
  'DELETE FROM person WHERE personID = ?'
);

$stmt->execute([
  $_POST['personID']
]);

header('HTTP/1.1 303 See Other');
header('Location: ../member/?personID=' .$_POST['personID']);
?>
