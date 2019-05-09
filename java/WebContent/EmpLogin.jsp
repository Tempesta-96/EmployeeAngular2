<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Employee Login</title>
</head>
<body>
	<div id=header>
		<font size="5"><b>Home Page</b></font><br> <br>
		<form action="EmpLoginServlet" method='POST'>
			<label>Employee Username : </label><input type="text" name="username" value="">
			<br> <br>
			<label>Employee Password : </label><input type="password" name="password" value="">
			<br> <br> <input type="submit" name="submit" value="Submit">
			<input type="reset" name="reset" value="Clear">
		</form>
		<br><br>
		<b>New user? Click</b>
		<a href="RegisterEmp.jsp"> here </a>
		<b>to register.</b>
	</div>
</body>
</html>