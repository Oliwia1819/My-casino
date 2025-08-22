<?php
session_start();

$dir = "/db"; // тільки папка

$dbUsers = $dir . "/users.db";


if (!file_exists($dbUsers)) {
    die("База даних не знайдена!");
}

try {
    $conn = new PDO("sqlite:" . $dbUsers);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Помилка підключення: " . $e->getMessage());
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $login = trim($_POST['login'] ?? '');
    $password = trim($_POST['password'] ?? '');

    if ($login === '' || $password === '') {
        http_response_code(400);
        echo "Please enter login and password";
        exit;
    }

    $stmt = $conn->prepare("SELECT id, password_hash FROM users WHERE login = ? "); // пошук користувача
    $stmt->execute([$login]);
    $user = $stmt->fetch(PDO::FETCH_ASSOC); // має повернути результат запиту

    if ($user && password_verify($password, $user['password_hash'])) {
        $_SESSION['user_id'] = $user["id"];
        $_SESSION['login'] = $login; // щоб інші сторінки знали хто залогінений
        header("Location: /");
        exit;
    } else {
        http_response_code(401);
        echo "Невірний логін або пароль!";
    }
}








