<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ page import="dao.EmpHibernateDAO"%>
<%@ page import="java.util.*"%>
<%@ page import="pojo.EmpPojo"%>
<%@ page import="com.google.gson.Gson" %>
<%@ page import="java.util.stream.Collectors" %>
<%@ page import="org.codehaus.jackson.map.ObjectMapper" %>
<%@ page import="org.codehaus.jackson.map.ObjectWriter" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>List Employee</title>
</head>
<body>
	<div id=listing align=center>
		<%
			List<EmpPojo> list = EmpHibernateDAO.listEmpDetails();

		%>
		<table border=1>
			<tr>
				<th>Employee ID</th>
				<th>Employee Name</th>
				<th>Employee Designation</th>
				<th>Employee Age</th>
				<th>Employee Salary</th>
			</tr>
			<%
				for (EmpPojo e : list) {
					out.println("<tr><td>" + e.getId() + "</td><td>" + e.getName() + "</td><td>" + e.getDesignation()
							+ "</td><td>" + e.getAge() + "</td><td>" + e.getSalary() + "</td></tr>");
				}
			%>
		</table>
	</div>
</body>
</html>