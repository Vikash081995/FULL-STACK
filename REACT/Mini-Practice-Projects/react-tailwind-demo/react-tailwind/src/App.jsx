import React from "react";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="max-w-7xl m-auto">
      <Header />
      <main>
        <section>
          <h1>Lorem ipsome dolor</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
            animi!
          </p>
          <button>Know more</button>
        </section>
        <section>
          <div>
            <div></div>
          </div>
        </section>
      </main>
      <footer className="h-16 border-t py-4 text-center">
        <p className="text-lg text-slate-900">Sound Mate 2030</p>
      </footer>
    </div>
  );
};

export default App;
