<?php
  $to      = 'ante.adamovic93@gmail.com';
  $subject = 'Contact Request - ' . $_GET['title'];
  $message = $_GET['message'];
  $headers = 'From: ' . $_GET['email'];

  if(strlen($_GET['message']) && strlen($_GET['email']))
    echo json_encode(array('status' => @mail($to, $subject, $message, $headers)));
  else {
    echo json_encode(array('status' => 'false'));
  }
?>
