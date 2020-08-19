<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$conn = new mysqli("127.0.0.1", "root", "root", "portfolio");

if ($conn->connect_error) {
  echo("Fail \n");
  die('Connect Error (' . $conn->connect_errno . ') '
          . $conn->connect_error);
}

$result = $conn->query("SELECT * FROM experiences");

$outp = "";

while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
  if ($outp != "") {$outp .= ",";}
  $outp .= json_encode($rs);
}

$outp = "[" . $outp . "]";

$conn->close();

echo($outp);
?>