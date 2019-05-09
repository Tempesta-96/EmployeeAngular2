<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Delete Employee</title>
</head>
<%
	String message = null;
	if (request.getAttribute("msg") != null) {
		message = (String) request.getAttribute("msg");
	}
%>
<style>
#msg {
	color: red;
	font-family: verdana;
	font-size: 300%;
}
</style>
<body>
	<div id="msg" align="center">
		<%
			if (message != null) {
				out.print(message);
			}
		%>
	</div>
	<div id="deleteForm" align="center" style="float: center">
		<b><font size="5">Delete an employee</font></b><br> <br>
		<form action="DeleteEmpDetailServlet" method='POST'>
			<label>Employee ID : </label><input type="number" name="id" value="">
			<br> <br> <input type="submit" name="submit" value="Submit">
			<input type="reset" name="reset" value="Clear">
		</form>
	</div>
</body>
</html>