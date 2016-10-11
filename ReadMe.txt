Task Number:1

Folder Name: VocusProjectSelenium

Technologies used: Node.js, seleniumWebDriver JS Bindings, Javascript

Project Description:
The following workflows have been automated
		Sign in (using the account given above) -> new -> quote -> Ethernet ->
		start point -> 100 Arthur Street, North Sydney NSW 2060 ->
		select the address in predictive text -> confirm ->
		end point -> 1 Charles Street, Parramatta NSW 2150, Australia ->
		select address in predictive text -> confirm ->
		View all quotes

Way to Run: From command line enter the task folder and type Node Task1.js
-------------------------------------------------------------------------------------------

Task Number: 2

FolderName: VocusProjectAPI

Technologies used: Frisby.js, Javascript

Project Desciption:
The given URL in the question paper resulted in an error page when making a GET request. So instead the url
used was "https://api.vocus.net/0.0.0/availability/173%20King%20St,%20Sydney%20NSW%202000,%20Australia".

The followings have been tested with the script:
	The status code of the response
  	Expected text in the response
	Expected response time

Way to run: From the command line enter the task folder and then type jasmine-node Task2.js