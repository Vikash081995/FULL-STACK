import {watch} from "node:fs"

console.log("watching for file changes");

watch("./watch.txt",(eventType,fileName)=>{
      console.log("-----------------------------");
      console.log(`Event type is: ${eventType}`);
      if (filename) {
        console.log(`Filename provided: ${filename}`);
      }
})