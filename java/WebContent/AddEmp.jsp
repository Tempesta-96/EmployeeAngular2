<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Add Employee</title>
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

	<div id="addForm" align="center" style="float: center">
		<b><font size="5">Add new employee</font></b><br> <br>
			<form action="AddEmpServlet" method='POST'>
				<label>Employee Name : </label><input type="text" name="name"
					value=""> <br> <br> <label>Employee
					Designation : </label><input type="text" name="designation" value="">
				<br> <br> <label>Employee Age : </label><input
					type="number" name="age" value="" min="1" max="100"> <br>
				<br> <label>Employee Salary : </label><input type="number"
					name="salary" value=""> <br> <br> <input
					type="submit" name="submit" value="Submit"> <input
					type="reset" name="reset" value="Clear">
			</form>
	</div>
</body>
</html>