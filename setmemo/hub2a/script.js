import { gds, mailguards, mdate, mts, sorters } from "../sourceData.js";

function bodyLoad1() {
  // employees.sort((a, b) => a.localeCompare(b));
  let sortedEmployees = [...sorters];
  sortedEmployees.sort((a, b) => a.localeCompare(b));

  let mgSort = [...mailguards, ...mts];
  mgSort.sort((a, b) => a.localeCompare(b));

  let mtsSort = [...mts];
  mtsSort.sort((a, b) => a.localeCompare(b));

  let gdsSort = [...gds];
  gdsSort.sort((a, b) => a.localeCompare(b));

  const sortersList = ["--Select Employee--", ...sortedEmployees];
  const mgList = ["--Select Employee--", ...mgSort];
  const mtsList = ["--Select Employee--", ...mtsSort];
  const gdsList = ["OS Arranged", ...gdsSort];

  // prettier-ignore
  const sortersDropdown = [
    "optHsa","optSuper","optMsa1","optMsa2",
    "optSpsa1","optSpsa2","optSpsa3","optSpsa4",
    "optSpsa5","optSpsa6","optSpsa7","optSpsa8",
    "optPsa1","optPsa2","optSa1","optSa2","optSa3","optCsa",
  ];

  /* prettier-ignore-start */
  const mgDropdown = ["optMg1", "optMg2"];
  const mtsDropdown = ["optMts1", "optMts2", "optMts3", "optMts4", "optMts5", "optMts6", "optMts7"];
  const gdsDropdown = ["optGds1", "optGds2", "optGds3", "optGds4", "optGds5", "optGds6", "optGds7", "optGds8", "optGds9", "optGds10", "optGds11"];

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

  mgDropdown.forEach((id) => {
    const select = document.getElementById(id);

    mgList.forEach((emp) => {
      const option = document.createElement("option");

      option.value = emp;
      option.textContent = emp;

      // option.selected = "OS Arranged";

      select.appendChild(option);
    });
  });

  mtsDropdown.forEach((id) => {
    const select = document.getElementById(id);

    mtsList.forEach((emp) => {
      const option = document.createElement("option");

      option.value = emp;
      option.textContent = emp;

      // option.selected = "OS Arranged";

      select.appendChild(option);
    });
  });

  gdsDropdown.forEach((id) => {
    const select = document.getElementById(id);

    gdsList.forEach((emp) => {
      const option = document.createElement("option");

      option.value = emp;
      option.textContent = emp;

      if (id === "optGds5" && emp === "J Dilli Babu") {
        option.selected = true;
      }

      if (id === "optGds4" && emp === "N Hari Prasad") {
        option.selected = true;
      }

      // option.selected = "OS Arranged";

      select.appendChild(option);
    });
  });
}
function printClick() {
  const fields = {
    optHsa: "hsatest",
    optSuper: "suptest",

    optMsa1: "msa1test",
    optMsa2: "msa2test",

    optSpsa1: "spsa1test",
    optSpsa2: "spsa2test",
    optSpsa3: "spsa3test",
    optSpsa4: "spsa4test",
    optSpsa5: "spsa5test",
    optSpsa6: "spsa6test",
    optSpsa7: "spsa7test",
    optSpsa8: "spsa8test",

    optPsa1: "psa1test",
    optPsa2: "psa2test",

    optSa1: "sa1test",
    optSa2: "sa2test",
    optSa3: "sa3test",
    optCsa: "csatest",

    optMg1: "mg1test",
    optMg2: "mg2test",

    optMts1: "mts1test",
    optMts2: "mts2test",
    optMts3: "mts3test",
    optMts4: "mts4test",
    optMts5: "mts5test",
    optMts6: "mts6test",
    optMts7: "mts7test",

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
  };

  Object.entries(fields).forEach(([source, target]) => {
    document.getElementById(target).textContent = document.getElementById(source).value;
  });

  window.print();
}

window.bodyLoad1 = bodyLoad1;
window.printClick = printClick;
