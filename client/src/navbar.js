import React from "react";
import { Link } from "react-router-dom";
function App() {
    return(
    
      <nav>
    <div className="nav-wrapper white" >
      <Link to="/home" className="brand-logo left">Instagram</Link >
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><Link to="/login">login</Link ></li>
        <li><Link to="/profile">Profile</Link ></li>
        <li><Link to="/signup">Signup</Link ></li>
      </ul>
    </div>
  </nav>
    
    );
}
export default App;