import React from "react";
import { connect } from "react-redux";

import { authSelectors, authOperations } from "../../redux/auth";
import LogoutBtn from "../LogoutBtn/StyledLogoutBtn";
import defaultAvatar from "./user.svg";

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    width: "30%",
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
};

const UserMenu = ({ avatar, name, onLogout }) => (
  <div style={styles.container}>
    <img src={avatar} alt="" width="32" style={styles.avatar} />
    <span style={styles.name}>Welcome, {name}</span>
    <LogoutBtn type="button" onClick={onLogout}>
      Logout
    </LogoutBtn>
  </div>
);
const mapStateToProps = (state) => ({
  name: authSelectors.getUsername(state),
  avatar: defaultAvatar,
});

const mapDispatchToProps = {
  onLogout: authOperations.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
