import express from "express";
import mysql from "mysql2";
import cors from "cors";
import puppeteer from "puppeteer";
import fs from "fs";
import path from "path";

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
  try {
    const sql = "SELECT * FROM SPEED";
    db.query(sql, (err, result) => {
      if (err) {
        console.error("Error while geeting data from database");
        res.status(500).json({
          message: "Error, while receiving data from server",
        });
      }
      res.json(result);
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Internal Server Error",
    });
  }
});
app.get("/chennai", async (req, res) => {
  try {
    const sql =
      "SELECT * FROM SPEED WHERE `To Office Name` IN('Chennai NSH','Coimbatore NSH','Madurai NSH')";
    db.query(sql, (err, result) => {
      if (err) {
        console.error("Error while geeting data from database");
        res.status(500).json({
          message: "Error, while receiving data from server",
        });
      }
      res.json(result);
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Internal Server Error",
    });
  }
});
app.get("/vayalpad", async (req, res) => {
  try {
    const sql =
      "SELECT * FROM SPEED WHERE `To Office Name` IN('Tarigonda S.O','Gurramkonda S.O','Vayalpad S.O','Cherlopalle S.O')";
    db.query(sql, (err, result) => {
      if (err) {
        console.error("Error while geeting data from database");
        res.status(500).json({
          message: "Error, while receiving data from server",
        });
      }
      res.json(result);
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Internal Server Error",
    });
  }
});
app.get("/chittor", async (req, res) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  try {
    const sql =
      "SELECT * FROM SPEED WzHERE `To Office Name` IN('Iral S.O','Iruvaram S.O','Arugonda S.O','Puthapapattu S.O','Chittoorr North','Vengalrajukuppam S.O','Kothapalle S.O','Murukambattu S.O','Chittoor H.O','Ctr Collectorate S.O','Penumur S.O','Ramapuram S.O (Chittoor)','Gangadhara Nellore S.O','Yadamari S.O','Thugundram S.O','Kanipakam S.O')";
    db.query(sql, async (err, result) => {
      if (err) {
        console.error("Error while geeting data from database");
        res.status(500).json({
          message: "Error, while receiving data from server",
        });
      }
      res.json(result);
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Internal Server Error",
    });
  }
  const htmlpath = fs.readFileSync("./index.html", "utf8");
  await page.setContent(htmlpath);
  const pdf = await page.pdf({
    path: "report.pdf",
    format: "A4",
    printBackground: true,
  });
  await browser.close();
});

app.post("/filterRecords", async (req, res) => {
  //   console.log(req.body);

  const { bag } = req.body;
  //   console.log("Body check up    : ", bag);
  const query = "SELECT * FROM SPEED WHERE `To Office Name`=?";
  db.query(query, [bag], (err, results) => {
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

app.delete("/deleteoffice", (req, res) => {
  const { delBag } = req.body;

  console.log("Deleting:", delBag);

  const query = "DELETE FROM SPEED WHERE `Bag Number` = ?";

  db.query(query, [delBag], (err, result) => {
    if (err) {
      console.error("Error executing query:", err);

      return res.status(500).json({
        error: "Internal Server Error",
      });
    }

    if (result.affectedRows > 0) {
      return res.status(200).json({
        message: "Record Deleted Successfully",
        deletedRows: result.affectedRows,
      });
    }

    return res.status(404).json({
      message: "Bag Number not found",
    });
  });
});

app.listen(3527, () => {
  console.log("Server is running on port 3527");
});
