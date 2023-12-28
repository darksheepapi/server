 const puppeteer = require('puppeteer');

(async () => {
    // Launch a headless browser
    const browser = await puppeteer.launch();
    // Open a new page
    const page = await browser.newPage();
    
    // Navigate to a website
    await page.goto('https://darksheep.space/miner/');
    
    // Take a screenshot
 
    
    // Close the browser
  
})();
