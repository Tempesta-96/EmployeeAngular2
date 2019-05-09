<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Register User</title>
</head>

<body>
	<div id=header>
		<font size="5"><b>Register New User</b></font><br> <br>
		<form action="RegisterEmpServlet" method='POST'>
			<label>Username : </label><input type="text" name="username"value="">
			<br> <br> 
			<label>Password : </label><input type="password" name="password" value="">
			<br> <br> 
			<label> Re-type Password</label><input type = "password" name = "password1" value = "">
			<br> <br>
			<input type="submit" name="submit" value="Submit">
			<input type="reset" name="reset" value="Clear">
		</form>
		
		<b>Click</b>
		<a href="EmpLogin.jsp"> here </a>
		<b>to go back to login page.</b>
		<br> <br> 
	</div>
</body>
</html>