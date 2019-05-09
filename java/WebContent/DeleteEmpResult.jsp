<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ page import="pojo.EmpPojo"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Delete Employee Result</title>
</head>
<%
	EmpPojo emp = (EmpPojo)request.getAttribute("msg");
%>
<body>
	Employee ID : <%=emp.getId() %>
	<br><br>
	Employee Name : <%=emp.getName() %>
	<br><br>
	Have been deleted. 
</body>
</html>