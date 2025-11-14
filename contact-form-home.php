<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Collect data from form
    $name = $_POST['name'];
    $number = $_POST['number'];
    $email = $_POST['email'];
    $location = $_POST['location'];
    $service = $_POST['service'];
    $message = $_POST['message'];

    // Recipient email
    $to = "sales@themagicalspaces.com";
    // Email subject and body
    $subject = "Email Enquiry from Magical Spaces Website";
    $body = "Name: $name\n"
        . "Email: $email\n"
        . "Phone Number: $number\n"
        . "Location: $location\n"
        . "Project Type: $service\n"
        . "Project Requirements:\n$message";

    // Send the email
    $emailSent = mail($to, $subject, $body);

    // Redirect based on result
    if ($emailSent) {
        header("Location: .?emailSuccess=true");
    } else {
        header("Location: .?emailSuccess=false");
    }
    exit;
}
?>
