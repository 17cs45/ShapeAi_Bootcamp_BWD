import React from "react";
function Footer() {
  var currYear = new Date().getFullYear();
    return (
    <div>
      <footer>
        <h1>copyright @ {currYear}</h1>
      </footer>
    </div>
  );
}
export default Footer;
