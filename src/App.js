import { useState } from "react";
import "./App.css";
import Register from "./components/Register";
import Login from "./components/Login";

function App() {

  const [screen, setScreen] = useState("register");

  return (
    <div className="app">
      <div className="app__container">
      {screen==="register" ? <Register setScreen={setScreen} /> : <Login setScreen={setScreen} />}
        
      </div>
    </div>
  );
}

export default App;
