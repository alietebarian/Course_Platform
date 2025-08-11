import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white shadow-md rounded-t-2xl mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Logo & Contact */}
        <div className="space-y-4">
          <img src="/Logo.png" alt="logo" className="h-10" />
          <div className="flex items-center gap-2">
            <img src="/letter.png" alt="letter" className="w-5" />
            <span className="text-gray-600">hello@skillbridge.com</span>
          </div>
          <div className="flex items-center gap-2">
            <img src="/phone.png" alt="phone" className="w-5" />
            <span className="text-gray-600">+91 91813 23 2309</span>
          </div>
          <div className="flex items-center gap-2">
            <img src="/location.png" alt="location" className="w-5" />
            <span className="text-gray-600">Somewhere in the World</span>
          </div>
        </div>

        {/* Home Links */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-gray-800">Home</h3>
          <ul className="space-y-1 text-gray-600">
            <li>Benefits</li>
            <li>Our Courses</li>
            <li>Our Testimonials</li>
            <li>Our FAQ</li>
          </ul>
        </div>

        {/* About Us Links */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-gray-800">About Us</h3>
          <ul className="space-y-1 text-gray-600">
            <li>Company</li>
            <li>Our Courses</li>
            <li>Achievements</li>
            <li>Our Goals</li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-gray-800">
            Social Profiles
          </h2>
          <div className="flex gap-3">
            <img
              src="/face.png"
              alt="facebook"
              className="w-8 h-8 cursor-pointer hover:scale-110 transition"
            />
            <img
              src="/twit.png"
              alt="twitter"
              className="w-8 h-8 cursor-pointer hover:scale-110 transition"
            />
            <img
              src="/link.png"
              alt="linkedin"
              className="w-8 h-8 cursor-pointer hover:scale-110 transition"
            />
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-200 py-4 text-center text-sm text-gray-500">
        © 2023 Skillbridge. All rights reserved.
      </div>
    </footer>
  );
}
