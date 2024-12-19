import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="border-gray-200 px-4 lg:px-6 py-2.5 bg-slate-50 font-bold">
        <div>
          <ul className="flex justify-center gap-5 py-3">
            <li>
              <NavLink
              to="/"
                className={({ isActive }) =>
                  ` block py-2 pr-2 pl-2 duration-200 ${
                    isActive ? "text-green-300" : "font-bold"
                  } border-gray-300 hover:bg-green-200 rounded-lg`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
              to="/services"
                className={({ isActive }) =>
                  ` block py-2 pr-2 pl-2 duration-200 ${
                    isActive ? "text-green-300" : "font-bold"
                  } border-gray-300 hover:bg-green-200 rounded-lg`
                }
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
              to="/projects"
                className={({ isActive }) =>
                  ` block py-2 pr-2 pl-2 duration-200 ${
                    isActive ? "text-green-300" : "font-bold"
                  } border-gray-300 hover:bg-green-200 rounded-lg`
                }
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
              to="/blogs"
                className={({ isActive }) =>
                  ` block py-2 pr-2 pl-2 duration-200 ${
                    isActive ? "text-green-300" : "font-bold"
                  } border-gray-300 hover:bg-green-200 rounded-lg`
                }
              >
                Blogs
              </NavLink>
            </li>
            <li>
              <NavLink
              to="/about"
                className={({ isActive }) =>
                  ` block py-2 pr-2 pl-2 duration-200 ${
                    isActive ? "text-green-300" : "font-bold"
                  } border-gray-300 hover:bg-green-200 rounded-lg`
                }
              >
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
