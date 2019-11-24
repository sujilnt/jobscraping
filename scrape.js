const puppeteer = require("puppeteer");

puppeteer.launch({ headless: false }).then(async (browser) => {
    const url = "https://www.siliconmilkroundabout.com/companies";
    const page = await browser.newPage();
    await page.goto(url);
    await page.waitFor(3000);
    const names = await page.$$eval(".company__item_header  h5", h => {
        return h.map(elements => {
            console.log(elements.innerHTML);
            return elements.innerHTML;
        })
    });
    await browser.close();
});


