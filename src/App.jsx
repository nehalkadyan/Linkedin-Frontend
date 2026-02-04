// client-side routing
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Signup from "./pages/Signup"
import Signin from "./pages/Signin"
import HomePage from "./pages/HomePage"

function App() {
  return (
    <Router>
        {/* routes */}
       <Routes>
        {/* inidvidual routes */}
          <Route path="/signup" element= {<Signup />}/>
          <Route path="/signin" element= {<Signin />}/>
          <Route path = "/" element = {<HomePage />}/>
       </Routes>
    </Router>
  )
}

export default App
