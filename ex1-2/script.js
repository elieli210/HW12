//1

function myFunction() {
  let enter = document.getElementById("Name").value;
  if (enter) {
    console.log("valid message");
  } else {
    console.log("required name");
  }
}

//2

function myFunction2() {
  let email = document.getElementById("Email");
  let change = document.getElementById("change");
  change.innerText = email.value;
}

// //3
//function prevent() {
  let submited = document.getElementsByClassName("submit");
  submited.addEventListener("click", (e) => {
  e.preventDefault();
  });
//}
