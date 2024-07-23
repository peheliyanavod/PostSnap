import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="register" element={<SignUp/>}/>
        <Route path="login" element={<LogIn/>}/>
        <Route path="home" element={<Home/>}/>
        <Route path="profile" element={<Profile/>}/>
      </Routes>
    </BrowserRouter>
     
  )
}

export default App;
