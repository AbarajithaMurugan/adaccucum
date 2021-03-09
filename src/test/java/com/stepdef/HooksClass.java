package com.stepdef;

import com.BaseClass.UtilityClass;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class HooksClass extends UtilityClass{
	@Before
	private void beforeScenario() {
		//launch();
System.out.println("before every scenario");
	}
	@After
	private void aftermethod() {
		System.out.println("after every scenario");
		//driver.quit();
		

	}

}
