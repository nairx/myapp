import React from "react";

function SomeComponent(props) {
  console.log("Some Component rendered");
  return <div>SomeComponent,count is {props.count * 2}</div>;
}

export default React.memo(SomeComponent);
// export default SomeComponent
