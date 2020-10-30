<?php

require 'common.php';

$db = DbConnection::getConnection();

$stmt = $db->prepare(
  'INSERT INTO person (personID,fname,lname,position,startDate,isActive,radioNum)
  VALUES (id,?,?,?,?,?,?)'
);

$stmt->execute([
$_POST['commentText'],
]);
$pk = $db->LastInsertId();

header('HTTP/1.1 303 See Other');
header('Location: ../Comments/?id=' . $pk);
