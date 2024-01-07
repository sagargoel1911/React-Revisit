import React from "react";
import ReactDOM from "react-dom";
function Portal() {
    //Advantages of portals:
    //In adding modals so that they are not restriceted by their parent component
    //An event triggered inside the portal will propagate to ancestors in corresponsing react tree even though they are not the ancestors in dom tree
  return ReactDOM.createPortal(
    <h1>This is a Portal.</h1>,
    document.getElementById("portalId")
  );
}

export default Portal;
