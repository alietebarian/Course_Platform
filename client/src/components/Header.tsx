import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const headerLink = [
    { name: "Home", link: "/" },
    { name: "Courses", link: "/course" },
    { name: "About Us", link: "/aboutus" },
    { name: "Pricing", link: "/priceing" },
    { name: "Contact", link: "/contact" },
  ];

  const location = useLocation();
  const currentPath = location.pathname;

  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload(); // برای ریفرش شدن UI بعد از خروج
  };

  const userToken = localStorage.getItem("user")
  const userName = JSON.parse(userToken)

  return (
    <header className="w-full bg-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo & Navigation */}
        <div className="flex items-center gap-8">
          <Link to="/">
            <img src="/Logo.png" alt="logo" className="cursor-pointer h-10" />
          </Link>
          <nav>
            <ul className="flex gap-6 text-gray-600 font-medium">
              {headerLink.map((item) => (
                <li key={item.link}>
                  <Link
                    to={item.link}
                    className={`hover:text-gray-700 cursor-pointer p-2 transition ${
                      currentPath === item.link ? "bg-gray-100 rounded-md" : ""
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Auth Buttons */}
        {token ? (
          <div>
            <span className="mr-5 font-bold">welcome {userName?.fullName}</span>
            <button
              onClick={handleLogout}
              className="px-5 py-2 rounded-xl bg-red-500 text-white hover:bg-red-600 transition cursor-pointer"
            >
              Log Out
            </button>
          </div>
        ) : (
          <div className="flex gap-4">
            <Link to="/register">
              <button className="px-5 py-2 rounded-2xl hover:bg-orange-50 cursor-pointer transition">
                Sign Up
              </button>
            </Link>
            <Link to="/login">
              <button className="px-5 py-2 bg-orange-500 text-white cursor-pointer rounded-xl hover:bg-orange-600 transition">
                Login
              </button>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
