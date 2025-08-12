import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";

interface CourseProps {
  id: number;
  name: string;
  title: string;
  description: string;
  teacher: string;
  level: string;
  image: string;
}

const GetCourse = async (id: string): Promise<CourseProps> => {
  const res = await axios.get(`http://localhost:5126/api/Course/${id}`);
  return res.data;
};

export default function CourseDetails() {
  const { id } = useParams<{ id: string }>();

  const {
    data: course,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["course", id],
    queryFn: () => GetCourse(id!),
    enabled: !!id,
  });

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-screen text-lg font-semibold text-gray-600">
        Loading course details...
      </div>
    );

  if (isError)
    return (
      <div className="flex justify-center items-center h-screen text-red-500 text-lg">
        Error: {(error as Error).message}
      </div>
    );

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Header Image */}
      <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-lg">
        <img
          src={course?.image}
          alt={course?.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-6">
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            {course?.title}
          </h1>
          <p className="text-gray-200 mt-2">{course?.description}</p>
        </div>
      </div>

      {/* Course Info */}
      <div className="mt-10 grid md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
          <h2 className="text-lg font-semibold text-gray-700">Instructor</h2>
          <p className="text-gray-500">{course?.teacher}</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
          <h2 className="text-lg font-semibold text-gray-700">Level</h2>
          <p className="text-gray-500">{course?.level}</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
          <h2 className="text-lg font-semibold text-gray-700">Category</h2>
          <p className="text-gray-500">{course?.name}</p>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-10 flex justify-center">
        <button className="bg-orange-600 hover:bg-orange-700 cursor-pointer text-white px-6 py-3 rounded-lg text-lg font-medium shadow-md transition-all">
          Enroll Now
        </button>
      </div>
    </div>
  );
}
