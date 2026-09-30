import express from "express";
import cors from "cors";
import mysql from "mysql2";

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "9492",
  database: "branch",
});

app.use("/getbags", (req, res) => {
  const query = "select * from speed";
  db.query(query, (err, result) => {
    if (err) {
      console.log("Error, whiel ereceiveing data from database");
      return res.json({
        message: "Error While receiving data",
      });
    } else {
      console.log("Data obtained successfully");
      res.json(result);
    }
  });
});
app.listen(3200);
