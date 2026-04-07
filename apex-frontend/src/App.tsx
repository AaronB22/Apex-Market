import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
    </>
  )
}

export default App;