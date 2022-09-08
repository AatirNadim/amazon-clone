import React from "react";
import Header from "./Header";

const PageWrapper = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <div>Helo js</div>
    </>
  );
};

export default PageWrapper;
