// import { useState } from 'react'
import "./index.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import useLocalStorage from "use-local-storage";
import { useState } from "react";

function App() {
  // const [count, setCount] = useState(0)
  const [theme, setTheme] = useState("dark");

  const toggleMode = () => {
    setTheme(!theme);
    console.log("red");
  };
  return (
    <div
      className="App"
      style={{
        backgroundColor: theme ? "hsl(207, 26%, 17%)" : "hsl(0, 0%, 98%)",
        color: theme ? "green" : "#000",
      }}
    >
      <Navbar toggleMode={toggleMode} theme={theme} />
      <Home theme={theme} />
    </div>
  );
}

export default App;
