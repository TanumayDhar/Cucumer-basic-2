package Steps;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class CarSearchSteps {

	public static WebDriver driver;

	@Before
	public void Setup()
	{
		System.setProperty("webdriver.chrome.driver", "C:\\Softwares\\chromedriver.exe");
		driver=new ChromeDriver();

	}
	@After
	public void TeardOwn(Scenario scenario)
	{
		if(scenario.isFailed())
		{
			byte[] screenshotBytes = ((TakesScreenshot)
					driver).getScreenshotAs(OutputType.BYTES);
			scenario.embed(screenshotBytes, "image/png");
		}
		if(driver != null)
		{
			driver.quit();
		}

	}

	@Given("^I am on the home page https://www\\.carsguide\\.com\\.au/$")
	public void i_am_on_the_home_page_https_www_carsguide_com_au() throws Throwable
	{

		driver.get("https://www.carsguide.com.au/");
		driver.manage().window().maximize();
	}

	@When("^I move to buy\\+sale menu$")
	public void i_move_to_buy_sale_menu() throws Throwable 
	{
		//mouse hover
		WebElement bySell= driver.findElement(By.xpath("//*[@id=\"u_H\"]/div/div[1]/ul/li[1]/a"));
		Actions act= new Actions(driver);
		act.moveToElement(bySell).perform();
		Thread.sleep(2000);
	}

	@Then("^I click for Search Cars$")
	public void i_click_for_Search_Cars() throws Throwable 
	{
		//ERROR
		//driver.findElement(By.xpath("//*[@id=\"u_H\"]/div/div[1]/ul/li[1]/div/div/div[1]/ul/li[1]/a")).click();
		driver.findElement(By.xpath("//*[@id=\"u_H\"]/div/div[1]/ul/li[1]/div/div/div[1]/ul/li[1]/aaaaa")).click();
	}

	@Then("^I select Make as \"([^\"]*)\"$")
	public void i_select_Make_as(String Anymake) throws Throwable 
	{
		Thread.sleep(2000);
		WebElement Newmake=driver.findElement(By.id("makes"));
		Select make= new Select(Newmake);
		make.selectByValue(Anymake);

	}

	@Then("^I select model as \"([^\"]*)\"$")
	public void i_select_model_as(String carModel) throws Throwable 
	{
		Thread.sleep(2000);
		WebElement model=driver.findElement(By.id("models"));
		Select make1= new Select(model);
		make1.selectByValue(carModel);


	}

	@Then("^I select Location as \"([^\"]*)\"$")
	public void i_select_Location_as(String setLoc) throws Throwable 
	{
		Thread.sleep(2000);
		WebElement loc=driver.findElement(By.id("locations"));
		Select make2= new Select(loc);
		make2.selectByValue(setLoc);


	}

	@Then("^I select Price as \"([^\"]*)\"$")
	public void i_select_Price_as(String carPrice) throws Throwable
	{
		Thread.sleep(2000);
		WebElement price=driver.findElement(By.id("priceTo"));
		Select make3= new Select(price);
		//make3.selectByValue("$20,000");
		make3.selectByVisibleText(carPrice);
		Thread.sleep(2000);


	}

	@Then("^I click Find my next car button option$")
	public void i_click_Find_my_next_car_button_option() throws Throwable 
	{
		driver.findElement(By.id("search-submit")).click();
	}

	@Then("^I should see list of cars$")
	public void i_should_see_list_of_cars() throws Throwable 
	{
		Thread.sleep(2000);
		Assert.assertTrue(driver.findElement(By.xpath("//*[@id=\"pos0\"]/div[2]/div[2]/div[1]/div[1]/h5")).getText().contains("Audi"));

	}

	@Then("^the page title should be \"([^\"]*)\"$")
	public void the_page_title_should_be(String expected) throws Throwable 
	{

		Assert.assertEquals(expected , driver.getTitle());

	}


}
