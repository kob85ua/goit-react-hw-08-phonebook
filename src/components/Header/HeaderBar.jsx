import React from "react";
import { connect } from "react-redux";
import Navigation from "./Navigation";
import UserMenu from "../UserMenu/UserMenu";
import { HeaderStyled } from "./styledHeader";
import { authSelectors } from "../../redux/auth";
const HeaderBar = ({ isAuthenticated }) => (
  <HeaderStyled>
    <Navigation />
    {isAuthenticated && <UserMenu />}
  </HeaderStyled>
);

const mapStateToProps = (state) => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(HeaderBar);
