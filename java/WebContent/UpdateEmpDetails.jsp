<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ page import="pojo.EmpPojo"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Updating Employee</title>
</head>
<%
	EmpPojo emp = (EmpPojo)request.getAttribute("data");
	//EmpPojo emp = 
%>
<body>
<div id = "updateForm" align="center" style="float:center">
	<b><font size="5">Enter the details of the Employee:</font></b><br><br>
	<form action="UpdateEmpDetailServlet2" method='POST'>
	<label>Employee ID : </label><input type="number" name="id" value="<%=emp.getId()%>" readonly="readonly">
	<br><br>
	<label>Employee Name : </label><input type="text" name="name" value="<%=emp.getName()%>">
	<br><br>
	<label>Employee Designation : </label><input type="text" name="designation" value="<%=emp.getDesignation()%>">
	<br><br>
	<label>Employee Age : </label><input type="number" name="age" value="<%=emp.getAge()%>">
	<br><br>
	<label>Employee Salary : </label><input type="number" name="salary" value="<%=emp.getSalary()%>">
	<br><br>
	<input type ="submit" name="submit" value="Submit">
	</form>
</div>
Click <a href="UpdateEmp.jsp">here</a> to go back.
</body>
</html>