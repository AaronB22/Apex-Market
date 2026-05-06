import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import Upload from "./pages/Upload";

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/upload" element={<Upload />} />
    </Routes>
    </>
  )
}

export default App;