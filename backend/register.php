<?php

mkdir('test', 0777, true);

$con = new PDO('sqlite:'.__DIR__.'/sqlite.db');

// $con=mysqli_connect("db","root","root","users_db"); //$con встановлення зєднання з БД
// if (mysqli_connect_errno()){
//    echo "Failed to connect to MySQL: " . mysqli_connect_error();
//}

if(isset($_POST['submit'])){
    $username = trim($_POST['username']); //trim() прибирає пробіл спереду і вкінці якщо такий є
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT); //PASSWORD_DEFAULT означає вибрати найкращу систему шифрування
} else {
    echo 'what?';
    exit;
}
$stmt = $con->prepare("INSERT INTO users (username, password) VALUES (?, ?)"); //$stmt змінна у якій зберігається підготовлений запит (Prepared Statement); prepare метод який готує підготовлений запит
//$stmt->bind_param("ss", $username, $password);//bind привязка, ss тип рядок у обох змінних

if ($stmt->execute([$username, $password])){  //execute() виконує запит до бази даних, якщо все ок, додає користувача
    echo "New record created successfully";
}
else{
    echo "Error: " . $stmt . "<br>" . $con->errorCode();
}