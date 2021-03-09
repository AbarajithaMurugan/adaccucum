$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Feature/adactin.feature");
formatter.feature({
  "name": "verify Adactin page",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "login details",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User on the adactin page",
  "keyword": "Given "
});
formatter.match({
  "location": "AdactinDefination.user_on_the_adactin_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user login the page by passing Username and password",
  "keyword": "When "
});
formatter.match({
  "location": "AdactinDefination.user_login_the_page_by_passing_Username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "booking the hotel",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@reg"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "User on the process of location,numberofrooms,checkindate,checkoutdate,Adultsperroom",
  "keyword": "When "
});
formatter.match({
  "location": "AdactinDefination.user_on_the_process_of_location_numberofrooms_checkindate_checkoutdate_Adultsperroom()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selected the hotel",
  "keyword": "When "
});
formatter.match({
  "location": "AdactinDefination.user_selected_the_hotel()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user gives the first,last,bilingaddress,ccardnum,cctype,expmonth,expyear,cvv",
  "keyword": "When "
});
formatter.match({
  "location": "AdactinDefination.user_gives_the_first_last_bilingaddress_ccardnum_cctype_expmonth_expyear_cvv()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user moves to confirmation page",
  "keyword": "Then "
});
formatter.match({
  "location": "AdactinDefination.user_moves_to_confirmation_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "select and book the hotel",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@reg"
    },
    {
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "name": "User on the process of \"\u003clocation\u003e\",\"\u003cnumberofrooms\u003e\",\"\u003ccheckindate\u003e\",\"\u003ccheckoutdate\u003e\",\"\u003cAdultsperroom\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "User selected continue option",
  "keyword": "When "
});
formatter.step({
  "name": "user gives the \"\u003cfirst\u003e\",\"\u003clast\u003e\",\"\u003cbilingaddress\u003e\",\"\u003cccardnum\u003e\",\"\u003ccctype\u003e\",\"\u003cexpmonth\u003e\",\"\u003cexpyear\u003e\",\"\u003ccvv\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user confirms the booking",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "location",
        "numberofrooms",
        "checkindate",
        "checkoutdate",
        "Adultsperroom",
        "first",
        "last",
        "bilingaddress",
        "ccardnum",
        "cctype",
        "expmonth",
        "expyear",
        "cvv"
      ]
    },
    {
      "cells": [
        "Sydney",
        "2 - Two",
        "26/01/2021",
        "27/01/2021",
        "4 - Four",
        "Abara",
        "murugan",
        "chennai",
        "1234567890098765",
        "VISA",
        "December",
        "2022",
        "123"
      ]
    },
    {
      "cells": [
        "Melbourne",
        "2 - Two",
        "26/01/2021",
        "27/01/2021",
        "4 - Four",
        "Abara2",
        "murugan2",
        "chennai",
        "1234567890098765",
        "VISA",
        "December",
        "2022",
        "123"
      ]
    },
    {
      "cells": [
        "Brisbane",
        "2 - Two",
        "26/01/2021",
        "27/01/2021",
        "4 - Four",
        "Abara3",
        "murugan3",
        "chennai",
        "1234567890098765",
        "VISA",
        "December",
        "2022",
        "123"
      ]
    },
    {
      "cells": [
        "Adelaide",
        "2 - Two",
        "26/01/2021",
        "27/01/2021",
        "4 - Four",
        "Abara4",
        "murugan4",
        "chennai",
        "1234567890098765",
        "VISA",
        "December",
        "2022",
        "123"
      ]
    }
  ]
});
formatter.background({
  "name": "login details",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User on the adactin page",
  "keyword": "Given "
});
formatter.match({
  "location": "AdactinDefination.user_on_the_adactin_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user login the page by passing Username and password",
  "keyword": "When "
});
formatter.match({
  "location": "AdactinDefination.user_login_the_page_by_passing_Username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "select and book the hotel",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@reg"
    },
    {
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "name": "User on the process of \"Sydney\",\"2 - Two\",\"26/01/2021\",\"27/01/2021\",\"4 - Four\"",
  "keyword": "Given "
});
formatter.match({
  "location": "AdactinDefination.user_on_the_process_of(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selected continue option",
  "keyword": "When "
});
formatter.match({
  "location": "AdactinDefination.user_selected_continue_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user gives the \"Abara\",\"murugan\",\"chennai\",\"1234567890098765\",\"VISA\",\"December\",\"2022\",\"123\"",
  "keyword": "When "
});
formatter.match({
  "location": "AdactinDefination.user_gives_the(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user confirms the booking",
  "keyword": "Then "
});
formatter.match({
  "location": "AdactinDefination.user_confirms_the_booking()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "login details",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User on the adactin page",
  "keyword": "Given "
});
formatter.match({
  "location": "AdactinDefination.user_on_the_adactin_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user login the page by passing Username and password",
  "keyword": "When "
});
formatter.match({
  "location": "AdactinDefination.user_login_the_page_by_passing_Username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "select and book the hotel",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@reg"
    },
    {
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "name": "User on the process of \"Melbourne\",\"2 - Two\",\"26/01/2021\",\"27/01/2021\",\"4 - Four\"",
  "keyword": "Given "
});
formatter.match({
  "location": "AdactinDefination.user_on_the_process_of(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selected continue option",
  "keyword": "When "
});
formatter.match({
  "location": "AdactinDefination.user_selected_continue_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user gives the \"Abara2\",\"murugan2\",\"chennai\",\"1234567890098765\",\"VISA\",\"December\",\"2022\",\"123\"",
  "keyword": "When "
});
formatter.match({
  "location": "AdactinDefination.user_gives_the(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user confirms the booking",
  "keyword": "Then "
});
formatter.match({
  "location": "AdactinDefination.user_confirms_the_booking()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "login details",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User on the adactin page",
  "keyword": "Given "
});
formatter.match({
  "location": "AdactinDefination.user_on_the_adactin_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user login the page by passing Username and password",
  "keyword": "When "
});
formatter.match({
  "location": "AdactinDefination.user_login_the_page_by_passing_Username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "select and book the hotel",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@reg"
    },
    {
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "name": "User on the process of \"Brisbane\",\"2 - Two\",\"26/01/2021\",\"27/01/2021\",\"4 - Four\"",
  "keyword": "Given "
});
formatter.match({
  "location": "AdactinDefination.user_on_the_process_of(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selected continue option",
  "keyword": "When "
});
formatter.match({
  "location": "AdactinDefination.user_selected_continue_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user gives the \"Abara3\",\"murugan3\",\"chennai\",\"1234567890098765\",\"VISA\",\"December\",\"2022\",\"123\"",
  "keyword": "When "
});
formatter.match({
  "location": "AdactinDefination.user_gives_the(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user confirms the booking",
  "keyword": "Then "
});
formatter.match({
  "location": "AdactinDefination.user_confirms_the_booking()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "login details",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User on the adactin page",
  "keyword": "Given "
});
formatter.match({
  "location": "AdactinDefination.user_on_the_adactin_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user login the page by passing Username and password",
  "keyword": "When "
});
formatter.match({
  "location": "AdactinDefination.user_login_the_page_by_passing_Username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "select and book the hotel",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@reg"
    },
    {
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "name": "User on the process of \"Adelaide\",\"2 - Two\",\"26/01/2021\",\"27/01/2021\",\"4 - Four\"",
  "keyword": "Given "
});
formatter.match({
  "location": "AdactinDefination.user_on_the_process_of(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selected continue option",
  "keyword": "When "
});
formatter.match({
  "location": "AdactinDefination.user_selected_continue_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user gives the \"Abara4\",\"murugan4\",\"chennai\",\"1234567890098765\",\"VISA\",\"December\",\"2022\",\"123\"",
  "keyword": "When "
});
formatter.match({
  "location": "AdactinDefination.user_gives_the(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#first_name\"}\n  (Session info: chrome\u003d87.0.4280.141)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-B1AQU68\u0027, ip: \u0027192.168.169.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_261\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 87.0.4280.141, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\Navin Vishal M\\App...}, goog:chromeOptions: {debuggerAddress: localhost:58224}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: f71cc53dfc5c71d9cd910ceba1df69b5\n*** Element info: {Using\u003did, value\u003dfirst_name}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy14.sendKeys(Unknown Source)\r\n\tat com.BaseClass.UtilityClass.type(UtilityClass.java:39)\r\n\tat com.Pojo.PersonalInformation.info(PersonalInformation.java:59)\r\n\tat com.stepdef.AdactinDefination.user_gives_the(AdactinDefination.java:82)\r\n\tat ✽.user gives the \"Abara4\",\"murugan4\",\"chennai\",\"1234567890098765\",\"VISA\",\"December\",\"2022\",\"123\"(src/test/resources/Feature/adactin.feature:21)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user confirms the booking",
  "keyword": "Then "
});
formatter.match({
  "location": "AdactinDefination.user_confirms_the_booking()"
});
formatter.result({
  "status": "skipped"
});
});