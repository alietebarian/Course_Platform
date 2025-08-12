import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import CourseCart from "../components/CourseCart";

interface courseProps {
  id: number;
  name: string;
  title: string;
  description: string;
  teacher: string;
  level: string;
  image: string;
}

const GetCourses = async (): Promise<courseProps[]> => {
  const res = await axios.get("http://localhost:5126/api/Course");

  return res.data;
};

export default function Courses() {

  const {
    data: courses,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["courses"],
    queryFn: GetCourses,
  });

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div>
      {/* main */}
      <div className="flex justify-around py-8">
        <span className="text-2xl font-black">Online Courses on Design and <br />
          Development</span>
        <span className="text-sm ">
          Welcome to our online course page, where you can enhance your skills
          in design and <br /> development. Choose from our carefully curated selection
          of 10 courses designed to <br /> provide you with comprehensive knowledge and
          practical experience. Explore the <br /> courses below and find the perfect
          fit for your learning journey.
        </span>
      </div>
      <div className="px-6 py-12 bg-gray-50">
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-10 bg-orange-500 rounded"></span>
                  <h2 className="text-3xl font-bold">Our Courses</h2>
                </div>
                <p className="text-gray-600 max-w-2xl">
                  Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget
                  elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum
                  eget habitasse in velit fringilla feugiat senectus in.
                </p>
                <button className="bg-white border border-gray-300 px-5 py-2 rounded-lg shadow hover:bg-gray-100 transition">
                  View All
                </button>
              </div>
      
              {/* Courses Grid */}
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
                {courses?.map((item, index) => (
                  <CourseCart
                    key={index}
                    id={item.id}
                    img={item.image}
                    level={item.level}
                    teacher={item.teacher}
                    title={item.title}
                    desc={item.description}
                  />
                ))}
              </div>
            </div>
    </div>
  );
}
