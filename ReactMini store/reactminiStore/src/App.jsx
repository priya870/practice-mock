import React from "react";
import { useState } from "react";
import NonFiction from "./components/NonFiction";
import Fiction from "./components/Fiction";


function App() {
  const[text,setText] = useState(true)
  return (
    <div style = {{textAlign:"center"}}>
      <h1>Mini Book Store</h1>

      <button data-testid="toggle-btn" onClick={()=>setText(!text)}>{ text?"Show Non-Fiction Books" :"Show Fictional Books"}</button>

      <div data-testid="conditional-container">
        {/* Render either Fiction or NonFiction Based on the Condition */}
        {text ? <Fiction/> : <NonFiction/>}
      </div>
    </div>
  );
}

export default App;
