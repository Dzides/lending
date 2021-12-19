<?php
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

$email = $_POST['email'];

$title = "Письмо с сайта EHYA";
$body = "
<h2>Подписка на акции и новости </h2>
<b>Почта:</b> $email<br><br>
";

$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    // $mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    $mail->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
    $mail->Username   = 'idzitesting@gmail.com'; // Логин на почте
    $mail->Password   = 'Gm+240872'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('idzitesting@gmail.com', 'Игорь Дзигун'); // Адрес самой почты и имя отправителя

    $mail->addAddress('dzitest@mail.ru'); // Ещё один, если несколько получателей

$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;    

if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

header('Location: agreement.html');