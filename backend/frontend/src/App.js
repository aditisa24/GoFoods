
import Home from "./screens/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Login from "./screens/Login";

import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from "./screens/Signup";
import { CartProvider } from "./components/ContextReducer";


function App() {
  return (
    <CartProvider>
    <Router>
    <div> 
      <Routes>
        <Route exact path = "/" element = {<Home />} />
        <Route exact path = "/login" element = {<Login />} />
        <Route exact path = "/signup" element = {<Signup />} />
        
      </Routes>

    </div>
    </Router>
    </CartProvider>
    
       
  )
};
export default App;
