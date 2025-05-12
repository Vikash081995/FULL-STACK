const fs = require("fs/promises");

(async () => {
  const createFile = async (filePath) => {
    try {
      const existingFileHandler = await fs.open(filePath, "r");
      existingFileHandler.close();
      return console.log("File already exists");
    } catch (e) {
      // existingFileHandler.close();
      const newFilehandler = await fs.open(filePath, "w");
      console.log("File created successfully");
      newFilehandler.close();
    }
  };

  const CREATE_FILE = "create a file";
  const commandFile = await fs.open("command.txt", "r");

  commandFile.on("change", async () => {
    const size = (await commandFile.stat()).size;
    const buff = Buffer.alloc(size);
    const offset = 0;
    const length = buff.byteLength;
    const position = 0;
    await commandFile.read(buff, offset, length, position);
    const command = buff.toString("utf-8");

    //create a file
    //create a file <path>

    if (command.includes(CREATE_FILE)) {
      const filePath = command.substring(CREATE_FILE.length + 1);
      createFile(filePath);
    }
  });

  const watcher = fs.watch("./");

  for await (const event of watcher) {
    console.log(event);
    if (event.eventType === "change") {
      commandFile.emit("change");
    }
  }
})();
