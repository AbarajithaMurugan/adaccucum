package com.Pojo;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.BaseClass.UtilityClass;

public class LoginPage extends UtilityClass{
	public LoginPage() {
		PageFactory.initElements(driver, this);
	}
	@FindBy(id="username")
	private WebElement user;
	@FindBy(id="password")
	private WebElement pwd;
	@FindBy(id="login")
private WebElement login;
	public WebElement getUser() {
		return user;
	}
	public WebElement getPwd() {
		return pwd;
	}
	public WebElement getLogin() {
		return login;
	}
	public void login(String Username,String password) {
		type(getUser(), Username);
		type(getPwd(), password);
		click(getLogin());
		
		

	}

}
