<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = $_POST['fullName'];
    $mobile = $_POST['mobile'];
    $message = $_POST['message'];

    $to = "reymould.social@gmail.com";
    $subject = "Enquiry of user from website";
    $body = "Name: $name\nMobile: $mobile\nComment: $message";

    if (mail($to, $subject, $body)) {
        header("Location: index.html");
    }else {
        header("location: index.html");
    }
    exit;
}
?>