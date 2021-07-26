import React from "react";
import { Link } from "gatsby";

import { NavStyles } from "./StyledComponent";
import Logo from "../Logo";

// function gotoSliceMaster() {
//   setTimeout(() => {
//     navigate("/slicemasters", { replace: true });
//   }, 2000);
// }

const Navigation = () => {
  return (
    <NavStyles role="navigation">
      <ul>
        {/* <li>
          <Link to="/">Hot Now</Link>
        </li> */}
        <li>
          <Link to="/pizzas">Pizza Menu</Link>
        </li>
        {/* <li>
          <button onClick={gotoSliceMaster}> Click me to see slicemaster after 2 second</button>
        </li> */}
        <li>
          <Link to="/">
            <Logo className="logo"/>
          </Link>
        </li>
        {/* <li>
          <Link to="/slicemaster">SliceMaster</Link>
        </li> */}
        <li>
          <Link to="/orders">Order Ahead!</Link>
        </li>
      </ul>
    </NavStyles>
  );
};

export default Navigation;
