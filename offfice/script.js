const newDate = new Date();

document.getElementById("rightTxt").style.textAlign = "right";

function displayTable(students, mlname) {
  const tbody = document.getElementById("tbody");

  tbody.innerHTML = "";
  students.sort((a, b) => a["To Office Name"].localeCompare(b["To Office Name"]));

  students.forEach((student, index) => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
            <td width="50px">${index + 1}</td>
            <td width="230px">${student["Bag Number"]}</td>
            <td width="230px">${student["Bag Type"]}</td>
            <td width="250px">${student["From Office Name"]}</td>
            
            <td width="270px" class="rightAlign">${student["To Office Name"]}</td>
        `;
    // prettier-ignore
    if (mlname === "nellore"||mlname === "chennai"||mlname === "guntur"||mlname === "ongole"||mlname === "vijayawada"||mlname === "kadapa"||mlname === "kurnool"||mlname === "ananthapur"||mlname === "hyderabad"||mlname === "tirupati") {
      // alert("Nellore");
      tr.querySelector(".rightAlign").style.textAlign = "center";
    }

    tbody.appendChild(tr);
  });
  /*document.getElementById("leftTxt").innerHTML =
    // `<h4><span style="text-decoration:underline">Note: All Bags were dealt in IT 2.0 Olny.</span></h4> <br>Report Printed On : ${newDate.toLocaleDateString()}</h4>`;
    `
      <p><span class="text-decoration-underline fs-5">Note: All Bags were detalt in IT 2.0 Only </span><br><span class="fs-5"> Report Printed On : ${newDate.toLocaleDateString()}</span></p>
    `;

  document.getElementById("rightTxt").innerHTML = `<h4><span class="bi bi-whatsapp"></span>&nbsp;+91 7396128940
                <br><span class="bi bi-telephone"></span>&nbsp;&nbsp;+91 8121963271
                <br><span class="bi bi-envelope-at"></span>&nbsp;msharipdtr@gmail.com
                
                <h4>`;
  document.getElementById("rightTxt").style.textAlign = "right";*/
}

function countBags(students) {
  // prettier-ignore
  let sp = 0, pl = 0, om = 0, mp = 0, tb = 0, ib = 0, ie = 0, ip = 0;

  students.forEach((student) => {
    if (student["Bag Type"] === "SP") {
      sp++;
    } else if (student["Bag Type"] === "PL" || student["Bag Type"] === "IB" || student["Bag Type"] === "IE" || student["Bag Type"] === "IP") {
      pl++;
    } else if (student["Bag Type"] === "OM") {
      om++;
    } else if (student["Bag Type"] === "MP" || student["Bag Type"] === "UT") {
      mp++;
    } else if (student["Bag Type"] === "Transit") {
      tb++;
    }
  });

  total = sp + pl + om + mp + tb;
  // prettier-ignore
  return {sp,pl,om,mp,tb,total,ib,ie,ip};
}

function updateCounters(counts) {
  console.log(counts);

  let usualbagCount, unusualbagCount, totalCount;
  usualbagCount = unusualbagCount = totalCount = 0;

  /*if (counts.sp === 0) document.getElementById("spBags").style.display = "none";
  if (counts.pl === 0) document.getElementById("plBags").style.display = "none";
  if (counts.om === 0) document.getElementById("omBags").style.display = "none";
  if (counts.mp === 0) document.getElementById("mpBags").style.display = "none";*/

  document.getElementById("spBags").innerHTML = `Speed Bags : ${counts.sp.toString().padStart(2, 0)}`;
  document.getElementById("plBags").innerHTML = `Parcel Bags : ${counts.pl.toString().padStart(2, 0)}`;
  document.getElementById("omBags").innerHTML = `Letter Bags : ${counts.om.toString().padStart(2, 0)}`;
  document.getElementById("mpBags").innerHTML = `Magazine Bags : ${counts.mp.toString().padStart(2, 0)}`;
  document.getElementById("tbBags").innerHTML = `Transit Bags : ${counts.tb.toString().padStart(2, 0)}`;
  document.getElementById("totalBags").innerHTML = `**Total Bags : ${counts.total.toString().padStart(2, 0)}`;

  usualbagCount = counts.sp + counts.om + counts.tb;
  unusualbagCount = counts.mp + counts.pl;
  totalCount = unusualbagCount + usualbagCount;

  document.getElementById("usual").textContent = usualbagCount;
  document.getElementById("unusual").textContent = unusualbagCount;
  document.getElementById("total").textContent = totalCount;
}

function renderStudents(students, mlname) {
  displayTable(students, mlname);

  const counts = countBags(students);
  updateCounters(counts);
}

async function searchData() {
  const maillist = document.getElementById("maillist");
  const toOffice = document.getElementById("uname").value;
  const response = await fetch("http://localhost:3527/filterRecords", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      bag: toOffice,
    }),
  });
  if (toOffice === "Nellore ICH") {
    maillist.innerHTML = `Maillist To : Nellore TMO &nbsp;&nbsp; SET : 2B &nbsp;&nbsp;  Dated : ${newDate.toLocaleDateString()}`;
  } else if (toOffice === "Cuddapah ICH") {
    maillist.innerHTML = `Maillist To : Cuddapah TMO &nbsp;&nbsp; SET : 2B &nbsp;&nbsp;  Dated : ${newDate.toLocaleDateString()}`;
  } else if (toOffice === "Chennai NSH") {
    maillist.innerHTML = `Maillist To : Chennai Central TMO &nbsp;&nbsp; SET : 2B &nbsp;&nbsp;  Dated : ${newDate.toLocaleDateString()}`;
  } else if (toOffice === "Hyderabad NSH") {
    maillist.innerHTML = `Maillist To : Hyderabad Dec RSTMO &nbsp;&nbsp;  SET : 2B &nbsp;&nbsp;  Dated : ${newDate.toLocaleDateString()}`;
  } else if (toOffice === "Bengaluru NSH") {
    maillist.innerHTML = `Maillist To : Bengaluru BS TMO &nbsp;&nbsp;  SET : 2B &nbsp;&nbsp;  Dated : ${newDate.toLocaleDateString()}`;
  }
  maillist.style.textDecoration = "underline";

  const data = await response.json();
  console.log(data);
  data.sort((a, b) => b.Count - a.Count);

  renderStudents(data);
}

async function getBags() {
  const maillist = document.getElementById("maillist");
  maillist.innerHTML = `Maillist To : MG1 Tirupati HUB - 2B &nbsp;&nbsp;  SET : 2B &nbsp;&nbsp;  Dated : ${newDate.toLocaleDateString()}`;
  maillist.style.textDecoration = "underline";

  const response = await fetch("http://localhost:3527/allbags");
  const data = await response.json();
  const students = [...data];
  renderStudents(students);
}

async function getBagsMG2() {
  const maillist = document.getElementById("maillist");
  maillist.innerHTML = `Maillist To : MG2 Tirupati HUB - 2B &nbsp;&nbsp;  SET : 2B &nbsp;&nbsp;  Dated : ${newDate.toLocaleDateString()}`;
  maillist.style.textDecoration = "underline";

  const response = await fetch("http://localhost:3527/allbags");
  const data = await response.json();
  const students = [...data];
  renderStudents(students);
}

async function getBagsTMO1() {
  const maillist = document.getElementById("maillist");
  maillist.innerHTML = `Maillist To : MG Tirupati TMO - 1 &nbsp;&nbsp;  SET : 2B &nbsp;&nbsp;  Dated : ${newDate.toLocaleDateString()}`;
  maillist.style.textDecoration = "underline";

  const response = await fetch("http://localhost:3527/allbags");
  const data = await response.json();
  const students = [...data];
  renderStudents(students);
}

async function getChennai() {
  const maillist = document.getElementById("maillist");
  maillist.innerHTML = `Maillist To : Chennai Central TMO &nbsp;&nbsp;  SET : 2B &nbsp;&nbsp;  Dated : ${newDate.toLocaleDateString()}`;
  maillist.style.textDecoration = "underline";

  const response = await fetch("http://localhost:3527/chennai");
  const data = await response.json();
  const students = [...data];
  renderStudents(students, "chennai");
}

async function getChennaiSide() {
  const maillist = document.getElementById("maillist");
  maillist.innerHTML = `Maillist To : Chennai Central TMO &nbsp;&nbsp;  SET : 2B &nbsp;&nbsp;  Dated : ${newDate.toLocaleDateString()}`;
  maillist.style.textDecoration = "underline";

  const response = await fetch("http://localhost:3527/chennaiside");
  const data = await response.json();
  const students = [...data];
  renderStudents(students);
}

async function getV10IN() {
  const maillist = document.getElementById("maillist");
  maillist.innerHTML = `Maillist To : V - 10 - IN  &nbsp;&nbsp;  SET : 2B &nbsp;&nbsp;  Dated : ${newDate.toLocaleDateString()}`;
  maillist.style.textDecoration = "underline";

  const response = await fetch("http://localhost:3527/v10in");
  const data = await response.json();
  const students = [...data];
  renderStudents(students);
}

async function getGuntur() {
  const maillist = document.getElementById("maillist");
  maillist.innerHTML = `Maillist To : Guntur TMO  &nbsp;&nbsp;  SET : 2B &nbsp;&nbsp;  Dated : ${newDate.toLocaleDateString()}`;
  maillist.style.textDecoration = "underline";

  const response = await fetch("http://localhost:3527/guntur");
  const data = await response.json();
  const students = [...data];
  renderStudents(students, "guntur");
}

async function getOngole() {
  const maillist = document.getElementById("maillist");
  maillist.innerHTML = `Maillist To : Ongole TMO  &nbsp;&nbsp;  SET : 2B &nbsp;&nbsp;  Dated : ${newDate.toLocaleDateString()}`;
  maillist.style.textDecoration = "underline";

  const response = await fetch("http://localhost:3527/ongole");
  const data = await response.json();
  const students = [...data];
  renderStudents(students, "ongole");
}

async function getNellore() {
  const maillist = document.getElementById("maillist");
  maillist.innerHTML = `Maillist To : Nellore TMO  &nbsp;&nbsp;  SET : 2B &nbsp;&nbsp;  Dated : ${newDate.toLocaleDateString()}`;
  maillist.style.textDecoration = "underline";
  const mlname = "nellore";

  const response = await fetch("http://localhost:3527/nellore");
  const data = await response.json();
  const students = [...data];
  renderStudents(students, mlname);
}

async function getVijayawada() {
  const maillist = document.getElementById("maillist");
  maillist.innerHTML = `Maillist To : Vijayawada TMO  &nbsp;&nbsp;  SET : 2B &nbsp;&nbsp;  Dated : ${newDate.toLocaleDateString()}`;
  maillist.style.textDecoration = "underline";

  const response = await fetch("http://localhost:3527/vijayawada");
  const data = await response.json();
  const students = [...data];
  renderStudents(students, "vijayawada");
}

async function getKadapa() {
  const maillist = document.getElementById("maillist");
  maillist.innerHTML = `Maillist To : Cuddapah TMO  &nbsp;&nbsp;  SET : 2B &nbsp;&nbsp;  Dated : ${newDate.toLocaleDateString()}`;
  maillist.style.textDecoration = "underline";

  const response = await fetch("http://localhost:3527/kadapa");
  const data = await response.json();
  const students = [...data];
  renderStudents(students, "kadapa");
}

async function getKurnool() {
  const maillist = document.getElementById("maillist");
  maillist.innerHTML = `Maillist To : Kurnool TMO  &nbsp;&nbsp;  SET : 2B &nbsp;&nbsp;  Dated : ${newDate.toLocaleDateString()}`;
  maillist.style.textDecoration = "underline";

  const response = await fetch("http://localhost:3527/kurnool");
  const data = await response.json();
  const students = [...data];
  renderStudents(students, "kurnool");
}

async function getAnanthapur() {
  const maillist = document.getElementById("maillist");
  maillist.innerHTML = `Maillist To : Ananthapur TMO  &nbsp;&nbsp;  SET : 2B &nbsp;&nbsp;  Dated : ${newDate.toLocaleDateString()}`;
  maillist.style.textDecoration = "underline";

  const response = await fetch("http://localhost:3527/ananthapur");
  const data = await response.json();
  const students = [...data];
  renderStudents(students, "ananthapur");
}

async function getHyderabad() {
  const maillist = document.getElementById("maillist");
  maillist.innerHTML = `Maillist To : Hyderabad Dec RSTMO  &nbsp;&nbsp;  SET : 2B &nbsp;&nbsp;  Dated : ${newDate.toLocaleDateString()}`;
  maillist.style.textDecoration = "underline";

  const response = await fetch("http://localhost:3527/hyd");
  const data = await response.json();
  const students = [...data];
  renderStudents(students, "hyderabad");
}

async function getAg27in() {
  const maillist = document.getElementById("maillist");
  maillist.innerHTML = `Maillist To : AG - 27 - IN  &nbsp;&nbsp;  SET : 2B &nbsp;&nbsp;  Dated : ${newDate.toLocaleDateString()}`;
  maillist.style.textDecoration = "underline";

  const response = await fetch("http://localhost:3527/ag27in");
  const data = await response.json();
  const students = [...data];
  renderStudents(students);
}

async function getY32in() {
  const maillist = document.getElementById("maillist");
  maillist.innerHTML = `Maillist To : Y - 32 - IN  &nbsp;&nbsp;  SET : 2B &nbsp;&nbsp;  Dated : ${newDate.toLocaleDateString()}`;
  maillist.style.textDecoration = "underline";

  const response = await fetch("http://localhost:3527/y32in");
  const data = await response.json();
  const students = [...data];
  renderStudents(students);
}

async function getTirupatiNDC() {
  const maillist = document.getElementById("maillist");
  maillist.innerHTML = `Maillist To : Tirupati NDC  &nbsp;&nbsp;  SET : 2B &nbsp;&nbsp;  Dated : ${newDate.toLocaleDateString()}`;
  maillist.style.textDecoration = "underline";

  const response = await fetch("http://localhost:3527/ndc");
  const data = await response.json();
  const students = [...data];
  renderStudents(students, "tirupati");
}

async function getTirupatiIDC() {
  const maillist = document.getElementById("maillist");
  maillist.innerHTML = `Maillist To : Tirupati IDC  &nbsp;&nbsp;  SET : 2B &nbsp;&nbsp;  Dated : ${newDate.toLocaleDateString()}`;
  maillist.style.textDecoration = "underline";

  const response = await fetch("http://localhost:3527/idc");
  const data = await response.json();
  const students = [...data];
  renderStudents(students, "tirupati");
}

async function excelExport() {
  const response = await fetch(`http://localhost:3527/excelexport`);
  const data = await response.json();
  console.log(data);
}

async function getChittor() {
  const maillist = document.getElementById("maillist");
  maillist.innerHTML = `Maillist To : Chittor H.O &nbsp;&nbsp; SET : 2B &nbsp;&nbsp;  Dated : ${newDate.toLocaleDateString()}`;
  maillist.style.textDecoration = "underline";

  const response = await fetch("http://localhost:3527/chittor");
  const data = await response.json();
  const students = [...data];
  students.sort((a, b) => b.Count - a.Count);
  renderStudents(students);
}

async function generateMaillist() {
  const maillist = document.getElementById("maillist");
  maillist.innerHTML = `Maillist To : MG-1 Tirupati HUB - 2B &nbsp;&nbsp; SET : 2B &nbsp;&nbsp;  Dated : ${newDate.toLocaleDateString()}`;
  maillist.style.textDecoration = "underline";

  const response = await fetch("http://localhost:3527/printmaillist");
  const data = await response.json();
  const students = [...data];
  students.sort((a, b) => a["To Office Name"].localeCompare(b["To Office Name"]));
  renderStudents(students);
  checkDiscrepancy(students);
}

async function deleteBagClick() {
  const bagId = document.getElementById("deleteBag").value;
  bagId.trim();
  const response = await fetch("http://localhost:3527/deleteoffice", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      delBag: bagId,
    }),
  });

  const data = await response.json();
  console.log(data);

  /*const filterResults = data.filter(
    (bag) => bag["Bag Closed To"] !== "Nellore ICH",
  );*/
  console.log(data);

  if (!response.ok) {
    alert(data.message);
    return;
  }

  alert(data.message);

  await getBags();

  // renderStudents(filterResults);
}

