<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$conn = new mysqli("localhost", "root", "root", "bjornson_portfolio");

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
        "(name, highlight, type, description, date, images, skills) " . 
        "VALUES ('" . $experience['name'] ."','". $highlight ."','". $experience['type'] ."','". $experience['description'] ."','".
          $experience['date'] ."','". $experience['coverPhoto'] ."','".
          $experience['skills'] . "');";

$result = $conn->query($sql);

if(!$result){
  $success = "False";
}
else {
  $success = "True";
}

$outp = "{ \"Success\":" . $success . ",
           \"SQL\": " . $sql . 
        "}";

$conn->close();

echo($outp);
?>