import React from "react";
import "./PropsNavbar.css";

export default function PropsMenuLink(props) {
  return (
    <>
      <a href="#home">{props.links}</a>
    </>
  );
}
