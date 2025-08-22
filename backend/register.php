<?php

//шлях до БД
$dir = "/db"; // тільки папка

$dbUsers = $dir . "/users.db";

if (!file_exists($dbUsers)) {
    // створюємо пустий файл
    file_put_contents($dbUsers, '');
}

//підключення до БД
$conn = new PDO("sqlite:" . $dbUsers);
//для правильної обробки помилок
$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

// створення таблиці
$conn->exec("CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    login VARCHAR(30) NOT NULL UNIQUE,
    password_hash TEXT NOT NULL
)");
//перевіряє метод, створює змінні даних
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $login = trim($_POST["login"] ?? '');
    $password = trim($_POST["password"] ?? '');
//перевіряє чи всі дані вказані
    if ($login === '' || $password === '') {
        http_response_code(400);
        var_dump($_POST);
        echo "Логін і пароль обов'язкові!";
        exit;
    }

    $stmt = $conn->prepare("SELECT COUNT(*) FROM users WHERE login = ?"); //запит на перевірку унікальності логіна
    $stmt->execute([$login]);

    if ($stmt->fetchColumn() > 0) { // якщо в базі більше ніж 0 таких же логінів, помилка
        http_response_code(409);
        echo "Цей логін вже зайнятий!";
        exit;
    }

    $password_hash = password_hash($password, PASSWORD_DEFAULT); // хешування паролю

    $stmt = $conn->prepare("INSERT INTO users (login, password_hash) VALUES (?, ?)");
    //  $stmt->execute([$login, $password_hash]);

    if ($stmt->execute([$login, $password_hash])) {
        header("location: /"); //перехід одразу на головну
        exit;
    } else {
        http_response_code(500);
    }

} else {
    http_response_code(405);

}







