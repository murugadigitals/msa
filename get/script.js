const newDate = new Date();
function displayTable(students) {
  const tbody = document.getElementById("tbody");

  tbody.innerHTML = "";

  students.forEach((student, index) => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
            <td width="50px">${index + 1}</td>
            <td width="230px">${student["Bag Number"]}</td>
            <td width="230px">${student["Bag Type"]}</td>
            <td width="250px">${student["From Office Name"]}</td>
            <td width="270px">${student["To Office Name"]}</td>
        `;

    tbody.appendChild(tr);
  });
}

function countBags(students) {
  let sp = 0;
  let pl = 0;
  let om = 0;
  let mp = 0;
  let tb = 0;

  students.forEach((student) => {
    if (student["Bag Type"] === "SP") {
      sp++;
    } else if (student["Bag Type"] === "PL") {
      pl++;
    } else if (student["Bag Type"] === "OM") {
      om++;
    } else if (student["Bag Type"] === "MP") {
      om++;
    } else if (student["Bag Type"] === "Transit") {
      tb++;
    }
  });

  total = sp + pl + om + mp + tb;
  return {
    sp,
    pl,
    om,
    mp,
    tb,
    total,
  };
}

function updateCounters(counts) {
  console.log(counts);

  document.getElementById("spBags").innerHTML =
    `Speed Bags : ${counts.sp.toString().padStart(2, 0)}`;
  document.getElementById("plBags").innerHTML =
    `Parcel Bags : ${counts.pl.toString().padStart(2, 0)}`;
  document.getElementById("omBags").innerHTML =
    `Letter Bags : ${counts.om.toString().padStart(2, 0)}`;
  document.getElementById("mpBags").innerHTML =
    `Magazine Bags : ${counts.mp.toString().padStart(2, 0)}`;
  document.getElementById("tbBags").innerHTML =
    `Transit Bags : ${counts.tb.toString().padStart(2, 0)}`;
  document.getElementById("totalBags").innerHTML =
    `**Total Bags : ${counts.total.toString().padStart(2, 0)}`;

  document.getElementById("tableDiv").style.overflow = "visible";
}

function renderStudents(students) {
  displayTable(students);

  const counts = countBags(students);
  updateCounters(counts);
}

async function searchData() {
  const maillist = document.getElementById("maillist");
  const toOffice = document.getElementById("uname").value;
  const response = await fetch("http://localhost:3500/filterRecords", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      bag: toOffice,
    }),
  });
  if (toOffice === "Nellore ICH") {
    maillist.innerHTML = `Maillist To : Nellore TMO         SET : 2B   Dated : ${newDate.toLocaleDateString()}`;
  } else if (toOffice === "Cuddapah ICH") {
    maillist.innerHTML = `Maillist To : Cuddapah TMO   SET : 2B   Dated : ${newDate.toLocaleDateString()}`;
  } else if (toOffice === "Chennai NSH") {
    maillist.innerHTML = `Maillist To : Chennai Central TMO   SET : 2B   Dated : ${newDate.toLocaleDateString()}`;
  } else if (toOffice === "Hyderabad NSH") {
    maillist.innerHTML = `Maillist To : Hyderabad Dec RSTMO   SET : 2B   Dated : ${newDate.toLocaleDateString()}`;
  } else if (toOffice === "Bengaluru NSH") {
    maillist.innerHTML = `Maillist To : Bengaluru BS TMO   SET : 2B   Dated : ${newDate.toLocaleDateString()}`;
  }
  maillist.style.textDecoration = "underline";

  const data = await response.json();
  console.log(data);
  data.sort((a, b) => b.Count - a.Count);

  renderStudents(data);
}
/*
let apiData = [];

async function getOffices() {
  const response = await fetch("http://localhost:3500/allbags");
  const data = await response.json();
  // let apiData = [...data];   // spread operator creates a new array
  apiData = data; // we are updating apiData global variable
  // const xxx = ["Nellore ICH", "Cuddapah ICH", "1CBPO NSH"];
  const xxx = ["Punganur S.O", "Chowdepalle S.O", "Sodam S.O"];

  // const emptylist = [];
  // students.sort((a, b) => b.Count - a.Count);

  /*apiData.sort((a, b) =>
    a["To Office Name"].localeCompare(b["To Office Name"]),
  );*/

// let results = students.filter(
//   (office) =>
//     office["To Office Name"] === "Nellore ICH" ||
//     office["To Office Name"] === "Cuddapah ICH" ||
//     office["To Office Name"] === "Chennai NSH",
// );
// let results = students.filter((office) =>
//   xxx.includes(office["To Office Name"]),
// );
/*let results = apiData.filter((office) =>
    xxx.includes(office["To Office Name"]),
  );
  // renderStudents(results);
  renderStudents(apiData);
  // vayalpadClick(apiData);
}*/

async function getGuntakal() {
  const maillist = document.getElementById("maillist");
  maillist.innerHTML = `Maillist To : Gooty TMO   SET : 2B   Dated : ${newDate.toLocaleDateString()}`;
  maillist.style.textDecoration = "underline";

  const response = await fetch("http://localhost:3500/guntakal");
  const data = await response.json();
  const students = [...data];
  students.sort((a, b) => b.Count - a.Count);
  renderStudents(students);
}
/*const vayalpad = [
  "Tarigonda S.O",
  "Gurramkonda S.O",
  "Vayalpad S.O",
  "Cherlopalle S.O",
];
const chittor = [
  "Iral S.O",
  "Arugonda S.O",
  "Murukambattu S.O",
  "Puthalapattu S.O",
];

function getMixClick(tb) {
  // getOffices();

  console.log(apiData);
  apiData.sort((a, b) =>
    a["To Office Name"].localeCompare(b["To Office Name"]),
  );
  const results = apiData.filter((office) =>
    tb.includes(office["To Office Name"]),
  );
  renderStudents(results);
}

async function deleteBagClick() {
  const bagId = document.getElementById("deleteBag").value;
  const response = await fetch("http://localhost:3500/students", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      toOffice: bagId,
    }),
  });

  const data = await response.json();
  console.log(data);

  /*const filterResults = data.filter(
    (bag) => bag["Bag Closed To"] !== "Nellore ICH",
  );

   renderStudents(filterResults);
}
*/

async function getBags() {
  const response = await fetch("http://localhost:3500/allbags");
  const data = await response.json();
  const students = [...data];
  students.sort((a, b) => b.Count - a.Count);
  renderStudents(students);
}
