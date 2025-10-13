const Emitter = require("events");
const eventConfig = require("./config").events;

const emitter = new Emitter();

emitter.on(eventConfig.GREET, () => {
  console.log("Somewhere, someone said hello");
});

emitter.emit(eventConfig.GREET);
