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
  const query = "SELECT * FROM SPEED";
  db.query(query, (err, results) => {
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

const getGuntakal = (req, res) => {
  const query =
    "SELECT * FROM SPEED WHERE `To Office Name` IN ('Ananthapur ICH', 'Kurnool ICH')";

  db.query(query, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        error: "Internal Server Error",
      });
    }

    res.json(results);
  });
};

app.get("/guntakal", getGuntakal);

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

app.listen(3500, () => {
  console.log("Server is running on port 3500");
});
