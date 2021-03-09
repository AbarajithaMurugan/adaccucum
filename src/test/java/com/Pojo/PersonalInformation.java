package com.Pojo;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.BaseClass.UtilityClass;

public class PersonalInformation extends UtilityClass {
	public PersonalInformation() {
		PageFactory.initElements(driver, this);
	}
	@FindBy(id="first_name")
	private WebElement first;
	@FindBy(id="last_name")
	private WebElement last;
	@FindBy(id="address")
	private WebElement bill;
	@FindBy(id="cc_num")
	private WebElement cardnum;
	@FindBy(id="cc_type")
	private WebElement cardtype;
	@FindBy(id="cc_exp_month")
	private WebElement month;
	@FindBy(id="cc_exp_year")
	private WebElement year;
	@FindBy(id="cc_cvv")
	private WebElement cvv;
	@FindBy(id="book_now")
	private WebElement book;
	public WebElement getFirst() {
		return first;
	}
	public WebElement getLast() {
		return last;
	}
	public WebElement getBill() {
		return bill;
	}
	public WebElement getCardnum() {
		return cardnum;
	}
	public WebElement getCardtype() {
		return cardtype;
	}
	public WebElement getMonth() {
		return month;
	}
	public WebElement getYear() {
		return year;
	}
	public WebElement getCvv() {
		return cvv;
	}
	public WebElement getBook() {
		return book;
	}
	public void info(String first, String last,String bilingaddress,String ccardnum,String cctype,String expmonth,String expyear,String cvv) {
		type(getFirst(), first);
		type(getLast(), last);
		type(getBill(), bilingaddress);
		type(getCardnum(), ccardnum);
		select(getCardtype(), cctype);
		select(getMonth(), expmonth);
		select(getYear(), expyear);
		type(getCvv(), cvv);
		click(getBook());

	}

}
