<?php

require_once ("db.php");
class Auth extends Database
{
    private $rawData;

    public function __construct()
    {
        parent::__construct();
        $this->rawData = file_get_contents('php://input');
    }

    public function tokenAuth()
    {
        $decodedData = json_decode($this->rawData, true);
        $token = $decodedData['token'];

        $sql = "SELECT * FROM `login` WHERE `token` = '$token'";
        $result = $this->conn->query($sql);

        if ($result->num_rows > 0) {
            return json_encode(['status' => 200]);
        }

        return json_encode(['status' => 403]);
    }

}
$auth = new Auth();
echo $auth->tokenAuth();