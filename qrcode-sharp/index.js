import QRCode from "qrcode";
import sharp from "sharp";
import fs from "fs";

const qrData = "Shalini";

const qrPath = "./output/qr.png";
const logoPath = "./logo.jpeg";
const outputPath = "./output/qr-with-logo.png";

// Create output folder
if (!fs.existsSync("./output")) {
  fs.mkdirSync("./output");
}

// 1. Generate QR code
await QRCode.toFile(qrPath, qrData, {
  width: 1000,
  margin: 4,
  errorCorrectionLevel: "H",
  color: {
    dark: "#000000",
    light: "#FFFFFF",
  },
});

// 2. Resize logo
const logo = await sharp(logoPath)
  .resize(150, 150, {
    fit: "contain",
  })
  .png()
  .toBuffer();

// 3. Create white circular background
const circle = Buffer.from(`
  <svg width="220" height="220">
    <circle
      cx="110"
      cy="110"
      r="150"
      fill="white"
    />
  </svg>
`);

// 4. Add circle and logo to QR code
await sharp(qrPath)
  .composite([
    {
      input: circle,
      left: 390,
      top: 390,
    },
    {
      input: logo,
      left: 420,
      top: 420,
    },
  ])
  .png()
  .toFile(outputPath);

console.log("QR code with logo generated!");
