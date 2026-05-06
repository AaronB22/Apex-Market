import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage/HomePage";
import { Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile/Profile";
import Signup from "./pages/Signup/Signup";
import Upload from "./pages/Upload/Upload";
import Signin from "./pages/Signin/Signin";

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/signIN" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/upload" element={<Upload />} />
    </Routes>
    </>
  )
}

export default App;