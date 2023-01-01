import React from "react";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import { getAllNotes } from "./utils/local-data";

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <Home allNotes={getAllNotes()} />
      </main>
    </div>
  );
}

export default App;
