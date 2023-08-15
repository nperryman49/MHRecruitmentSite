<?php

$email=$_POST['email'];
$lname=$_POST['lname'];
$fname=$_POST['fname'];
$tel=$_POST['phone'];
$text=$_POST['country_code'];
$file=$_POST['files'];
$nurse_status=$_POST['Nurse_Status'];
$datemin=$_POST['datemin'];
$timemin=$_POST['appt'];
$datemax=$_POST['datemin'];
$timemax=$_POST['appt'];
$appt=$_POST['appt'];
$data=$email."," $lname."," $fname."," $tel."," $text."," $file."," $nurse_status."," $datemin."," $timemin."," $datemax."," $timemax."," $appt.;

$file="nurseinfo.csv";
$appendinfo = fopen($file, 'a');
fwrite($appendinfo, $data);
fclose($appendinfo);



# file_put_contents($file, $data . PHP_EOL, FILE_APPEND);
print "<h1 align=center>Thank you for submitting your contact information! A recruiter will contact you shortly.</h1>";

?>
<html>
<head>
    <title>Thank you page</title>
</head>
<body>
<h1><a href="contactus.html">Go back.</a></h1>
</body>
</html>