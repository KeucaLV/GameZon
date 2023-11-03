<?php

class Database {

    protected $host;
    protected $user;
    protected $pass;
    protected $dbname;
    protected $conn;

    function __construct(){
        $this->host = "localhost";
        $this->user = "root";
        $this->pass = "";
        $this->dbname = "gamezon";
        $this->conn = new mysqli($this->host, $this->user, $this->pass, $this->dbname);
    }
    public function select($query) {
        $db = $this->conn;
//        try {
//            $stmt = $db->prepare($query);
//            $stmt->execute();
//            return $stmt->fetchAll(PDO::FETCH_ASSOC);
//        } catch (PDOException $e) {
//            echo "Query failed: " . $e->getMessage();
//        }
        $kko = $db->query($query);
        $result=$kko->fetch_all(MYSQLI_ASSOC);
        return $result;
    }


}



?>