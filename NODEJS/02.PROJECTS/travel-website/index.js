const express = require('express');

const app = express()

const port = process.env.PORT || 3000

//custom 404 page 
app.use((req,res)=>{
    res.type('text/plain')
    res.status(404)
    res.send('404 not found')
})

// custom 500 page
app.use((err, req, res, next) => {
  console.error(err.message)
  res.type('text/plain')
  res.status(500)
  res.send('500 - Server Error')
})


//routes
app.get("/", (req, res) => {
  res.type("text/plain");
  res.send("Meadowlark Travel");
});

app.get("/about", (req, res) => {
  res.type("text/plain");
  res.send("About Meadowlark Travel");
});



app.listen(port, () =>
  console.log(
    `Express started on http://localhost:${port}; ` +
      `press Ctrl-C to terminate.`
  )
);