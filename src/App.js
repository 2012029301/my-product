import logo from "./logo.svg";
import "./App.css";
import Home from "./home/Home.jsx";
import Header from "./Header";
import Product from "./product/Product.jsx";
import Near from "./near/Near.jsx";
import TestTs from "./testTs/TestTs.tsx";
import "./server/server";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { RecoilRoot, selector, useRecoilState, useRecoilValue } from "recoil";
import { Suspense } from "react";
function App() {
  return (
    <RecoilRoot>
      <Suspense fallback={<div>Loading</div>}>
        <div className="App">
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product" element={<Product />} />
              <Route path="/near" element={<Near />} />
            </Routes>
          </BrowserRouter>
        </div>
      </Suspense>
    </RecoilRoot>
  );
}

export default App;
