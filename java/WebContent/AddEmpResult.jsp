<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ page import="pojo.EmpPojo"%>
<!DOCTYPE html>
<html>
<head>
<%
	EmpPojo emp = (EmpPojo)request.getAttribute("Empdata");
%>
<meta charset="ISO-8859-1">
<title>Successfully added a Employee</title>
</head>
<body>
	Employee Details: 
	<br><br>
	Employee ID is <%=emp.getId() %>
	<br><br>
	Employee Name is <%= emp.getName() %>
	<br><br>
	Employee Designation is <%=emp.getDesignation() %>
	<br><br>
	Employee Age is <%=emp.getAge() %>
	<br><br>
	Employee Salary is <%=emp.getSalary() %>
	<br><br>
	
	
	Click here<a href ="AddEmp.jsp"> to add another employee.
</body>
</html>