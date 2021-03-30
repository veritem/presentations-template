import React from "react";

export default ({ children }) => (
  <div
    style={{
      backgroundColor: "#050505",
      height: "100vh",
      width: "100vw",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      flexBasis: "flex",
    }}
  >
    <div>{children}</div>
  </div>
);
