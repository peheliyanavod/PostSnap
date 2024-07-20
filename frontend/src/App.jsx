import Home from "./components/Home";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="register" element={<SignUp/>}/>
        <Route path="login" element={<LogIn/>}/>
        <Route path="home" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
     
  )
}

export default App;
