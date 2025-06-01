const button = document.querySelectorAll("button");
Array.from(button).forEach((button) => {
  button.addEventListener("click", function () {
    console.log(this);
  });
});


Array.from("abcd",x=>x.toUpperCase())

Array.from({length:10},el=>true)
//[true, true, true, true, true, true, true, true, true, true]

Array.from({length:10},(el,index)=>index)
//[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]