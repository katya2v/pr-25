function calculate() {
  let a = Number(document.getElementById("value1").value);
  let b = Number(document.getElementById("value2").value);

  let sum = a + b;

  document.getElementById("result").textContent = sum;

  let history = document.getElementById("history");
  let li = document.createElement("li");
  li.textContent = a + " + " + b + " = " + sum;
  history.appendChild(li);
}
