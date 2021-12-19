<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$message = $_POST['message'];
$email = $_POST['email'];
// $text = $_POST['text'];
// $file = $_FILES['myfile'];

// Формирование самого письма
$title = "Заказ книги с сайта EHYA";
$body = "
<h2>Новое обращение</h2>
<b>Имя:</b> $name<br>
<b>Email:</b> $email<br><br>
<b>Сообщение:</b><br> $message";


// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    // $mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
    $mail->Username   = 'idzitesting@gmail.com'; // Логин на почте
    $mail->Password   = 'Gm+240872'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('idzitesting@gmail.com', 'Игорь Дзигун'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('dzitest@mail.ru'); // Ещё один, если несколько получателей

    // Прикрипление файлов к письму
// if (!empty($file['name'][0])) {
//     for ($ct = 0; $ct < count($file['tmp_name']); $ct++) {
//         $uploadfile = tempnam(sys_get_temp_dir(), sha1($file['name'][$ct]));
//         $filename = $file['name'][$ct];
//         if (move_uploaded_file($file['tmp_name'][$ct], $uploadfile)) {
//             $mail->addAttachment($uploadfile, $filename);
//             $rfile[] = "Файл $filename прикреплён";
//         } else {
//             $rfile[] = "Не удалось прикрепить файл $filename";
//         }
//     }   
// }

// Отправка сообщения
$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;    

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата

// Для вывода сообщений проверки отправки
// echo json_encode(["result" => $result, "resultfile" => $rfile, "status" => $status]);

// Для перехода на страницу отправки
header('Location: message-sent.html');