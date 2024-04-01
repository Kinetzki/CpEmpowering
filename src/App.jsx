import { Routes, Route } from "react-router-dom";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<LogIn />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/:panel" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
