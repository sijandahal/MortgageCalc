import { useEffect, useState } from "react";
import { Home } from "./components/MortgageCalculator/Banner/Banner";
import { Loading } from "./components/MortgageCalculator/Loader/Loading";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { MortgageCalculator } from "./components/MortgageCalculator/MortgageCalculator";
import { Login } from "./components/MortgageCalculator/Login/Login";
import { LoginPage } from "./components/MortgageCalculator/LoginPage/LoginPage";
import { ToastContainer } from "react-toastify";
export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
    {/* Routes */}
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path = "/login" element = {<Login/>}> </Route>
          <Route path = "/LoginPage" element = {<LoginPage/>}></Route>
          <Route path = "/MortgageCalculator" element = {<MortgageCalculator/>}> </Route>
        </Routes>
        <ToastContainer/>
      </BrowserRouter>
    </>
  );
}
