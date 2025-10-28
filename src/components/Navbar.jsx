import React from "react";
import { useAuth } from "../context/AuthContext";
import Button from "./Button";
import { useNavigate, useLocation, Link } from "react-router-dom";

// Navbar: accepts optional `pages` prop: array of { name, route }
// If not provided, uses a sensible default. The link for the current
// page (based on pathname) is not rendered.
export default function Navbar({ pages }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout?.();
    navigate("/");
  };

  const defaultPages = [
    { name: "Dashboard", route: "/dashboard" },
    { name: "Users", route: "/users" },
    { name: "Notes", route: "/notes" },
    { name: "Weather", route: "/weather" },
  ];

  const pagesToRender = pages && Array.isArray(pages) && pages.length ? pages : defaultPages;

  // helper to determine whether a page route matches current location.
  // e.g. when on /users/5, treat it as /users
  const pathname = location.pathname || "/";
  const normalize = (r) => (r === "/" ? "/" : r.replace(/\/+$/, ""));

  return (
    <nav className="bg-gradient-to-br from-blue-700 to-blue-400 text-white
          p-4 shadow-md mb-8 h-16 w-full fixed top-0 left-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">React Dashboard</h1>

        <div className="flex items-center space-x-6">
          <ul className="flex space-x-4 items-center">
            {pagesToRender.map((p) => {
              const pageRoute = normalize(p.route || "");
              const isCurrent = pathname === pageRoute || pathname.startsWith(pageRoute + "/");
              // don't render current page link
              if (isCurrent) return null;
              return (
                <li key={p.route}>
                  <Link
                    to={p.route}
                    className="text-white hover:text-blue-300"
                  >
                    {p.name}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div>
            <Button
              variant="danger"
              onClick={handleLogout}
              label="Logout"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}