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

  return (
    <header className="w-full bg-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-8">
          <img src="/Logo.png" alt="logo" className="cursor-pointer h-10" />
          <nav>
            <ul className="flex gap-6 text-gray-600 font-medium">
              {headerLink.map((item, index) => (
                <Link to={item.link}>
                  <li
                    key={index}
                    className={`hover:text-gray-700 cursor-pointer p-2 transition 
                    ${
                      currentPath === item.link
                        ? "bg-gray-100 rounded-md"
                        : ""
                    }`}
                  >
                    {item.name}
                  </li>
                </Link>
              ))}
            </ul>
          </nav>
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <button className="px-5 rounded-2xl hover:bg-orange-50 transition">
            Sign Up
          </button>
          <button className="px-5 py-2 bg-orange-500 text-white rounded-xl hover:bg-orange-600 transition">
            Login
          </button>
        </div>
      </div>
    </header>
  );
}
