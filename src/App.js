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
import menulogo from "./image/svg/menu.svg"
import Cours from "./view/cours";
import Menu from "./view/menu";
import Livre from "./view/livre"
import Logo from "./logo.svg"
import './App.css'

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
              <Link to="/"><img src={Logo} alt="encre et levure" height={50} width={200}/></Link>
            </li>
          </ul>
        </nav>
        <div className="corp">
          <Routes>
            <Route path="/contacte" element={<Contact/>}/>
            <Route path="/cours" element={<Cours/>}/>
            <Route path="/produits" element={<Produits/>}/>
            <Route path={"/"} element={<Concept/>}/>
            <Route path={"/menu"} element={<Menu/>}/>
            <Route path={"/livre"} element={<Livre/>}/>
          </Routes>
        </div>
        
      </div>
    </Router>
  );
}
