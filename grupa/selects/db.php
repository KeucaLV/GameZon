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
        $this->pass = "root";
        $this->dbname = "gamezon";
        $this->conn = new mysqli($this->host, $this->user, $this->pass, $this->dbname);
    }
    function select($sql){
// $conn = $this->connection();

        $results = $this->conn->query($sql);

        if($results->num_rows > 0){
            return $results;
        } else {
            return False;
        }
    }

}

$db = new Database;
?>