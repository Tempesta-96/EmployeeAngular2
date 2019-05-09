package servlet;

import java.io.IOException;
import java.util.stream.Collectors;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

import bean.EmpBean;
import bean.UserBean;
import pojo.EmpPojo;
import pojo.UserPojo;

/**
 * Servlet implementation class RegisterEmpServlet
 */
@WebServlet("/RegisterEmpServlet")
public class RegisterEmpServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
//		String username = request.getParameter("username");
//		String password = request.getParameter("password");
//		String password1 = request.getParameter("password1");
//		System.out.println(username);
//		System.out.println(password);
//		System.out.println(password1);
//		if(password.equals(password1)) {
//			UserPojo up = new UserPojo(username, password);
//			if(UserBean.register(up)== true) {
//				request.setAttribute("msg", up);
//				RequestDispatcher rd = request.getRequestDispatcher("Home.jsp");
//				rd.forward(request, response);
//			}
//			else {
//				request.setAttribute("msg", "Username and password cannot be null");
//				RequestDispatcher rd = request.getRequestDispatcher("RegisterEmp.jsp");
//				rd.forward(request, response);
//			}
//		}
//		else {
//			request.setAttribute("msg", "Password mismatch");
//			RequestDispatcher rd = request.getRequestDispatcher("RegisterEmp.jsp");
//			rd.forward(request, response);
//		}
		
		response.addHeader("Access-Control-Allow-Origin", "*");
		response.addHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE, HEAD");
		response.addHeader("Access-Control-Allow-Headers",
				"X-PINGOTHER, Origin, X-Requested-With, Content-Type, Accept");
		response.addHeader("Access-Control-Max-Age", "1728000");

		String x = request.getReader().lines().collect(Collectors.joining());

		Gson g = new Gson();
		UserPojo user = g.fromJson(x, UserPojo.class);
//		String msg = null;
//		UserPojo user = null;
//		user.setUsername("name");
//		user.setPassword("password");
//		if (user.getUsername().equals("") || user.getPassword().equals(""))
//			msg = "{"
//					+ "\"msg\": \"Message cannot be null\""
//					+ "}";
//		else {
			UserBean.register(user);
//		}
//		
//		if (msg != null) {
//			String json = new Gson().toJson(msg);
//			response.setContentType("application/json");
//		    response.setCharacterEncoding("UTF-8");
//		    response.getWriter().write(json);
//		}
//		else {
			String json = new Gson().toJson(user);
			response.setContentType("application/json");
		    response.setCharacterEncoding("UTF-8");
		    response.getWriter().write(json);
//		}
	}



}
