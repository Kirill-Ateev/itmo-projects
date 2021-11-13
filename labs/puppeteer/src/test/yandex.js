import puppeteer from "puppeteer";
import { isDebugging } from "./testingInit.js";
import PuppeteerNetworkMonitor from "./puppeteerReq.js";

// переделайте на считывание из yandex
const URL = "https://yandex.ru/";

try {
  const browser = await puppeteer.launch(isDebugging().puppeteer);
  const page = await browser.newPage();

  await page.goto(URL);
  await page.setRequestInterception(true);

  let monitorRequests = new PuppeteerNetworkMonitor(page);
  await monitorRequests.waitForAllRequests();

  await page.waitForSelector(".inline-stocks__value_inner");
  await setTimeout(() => {}, 1000);
  let element = await page.$(".inline-stocks__value_inner");
  let value = await page.evaluate(el => el.textContent, element);

  console.log(value);
  browser.close();
} catch (e) {
  console.error(e);
}
