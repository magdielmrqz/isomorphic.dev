import React, { useState } from "react";
import $cn from "classnames";
import { Link } from "gatsby";
import Headroom from "react-headroom";
import logo from "../images/logo.svg";
/*
import { useMenu } from "../services/useMenu";
import Languages from "./icons/languages";
const menu = useMenu("en");
console.log(menu);
indigo
*/
export default () => {
  const [menuClose, setMenuClose] = useState(true);
  const menu = []; //[{ id: "hama", url: "/acerca", label: "Acerca" }];
  return (
    <Headroom>
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          <img src={logo} width="42" alt="logo" />
        </Link>
        <div className="block md:hidden lg:hidden">
          <button
            onClick={() => setMenuClose(!menuClose)}
            className="navbar-menu hover:text-white hover:border-white hover:bg-indigo-400"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          className={$cn(
            "navbar-items md:flex md:w-auto md:items-center lg:flex lg:w-auto lg:items-center",
            { hidden: menuClose },
            { "mb-5": !menuClose }
          )}
        >
          <div className="text-sm md:flex-grow lg:flex-grow"></div>
          <div className="navbar-ul">
            {menu.map(item => (
              <Link
                key={item.id}
                to={item.url}
                state={{ name: true }}
                activeClassName="text-white bg-indigo-400"
                className="navbar-li md:mt-0 md:inline-block lg:mt-0 lg:inline-block hover:text-white hover:bg-indigo-400"
              >
                {item.label}
              </Link>
            ))}
          </div>
          {/* */}
        </div>
      </nav>
    </Headroom>
  );
};
/**
 * 
<Languages
  className="lang"
  size={48}
  url="/"
  hover="#F6AD55"
  fill="#fff"
/>
*/
