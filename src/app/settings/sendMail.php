<?php
  phpinfo();
  $path = $_SERVER['DOCUMENT_ROOT'] . "/messages";
  echo($path . "\n");
  $filename = 'random';
  fopen($path . "/" . $filename, "w") or die("Unable to open file!");
?>