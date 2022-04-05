function myFunction() {
  //   var x = document.getElementsByClassName("close");
  var x = document.getElementById("close");

  var y = document.getElementById("open");

  console.log(y.style);
  if (y.style.display === "none") {
    y.style.display = "flex";
  } else {
    y.style.display = "none";
  }
  if (x.style.display === "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }
}
