// src/pages/NotFound.tsx
import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <h1 className="text-9xl font-extrabold text-orange-500 tracking-widest">
        404
      </h1>
      <p className="text-2xl mt-4 text-gray-700">صفحه مورد نظر پیدا نشد!</p>
      <p className="text-gray-500 mt-2">
        لطفاً آدرس را بررسی کنید یا به صفحه اصلی برگردید.
      </p>
      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-orange-500 text-white rounded-lg shadow-lg hover:bg-orange-600 transition"
      >
        بازگشت به خانه
      </Link>
    </div>
  );
}
