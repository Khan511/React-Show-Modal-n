import React from "react";
import logo from "./logo.svg";
import { FaTimes } from "react-icons/fa";
import { social, links } from "./data";
import { GlobalContext } from "./context";

const Sidebar = () => {
  const { showSidebar, closeSidebar } = GlobalContext();

  return (
    <aside className={`${showSidebar ? "sidebar show-sidebar" : "sidebar"}`}>
      <div className="sidebar-header">
        <img src={logo} className="logo"></img>
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>
      <ul className="links">
        {links.map((link) => {
          const { id, text, url, icon } = link;
          return (
            <li key={id}>
              <a href={url}>
                {icon} {text}{" "}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="social-icons">
        {social.map((link) => {
          const { id, icon, url } = link;
          return (
            <li key={id}>
              <a href={url}>{icon} </a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
