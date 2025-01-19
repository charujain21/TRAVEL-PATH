import React from "react";
import Home from "./home/Home";
import Signups from "./Signup/Signups";
import { Navigate, Route, Routes } from "react-router-dom";
import Signingup from "./components/Register";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";
import Aboutus from "./components/Aboutus";
import Traveltips from "./components/Traveltips";

function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
      {/* <Home />
    <Sign /> */}

      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/Sign"
            element={authUser ? <Signups /> : <Navigate to="/Signingup" />}
          />
          <Route path="/Signingup" element={<Signingup />} />
          <Route path="/Aboutus" element={<Aboutus />} />
          <Route path="/Traveltips" element={<Traveltips />} />
        </Routes>
        <Toaster />
      </div>
    </>
  );
}
export default App;
