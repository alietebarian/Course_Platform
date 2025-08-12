import { Link } from "react-router-dom";

interface CourseCartProps {
  id: number;
  img: string;
  level: string;
  teacher: string;
  title: string;
  desc: string;
}

export default function CourseCart({
  id,
  img,
  level,
  teacher,
  title,
  desc,
}: CourseCartProps) {
  return (
    <article className="flex flex-col sm:flex-row bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full">
      {/* Image */}
      <Link
        to={`/course/${id}`}
        className="block sm:w-1/3 h-48 sm:h-auto"
        aria-label={`View ${title} course`}
      >
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </Link>

      {/* Content */}
      <div className="p-4 sm:p-6 flex flex-col justify-between flex-1">
        <div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-600 mb-2">
            <span className="font-semibold bg-gray-100 px-2 py-1 rounded">
              {level}
            </span>
            <span className="text-gray-500">By {teacher}</span>
          </div>
          <h3 className="text-lg md:text-xl font-bold mb-2 text-gray-800 line-clamp-2">
            {title}
          </h3>
          <p className="text-gray-600 text-sm md:text-base line-clamp-3 mb-4">
            {desc}
          </p>
        </div>

        <div className="flex justify-between items-center">
          <Link
            to={`/course/${id}`}
            className="text-orange-600 hover:text-orange-700 font-medium text-sm md:text-base transition-colors"
          >
            View Details
          </Link>
          <button
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            aria-label={`Enroll in ${title} course`}
          >
            Enroll Now
          </button>
        </div>
      </div>
    </article>
  );
}
