let username;

document.getElementById("mySubmit").onClick = function () {
  username = document.getElementById("myText").value;
  document.getElementById("myHeading").textContent = username;
};
