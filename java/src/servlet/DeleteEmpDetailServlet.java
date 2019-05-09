package servlet;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import bean.EmpBean;
import dao.EmpHibernateEntity;
import pojo.EmpPojo;

@WebServlet("/DeleteEmpDetailServlet")
public class DeleteEmpDetailServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		int id;
		if (request.getParameter("id").equals("")) {
			id = 0;
			request.setAttribute("msg", "ID cannot be null");
			RequestDispatcher rd = request.getRequestDispatcher("DeleteEmp.jsp");
			rd.forward(request, response);
		} else {
			id = Integer.parseInt(request.getParameter("id"));

			EmpPojo ep = new EmpPojo();
			ep.setId(id);
			EmpPojo emp = EmpBean.details(ep);

			request.setAttribute("data", emp);
			RequestDispatcher rd = request.getRequestDispatcher("DeleteEmpDetails.jsp");
			rd.forward(request, response);
		}
	}
}
