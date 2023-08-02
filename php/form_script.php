<?php

$email=$_Post['email'];
$text=$_Post['lname'];
$text=$_Post['fname'];
$tel=$_Post['phone'];
$text=$_Post['country_code'];
$file=$_Post['files'];
$nurse_status=$_Post['Nurse_Status'];
$date=$_Post['datemin'];
$time=$_Post['appt'];
$date=$_Post['datemin'];
$time=$_Post['appt'];
$appt=$_Post['appt'];
$data=$email."," $text."," $text."," $tel."," $text."," $file."," $nurse_status."," $date."," $time."," $date."," $time."," $appt;

$file="nurseinfo.xlsx";

file_put_contents($file, $data . PHP_EOL, FILE_APPEND);
print "<h1 align=center>Thank you for submitting your contact information! a recruiter will contact you shortly.</h1>";

?>
<html>
<head>
    <title>Thank you page</title>
</head>
<body>
<h1><a href="contactus.html">Go back.</a></h1>
</body>
</html>