<?php
// tự chỉnh trong db
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "login_db";

// Tạo kết nối
$conn = new mysqli($servername, $username, $password, $dbname);

// Kiểm tra kết nối
if ($conn->connect_error) {
    die("Connection fail: " . $conn->connect_error);
}
?>