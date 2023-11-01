<?php
include 'functions.php';

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");


$obj = new TaskHandler;
$sql = "SELECT * FROM `add_tournament`";
$result = $obj->select($sql);

if ($result->num_rows > 0) {
    $data = $result->fetch_all(MYSQLI_ASSOC);
}
echo json_encode($data);