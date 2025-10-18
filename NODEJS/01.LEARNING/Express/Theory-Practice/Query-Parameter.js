//capture extra info from the url like /films?category=scifi&director=George+lucas

app.get('/films',(req,res)=>{
  const {category, director} = req.query
  res.send(`category is ${category} and director is ${director}`)
})