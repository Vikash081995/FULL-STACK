const fs = require("fs/promises");

(async () => {
  const watcher = fs.watch("./");
  const commandFile = await fs.open("command.txt", "r");

  for await (const event of watcher) {
    console.log(event);
    if (event.eventType === "change") {
      //get  the file size
      const size = (await commandFile.stat()).size;
      const buff = Buffer.alloc(size);
      const offset = 0;
      const length = buff.byteLength;
      const position = 0;
      const content = await commandFile.read(buff, offset, length, position);
      console.log(content);
    }
  }
})();
