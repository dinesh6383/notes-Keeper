import React from "react";

function Footer() {
  const date = new Date();
  let year = date.getFullYear();
  return (
    <div className="foot">
      <h4>Copyright {year}</h4>
    </div>
  );
}

export default Footer;
