package com.stepdef;

import com.BaseClass.UtilityClass;
import com.Pojo.ConfirmationPage;
import com.Pojo.CriteriaPage;
import com.Pojo.HotelSelectionpage;
import com.Pojo.LoginPage;
import com.Pojo.PersonalInformation;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class AdactinDefination extends UtilityClass {
	 LoginPage log;
	 CriteriaPage cp;
	 HotelSelectionpage hp;
	 PersonalInformation pi;
	  @Given("User on the adactin page")
	  public void user_on_the_adactin_page() {
	   launch();
	      max("https://adactinhotelapp.com/");
	      
	  }

	  @When("user login the page by passing Username and password")
	  public void user_login_the_page_by_passing_Username_and_password() {
	      log=new LoginPage();
	      
	    log.login("Abarajitha", "9Z17ON");
	      
	  }

	  @When("User on the process of location,numberofrooms,checkindate,checkoutdate,Adultsperroom")
	  public void user_on_the_process_of_location_numberofrooms_checkindate_checkoutdate_Adultsperroom() {
		   cp=new CriteriaPage();
		   cp.criteria("London","3 - Three", "26/1/2021", "27/1/2021", "3 - Three");
		   System.out.println("reg and smoke");
	      
	  }

	  @When("User selected the hotel")
	  public void user_selected_the_hotel() {
		  hp=new  HotelSelectionpage();
		  hp.selectinghotel();
		  System.out.println("reg and smoke");
	  }

	  @When("user gives the first,last,bilingaddress,ccardnum,cctype,expmonth,expyear,cvv")
	  public void user_gives_the_first_last_bilingaddress_ccardnum_cctype_expmonth_expyear_cvv() {
		  pi=new PersonalInformation();
		  pi.info("abz", "murugan", "xyz", "1234567890098765", "VISA", "December", "2022", "234");
		  System.out.println("reg and smoke");
	      
	  }

	  @Then("user moves to confirmation page")
	  public void user_moves_to_confirmation_page() {
		  System.out.println("ovr");
			ConfirmationPage cp=new ConfirmationPage();
			cp.confirm();
			 System.out.println("reg and smoke");
	      
	  }
	  @Given("User on the process of {string},{string},{string},{string},{string}")
	  public void user_on_the_process_of(String string, String string2, String string3, String string4, String string5) {
		  cp=new CriteriaPage();
		  cp.criteria(string, string2, string3, string4, string5);
	     System.out.println("reg and sanity");
	  }
	  @When("User selected continue option")
	  public void user_selected_continue_option() {
		  hp=new  HotelSelectionpage();
		  hp.selectinghotel();
		  System.out.println("reg and sanity");
	  }


	  @When("user gives the {string},{string},{string},{string},{string},{string},{string},{string}")
	  public void user_gives_the(String string, String string2, String string3, String string4, String string5, String string6, String string7, String string8) {
		  pi=new PersonalInformation();
		  pi.info(string, string2, string3, string4, string5, string6, string7, string8);
		  System.out.println("reg and sanity");
	  }
	  @Then("user confirms the booking")
	  public void user_confirms_the_booking() {
		 
			ConfirmationPage cp=new ConfirmationPage();
			cp.confirm();
			 System.out.println("outline ovr");
			 System.out.println("reg and sanity");
	  }











}
