import puppeteer from "puppeteer";
import fs from "fs";
import path from "path";
import express from "express";
import mysql from "mysql2";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.use(express.static(process.cwd()));

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

// ================================
// API: Get all bags
// ================================

app.get("/allbags", (req, res) => {
  const query = "SELECT * FROM SPEED";

  db.query(query, (err, results) => {
    if (err) {
      console.error("Error executing query:", err);

      return res.status(500).json({
        error: "Internal Server Error",
      });
    }

    console.log("Sending database results");

    res.json(results);
  });
});

// ================================
// Generate PDF
// ================================

app.get("/generate-pdf", async (req, res) => {
  try {
    const browser = await puppeteer.launch({
      headless: true,
    });

    const page = await browser.newPage();

    await page.goto("http://localhost:3000/index.html", {
      waitUntil: "networkidle0",
    });

    // Wait until list has been populated
    await page.waitForSelector("#toOffice li");

    console.log("Data loaded into Puppeteer page.");

    await page.pdf({
      path: "./pdf/output.pdf",

      format: "A4",

      printBackground: true,

      displayHeaderFooter: true,

      footerTemplate: `
        <div style="
          width: 100%;
          font-size: 20px;
          display: flex;
          justify-content: space-between;
        ">

          <div>

            <p style="
              margin:0px;
              text-decoration:underline;
            ">
              Note: All Bags were dealt in IT 2.0 Only
            </p>

            <p style="margin:0px;">
              Report Printed On : 03-10-2026
            </p>

          </div>


          <div>

            <div style="text-decoration:underline;">
              Page
              <span class="pageNumber"></span>
              of Pages
              <span class="totalPages"></span>
            </div>

            <p style="margin:0px;">
              + 91 73 96 12 89 40
            </p>

            <p style="margin:0px;">
              + 91 81 21 96 32 71
            </p>

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

    console.log("PDF generated successfully.");

    res.send("PDF generated successfully.");
  } catch (error) {
    console.error("PDF generation error:", error);

    res.status(500).send("PDF generation failed.");
  }
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
