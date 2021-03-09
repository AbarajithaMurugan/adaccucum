Feature: verify Adactin page 



Background: login details
Given User on the adactin page 
When user login the page by passing Username and password

@reg @smoke

Scenario: booking the hotel 
When   User on the process of location,numberofrooms,checkindate,checkoutdate,Adultsperroom
When  User selected the hotel 
When user gives the first,last,bilingaddress,ccardnum,cctype,expmonth,expyear,cvv
Then  user moves to confirmation page 
@reg @sanity

Scenario Outline: select and book the hotel 
Given    User on the process of "<location>","<numberofrooms>","<checkindate>","<checkoutdate>","<Adultsperroom>"
When  User selected continue option
When user gives the "<first>","<last>","<bilingaddress>","<ccardnum>","<cctype>","<expmonth>","<expyear>","<cvv>"
Then  user confirms the booking


Examples:
|location|numberofrooms|checkindate|checkoutdate|Adultsperroom|first|last|bilingaddress|ccardnum|cctype|expmonth|expyear|cvv|
|Sydney|2 - Two|26/01/2021|27/01/2021|4 - Four|Abara|murugan|chennai|1234567890098765|VISA|December|2022|123|
|Melbourne|2 - Two|26/01/2021|27/01/2021|4 - Four|Abara2|murugan2|chennai|1234567890098765|VISA|December|2022|123|
|Brisbane|2 - Two|26/01/2021|27/01/2021|4 - Four|Abara3|murugan3|chennai|1234567890098765|VISA|December|2022|123|
|Adelaide|2 - Two|26/01/2021|27/01/2021|4 - Four|Abara4|murugan4|chennai|1234567890098765|VISA|December|2022|123|


