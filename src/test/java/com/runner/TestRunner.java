package com.runner;

import org.junit.AfterClass;
import org.junit.runner.RunWith;

import com.BaseClass.UtilityClass;

import cucumber.api.CucumberOptions;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="src\\test\\resources\\Feature\\adactin.feature",monochrome=true,glue="com.stepdef",tags="@reg or @sanity or @smoke",
plugin= {"pretty","html:C:\\Users\\Navin Vishal M\\Downloads\\Abara's\\eclipse\\configuration\\AdacUsingCucumber\\Report\\html\\adac",
		"json:C:\\Users\\Navin Vishal M\\Downloads\\Abara's\\eclipse\\configuration\\AdacUsingCucumber\\Report\\json\\adac.json",
		"junit:C:\\Users\\Navin Vishal M\\Downloads\\Abara's\\eclipse\\configuration\\AdacUsingCucumber\\Report\\xml\\adac.xml"})
public class TestRunner  {
	
}
