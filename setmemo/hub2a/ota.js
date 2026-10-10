import { mailguards, mts, sorters, mdate } from "../sourceData.js";

let items = [];

function bodyLoad() {
  let sortedMts = ["--Select Employee--", ...sorters, ...mailguards, ...mts];
  sortedMts.sort((a, b) => a.localeCompare(b));

  sortedMts.forEach((osaName) => {
    let option = document.createElement("option");

    option.value = osaName;
    option.textContent = osaName;

    document.getElementById("optOsa").appendChild(option);
  });
}
bodyLoad();

document.getElementById("push1").addEventListener("click", function () {
  //   let selectedOsa = this.value;
  let selectedOsa = document.getElementById("optOsa").value;
  if (selectedOsa !== "--Select OSA Name--" && items.indexOf(selectedOsa) === -1) {
    items.push(selectedOsa);

    document.querySelector("ol").innerHTML = "";
    items.forEach((item) => {
      let li = document.createElement("li");
      li.textContent = item;
      document.querySelector("ol").appendChild(li);
    });
    document.getElementById("optOsa").value = "--Select OSA Name--";
  } else {
    alert("Employee name already exits.");
  }
  console.log(items);
});

document.getElementById("preview").addEventListener("click", function () {
  // Show the table
  document.getElementById("tableContainer").style.display = "block";

  // Clear old rows to prevent duplicates
  const tbody = document.querySelector("#tableContainer tbody");
  tbody.innerHTML = "";

  // Create rows from the selected employee names
  items.forEach((item, i) => {
    const tr = document.createElement("tr");

    // Serial number
    const tdsno = document.createElement("td");
    tdsno.textContent = i + 1;

    // Employee name
    const tdname = document.createElement("td");
    tdname.textContent = item;

    // Other editable columns
    const tddf = document.createElement("td");
    const tddt = document.createElement("td");
    const tdth = document.createElement("td");
    const tdnw = document.createElement("td");
    const tdsign = document.createElement("td");
    // const tdrem = document.createElement("td");

    // Enable editing in table cells
    [tdname, tddf, tddt, tdth, tdnw, tdsign].forEach((td) => {
      td.contentEditable = "true";
    });

    // Employee name alignment
    tdname.style.textAlign = "left";
    tdname.style.textIndent = "15px";

    // Append all cells to the row
    // prettier-ignore
    tr.append(tdsno,tdname,tddf,tddt,tdth,tdnw,tdsign);

    tbody.appendChild(tr);
  });

  // document.getElementById("optOsa").se
});

document.getElementById("genTable").addEventListener("click", function () {
  const tableContainer = document.getElementById("tableContainer");

  if (items.length === 0) {
    alert("Please add at least one employee.");
    return;
  }

  if (tableContainer.style.display === "none") {
    document.getElementById("preview").click();
  }

  document.getElementById("dateDiv").innerHTML = `OTA Annexure, Tirupati HUB - 2A Dated : ${mdate}`;

  window.print();
  location.reload();
});
