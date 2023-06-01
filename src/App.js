import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Show from "./components/Show";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:id" element={<Show />} />
    </Routes>
  );
}

export default App;
