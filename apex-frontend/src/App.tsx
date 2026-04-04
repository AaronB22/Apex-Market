import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile";

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
    </>
  )
}

export default App;