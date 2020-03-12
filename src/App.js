import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const APP_ID = "1a34b007";
  const APP_KEY = "91a4b8780cee1fbfc5f733b36483f6fd";

  const example = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  useEffect(() => {}, []);

  return (
    <div className="App">
      <h1>hello</h1>
      <form className="search-form">
        <input type="text" className="search-bar" />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}

export default App;
