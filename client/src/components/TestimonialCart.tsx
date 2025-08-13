import React, { useState } from "react";

interface TestimonialProp {
  desc: string;
  name: string;
  message: string;
}

export default function TestimonialCart({ desc, name, message }: TestimonialProp) {

  const [ isOpen, setIsopen ] = useState<boolean>(false)

  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">
      {/* متن نظر */}
      <p className="text-gray-700 text-sm leading-relaxed mb-4">{desc}</p>

      {/* نام و دکمه */}
      <div className="flex items-center justify-between mt-auto">
        <span className="font-semibold text-gray-900">{name}</span>
        <button
          className="text-orange-500 text-sm font-medium hover:underline cursor-pointer"
          onClick={() => setIsopen(!isOpen)}
        >
          Read Full Story
        </button>
        {isOpen && <span>{message}</span>}
      </div>
    </div>
  );
}
