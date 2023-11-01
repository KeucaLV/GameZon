<?php
require_once 'db.php';
header("Access-Control-Allow-Origin: http://localhost:3000");
header('Content-Type: application/json');

$database = new Database();
$db = $database->getConnection();

class TaskAPI {
    private $conn;

    public function __construct($db) {
        $this->conn = $db;
    }

    function getTaskById($id) {
        $query = "SELECT * FROM add_tournament WHERE id = :id";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':id', $id);
        $stmt->execute();
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }

    function getAllTasks() {
        $query = "SELECT * FROM add_tournament";
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
}

$api = new TaskAPI($db);

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    if (isset($_GET['id'])) {
        $task = $api->getTaskById($_GET['id']);
        echo json_encode($task);
    } else {
        $tasks = $api->getAllTasks();
        echo json_encode($tasks);
    }
}