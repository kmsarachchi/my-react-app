import React from "react";

export default function TempBox2(props) {
  return (
    <div>
      <p>This is TempBox:{props.num}</p>
      {props.children}
    </div>
  );
}
