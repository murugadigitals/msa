const bag = document.getElementById("getBags");

bag.addEventListener("click", getBags);

async function getBags() {
  const response = await fetch("http://localhost:3200/getbags");
  const data = await response.json();

  const close = data.map((office) => office["To Office Name"]);
  // prettier-ignore
  const firstlineBags = ["Baireddipalle S.O","Bangarupalem S.O","Beerangi Kothakota S.O","Burakayalakota S.O",    "Chembakur S.O",    "Cherlopalle S.O",    "Chinnatippasamudram S.O",    "Chintaparthi S.O",    "Chowdepalle S.O",    "Dravidian University S.O",    "Gurramkonda S.O",    "Kalikiri S.O",    "Kolamasanapalle S.O",    "Kuppam S.O",    "Kurabalakota S.O",    "Madanapalle Bazar S.O",    "Madanapalle H.O",    "Mahal S.O Chittoor",    "Medikurthi S.O",    "Mogili Venkatagiri S.O",    "Mulakalacheruvu R.S. S.O",    "Nimmanapalle S.O",    "Palamaner S.O",    "Peddatippasamudram S.O",    "Punganur S.O",    "Rallabudugur S.O",    "Ramakuppam S.O",    "Rishivalley S.O",    "Royalpet S.O",    "Sodam S.O",    "Tarigonda S.O",    "Thamballapalle S.O",    "Vayalpad S.O",    "Venkatagirikota S.O",  ];
  // prettier-ignore
  const secondlineBags = [    "Akkurthi S.O",    "AVILALA S.O",    "Mangalam S.O",    "Bhakarapet S.O",    "Buchinaidu Kandriga S.O",    "Chandragiri H.O",    "Chinnagottigallu S.O",    "Damalacheruvu S.O",    "Ekambarakuppam S.O",    "Gyarampalle kothapalle S.O",    "Kalakada S.O",    "Kallur S.O Chittoor",    "Karvetinagar S.O",    "Kattakindavenkatapuram S.O",    "Kovanur S.O",    "Mangalampet S.O",    "Nagalapuram S.O Chittoor",    "Nagari S.O",    "Narasingapuram S.O Chittoor",    "Narayanavaram S.O",    "Nindra S.O",    "Pachikapallam S.O",    "Pakala S.O",    "Pallam S.O",    "Panagal S.O",    "Pannur S.O Chittoor",    "Papanaidupet S.O",    "Peddakannali S.O",    "Perumallapalle S.O",    "Piler S.O",    "Pissatur S.O",    "Puttur S.O",    "Renigunta S.O",    "Rompicherla S.O Chittoor",    "Satyavedu S.O",    "Settipalli S.O",    "Sri Bommarajapuram S.O",    "Sricity S.E.Z SO",    "Srikalahasti H.O",    "Thondamanadu S.O",    "Tiruchanoor S.O",    "Tirumala S.O Chittoor",    "Vadamalpet S.O",    "Varadaiahpalem S.O",    "Vepagunta S.O Chittoor",    "Yerpedu S.O",  ];
  // prettier-ignore
  const chittorBags = [    "Arugonda S.O",    "Chittoor H.O",    "Chittoor North S.O",    "Ctr Collectorate S.O",    "Gangadhara Nellore S.O",    "Iral S.O",    "Iruvaram S.O",    "Kanipakam S.O",    "Kothapalle S.O",    "Murukambattu S.O",    "Nangamangalam S.O",    "Narasingarayanipettah S.O",    "Penumur S.O",    "Puthalapattu S.O",    "Ramapuram S.O (Chittoor)",    "Thugundram S.O",    "Vengalrajukuppam S.O", "Yadamari S.O" ];

  const missingBagsFirstline = firstlineBags.filter((office) => {
    return !close.includes(office);
  });

  console.log(missingBagsFirstline);

  var ol = document.getElementById("first");
  missingBagsFirstline.forEach((bag) => {
    var li = document.createElement("li");
    li.innerHTML = bag;
    ol.appendChild(li);
  });

  const missingBagsSecondeline = secondlineBags.filter((office) => {
    return !close.includes(office);
  });

  var ol1 = document.getElementById("second");
  missingBagsSecondeline.forEach((bag) => {
    var li = document.createElement("li");
    li.innerHTML = bag;
    ol1.appendChild(li);
  });

  console.log(missingBagsSecondeline);
}
