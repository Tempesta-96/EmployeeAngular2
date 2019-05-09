package bean;

import dao.UserHibernateDAO;
import pojo.UserPojo;

public class UserBean {

	public static boolean empLogin(UserPojo up) {
		// TODO Auto-generated method stub
		if(up.getUsername().equals("") || up.getPassword().equals("")) {
			return false;
		}
		else {
			if (UserHibernateDAO.login(up)== true) {
				return true;
			}
			return false;
		}
	}

	public static boolean register(UserPojo up) {
		// TODO Auto-generated method stub
		if (up.getUsername().equals("") || up.getPassword().equals("")){
			return false;
		}else {
			UserHibernateDAO.register(up);
			return true;
		}
	}
	

}
