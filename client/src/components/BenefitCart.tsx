import React from "react";

export default function BenefitCart({ number, title, desc }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition flex flex-col gap-4">
      <span className="text-orange-500 text-3xl font-bold">{number}</span>

      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>

      <p className="text-gray-600 text-sm">{desc}</p>

      <button className="mt-auto bg-orange-50 hover:bg-orange-100 w-10 h-10 flex items-center justify-center rounded-full transition">
        <img src="/btn.png" alt="btn" className="w-5 h-5" />
      </button>
    </div>
  );
}
