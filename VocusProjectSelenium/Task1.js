var webdriver = require('selenium-webdriver');
var until = webdriver.until;
var By = webdriver.By;


    var driver = new webdriver.Builder().
    withCapabilities(webdriver.Capabilities.chrome()).
    build();
	

//Go to login page of Vocus	
driver.get('https://one.vocus.net');	

//Add username
var username = driver.findElement(webdriver.By.name('username'));
username.sendKeys('testuser@vocus.com.au');

//Add password
var password = driver.findElement(webdriver.By.name('password'));
password.sendKeys('vocus1234');

//Click SignIn button
var signInButton= driver.findElement(webdriver.By.id('signin-button'));
signInButton.click();

//Wait for page Load
driver.manage().timeouts().implicitlyWait(10000);
	
//Click the New button
var newButton= driver.findElement(webdriver.By.id('newButton'));
newButton.click();

driver.manage().timeouts().implicitlyWait(3000);

//Click the Quote button

	//Find the parent node
	var parentNode= driver.findElement(webdriver.By.id('new-dropdown--quote'));
	//Find the quote node
	var quoteNode= parentNode.findElement(webdriver.By.css('span'));
	//Click the quote node
	quoteNode.click();
	
driver.manage().timeouts().implicitlyWait(5000);	
    
//Click the Ethernet button
var ethernetButton= driver.findElement(webdriver.By.id('product-block--ethernet'));
ethernetButton.click();

driver.manage().timeouts().implicitlyWait(5000);


driver.manage().window().setSize(1280, 1024);

//Add Start Point
var startButton= driver.findElement(webdriver.By.id('startPosition1'));
startButton.click();

//Search for start address
var address= driver.findElement(webdriver.By.id('address-search'));
address.sendKeys("100 Arthur Street, North Sydney NSW 2060");
address.sendKeys(webdriver.Key.ENTER);

driver.wait(until.elementLocated(By.linkText('100 Arthur Street, North Sydney NSW 2060')), 50 * 1000).then(function(elm) {
    var predictiveText= driver.findElement(webdriver.By.linkText('100 Arthur Street, North Sydney NSW 2060'));
	var predictiveText= driver.findElement(webdriver.By.linkText('100 Arthur Street, North Sydney NSW 2060'));
	var predictiveText= driver.findElement(webdriver.By.linkText('100 Arthur Street, North Sydney NSW 2060'));
	predictiveText.click();
  
});



setTimeout(clickConfirm,30000);

function clickConfirm () {	
	var confirmButton= driver.findElement(webdriver.By.id('site-confirm-btn'));
    confirmButton.click();

     
}


setTimeout(selectEnd,45000);

function selectEnd(){
	
	var endButton= driver.findElement(webdriver.By.id('endPosition1'));
    endButton.click();
	var address= driver.findElement(webdriver.By.id('address-search'));
    address.sendKeys("1 Charles Street, Parramatta, NSW, 2150, Australia");
    //address.sendKeys(webdriver.Key.ENTER);
    address.sendKeys(webdriver.Key.ENTER);
	//address.clear();
	//address.sendKeys("1 Charles Street, Parramatta NSW 2150, Australia");
    address.sendKeys(webdriver.Key.ENTER);
    address.clear();
	address.sendKeys("1 Charles Street, Parramatta NSW 2150, Australia");
    //address.sendKeys(webdriver.Key.ENTER);
    //address.clear();
	//address.sendKeys("1 Charles Street, Parramatta NSW 2150, Australia");
    //address.sendKeys(webdriver.Key.ENTER);
    //address.clear();
	//address.sendKeys("1 Charles Street, Parramatta NSW 2150, Australia");
    //address.sendKeys(webdriver.Key.ENTER);
    
	
	driver.wait(until.elementLocated(By.linkText('1 Charles Street, Parramatta, NSW, 2150, Australia')), 50 * 1000).then(function(elm) {
    var predictiveText= driver.findElement(webdriver.By.linkText('1 Charles Street, Parramatta, NSW, 2150, Australia'));
	var predictiveText= driver.findElement(webdriver.By.linkText('1 Charles Street, Parramatta, NSW, 2150, Australia'));
	var predictiveText= driver.findElement(webdriver.By.linkText('1 Charles Street, Parramatta, NSW, 2150, Australia'));
	predictiveText.click();
  
});


}//end function


setTimeout(clickConfirmAgain,75000);

function clickConfirmAgain () {
    
	var confirmButton= driver.findElement(webdriver.By.id('site-confirm-btn'));
    confirmButton.click();

     
}

setTimeout(viewAllQuote,130000);

function viewAllQuote(){
	
	driver.get('https://one.vocus.net/app/quotes/');
	setTimeout(findNewQuote,150000);
	
}

function findNewQuote(){
	
	var parentNode= driver.findElement(webdriver.By.css('span[class="alwaystop"]'));
	var spanNode= parentNode.findElement(webdriver.By.css('span'))
	spanNode.getText().then(text => console.log(`Text is `));
	
}



/*
setTimeout(saveQuote,130000);

function saveQuote(){
	//var saveButton= driver.findElement(webdriver.By.id('validProductsSave'));
    saveButton.click();
     
	
}
*/

//setTimeout(viewQuote,120000);

/*
function viewQuote(){
	
	var viewQuote= driver.findElement(webdriver.By.id('validProductsViewquote'))
    viewQuote.click();
          
	
	
}
*/





