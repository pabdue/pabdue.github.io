<?php
if(isset($_POST['name']) && isset($_POST['email']) && isset($_POST['subject']) && isset($_POST['message'])){
  $name = $_POST['name'];
  $email = $_POST['email'];
  $subject = $_POST['subject'];
  $message = $_POST['message'];
  
  $to = "pabloduenas64@gmail.com";
  $headers = "From: $name <$email>\r\n";
  $headers .= "Reply-To: $email\r\n";
  
  if(mail($to, $subject, $message, $headers)){
    echo "Email sent successfully!";
  } else{
    echo "Error occurred while sending email.";
  }
}
?>
