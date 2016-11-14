<?php 
	header("Access-Control-Allow-Origin: *");
	header("Content-Type: application/json; charset=UTF-8");	
	$localhost = "127.0.0.1";
	$username = "";
	$password = "";
	


	$con = mysqli_connect($localhost,$username,$password);
		if(!$con){
			die ("Error connection Database".mysqli_error($con));
		}
	$connect_db = mysqli_select_db($con,"myhome");
		if(!$connect_db){
			die("Error finding Database".mysqli_error($con));	
		}

//$data = json_decode(file_get_contents("php://input"));

if(!empty($_FILES))
{
  $path ='img/'.$_FILES['file']['name']; 
  $marketAddress = $_REQUEST['marketAddress'];
  $marketDescription = $_REQUEST['marketContent'];

  if(move_uploaded_file($_FILES['file']['tmp_name'], $path)){
  	
  	$sql = "INSERT INTO `market_table`(`market_id`, `market_address`, `market_description`, `market_pictuer`) VALUES (6, '$marketAddress','".$marketDescription."','".$path."')";
	mysqli_query($con, $sql);
  }
}
else
{
	echo 'some Error';
}
?>
