function append(value) {
  document.getElementById("display").value += value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function backspace() {
  let val = document.getElementById("display").value;
  document.getElementById("display").value = val.slice(0, -1);
}

function calculate() {
  let expression = document.getElementById("display").value;
  try {
    let result = Function("return " + expression)();
    document.getElementById("display").value = result;
  } catch {
    document.getElementById("display").value = "Error";
  }
}


document.addEventListener("keydown", function (e) {
  const key = e.key;
  const valid = "0123456789+-*/.%";

  if (valid.includes(key)) {
    append(key);
  } else if (key === "Enter") {
    e.preventDefault();
    calculate();
  } else if (key === "Backspace") {
    backspace();
  } else if (key.toLowerCase() === "c") {
    clearDisplay();
  }
});