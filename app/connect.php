<?php
//database connection code
if(isset($_POST['firstName']))
{
    // $con = mysqli_connect('localhost', 'database_user', 'database_password','database');
    $con = mysqli_connect('localhost', 'root', '', yebenteusers);

    // get the post records

    $firstName = $_POST['firstName'];
    $secondName = $_POST['secondName'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $number = $_POST['number'];

    // database insert SQL code
    $sql = "INSERT INTO `tbl_registration` (`Id`,`firstName`,`secondName`,`email`,`password`,`number`) VALUES (`0`,``,``,``,``,``,)"
}
$firstName = $_POST['firstName'];
$secondName = $_POST['secondName'];
$email = $_POST['email'];
$password = $_POST['password'];
$number = $_POST['number'];
?>