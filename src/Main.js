import React, { Component } from "react";
import {
  Route,
  NavLink,
  BrowserRouter
} from "react-router-dom";
import Inicio from "./Inicio";
import Catalogo from "./Catalogo";
import Tiendas from "./Tiendas";
import Contacto from "./Contacto";

class Main extends Component {
  render() {
    return (
        <BrowserRouter>
        <div>
          <h1><span className="span">Mirezza</span> Catalogo</h1>
          <ul className="header">
            <li><NavLink exact to="/">Inicio</NavLink></li>
            <li><NavLink to="/catalogo">Catalogo</NavLink></li>
            <li><NavLink to="/tiendas">Tiendas</NavLink></li>
            <li><NavLink to="/contacto">Contacto</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Inicio}/>
            <Route path="/catalogo" component={Catalogo}/>
            <Route path="/tiendas" component={Tiendas}/>
	    <Route path="/contacto" component={Contacto}/>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
 
export default Main;
