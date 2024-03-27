// Define the function directly
function main() {
  const div = document.createElement("div");
  div.textContent = "© Code by Arnob";
  div.style.backgroundColor = "#f0f0f0";
  div.style.borderRadius = "5px";
  div.style.padding = "5px 10px";
  div.style.position = "fixed";
  div.style.bottom = "10px";
  document.body.appendChild(div);
}

// Invoke the function
main();
