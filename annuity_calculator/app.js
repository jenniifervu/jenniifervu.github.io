const aprincipal = document.getElementById("aprincipal")
const aperiod = document.getElementById("aperiod")
const ayears = document.getElementById("ayears")
const arate = document.getElementById("arate")

const principal = document.getElementById("principal")
const period = document.getElementById("period")
const years = document.getElementById("years")
const rate = document.getElementById("rate")

const button = document.getElementById("button")
const result = document.getElementById("result")

function validate() {
  if (aprincipal.value == "" || aprincipal.value == null || aprincipal.value < 0) {
    result.innerHTML = "Select or enter a value";
    result.style.color = "red";
    result.style.textAlign = "center";
    aprincipal.style.borderColor = "red";
  }

  if (aperiod.value == "Payment Period") {
    result.innerHTML = "Select or enter a value";
    result.style.color = "red";
    result.style.textAlign = "center";
    aperiod.style.borderColor = "red";
  }

  if (ayears.value == "" || ayears.value == null || ayears.value < 0) {
    result.innerHTML = "Select or enter a value";
    result.style.color = "red";
    result.style.textAlign = "center";
    ayears.style.borderColor = "red";
  }

  if (arate.value == "" || arate.value == null || arate.value < 0) {
    result.innerHTML = "Select or enter a value";
    result.style.color = "red";
    result.style.textAlign = "center";
    arate.style.borderColor = "red";
  }
  if (principal.value == "" || principal.value == null || principal.value < 0) {
    result.innerHTML = "Select or enter a value";
    result.style.color = "red";
    result.style.textAlign = "center";
    principal.style.borderColor = "red";
  }

  if (years.value == "" || years.value == null || years.value < 0) {
    result.innerHTML = "Select or enter a value";
    result.style.color = "red";
    result.style.textAlign = "center";
    years.style.borderColor = "red";
  }

  if (period.value == "Compounding Period") {
    result.innerHTML = "Select or enter a value";
    result.style.color = "red";
    result.style.textAlign = "center";
    period.style.borderColor = "red";
  }

  if (rate.value == "" || rate.value == null || rate.value < 0) {
    result.innerHTML = "Select or enter a value";
    result.style.color = "red";
    result.style.textAlign = "center";
    rate.style.borderColor = "red";
  }
}

function ann_calc(p, pp, y, r) {
  r = r / 100;
  let x = 0;
  if (pp == "Monthly") {
    x = 12;
  } else if (pp == "Quarterly") {
    x = 4;
  } else if (pp == "Semi-annually") {
    x = 2;
  } else {
    x = 1;
  }

  y = y*x;

  let term1 = (1 + (r / x)) ** y
  let result = p * ((term1 - 1) / (r / x))
  return result.toFixed(2);
}

function lump_calc(p, pp, y, r) {
  r = r / 100;

  let x = 0;
  if (pp == "Monthly") {
    x = 12;
  } else if (pp == "Quarterly") {
    x = 4;
  } else if (pp == "Semi-annually") {
    x = 2;
  } else {
    x = 1;
  }

  y = y*x;

  let result = p * ((1 + (r / x))) ** y;
  return result.toFixed(2);
}


button.addEventListener("click", (e) => {
  e.preventDefault();

  validate();


  let annuity = ann_calc(aprincipal.value, aperiod.value, ayears.value, arate.value);
  let lump = lump_calc(principal.value, period.value, years.value, rate.value);

  if (result.innerHTML == "Select or enter a value") {
    result.innerHTML = `<h3>Select or enter a value</3>`;
   result.style.color = "red";
  }

  else if (annuity > lump) {
    result.innerHTML = `<h3> The future value of the annuity is ${annuity}, which is
    larger than the future value of ${lump} for the lump sum.</3>`;
  } else if (lump > annuity){
    result.innerHTML = `<h3> The future value of the lump sum is ${lump}, which is
    larger than the future value of ${annuity} for the annuity.</3>`;
  } else {
    result.innerHTML = `<h3> The future value of the annuity is equal to the
    future value of the lump sum, at ${annuity}.</3>`;
  }

  result.style.color = "black";
  result.style.textAlign = "center";
});
