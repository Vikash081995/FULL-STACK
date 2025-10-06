var response = ajaxLibrary.get("/page1", function (response) {
  console.log(response);
  ajaxLibrary.get("/page2", function (response) {
    console.log(response);
    ajaxLibrary.get("/page3", function (response) {
      console.log(response);
    });
  });
});

//callback hell
fs.readFile("text-file.txt", function (err, data) {
  if (err) {
    console.log(err);
  } else {
    fs.readFile("text-file.txt", function (err, data) {
      if (err) {
        console.log(err);
      } else {
        fs.readFile("text-file.txt", function (err, data) {
          if (err) {
            console.log(err);
          } else {
            console.log(data);
          }
        });
      }
    });
  }
});
