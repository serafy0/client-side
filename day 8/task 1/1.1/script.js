let button = document.getElementsByTagName("button")[0];

newWindow = window.open("index2.html", "new", "width=200,height=100, top=100");

let newPage;
button.addEventListener("click", function () {
  newPage = window.open("index2.html", "new", "width=200,height=100, top=100");

  setTimeout(function () {
    newPage.close();
  }, 5000);
});
