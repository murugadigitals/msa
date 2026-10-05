import puppeteer from "puppeteer";
import fs from "fs";
import path from "path";
import express from "express";
import mysql from "mysql2";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "9492",
  database: "branch",
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
    return;
  }
  console.log("Connected to the database.");
});

app.get("/allbags", async (req, res) => {
  const query = "SELECT * FROM PARCEL";
  db.query(query, async (err, results) => {
    if (err) {
      console.error("Error executing query:", err);
      res.status(500).json({ error: "Internal Server Error" });
      return;
    } else {
      //   console.log("Results:", results);
      res.json(results);
    }
  });
});

app.get("/generate-pdf", async (req, res) => {
  const query = "SELECT * FROM PARCEL";
  db.query(query, async (err, results) => {
    if (err) {
      console.error("Error executing query:", err);
      res.status(500).json({ error: "Internal Server Error" });
      return;
    } else {
      //   console.log("Results:", results);
      res.json(results);
    }
    const browser = await puppeteer.launch({
      headless: true,
    });

    const page = await browser.newPage();

    let html = fs.readFileSync(path.join(process.cwd(), "index.html"), "utf8");

    const script = fs.readFileSync(path.join(process.cwd(), "script.js"), "utf8");

    const ashokImagePath = path.join(process.cwd(), "assests", "ashok.png");
    const ashokImageData = fs.readFileSync(ashokImagePath);
    const ashokImageBase64 = ashokImageData.toString("base64");
    const ashokImageHtml = `<img
        src="data:image/png;base64,${ashokImageBase64}"
        width="80"
        height="80"
    >`;

    const logoImagePath = path.join(process.cwd(), "assests", "logo.png");
    const logoImageData = fs.readFileSync(logoImagePath);
    const logoImageBase64 = logoImageData.toString("base64");
    const logoImageHtml = `<img
        src="data:image/png;base64,${logoImageBase64}"
        width="140"
        height="80"
    >`;

    html = html.replace("{{ashok}}", ashokImageHtml);
    html = html.replace("{{logo}}", logoImageHtml);
    html = html.replace("{{script}}", `<script>${script}</script>`);

    await page.setContent(html);

    // Wait for API-generated list
    // await page.waitForSelector("#toOffice li");

    console.log("Data loaded successfully");

    await page.pdf({
      path: "./pdf/output.pdf",
      format: "A4",
      printBackground: true,

      displayHeaderFooter: true,
      footerTemplate: `
                    <div style="width: 100%;font-size: 20px;display: flex;justify-content: space-between;">
                    <div> <p style="margin:0px;text-decoration:underline;">Note:All Bags were dealt in IT 2.0 Only</p> 
                    <p style="margin:0px;">Report Printed On : 03-10-2026</p> </div> 
                    <div> 
                    <div style="text-decoration:underline;"> Page <span class="pageNumber"> </span> of Pages <span class="totalPages"></span></div> 
                    <p style="margin:0px;"> + 91 73 96 12 89 40</p> 
                    <p style="margin:0px;"> + 91 81 21 96 32 71</p> 
                    </div> 
                    </div>
      `,
      margin: { left: "0px", right: "0px", top: "0px", bottom: "80px" },
    });

    const value1 = await page.evaluate(() => {
      return document.getElementById("ms").innerHTML;
    });
    console.log("Value of ms:", value1);

    await page.evaluate(() => {
      document.getElementById("ms").innerText = "Sasi Rekha Idupulapati ( 10164648 )";
    });

    await browser.close();
    console.log("PDF generated successfully");
  });
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
