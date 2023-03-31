import { useState } from "react";
import "./App.css";
import Alert from "./Component/Alert";
import Navbar from './Component/Navbar';
import TextForm from "./Component/TextForm";
import About from "./Component/About";
import {
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";




function App() {
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  // const removeBodyClasses = ()=>{
  //   document.body.classList.remove("bg-light");
  //   document.body.classList.remove("bg-success");
  //   document.body.classList.remove("bg-dark");
  //   document.body.classList.remove("bg-warning");
  //   document.body.classList.remove("bg-danger");
  // }
  const [mode, setMode] = useState("light");
  const toggleMode = (cls) => {
    // removeBodyClasses();
    // document.body.classList.add("bg-"+cls);
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("Dark mood has been enaled", "success");
      document.title = "TextUtils - Dark Mode";
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mood has been enaled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };
  return (
    <>
      <BrowserRouter>
        <Navbar titel="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/" element={<TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert} />}>
            </Route>
            <Route exact path="/about" element={<About mode={mode} />}>
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
