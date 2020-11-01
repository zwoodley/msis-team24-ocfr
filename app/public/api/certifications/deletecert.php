<?php

require 'common.php';

// Step 0: Validate the incoming data
// This code doesn't do that, but should ...
// For example, if the date is empty or bad, this insert fails.

// Step 1: Get a datase connection from our helper class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
// Note the use of parameterized statements to avoid injection
$results = $db->query(
  'DELETE FROM certification (cID, certName, certAgency, certExp)
  WHERE cID = 'cID'') or die ($db->error
);

$results->execute([
  $_POST['cID'],
  $_POST['certName'],
  $_POST['certAgency'],
  $_POST['certExp']
]);

// If needed, get auto-generated PK from DB
//$pk = $db->lastInsertId();  //https://www.php.net/manual/en/pdo.lastinsertid.php

// Step 4: Output
// Here, instead of giving output, I'm redirecting to the SELECT API,
// just in case the data changed by entering it
header('HTTP/1.1 303 See Other');
header('Location: ../records/?cID=' .$_POST['cID']);
