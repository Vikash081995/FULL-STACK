const timerCallback=(a,b)=>console.log(`Timer callback ${a} delayed by ${Date.now()-start-b}ms`)

const start=Date.now()
setTimeout(timerCallback,1000,'10ms',1000)
setTimeout(timerCallback,0,'0ms',0)
setTimeout(timerCallback,0,'0ms',0)
setTimeout(timerCallback,0,'0ms',0)