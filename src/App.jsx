import { useEffect, useState } from "react";
import { Home } from "./components/MortgageCalculator/Banner/Banner";
import { Loading } from "./components/MortgageCalculator/Loader/Loading";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { MortgageCalculator } from "./components/MortgageCalculator/MortgageCalculator";

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
          <Route path = "/MortgageCalculator" element = {<MortgageCalculator/>}> </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
