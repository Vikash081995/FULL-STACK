const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

before(() => {
  mongoose.connect("mongodb://localhost/users_test");

  mongoose.connection
    .once("open", () => {
      done();
    })
    .on("error", (error) => {
      console.warn("Warning", error);
    });
});

mongoose.connect("mongodb://localhost/users_test");

beforeEach((done) => {
  mongoose.connection.collections.users.drop(() => {
    //ready to run the next test
    done();
  });
});
