import React from "react";
import TempBox from "./TempBox";
import TempBox2 from "./TempBox2";
import PropsMenuLink from "./PropsMenuLink";
import "./PropsNavbar.css";

export default function TempHome() {
  return (
    <>
      <div className="nav">
        <PropsMenuLink links="Home" />
        <PropsMenuLink links="Contact" />
        <PropsMenuLink links="About us" />
      </div>
      <div>
        <TempBox />
        <TempBox2 num="One" />
        <TempBox2 num="Two">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse
          voluptatibus corrupti obcaecati aliquam tempore. Alias molestiae
          voluptates, quam eius, praesentium distinctio velit ipsa debitis,
          aliquid iste at enim assumenda officia!
        </TempBox2>
      </div>
    </>
  );
}
