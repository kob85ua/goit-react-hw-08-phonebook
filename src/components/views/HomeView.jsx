import React from "react";
import { CSSTransition } from "react-transition-group";

import mainImage from "./arch.svg";

import "../Styles/transitionR.css";
const styles = {
  container: {
    minHeight: "calc(100vh - 50px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: 700,
    fontSize: 48,
    textAlign: "center",
    color: "#303f9f",
  },
};

const HomeView = () => (
  <div style={styles.container}>
    <CSSTransition
      in={true}
      appear={true}
      timeout={500}
      classNames="fadeHeader"
      unmountOnExit
    >
      <h1 style={styles.title}>
        Welcome to homepage
        <img src={mainImage} alt="" />
      </h1>
    </CSSTransition>
  </div>
);

export default HomeView;
