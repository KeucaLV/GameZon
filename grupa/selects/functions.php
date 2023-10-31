<?php
include 'db.php';

//header("Access-Control-Allow-Origin: http://localhost:3000");
//header("Access-Control-Allow-Methods: GET");
//header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

class TaskHandler extends Database{
    function getAllTasks() {
        $db = new Database;
        $sql = "SELECT * FROM gamer";
        $result = $this->conn->query($sql);
        $tasks = array();

        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                $tasks[] = $row;
            }
        } else {
            echo "empty";
        }

        return $tasks;
    }

}
