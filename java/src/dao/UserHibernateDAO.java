package dao;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Parameter;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.query.Query;

import pojo.UserPojo;

public class UserHibernateDAO {

	public static boolean login(UserPojo up) {
		// TODO Auto-generated method stub
		SessionFactory sf = null;
		Session session = null;
		Transaction tr = null;

		try {
			sf = dao.HibernateUtil.getSessionFactory();
			session = sf.openSession();
			tr = session.beginTransaction();
			String name ="'"+up.getUsername()+"'";
			UserHibernateEntity uhe = new UserHibernateEntity(up);
			String hql = "Select password from UserHibernateEntity where username = "+name;
			List tmp = session.createQuery(hql).list();
			if (up.getPassword().equals(tmp.get(0))) {
				return true;
			};
		} catch (Exception e) {
			e.printStackTrace();
		}
		finally {
			session.close();
		}
		return false;
	}

	public static void register(UserPojo up) {
		// TODO Auto-generated method stub
		SessionFactory sf = null;
		Session session = null;
		Transaction tr = null;
		System.out.println(up.getUsername());
		System.out.println(up.getPassword());
		try {
			sf = dao.HibernateUtil.getSessionFactory();
			session = sf.openSession();
			tr = session.beginTransaction();
			UserHibernateEntity uhe = new UserHibernateEntity(up);
			session.save(uhe);
			tr.commit();
		} catch (Exception e) {
			System.out.println(e);
			tr.rollback();
			session.close();
		}
	}

}
