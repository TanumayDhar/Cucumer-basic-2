$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("carSearch.feature");
formatter.feature({
  "line": 1,
  "name": "Validation of car search page",
  "description": "In order to validate car search \r\nas a buyer\r\nI want to navigate http://www.carsguide.com.au",
  "id": "validation-of-car-search-page",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3687416800,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Searching for a new car",
  "description": "",
  "id": "validation-of-car-search-page;searching-for-a-new-car",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "I am on the home page https://www.carsguide.com.au/",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I move to buy+sale menu",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click for Search Cars",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I select Make as \"Audi\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select model as \"A1\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select Location as \"NSW - Central Coast\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select Price as \"$50,000\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click Find my next car button option",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should see list of cars",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "the page title should be \"Audi A1 Under 50000 for Sale Central Coast NSW | carsguide\"",
  "keyword": "And "
});
formatter.match({
  "location": "CarSearchSteps.i_am_on_the_home_page_https_www_carsguide_com_au()"
});
formatter.result({
  "duration": 9847710100,
  "status": "passed"
});
formatter.match({
  "location": "CarSearchSteps.i_move_to_buy_sale_menu()"
});
formatter.result({
  "duration": 2171307700,
  "status": "passed"
});
formatter.match({
  "location": "CarSearchSteps.i_click_for_Search_Cars()"
});
formatter.result({
  "duration": 31740400,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\"u_H\"]/div/div[1]/ul/li[1]/div/div/div[1]/ul/li[1]/aaaaa\"}\n  (Session info: chrome\u003d86.0.4240.75)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:53\u0027\nSystem info: host: \u0027DESKTOP-QTN1F52\u0027, ip: \u0027192.168.43.20\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_261\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.75, chrome: {chromedriverVersion: 85.0.4183.87 (cd6713ebf92fa..., userDataDir: C:\\Users\\TANUMA~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:60758}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: c155fc084d0117b6a80990bb210aba37\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"u_H\"]/div/div[1]/ul/li[1]/div/div/div[1]/ul/li[1]/aaaaa}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat Steps.CarSearchSteps.i_click_for_Search_Cars(CarSearchSteps.java:70)\r\n\tat ✽.Then I click for Search Cars(carSearch.feature:9)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Audi",
      "offset": 18
    }
  ],
  "location": "CarSearchSteps.i_select_Make_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "A1",
      "offset": 19
    }
  ],
  "location": "CarSearchSteps.i_select_model_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - Central Coast",
      "offset": 22
    }
  ],
  "location": "CarSearchSteps.i_select_Location_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "$50,000",
      "offset": 19
    }
  ],
  "location": "CarSearchSteps.i_select_Price_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CarSearchSteps.i_click_Find_my_next_car_button_option()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CarSearchSteps.i_should_see_list_of_cars()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Audi A1 Under 50000 for Sale Central Coast NSW | carsguide",
      "offset": 26
    }
  ],
  "location": "CarSearchSteps.the_page_title_should_be(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 1386466000,
  "status": "passed"
});
});