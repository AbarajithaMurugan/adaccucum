package com.BaseClass;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

public class UtilityClass {
	public static WebDriver driver;
	public static WebDriver launch() {
		
			
		
 System.setProperty("webdriver.chrome.driver","C:\\Users\\Navin Vishal M\\Downloads\\Abara's\\eclipse\\configuration\\AdacUsingCucumber\\driver\\chromedriver.exe");
 driver=new ChromeDriver();
	
		return driver;
	

	}
	public void ur(String url) {
		driver.get(url);

	}
	public void max(String url) {
		ur(url);
		driver.manage().window().maximize();
		impwait();

	}
	public void impwait() {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);

	}
	public void type(WebElement web,String fill) {
		
			web.sendKeys(fill);
		}
	public void click(WebElement web) {
		
		web.click();
		
	
	

}
	public void select(WebElement web,String text) {
		 new Select(web).selectByVisibleText(text);

	}
	public void sleep() throws InterruptedException {
	Thread.sleep(2000);

	}

		

	

}
