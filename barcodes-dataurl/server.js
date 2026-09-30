import express from "express";
import bwipjs from "bwip-js";
import config from "../config.js";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/barcode", async (req, res) => {
  try {
    const bagNumber = "EBN4006001111";

    const png = await bwipjs.toBuffer({
      bcid: "code128",
      text: bagNumber,
      scale: 3,
      height: 10,
      includetext: true,
      textxalign: "center",
    });

    const barcode = `data:image/png;base64,${png.toString("base64")}`;

    res.json({
      bagNumber,
      barcode,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "Barcode generation failed",
    });
  }
});

app.listen(config.port, () => {
  console.log(`Server is running at http://localhost:${config.port}`);
});
