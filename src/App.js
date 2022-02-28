import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Concept from "./view/concept";
import Contact from "./view/contact";
import Produits from "./view/produits";
import './App.css'
import Logo from "./logo.svg"
import menulogo from "./image/svg/menu.svg"
import Cours from "./view/cours";
import Menu from "./view/menu";

export default function App() {

  return (
    <Router>
      <div >
        <nav className="navbar">
          <ul className="navbar-list">
            <li className={"navbar-item"}>
              <Link to="/menu"><img src={menulogo} alt="boutton menu"/></Link>
            </li>
            <li className="navbar-title">
              <Link to="/"><img src={Logo} height={30} width={200}/></Link>
            </li>
          </ul>
        </nav>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <div className="corp">
          <Routes>
            <Route path="/contacte" element={<Contact/>}/>
            <Route path="/cours" element={<Cours/>}/>
            <Route path="/produits" element={<Produits/>}/>
            <Route path={"/"} element={<Concept/>}/>
            <Route path={"/menu"} element={<Menu/>}/>
          </Routes>
        </div>
        
      </div>
    </Router>
  );
}
