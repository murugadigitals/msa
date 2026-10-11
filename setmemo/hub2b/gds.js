import { mdate, outsiderMTS } from "../sourceData.js";

function bodyLoad1() {
  // employees.sort((a, b) => a.localeCompare(b));
  let sortedEmployees = [...outsiderMTS];
  sortedEmployees.sort((a, b) => a.localeCompare(b));

  const sortersList = ["--Select Employee--", ...sortedEmployees];

  // prettier-ignore
  const sortersDropdown = [
    "optGds1","optGds2",
    "optGds3","optGds4","optGds5","optGds6",
    "optGds7","optGds8","optGds9","optGds10",
    "optGds11","optGds12"
  ];

  /* prettier-ignore-end */

  sortersDropdown.forEach((id) => {
    const select = document.getElementById(id);

    sortersList.forEach((emp) => {
      const option = document.createElement("option");

      option.value = emp;
      option.textContent = emp;

      // option.selected = "OS Arranged";

      select.appendChild(option);
    });
  });
}
bodyLoad1();

document.getElementById("print").addEventListener("click", function (e) {
  e.preventDefault();
  const fields = {
    optGds1: "gds1test",
    optGds2: "gds2test",
    optGds3: "gds3test",
    optGds4: "gds4test",
    optGds5: "gds5test",
    optGds6: "gds6test",
    optGds7: "gds7test",
    optGds8: "gds8test",
    optGds9: "gds9test",
    optGds10: "gds10test",
    optGds11: "gds11test",
    optGds12: "gds12test",
  };

  Object.entries(fields).forEach(([source, target]) => {
    document.getElementById(target).textContent = document.getElementById(source).value;
  });

  document.getElementById("setName").innerHTML = `GDS Annexure Tirupati HUB - 2B Dated : ${mdate}`;

  // Display the table before printing
  document.getElementById("tableContainer").style.display = "block";

  window.print();
});

document.getElementById("preview").addEventListener("click", function () {
  alert("preview working");
  document.getElementById("tableContainer").style.display = "block";
  document.getElementById("tableContainer").contentEditable = true;
});

// window.bodyLoad1 = bodyLoad1;
// window.printClick = printClick;
