<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$conn = new mysqli("127.0.0.1", "root", "root", "portfolio");

if ($conn->connect_error) {
  echo("Fail \n");
  die('Connect Error (' . $conn->connect_errno . ') '
          . $conn->connect_error);
}

$experience = $_POST['experience'];

if($experience['highlight'] == 1):
  $highlight = 1;
else :
  $highlight = 0;
endif;

$sql = "INSERT INTO experiences " . 
        "(name, highlight, type, description, date, coverPhoto, skills) " . 
        "VALUES ('" . $experience['name'] ."','". $highlight ."','". $experience['type'] ."','". $experience['description'] ."','".
          $experience['date'] ."','". $experience['coverPhoto'] ."','".
          $experience['skills'] . "');";

$result = $conn->query($sql);

$outp = "{ \"Success\": \"True\",
           \"SQL\": " . $sql . 
          "\"DEBUG\": " . implode("|", $experience) . "}";

// $outp = "[" . $outp . "]";

$conn->close();

echo($outp);
?>