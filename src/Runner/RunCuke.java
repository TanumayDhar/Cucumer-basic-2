package Runner;

import java.io.File;

import org.junit.BeforeClass;
import org.junit.runner.RunWith;

import com.cucumber.listener.ExtentCucumberFormatter;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features={"C:\\Users\\tanumay123\\Desktop\\Cucumber\\Workspace_photon\\CucumberSeleniumBasic\\src\\Feature"}
,
glue= {"Steps"},plugin= {"pretty","html:target/cucumberReport","com.cucumber.listener.ExtentCucumberFormatter"},
monochrome=true)


public class RunCuke {
	
	@BeforeClass	
	public static void setUp()
	{

		ExtentCucumberFormatter.initiateExtentCucumberFormatter();

		ExtentCucumberFormatter.loadConfig(new File("src/extent-config.xml"));

		ExtentCucumberFormatter.addSystemInfo("Browser name","Chrome");
		ExtentCucumberFormatter.addSystemInfo("Browser version ","V86");
		ExtentCucumberFormatter.addSystemInfo("Selenium Version","V3");

	}

}
