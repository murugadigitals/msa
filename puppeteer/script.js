async function bodyLoad() {
  const response = await fetch("http://localhost:3000/allbags");
  const data = await response.json();
  console.log(data);

  // const toOfficeList = document.getElementById("toOffice");
  const students = [...data];

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
    tbody.appendChild(tr);
  });
  // prettier-ignore
  let sp = 0,    pl = 0,    om = 0,    mp = 0,    tb = 0,    ib = 0,    ie = 0,    ip = 0;

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
  document.getElementById("spBags").innerHTML = `Speed Bags : ${sp.toString().padStart(2, 0)}`;
  document.getElementById("plBags").innerHTML = `Parcel Bags : ${pl.toString().padStart(2, 0)}`;
  document.getElementById("omBags").innerHTML = `Letter Bags : ${om.toString().padStart(2, 0)}`;
  document.getElementById("mpBags").innerHTML = `Magazine Bags : ${mp.toString().padStart(2, 0)}`;
  document.getElementById("tbBags").innerHTML = `Transit Bags : ${tb.toString().padStart(2, 0)}`;
  document.getElementById("totalBags").innerHTML = `**Total Bags : ${total.toString().padStart(2, 0)}`;
}

bodyLoad();
