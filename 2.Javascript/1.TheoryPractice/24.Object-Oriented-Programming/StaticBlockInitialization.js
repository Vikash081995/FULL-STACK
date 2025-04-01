class Config {
  static settings;
  static version;

  static {
    this.settings = {
      theme: "dark",
      fontSize: 16,
      lang: "en",
    };
    this.version = 1.0;
    console.log("Static Block Initialized");
  }
}
console.log(Config.settings); // { theme: 'dark', fontSize: 16, lang: 'en' }
console.log(Config.version); // 1.0

//======================================================
//Example2
// =======================================================

class App {
  static environment;
  static {
    if (process.env.NODE_ENV === "production") {
      this.environment = "production";
    } else {
      this.environment = "development";
    }
  }
}
console.log(App.environment);
