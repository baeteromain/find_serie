const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.oxtorrent.com/torrents/series');
  
  const titles = await page.evaluate(() => 
   Array.from(document.querySelectorAll('div.maxi a'))
   .map(key => `${key.innerText} : ${key.href} `)
  );

  console.log(titles);

  await browser.close();
})();