async function checkDiscrepancy(students) {
  alert("Function working");
  console.log(students);
  // prettier-ignore
  const firstline = ["Baireddipalle S.O","Bangarupalem S.O","Beerangi Kothakota S.O","Burakayalakota S.O","Chembakur S.O","Cherlopalle S.O","Chinnatippasamudram S.O","Chintaparthi S.O","Chowdepalle S.O","Dravidian University S.O","Gurramkonda S.O","Kalikiri S.O","Kolamasanapalle S.O","Kuppam S.O","Kurabalakota S.O","Madanapalle Bazar S.O","Madanapalle H.O","Mahal S.O Chittoor","Medikurthi S.O","Mogili Venkatagiri S.O","Mulakalacheruvu R.S. S.O","Nimmanapalle S.O","Palamaner S.O","Peddatippasamudram S.O","Punganur S.O","Rallabudugur S.O","Ramakuppam S.O","Rishivalley S.O","Royalpet S.O","Sodam S.O","Tarigonda S.O","Thamballapalle S.O","Vayalpad S.O","Venkatagirikota S.O"];
  // prettier-ignore
  const seconline = ["Akkurthi S.O","AVILALA SO","Bhakarapet S.O","Buchinaidu Kandriga S.O","Chandragiri H.O","Chinnagottigallu S.O","Damalacheruvu S.O","Ekambarakuppam S.O","Gyarampalle kothapalle S.O","Kalakada S.O","Kallur S.O Chittoor","Karvetinagar S.O","Kattakindavenkatapuram S.O","Kovanur S.O","Mangalam S.O","Mangalampet S.O","Nagalapuram S.O Chittoor","Nagari S.O","Narasingapuram S.O Chittoor","Narayanavaram S.O","Nindra S.O","Pachikapallam S.O","Pakala S.O","Pallam S.O","Panagal S.O","Pannur S.O Chittoor","Papanaidupet S.O","Peddakannali S.O","Perumallapalle S.O","Piler S.O","Pissatur S.O","Puttur S.O","Renigunta S.O","Rompicherla S.O Chittoor","Satyavedu S.O","Settipalli S.O","Sri Bommarajapuram S.O","Sricity S.E.Z SO","Srikalahasti H.O","Thondamanadu S.O","Tiruchanoor S.O","Tirumala S.O Chittoor","Vadamalpet S.O","Varadaiahpalem S.O","Vepagunta S.O Chittoor","Yerpedu S.O"];
  // prettier-ignore
  const chittor = ["Arugonda S.O","Chittoor H.O","Chittoor North S.O","Ctr Collectorate S.O","Gangadhara Nellore S.O","Iral S.O","Iruvaram S.O","Kanipakam S.O","Kothapalle S.O","Murukambattu S.O","Nangamangalam S.O","Narasingarayanipettah S.O","Penumur S.O","Puthalapattu S.O","Ramapuram S.O (Chittoor)","Thugundram S.O","Vengalrajukuppam S.O","Yadamari S.O"];

  const filteredResults = await students.filter((record) => {
    if ("Sodam S.O".includes(record["To Office Name"])) {
      alert(record["Bag Number"]);
    }
  });
  console.log(filteredResults);
}

function printReport() {
  document.getElementById("tableDiv").style.overflow = "visible";
  window.print();
  document.getElementById("tableDiv").style.overflow = "scroll";
}
