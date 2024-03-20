import {Routes, Route} from "react-router-dom";
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import Barangay from "./pages/Barangay";
import Resident from "./pages/Resident";
import News from "./pages/News";
import Dashboard from "./pages/Dashboard";

function App() {

  return (
    <>
      <Routes>
        <Route exact path="/" element={<LogIn/>}/>
        <Route exact path="/signup" element={<SignUp/>}/>
        <Route exact path="/barangay" element={<Barangay/>}/>
        <Route exact path="/dashboard" element={<Dashboard/>}/>
        <Route exact path="/resident" element={<Resident/>}/>
        <Route exact path="/news" element={<News/>}/>
      </Routes>
    </>
  )
}

export default App
