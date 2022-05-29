let selected;
let bill;
let person;
init();
document.querySelector("#bill-input").addEventListener("input", billInputHandler);
document.querySelector("#reset").addEventListener("click", init);
document.querySelector("#NoM-input").addEventListener("input", NoMInputHandler);
document.querySelectorAll("#ST button").forEach(Element => {
  Element.addEventListener("click", STButtonCLickHandler);
});
document.querySelector("#custom").addEventListener("input", customInputHandler);
document.querySelector("#custom").addEventListener("focus", customFocusHandler);


function init() {
  document.getElementById("bill-input").value = "";
  document.getElementById("custom").value = "";
  document.getElementById("NoM-input").value = "";
  document.getElementById("bill-input").value = "";
  document.querySelectorAll(".price").forEach(element => {
    element.innerHTML = "$0.00";
  });
  selected = null;
  bill = null;
  person = null;
  document.querySelectorAll("#ST button").forEach(Element => {
    Element.style.backgroundColor = "#00474B";
    Element.style.color = "white";
  });
  document.querySelector("#zero").style.display = "none";
  document.querySelector("#NoM-input").style.border = "none";
}

function billInputHandler() {
  bill = +this.value;
  if (document.querySelector("#NoM-input").value === "" || document.querySelector("#NoM-input").value === "0") {
    NoMZeroError();
  } else {
    document.querySelector("#zero").style.display = "none";
    document.querySelector("#NoM-input").style.border = "none";
    if (+bill > 0 && selected !== null) {
      final();
    }
  }
}

function NoMInputHandler() {
  person = +this.value;
  if (person <= 0) {
    NoMZeroError();
  } else {
    document.querySelector("#zero").style.display = "none";
    document.querySelector("#NoM-input").style.border = "none";
    if (+bill > 0 && selected !== null) {
      final();
    }
  }
}

function customFocusHandler() {
  document.querySelectorAll("#ST button").forEach((Element) => {

    Element.style.backgroundColor = "#00474B";
    Element.style.color = "white";
  });
}

function STButtonCLickHandler() {
  selected = +this.dataset.persent;
  document.querySelectorAll("#ST button").forEach((Element) => {

    if (+Element.dataset.persent !== selected && +document.querySelector("#custom").value !== selected) {
      Element.style.backgroundColor = "#00474B";
      Element.style.color = "white";
    } else {
      Element.style.backgroundColor = "#9FE8DF";
      Element.style.color = "#00474B";
    }
    document.querySelector("#custom").value = "";
  });
  if (document.querySelector("#NoM-input").value === "" || document.querySelector("#NoM-input").value === "0") {
    NoMZeroError();
  } else {
    document.querySelector("#zero").style.display = "none";
    document.querySelector("#NoM-input").style.border = "none";
    if (+bill > 0 && selected !== null) {
      final();
    }
  }
}

function final() {
  document.querySelectorAll(".price")[0].innerHTML = `${(Math.round((bill * (selected / 100) / person) * 100) / 100).toFixed(2)}`
  document.querySelectorAll(".price")[1].innerHTML = `${(Math.round((bill * (selected / 100)) * 100) / 100).toFixed(2)}`
}

function customInputHandler() {
  selected = +this.value;
  document.querySelectorAll("#ST button").forEach(Element => {
    Element.style.backgroundColor = "#00474B";
    Element.style.color = "white";
  });
  if (document.querySelector("#NoM-input").value === "" || document.querySelector("#NoM-input").value === "0") {
    NoMZeroError();
  } else {
    document.querySelector("#zero").style.display = "none";
    document.querySelector("#NoM-input").style.border = "none";
    if (+bill > 0 && selected !== null) {
      final();
    }
  }
}

function NoMZeroError() {
  document.querySelector("#NoM-input").style.border = "2px solid #E17457";
  document.querySelector("#zero").style.display = "block";
}