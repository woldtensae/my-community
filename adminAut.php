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
	$sql = "SELECT * FROM `admin_table`";	
	$recordset = mysqli_query($con, $sql);
	$myDataArray = array();
	while($raw = mysqli_fetch_assoc($recordset)){
		$myDataArray[] = $raw;
	}

	$json_format = '{"records":'.(json_encode($myDataArray))."}";
	echo $json_format;
	mysqli_close($con);
?>