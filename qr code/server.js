import qrcode from "qrcode";
import fs from "fs";
import qr from "../file.json" with { type: "json" };

console.log(qr[131]);

qr.forEach(async (record) => {
  const buffer = await qrcode.toBuffer(JSON.stringify(record));
  fs.writeFileSync(`./images/${record["To Office Name"]}.png`, buffer);
});

// const isr = {
//   name: "Idupulapati Sasi Rekha",
//   age: 37,
//   designation: "OA-2",
// };
// await qrcode.toFile("isr1.png", JSON.stringify(isr));
// const qrCode = await qrcode.toDataURL(JSON.stringify(isr));
// const buffer = await qrcode.toBuffer(JSON.stringify(isr));

// fs.writeFileSync("test.png", buffer);

// console.log(buffer);
