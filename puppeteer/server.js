import puppeteer from "puppeteer";
import fs from "fs";
import path from "path";

const browser = await puppeteer.launch({
  headless: false,
});

const page = await browser.newPage();
console.log(path.resolve());

const ashokImagePath = path.join(process.cwd(), "assests", "ashok.png");
const ashokImageData = fs.readFileSync(ashokImagePath);
const ashokImageBase64 = ashokImageData.toString("base64");
const ashokImageHtml = `<img src="data:image/png;base64,${ashokImageBase64}" alt="Ashok Image" width="80" height="80">`;

const logoImagePath = path.join(process.cwd(), "assests", "logo.png");
const logoImageData = fs.readFileSync(logoImagePath);
const logoImageBase64 = logoImageData.toString("base64");
const logoImageHtml = `<img src="data:image/png;base64,${logoImageBase64}" alt="Logo Image" width="140" height="80">`;

let html = fs.readFileSync(path.join(process.cwd(), "index.html"), "utf8");

html = html.replace("{{ashok}}", ashokImageHtml);
html = html.replace("{{logo}}", logoImageHtml);

await page.setContent(html);

await page.pdf({
  path: "./pdf/output.pdf",
  format: "A4",
  printBackground: true,
  displayHeaderFooter: true,

  footerTemplate: `
    <div style="width: 100%;font-size: 20px;display: flex;justify-content: space-between;align-items: center;">
      <div>
        <p style="margin:0px;text-decoration:underline;">Note:All Bags were dealt in IT 2.0 Only</p>
        <p style="margin:0px;">Report Printed On : 03-10-2026</p>
    </div>
    <div>
      <div style="text-decoration:underline;"> Page <span class="pageNumber"> </span> of Pages <span class="totalPages"> </span></div>
      <p style="margin:0px;"> + 91 73 96 12 89 40</p>
      <p style="margin:0px;"> + 91 81 21 96 32 71</p>
    </div>
    </div>
  `,
  margin: {
    left: "0px",
    right: "0px",
    top: "0px",
    bottom: "80px",
  },
});

await browser.close();
console.log("Pdf generated successfully.");
