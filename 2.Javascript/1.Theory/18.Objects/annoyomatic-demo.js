const annoyer = {
  phrases: [
    "literally",
    "cray",
    "cray cray",
    "gnarly",
    "bruh",
    "YOLO",
    "Totes!",
    "YOLO",
    "swag",
  ],
  pickPhrase() {
    const { phrases } = this;
    const idx = Math.floor(Math.random() * phrases.length);
    return phrases[idx];
  },
  start() {
    setInterval(() => {
      console.log(this.pickPhrase());
    }, 3000);
  },
  stop() {
    clearInterval(this.timer);
  },
};

console.log(annoyer.pickPhrase());
console.log(annoyer.pickPhrase());
console.log(annoyer.start());
console.log(annoyer.stop());
