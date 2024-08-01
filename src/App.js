import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Product from "./pages/Product";
import Speak from "./pages/Speak";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/produtos" element={<Product />} />
          <Route path="/faleconosco" element={<Speak />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
