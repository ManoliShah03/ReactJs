
<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php'; // path to PHPMailer autoloader

// Check if all fields are filled
if(isset($_POST['fname']) && isset($_POST['email']) && isset($_POST['phone']) && isset($_POST['message'])) {
    // Retrieve form data
    $firstname = $_POST['fname'];
    $lastname = $_POST['lname'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];

    // Create a new PHPMailer instance
    $mail = new PHPMailer(true);
    try {
        //Server settings
        // $mail->SMTPDebug = 2; //Uncomment to view debug log
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'manoli.shah@sigmainfo.net';
        $mail->Password = 'dummy_password';
        $mail->SMTPSecure = 'tls';
        $mail->Port = 587;

        $mail->setfrom('manoli.shah@sigmainfo.net', 'Admin');
        $mail->addaddress('manoli.shah@sigmainfo.net', '@Manoli ');

        //Content
        $mail->Subject = 'Mail From ' . $firstname;
        $mail->Body = $message;

        $mail->send();
        echo 'Message has been sent';
    } catch (Exception $e) {
        echo 'Message could not be sent.';
        echo 'Mailer Error: ' . $mail->ErrorInfo;
    }
}
else{
    echo 'Message could not be sent no data.';
}


?>