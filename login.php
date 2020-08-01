<!DOCTYPE html>

<html lang="en">
<head>
	<meta charset = "UTF-8">
	<title> Harry Potter Trivia </title>
	<link rel="stylesheet" type="text/css" href="triviastyle.css">   
</head>

<body>

<div class="grid">
	<h1> Login </h1>

	<form method="POST">

	Username: <input type="text" name="username" class="text" autocomplete="off" required><br><br>
	password: <input type="password" name="password" class="text" autocomplete="off" required><br><br>
	<input type="submit" name="Login" id="login">

	</form>
</div>

</body>
</html> 

<?php
	if(isset($_POST['Login'])){
		$un = $_POST['username'];
		$pw = $_POST['password'];
	
		if($un == 'username' && $pw == 'password'){
			header("Location: trivia.html");
			exit();

		} else {
			echo "<script> alert ('Invalid Username or Password')</script>";
		}

	}
?>