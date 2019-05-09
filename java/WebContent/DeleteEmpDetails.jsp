<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ page import="pojo.EmpPojo"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Delete Employee Details</title>
</head>
<%
	EmpPojo emp = (EmpPojo)request.getAttribute("data");
%>
<body>
<div id = "deleteForm" align="center" style="float:center">
	<b><font size="5">Confirmation on deleting this employee</font></b><br><br>
	<form action="DeleteEmpDetailServlet2" method='POST'>
	<label>Employee ID : </label><input type="number" name="id" value="<%=emp.getId()%>" readonly="readonly">
	<br><br>
	<label>Employee Name : </label><input type="text" name="name" value="<%=emp.getName()%>" readonly="readonly">
	<br><br>
	<label>Employee Designation : </label><input type="text" name="designation" value="<%=emp.getDesignation()%>" readonly="readonly">
	<br><br>
	<label>Employee Age : </label><input type="number" name="age" value="<%=emp.getAge()%>" readonly="readonly">
	<br><br>
	<label>Employee Salary : </label><input type="number" name="salary" value="<%=emp.getSalary()%>" readonly="readonly">
	<br><br>
	<input type ="submit" name="submit" value="Submit">
	</form>
</div>
Click <a href="DeleteEmp.jsp">here</a> to go back.
</body>
</html>