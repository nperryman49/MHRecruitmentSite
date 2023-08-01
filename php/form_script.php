<?php

$email=$_Post['email'];
$name=$_Post['name'];
$data=$name.",".email;

$file="file.csv";

file_put_contents($file, $data . PHP_EOL, FILE_APPEND);
print "<h1 align=center>Thank you for submitting your email address!</h1>";

?>
