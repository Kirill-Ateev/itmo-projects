import puppeteer from 'puppeteer';
import { isDebugging } from "./testingInit.js";

const URL = 'https://kodaktor.ru/g/424c89b';
// переделайте на считывание из alert 
 
try {
    const browser = await puppeteer.launch(isDebugging().puppeteer);
    const page = await browser.newPage();   
 
    const n1 = 3;
    const n2 = 4;
  
 
    await page.goto(URL);
    await page.waitForSelector('#n1');
    page.evaluate(n1 => document.querySelector('#n1').value = n1, n1);
    await page.waitForSelector('#n2');
    page.evaluate(n2 => document.querySelector('#n2').value = n2, n2);
 
    await page.waitForSelector('#btn');

    page.on('dialog', async dialog => {
        console.log(dialog.message());
        await dialog.dismiss();
        });

    await page.click('#btn');
    
    // const realResult = await page.$eval('#result', async el => el.value); 
    // console.log(realResult);
    // browser.close();
} catch (e) {
    console.error(e);
}