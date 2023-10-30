<?php
include 'db.php';
include 'functions.php';

header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
header("Access-Control-Allow-Origin: ");
header("Access-Control-Allow-Headers:");

$obj = new Functions;
$sql = "SELECT * FROM gamer";
$result = $obj->select($sql);

$data = [];

if ($result->num_rows > 0) {
while($row = $result->fetch_assoc()) {
$data[] = $row;
}
} else {
echo "0 results";
}

echo json_encode($data);