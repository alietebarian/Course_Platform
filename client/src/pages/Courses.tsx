import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import CourseCart from "../components/CourseCart";
import { useState } from "react";
import { IoMdSearch } from "react-icons/io";

interface courseProps {
  id: number;
  name: string;
  title: string;
  description: string;
  teacher: string;
  level: string;
  image: string;
}

interface PaginatedCoursesResult {
  items: courseProps[];
  totalCount: number;
}

const GetCourses = async (
  page: number,
  pageSize: number,
  search: string
): Promise<PaginatedCoursesResult> => {
  const res = await axios.get(
    `http://localhost:5126/api/Course?Search=${encodeURIComponent(
      search
    )}&PageNumber=${page}&PageSize=${pageSize}`
  );
  return res.data;
};

export default function Courses() {
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const pageSize = 6;

  const {
    data: courses,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["courses", page, searchQuery, pageSize],
    queryFn: () => GetCourses(page, pageSize, searchQuery),
    keepPreviousData: true,
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {(error as Error).message}</div>;

  const totalCount = courses?.totalCount || 0;
  const totalPages = Math.ceil(totalCount / pageSize);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPage(1);
    setSearchQuery(searchTerm);
  };

  return (
    <div>
      <div className="flex justify-center py-8">
        <form
          className="hidden md:flex mr-16 items-center bg-white rounded-xl shadow-md overflow-hidden"
          onSubmit={handleSearchSubmit}
        >
          <input
            type="text"
            placeholder="Search items..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-4 text-black outline-none w-48 md:w-64 transition-all duration-200"
          />
          <button
            type="submit"
            className="flex items-center gap-1 bg-orange-500 px-4 py-2 hover:bg-orange-600 text-white transition-colors duration-200"
          >
            <IoMdSearch size={18} />
            <span className="hidden sm:inline">Search</span>
          </button>
        </form>
      </div>

      {/* Courses Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
        {courses?.items?.map((item) => (
          <CourseCart
            key={item.id}
            id={item.id}
            img={item.image}
            level={item.level}
            teacher={item.teacher}
            title={item.title}
            desc={item.description}
          />
        ))}
      </div>

      <div className="flex justify-center mt-6 gap-2">
        <button
          disabled={page === 1}
          onClick={() => setPage((p) => p - 1)}
          className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
        >
          Prev
        </button>
        <span>
          Page {page} of {totalPages}
        </span>
        <button
          disabled={page === totalPages}
          onClick={() => setPage((p) => p + 1)}
          className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}
