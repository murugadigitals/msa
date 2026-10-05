import puppeteer from "puppeteer";

const browser = await puppeteer.launch({
  headless: false,
});
const page = await browser.newPage();

await page.goto("http://127.0.0.1:5500/puppeteer/eval.html");

await page.evaluate(() => {
  document.getElementById("ms").innerText = "J Dilli Babu";
  document.getElementById("ms").style.backgroundColor = "red";
});

await page.pdf({
  path: "output.pdf",
  format: "A4",
});
await new Promise((resolve) => setTimeout(resolve, 5000));

await browser.close();
