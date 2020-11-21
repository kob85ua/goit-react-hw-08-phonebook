import React from "react";
import { NavLink } from "react-router-dom";
import routes from "../../routes";
import { StyledNavigation } from "./styledNavigation";
import "./NavLink.css";
const Navigation = () => (
  <StyledNavigation>
    {routes.map(route=>{
     return <li key={route.label}>
       <NavLink
       exact
       to= {route.path}
       className="Navigation-link"
       activeClassName="Navigation-link-active"
       
       >{route.label}</NavLink>
     </li>
    })}
    

  </StyledNavigation>
);
export default Navigation;


