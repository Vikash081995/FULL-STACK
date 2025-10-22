const fs = require('fs')

exports.loggerMiddleware =function(req,res,next){
  const log =`[${Date.now()}] ${req.method} ${req.url}`
  next()
  fs.appendFileSync('log.txt',log,'utf-8')
  next()
}
