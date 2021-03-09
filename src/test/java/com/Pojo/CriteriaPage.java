package com.Pojo;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.BaseClass.UtilityClass;

public class CriteriaPage extends UtilityClass{
	public CriteriaPage() {
		PageFactory.initElements(driver, this);
	}
	@FindBy(id="location")
	private WebElement loc;
	@FindBy(id="room_nos")
	private WebElement numberofrooms;
	@FindBy(id="datepick_in")
	private WebElement d1;
	@FindBy(id="datepick_out")
	private WebElement d2;
	@FindBy(id="adult_room")
	private WebElement adltroom;
	@FindBy(id="Submit")
	private WebElement search;
	public WebElement getLoc() {
		return loc;
		
	}
	
	public WebElement getNumberofrooms() {
		return numberofrooms;
	}
	public WebElement getD1() {
		return d1;
	}
	public WebElement getD2() {
		return d2;
	}
	public WebElement getAdltroom() {
		return adltroom;
	}
	public WebElement getSearch() {
		return search;
	}
	public void criteria(String location,String numberofrooms,String checkindate,String checkoutdate,String Adultsperroom  ) {
		select(getLoc(),location );
		select(getNumberofrooms(), numberofrooms);
		type(getD1(), checkindate);
		type(getD2(), checkoutdate);
		select(getAdltroom(), Adultsperroom);
		click(getSearch());

	}
}
