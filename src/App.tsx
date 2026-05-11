import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePages from "./pages/HomePages"
import Home from "./pages/Home"
import CleanYourTrash from "./pages/CleanYourTrash";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/ScanYourTrash" element={<CleanYourTrash />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
