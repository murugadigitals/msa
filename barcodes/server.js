import bwipjs from "bwip-js";
import path from "path";
import fs from "fs";
import target from "../file.json" with { type: "json" };

/*let bagNumber = "EBN400600" + Math.floor(Math.random() * 10000);
bagNumber = bagNumber.padEnd(4, 0);*/

target.forEach(async (bar) => {
  // console.log(bagNumber);
  const buffer = await bwipjs.toBuffer({
    bcid: "code128",
    text: bar["Bag Number"],
    scale: 3,
    height: 10,
    includetext: true,
    textxalign: "center",
  });

  fs.writeFileSync(`./images/${bar["Bag Number"]}.png`, buffer);
});
