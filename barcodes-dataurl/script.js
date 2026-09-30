async function getData() {
  const response = await fetch("http://localhost:3124/barcode");

  const data = await response.json();
  console.log(data);

  document.getElementById("barcode").src = data.barcode;
}
getData();

/*

const config = {
  port: 3124,
  database: {
    host: "localhost",
    user: "root",
    password: "9492",
    database: "branch",
  },
};
export default config;


*/
