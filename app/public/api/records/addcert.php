<?php

require 'common.php';

// Step 1: Get a datase connection from our helper class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$sql = 'SELECT m.certificationID as cID, fname, lname,  certName, certAgency, certExp
        FROM person p join certification c join memberCert m on (p.personID=m.personID) and (c.certificationID=m.certificationID)
        ORDER BY cID';
$vars = [];

//if (isset($_GET['guid'])) {
  // This is an example of a parameterized query
  // $sql = 'SELECT * FROM Patient WHERE patientGuid = ?';
  //$vars = [ $_GET['guid'] ];
//}

$stmt = $db->prepare($sql);
$stmt->execute($vars);

$patients = $stmt->fetchAll();

// Step 3: Convert to JSON
$json = json_encode($patients, JSON_PRETTY_PRINT);

// Step 4: Output
header('Content-Type: application/json');
echo $json;

<?php

require 'common.php';

// Step 0: Validate the incoming data
// This code doesn't do that, but should ...
// For example, if the date is empty or bad, this insert fails.

// Step 1: Get a datase connection from our helper class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
// Note the use of parameterized statements to avoid injection
$stmt = $db->prepare(
  'INSERT INTO certification (cID, certName, certAgency, certExp)
  VALUES (?, ?, ?, ?)'
);

$stmt->execute([
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