<?php

//C:\xampp\htdocs\login   ---> ruta del archivo

header("Access-Control-Allow-Origin: *"); 
header("Access-Control-Allow-Methods: POST, OPTIONS"); 
header("Access-Control-Allow-Headers: Content-Type, Authorization"); 
header("Access-Control-Allow-Credentials: true"); 
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    // Responder con un 200 OK para solicitudes OPTIONS
    header("HTTP/1.1 200 OK");
    exit(0);
}

// Verificar que la solicitud sea POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Método no permitido']);
    exit();
}

// Obtener el contenido JSON de la solicitud
$json = file_get_contents('php://input');
$data = json_decode($json, true);

// Verificar que se recibieron los datos necesarios
if (!isset($data['email']) || !isset($data['password']) || !isset($data['action'])) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Datos incompletos']);
    exit();
}

// Obtener los datos del formulario
$email = $data['email'];
$password = $data['password'];
$action = $data['action']; // Login o Registro

// Conectar a la base de datos
$host = 'localhost';
$dbname = 'rn01';
$username = 'root';
$password_db = '';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password_db);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    if ($action === 'login') {
        // Lógica de login
        $stmt = $pdo->prepare("SELECT id, password FROM usuarios WHERE email = ?");
        $stmt->execute([$email]);
        $user = $stmt->fetch(PDO::FETCH_ASSOC);
        
        if ($user && password_verify($password, $user['password'])) {
            session_start();
            $_SESSION['user_id'] = $user['id'];
            echo json_encode(['success' => true, 'message' => 'Login exitoso', 'user_id' => $user['id'], 'mail' => $email], JSON_UNESCAPED_UNICODE);
        } else {
            http_response_code(401);
            echo json_encode(['success' => false, 'message' => 'Email o contraseña incorrectos']);
        }

    } elseif ($action === 'register') {
        // Lógica de registro
        $stmt = $pdo->prepare("SELECT id FROM usuarios WHERE email = ?");
        $stmt->execute([$email]);

        if ($stmt->fetch()) {
            http_response_code(409);
            echo json_encode(['success' => false, 'message' => 'El correo ya está registrado']);
            exit();
        }

        $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
        $stmt = $pdo->prepare("INSERT INTO usuarios (email, password) VALUES (?, ?)");
        $stmt->execute([$email, $hashedPassword]);

        if ($stmt) {
            echo json_encode(['success' => true, 'message' => 'Usuario registrado con éxito']);
        } else {
            http_response_code(500);
            echo json_encode(['success' => false, 'message' => 'Error al registrar el usuario']);
        }
    } else {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => 'Acción no válida']);
    }
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Error en el servidor: ' . $e->getMessage()]);
}