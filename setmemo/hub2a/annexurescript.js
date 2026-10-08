import { outsiderSA, outsiderMTS } from "../sourceData.js";

let items = [];

function bodyLoad() {
  let sortedOsa = ["--Select OSA Name--", ...outsiderSA];
  sortedOsa.sort((a, b) => a.localeCompare(b));

  sortedOsa.forEach((osaName) => {
    let option = document.createElement("option");

    option.value = osaName;
    option.textContent = osaName;

    document.getElementById("optOsa").appendChild(option);
  });
}

// function clickPush() {
//   items.push(document.getElementById("optOsa").value);
//   alert("item added");
// }
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
  }
  console.log(items);
});

bodyLoad();
// function PageLoad() {
//   osa.focus();
// }

// function ClickPush() {
//   // items=[];
//   // prettier-ignore
// //   if (osa.value === "") {
// //     alert("please enter employee name");
// //   }
//   else if (items.indexOf(osa.value) === -1) {
//     items.push(osa.value);

//     let li = document.createElement("li");
//     li.innerHTML += osa.value;

//     osa.value = "";
//     osa.focus();
//   }
//   else {
//     alert("Emplyee already exits");
//   }
// }

document.getElementById("genTable").addEventListener("click", function () {
  for (let i = 0; i <= items.length - 1; i++) {
    var tr = document.createElement("tr");

    var tdname = document.createElement("td");
    var tdsno = document.createElement("td");
    var tddf = document.createElement("td");
    var tddt = document.createElement("td");
    var tdth = document.createElement("td");
    var tdnw = document.createElement("td");
    var tdsign = document.createElement("td");
    var tdrem = document.createElement("td");

    tdsno.innerHTML = i + 1;
    tdname.innerHTML = items[i];

    tdname.style.textAlign = "Left";
    tdname.style.textIndent = "15px";

    tr.appendChild(tdsno);
    tr.appendChild(tdname);
    tr.appendChild(tddf);
    tr.appendChild(tddt);
    tr.appendChild(tdth);
    tr.appendChild(tdnw);
    tr.appendChild(tdsign);
    tr.appendChild(tdrem);

    document.querySelector("tbody").appendChild(tr);
  }
  window.print();
  location.reload();
});
