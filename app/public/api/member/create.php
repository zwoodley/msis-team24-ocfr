<?php

require 'common.php';

$db = DbConnection::getConnection();

$stmt = $db->prepare(
  'INSERT INTO person (personID,fname,lname,position,startDate,isActive,radioNum,dob,gender,addStreet,addCity,addState,addZip,email,cellPhone,workPhone,homePhone,mainDepartment,secondaryDepartment)
  VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)'
);

$stmt->execute([
  $_POST['personID'],
  $_POST['fname'],
  $_POST['lname'],
  $_POST['position'],
  $_POST['startDate'],
  $_POST['isActive'],
  $_POST['radioNum'],
  $_POST['dob'],
  $_POST['gender'],
  $_POST['addStreet'],
  $_POST['addCity'],
  $_POST['addState'],
  $_POST['addZip'],
  $_POST['email'],
  $_POST['cellPhone'],
  $_POST['workPhone'],
  $_POST['homePhone'],
  $_POST['mainDepartment'],
  $_POST['secondaryDepartment']

]);

header('HTTP/1.1 303 See Other');
header('Location: ../member/?personID=' .$_POST['personID']);
