<?php

require_once("db.php");

header("Access-Control-Allow-Origin: http://localhost:3000");
header('Content-Type: application/json');
class Login extends Database
{
    private $rawData;
    public function __construct() {
        parent::__construct();
        $this->rawData = file_get_contents('php://input');
    }

    public function loginData(){

            $decodedData = json_decode($this->rawData, true);

            $username = htmlspecialchars(trim($decodedData['username']));
            $password = htmlspecialchars(trim($decodedData['password']));


            $data = [
                'user_err' => '',
                'pass_err' => '',
                'message' => '',
                'status' => ''
            ];

            $sql = "SELECT * FROM `login` WHERE `username` = '$username'";
            $check_username = $this->select($sql);

            if(!password_verify($password, $check_username[0]['password'])) {
                $data['message'] = 'Password or username is incorrect!';
            }
            if (empty($username)) {
                $data['user_err'] = "Username field can't be empty";
            }
            if (empty($password)) {
                $data['pass_err'] = "Password field can't be empty";
            }
            if (strlen($username) > 30) {
                $data['user_err'] = "Username can't be more than 30 characters!";
            }
            if (strlen($password) > 30) {
                $data['pass_err'] = "Password can't be more than 30 characters!";
            }
            if (empty($data['user_err']) && empty($data['pass_err']) && empty($data['message'])) {
                //Make token
                $rand_byte = random_bytes(32);
                $token = bin2hex($rand_byte);

                $sql = "UPDATE `login` SET `token` = '$token' WHERE `username` = '$username'";

                $result = $this->conn->query($sql);

                if ($result === true) {
                    echo json_encode(
                        [
                            "message" => "Successfully logged in.",
                            'status' => 200,
                            'token' => $token,
                            'username' => $username
                        ]
                    );
                } else {
                    echo json_encode(
                        [
                            "message" => "Failed to log in.",
                            'status'=>403
                        ]
                    );
                }
            } else {
                $data['status'] = 403;
                echo json_encode($data);
            }
        }

}
$login = new Login();

$login->loginData();
?>