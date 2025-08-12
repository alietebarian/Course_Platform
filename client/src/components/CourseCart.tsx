import React from "react";

interface CourseCartProps {
  img: string;
  level: string;
  teacher: string;
  title: string;
  desc: string;
}

export default function CourseCart({
  img,
  level,
  teacher,
  title,
  desc,
}: CourseCartProps) {
  return (
    <div className="flex bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Image */}
      <div className="w-1/3 h-full">
        <img src={img} alt={title} className="w-full h-full object-cover" />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col justify-between w-2/3">
        <div>
          <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
            <span className="font-semibold">{level}</span>
            <span>By {teacher}</span>
          </div>
          <h3 className="text-lg font-bold mb-1">{title}</h3>
          <p className="text-gray-700 text-sm">{desc}</p>
        </div>

        <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition-colors duration-300 cursor-pointer">
          Get it Now
        </button>
      </div>
    </div>
  );
}
