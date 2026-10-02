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
    const sql = "SELECT * FROM PARCEL";
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
    const sql = "SELECT * FROM PARCEL WHERE `To Office Name` IN('Chennai PH','Park Town Sorting Chennai  L1U')";
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
app.get("/chennaiside", async (req, res) => {
  try {
    const sql =
      "SELECT * FROM PARCEL WHERE `To Office Name` IN('Arsikere PH','Bengaluru Parcel Hub','Coimbatore PH','Kochi PH','Kozhikode PH','Madurai PH','Mangaluru PH','Mysuru PH','Salem PH','Thiruvananthapuram PH','Thrissur PH','Trichy PH')";
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
app.get("/v10in", async (req, res) => {
  try {
    const sql =
      "SELECT * FROM PARCEL WHERE `To Office Name` IN('Eluru PH','Rajamundry PH','Srikakulam Road  PH','Visakhapatnam PH','Patna PH','Jamshedpur PH','Shillong PH','Agartala PH','Berhampur PH','KOLKATA PH','Bhubaneswar PH','Guwahati PH','Imphal PH','Muzaffarpur PH','Sambalpur PH','Siliguri PH','Visakapatnam NSH','Srikakulam Road ICH','Eluru ICH','Rajamundry ICH','Srikakulam Road RMS  L2U','Visakhapatnam RMS  L1U','Rajamundry RMS  L2U','Eluru RMS  L2U')";
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
});
app.get("/nellore", async (req, res) => {
  try {
    const sql = "SELECT * FROM PARCEL WHERE `To Office Name` IN('Nellore ICH','Nellore PH','Nellore RMS  L2U')";
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
});

app.get("/guntur", async (req, res) => {
  try {
    const sql = "SELECT * FROM PARCEL WHERE `To Office Name` IN('Guntur ICH','Guntur PH','Guntur RMS  L2U')";
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
});

app.get("/ongole", async (req, res) => {
  try {
    const sql = "SELECT * FROM PARCEL WHERE `To Office Name` IN('Ongole ICH','Ongole PH','Ongole RMS  L2U')";
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
});

app.get("/vijayawada", async (req, res) => {
  try {
    const sql = "SELECT * FROM PARCEL WHERE `To Office Name` IN('Vijayawada NSH','Vijayawada PH','Vijayawada Sub foreign Post office','Vijayawada RMS  L1U')";
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
});

app.get("/kadapa", async (req, res) => {
  try {
    const sql = "SELECT * FROM PARCEL WHERE `To Office Name` IN('Cuddapah ICH','Cuddapah PH','Cuddapah RMS  L2U')";
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
});

app.get("/kurnool", async (req, res) => {
  try {
    const sql = "SELECT * FROM PARCEL WHERE `To Office Name` IN('Kurnool ICH','Kurnool PH','Kurnool RMS  L2U')";
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
});

app.get("/ananthapur", async (req, res) => {
  try {
    const sql = "SELECT * FROM PARCEL WHERE `To Office Name` IN('Ananthapur ICH','Ananthapur PH','Ananthapur RMS  L2U')";
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
});

app.get("/hyd", async (req, res) => {
  try {
    const sql = "SELECT * FROM PARCEL WHERE `To Office Name` IN('Hyderabad NSH','Hyderabad PH','Hyderabad Stg L1U')";
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
});
app.get("/ag27in", async (req, res) => {
  try {
    const sql =
      "SELECT * FROM PARCEL WHERE `To Office Name` IN('Ahmedabad PH','Belagavi PH','Chhatrapati Sambhaji Nagar PH','Hubballi PH','Kalaburgi PH','MARGAON PH','Mumbai PH','Pune PH','Rajkot PH','Surat PH','Vadodara PH')";

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
});

app.get("/y32in", async (req, res) => {
  try {
    const sql =
      "SELECT * FROM PARCEL WHERE `To Office Name` IN('Raipur PH','Integrated Parcel Hub AMPC','Ambala PH','Gurgaon PH','Bhopal PH','Jabalpur PH','Chandigarh PH','Jaipur PH','Ajmer PH','JODHPUR PH','Agra PH','Prayagraj PH','Bareilly PH','Gorakhpur PH','Ghaziabad PH','Lucknow PH','Dehradun PH','Gwalior PH','Indore PH','Jalandhar PH','Kanpur PH','Ludhiana PH','Nagpur PH','Rohtak PH','Srinagar PH','Varanasi PH')";

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
});

app.get("/ndc", async (req, res) => {
  try {
    const sql = "SELECT * FROM PARCEL WHERE `To Office Name` IN('Nodal Delivery Center Tirupati')";

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
});

app.get("/idc", async (req, res) => {
  try {
    const sql = "SELECT * FROM PARCEL WHERE `To Office Name` IN('IDC TIRUPATI','Tirupati H.O')";

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
});

app.get("/excelexport", async (req, res) => {
  db.query("CALL parcel()", (err, result) => {
    if (err) {
      console.log("Procedure error:", err);
      return;
    }

    console.log(result[0]);
  });
});

// app.get("/chittor", async (req, res) => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();

//   try {
//     const sql =
//       "SELECT * FROM PARCEL WHERE `To Office Name` IN('Iral S.O','Iruvaram S.O','Arugonda S.O','Puthapapattu S.O','Chittoorr North','Vengalrajukuppam S.O','Kothapalle S.O','Murukambattu S.O','Chittoor H.O','Ctr Collectorate S.O','Penumur S.O','Ramapuram S.O (Chittoor)','Gangadhara Nellore S.O','Yadamari S.O','Thugundram S.O','Kanipakam S.O')";
//     db.query(sql, async (err, result) => {
//       if (err) {
//         console.error("Error while geeting data from database");
//         return res.status(500).json({
//           message: "Error, while receiving data from server",
//         });
//       }
//       res.json(result);
//     });
//   } catch (err) {
//     // console.error(err);
//     return res.status(500).json({
//       error: "Internal Server Error",
//     });
//   }
// });

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
app.get("/printmaillist", async (req, res) => {
  try {
    const sql = "SELECT * FROM SPEED";
    db.query(sql, (err, result) => {
      if (err) {
        console.error("Error while geeting data from database");
        return res.status(500).json({
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
