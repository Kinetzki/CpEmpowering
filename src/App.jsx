import {Routes, Route} from "react-router-dom";
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';

function App() {

  return (
    <>
      <Routes>
        <Route exact path="/" element={<LogIn/>}/>
        <Route exact path="/signup" element={<SignUp/>}/>
      </Routes>
    </>
  )
}

export default App
