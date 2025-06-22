import React from "react";
import { NavLink } from "react-router";

export default function Header() {
  return (
    <header className="flex items-center justify-between mb-2 border-b-2 border-gray-100 px-4 py-2">
      <div>
        <h1 className="text-[#ff6600] text-logo leading-logo font-logo">
          <NavLink to="/" end>
            Dine OS
          </NavLink>
        </h1>
      </div>
      <div>
        <ul className="flex items-center gap-2">
          <li className="text-small leading-navigation font-navigation">
            <NavLink to="/" end>
              Menu
            </NavLink>
          </li>
          <li className="text-small leading-navigation font-navigation">
            <NavLink to="/order" end>
              Orders
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
}
