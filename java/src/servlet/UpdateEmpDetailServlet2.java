package servlet;

import java.io.IOException;
import java.util.stream.Collectors;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.codehaus.jackson.map.ObjectMapper;
import org.codehaus.jackson.map.ObjectWriter;

import com.google.gson.Gson;

import bean.EmpBean;
import pojo.EmpPojo;

/**
 * Servlet implementation class UpdateEmpDetailServlet2
 */
@WebServlet("/UpdateEmpDetailServlet2")
public class UpdateEmpDetailServlet2 extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		
		response.addHeader("Access-Control-Allow-Origin", "*");
		response.addHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE, HEAD");
		response.addHeader("Access-Control-Allow-Headers",
				"X-PINGOTHER, Origin, X-Requested-With, Content-Type, Accept");
		response.addHeader("Access-Control-Max-Age", "1728000");

		String x = request.getReader().lines().collect(Collectors.joining());
		
		Gson g = new Gson();
		EmpPojo emp = g.fromJson(x, EmpPojo.class);
		
//		int id = Integer.parseInt(request.getParameter("id"));
//		String name = request.getParameter("name");
//		String designation = request.getParameter("designation");
//		int age = Integer.parseInt(request.getParameter("age"));
//		int salary = Integer.parseInt(request.getParameter("salary"));
//
//		String[] beansXMLFiles = new String[] { "C:/Users/725723/eclipse-workspace/EmpProject/WebContent/WEB-INF/classes/beans-aspect.xml", 
//		"C:/Users/725723/eclipse-workspace/EmpProject/WebContent/WEB-INF/classes/beans.xml" };
//		ApplicationContext context = new FileSystemXmlApplicationContext(beansXMLFiles);
//		EmpBean emp = (EmpBean) context.getBean("update");
//		
//		EmpPojo ep = new EmpPojo(name, designation, age, salary, id);
		EmpBean.updateEmp(emp);

//		request.setAttribute("msg", ep);
//		RequestDispatcher rd = request.getRequestDispatcher("UpdateEmpResults.jsp");
//		rd.forward(request, response);
		
		ObjectWriter ow = new ObjectMapper().writer().withDefaultPrettyPrinter();
		String json = ow.writeValueAsString(emp);
		response.setContentType("application/json");
	    response.setCharacterEncoding("UTF-8");
	    response.getWriter().write(json);
	    System.out.println(json);

	}

}
