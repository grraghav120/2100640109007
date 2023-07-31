import logo from "./logo.svg";
// import './App.css';
import Home from "./Question 2/Home";
import ViewDetails from "./Question 2/ViewDeatils";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    // <div className="App">
    //   <Home />
    // </div>
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/train/:id" element={<ViewDetails />} />
      </Routes>
    </>
  );
}

export default App;
