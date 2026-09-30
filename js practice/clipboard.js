function copyName() {
  const name = document.getElementById("name").value;

  navigator.clipboard.writeText(name);
}

async function pasteName() {
  const text = await navigator.clipboard.readText();

  document.getElementById("name").value = text;
}
