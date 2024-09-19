import "./App.css";
import Navbar from "./layout/Navbar";
import SignUp from "./auth/SignUp";
import SignIn from "./auth/SignIn";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Navbar />}>
            <Route path="/" element={<Home />} />
          </Route>
          <Route path="/auth/signup" element={<SignUp />} />
          <Route path="/auth/signin" element={<SignIn />} />
          <Route />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
