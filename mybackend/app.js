const express = require('express')
const app = express()
const puppeteer = require('puppeteer');

app.get('/gettorrent', async (req, res) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.oxtorrent.com/torrents/series');
    
    const titles = await page.evaluate(() => 
     Array.from(document.querySelectorAll('div.maxi a'))
     .map(key => `${key.innerText.trim()} : ${key.href}`)
    );

    res.send(titles)
})

app.listen(5000, function () {
  console.log('Example app listening on port 5000!')
})