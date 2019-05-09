package dao;

import javax.persistence.*;

import pojo.UserPojo;

@Entity
@Table(name = "UserTable")
public class UserHibernateEntity {
	UserHibernateEntity() {

	}
	@Id
	@Column(name = "username")
	private String username;

	@Column(name = "password")
	private String password;

	public UserHibernateEntity(UserPojo up) {
		this.username = up.getUsername();
		this.password = up.getPassword();
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
}
