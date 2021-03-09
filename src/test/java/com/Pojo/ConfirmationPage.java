package com.Pojo;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.FindBys;
import org.openqa.selenium.support.PageFactory;

import com.BaseClass.UtilityClass;

public class ConfirmationPage extends UtilityClass {
	public ConfirmationPage() {
		PageFactory.initElements(driver, this);
	}
	@FindBy(id="order_no")
	private WebElement orderno;
	public WebElement getOrderno() {
		return orderno;
	}
	public void confirm() {
		System.out.println(getOrderno().getAttribute("value"));

	}

}
