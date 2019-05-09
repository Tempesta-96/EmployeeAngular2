<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Home page</title>

</head>
<style>
#header {
	text-align: center;
}

#home {
	float: center;
	text-align: center;
	border: 3px solid green;
	width: 100%;
}

#navigation {
	float: center;
}

#add {
	float: left;
	align: center;
	border-right: 3px solid green;
	border-left: 3px solid green;
	width: 25%;
}

#delete {
	float: left;
	align: center;
	border-right: 3px solid green;
	width: 25%;
}

#update {
	float: left;	
	align: center;
	border-right: 3px solid green;
	width: 24%;
}

#list {
	float: left;
	align: center;
	border-right: 3px solid green;
	width: 24%;
}


#ff {
	height: -webkit-fill-available;	
	width: 100%;
}
</style>
<body>

	<div id="header">
		<div id="home">
			<a href="Home.jsp">Home</a>
		</div>
		<div id="navigation">
			<div id="add">
				<a href="AddEmp.jsp" target="framing">Add Employee</a>
			</div>
			<div id="delete">
				<a href="DeleteEmp.jsp" target="framing">Delete Employee</a>
			</div>
			<div id="update">
				<a href="UpdateEmp.jsp" target="framing">Update Employee</a>
			</div>
			<div id="list">
				<a href="ListEmp.jsp" target="framing">List Employee</a>
			</div>
		</div>
	</div>

	<br>
	<div id="body">
		<div id="frame" class="col-sm-8">
			<iframe id="ff" name="framing"></iframe>
		</div>

	</div>
</body>
</html>