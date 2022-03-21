import logo from "./logo.svg";
import "./App.css";
import Home from "./home/Home.jsx";
import Header from "./Header";
import Product from "./product/Product.jsx";
import { Route, Routes, BrowserRouter } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
