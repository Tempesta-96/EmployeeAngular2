<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ page import="pojo.EmpPojo"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Update Employee Results</title>
</head>
<%
	EmpPojo emp = (EmpPojo) request.getAttribute("msg");
%>
<body>
	New Records of the employee are :
	<br>
	Employee ID : <%=emp.getId() %>
	<br><br>
	Employee Name : <%=emp.getName() %>
	<br><br>
	Employee Age : <%=emp.getAge() %>
	<br><br>
	Employee Designation : <%=emp.getDesignation() %>
	<br><br>
	Employee Salary : <%=emp.getSalary() %>
	<br><br>
</body>
</html>