import React from "react";
export default ({children}) => React.createElement("div", null, "Hello ", children, " ", React.createElement("div", null, React.createElement("img", {
  src: "assets/finger.png"
})));
