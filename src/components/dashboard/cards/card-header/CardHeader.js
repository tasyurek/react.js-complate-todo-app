import React from "react";
function Header(props) {
  return (
    <div className="card-header">
      <h4>{props.title}</h4>
    </div>
  );
}
export default Header;
