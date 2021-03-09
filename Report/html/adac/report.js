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
});