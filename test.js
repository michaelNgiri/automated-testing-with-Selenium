

const {Builder, By, Key, until} = require('selenium-webdriver');
const assert = require('assert')

var testResults=[0,0,0,0];

(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
	await driver.get('https://commerceos.staging.devpayever.com/entry/login');

	await driver.wait(until.elementLocated(By.id('mat-input-0'), 10000)).sendKeys('aqa@payever.org')
	.then(() => {
		testResults[0]=1
		console.log('Email entered')
	})
	.catch(()=>{
		testResults[0]=0
	});

	 await driver.wait(until.elementLocated(By.id('mat-input-1'), 10000)).sendKeys('Aqacool123!')
	.then(() => console.log('Password entered'));


	await driver.wait(until.elementLocated(By.className('mat-raised-button'), 10000)).click()
	.then(() => console.log('Submit button clicked'));

	await driver.wait(until.elementLocated(By.xpath('//*[@id="os-app-main"]/switcher-profile-list/pe-profile-switcher/div/div/div/div/pe-profile-switcher-card/div/mat-card/mat-card-content/div[2]/div/div'), 10000)).click()
	.then(() => console.log('Business account selected'));

	await driver.wait(until.elementLocated(By.xpath('//*[@id="os-app-main"]/os-commerce-root/platform-header-component/pe-platform-header/pe-navbar/mat-toolbar/div[1]/button[2]/span/span'), 10000)).click()
	.then(()=> console.log('Apps button clicked'));

	await driver.wait(until.elementLocated(By.xpath('//*[@id="os-app-main"]/os-commerce-root/div[2]/span/business-layout/apps-layout/div/div/app-card/div/mat-card/div[1]/business-applications/div[7]/div[1]'), 10000)).click()
	.then(()=> console.log('shops App found'));

	await driver.wait(until.elementLocated(By.xpath('//*[@id="os-app-main"]/os-commerce-root/platform-header-component/pe-platform-header/pe-navbar[1]/mat-toolbar/div[1]/button[3]/span/span'), 10000)).click()
	.then(()=> console.log('Themes button found'));

	await driver.wait(until.elementLocated(By.xpath('//*[@id="os-app-main"]/os-commerce-root/div[2]/div/app-builder/pe-builder-themes-list/div[2]/pe-builder-themes-list-user/div/pe-builder-theme-plus/mat-card/mat-card-content'), 10000)).click()
	.then(()=> console.log('Theme added'));

	await driver.wait(until.elementLocated(By.xpath('//*[@id="menus"]/pe-builder-navbar-top/mat-toolbar/mat-toolbar-row/pe-builder-navbar-top-button[4]/button/span/img'), 10000)).click()
	.then(()=> console.log('Text placed on canvas'));

	// await driver.wait(until.elementLocated(By.xpath('//*[@id="content"]/div[2]/pe-editor-text-decorator/peb-text-editor/div'), 10000)).click()
	// .then(()=> console.log('Canvas text clicked'));
	

	// const shadow = await findShadowDomElement()
	// console.log(shadow)

	await driver.wait(until.elementLocated(By.xpath('//*[@id="os-app-main"]/os-commerce-root/platform-header-component/pe-platform-header/pe-navbar/mat-toolbar/div[3]/button/span/span'), 10000)).click()
	.then(()=> console.log('Closing...'));
	
	
	
// const shadowRoot="shadowRoot"
// 	async function locateShadowRootElement(shadowRoot) {
// 	const el =	await driver.wait(until.elementLocated(By.css(shadowRoot)), 5000);
// 	console.log(el)
// 	  }
// 	  locateShadowRootElement(shadowRoot)


//   }
// catch{(err)=>{
// 	console.log('an error occured'+err)

// }
}

  finally {
    await driver.quit();
  }
})();


async function findShadowDomElement(shadowDomElement) {
	let shadowRoot;
	let element;
	await (shadowRoot = getExtShadowRoot());
	await shadowRoot.then(async (result) => {
	  await (element = result.findElement(By.css(shadowDomElement)));
	});
	
	return element;
  }

  async function getExtShadowRoot() {
	let driver = await new Builder().forBrowser('chrome').build();
	let shadowHost;
	await (shadowHost = driver.findElement(By.css(shadowRoot)));
	return driver.executeScript("return arguments[0].shadowRoot", shadowHost);
  }

