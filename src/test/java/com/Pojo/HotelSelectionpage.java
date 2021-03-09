package com.Pojo;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.BaseClass.UtilityClass;

public class HotelSelectionpage extends UtilityClass{
	public HotelSelectionpage() {
		PageFactory.initElements(driver, this);
	}
	@FindBy(id="radiobutton_4")
	private WebElement hotel;
	@FindBy(id="continue")
	private WebElement cont;
	public WebElement getHotel() {
		return hotel;
	}
	public WebElement getCont() {
		return cont;
	}
	public void selectinghotel() {
		click(getHotel());
		click(getCont());

	}

}
