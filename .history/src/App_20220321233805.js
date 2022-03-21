import logo from "./logo.svg";
import "./App.css";
import Home from "./home/Home.jsx";
import Header from "./Header";
import Product from "./product/Product.jsx";
import "./server/server";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { RecoilRoot, selector, useRecoilState, useRecoilValue } from "recoil";

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
            </Routes>
          </BrowserRouter>
        </div>
      </Suspense>
    </RecoilRoot>
  );
}

export default App;
