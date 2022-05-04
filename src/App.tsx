import { Routes, Route } from "react-router-dom";
import "./App.scss";
import NoMatch from "./components/NoMatch/NoMatch";
import Checkout from "./pages/Checkout/Checkout";
import Home from "./pages/Home/Home";
import Shows from "./pages/Show/Show";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/show/:id" element={<Shows />} />
        <Route path="/checkout/" element={<Checkout />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
