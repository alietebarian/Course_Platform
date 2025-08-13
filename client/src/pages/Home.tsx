import axios from "axios";
import BenefitCart from "../components/BenefitCart";
import { useQuery } from "@tanstack/react-query";
import CourseCart from "../components/CourseCart";
import TestimonialCart from "../components/TestimonialCart";
import PriceCart from "../components/PriceCart";
import Frequently from "../components/Frequently";

interface CourseProps {
  id: number;
  name: string;
  title: string;
  description: string;
  teacher: string;
  level: string;
  image: string;
}

interface PaginatedResult {
  items: CourseProps[];
  totalCount: number;
}


const GetCourses = async (): Promise<PaginatedResult> => {
  const res = await axios.get<PaginatedResult>(
    "http://localhost:5126/api/Course?Search=&PageNumber=1&PageSize=6"
  );
  return res.data;
};

export default function Home() {
  const navLogos = [
    "Logo (1).png",
    "Logo (2).png",
    "Logo (3).png",
    "Logo (4).png",
    "Logo (5).png",
    "Logo (6).png",
    "Logo (7).png",
  ];

  const benefitDetails = [
    {
      number: "01",
      title: "Flexible Learning Schedule",
      desc: "Fit your coursework around your existing commitments and obligations.",
    },
    {
      number: "02",
      title: "Expert Instruction",
      desc: "Learn from industry experts who have hands-on experience in design and development.",
    },
    {
      number: "03",
      title: "Diverse Course Offerings",
      desc: "Explore a wide range of design and development courses covering various topics.",
    },
    {
      number: "04",
      title: "Updated Curriculum",
      desc: "Access courses with up-to-date content reflecting the latest trends and industry practices.",
    },
    {
      number: "05",
      title: "Practical Projects and Assignments",
      desc: "Develop a portfolio showcasing your skills and abilities to potential employers.",
    },
    {
      number: "06",
      title: "Interactive Learning Environment",
      desc: "Collaborate with fellow learners, exchanging ideas and feedback to enhance your understanding.",
    },
  ];

  const { data: courses, isLoading, isError, error } = useQuery({
    queryKey: ['course'],
    queryFn: GetCourses
  })

  if(isLoading)
    return <div>Loading...</div>

  if(isError)
    return <div>Error: {error.message}</div>

  const Ourtestimonial = [
    {
      desc: "The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!",
      name: "Sarah L",
    },
    {
      desc: "The UI/UX design course exceeded my expectations. The instructor's expertise and practical assignments helped me improve my design skills. I feel more confident in my career now. Thank you!",
      name: "Jason M",
    },
    {
      desc: "The mobile app development course was fantastic! The step-by-step tutorials and hands-on projects helped me grasp the concepts easily. I'm now building my own app. Great course!",
      name: "Emily R",
    },
    {
      desc: "I enrolled in the graphic design course as a beginner, and it was the perfect starting point. The instructor's guidance and feedback improved my design abilities significantly. I'm grateful for this course!",
      name: "Michael K",
    },
  ];

  const priceTitleFree = [
    { title: "Access to selected free courses.", isTrue: true },
    { title: "Limited course materials and resources.", isTrue: true },
    { title: "Basic community support.", isTrue: true },
    { title: "No certification upon completion.", isTrue: false },
    { title: "Ad-supported platform.", isTrue: false },
  ];

  const priceTitlePro = [
    { title: "Access to selected free courses.", isTrue: true },
    { title: "Limited course materials and resources.", isTrue: true },
    { title: "Basic community support.", isTrue: true },
    { title: "No certification upon completion.", isTrue: true },
    { title: "Ad-supported platform.", isTrue: true },
  ];

  const frequency = [
    {
      question: "Can I enroll in multiple courses at once?",
      answer:
        "Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.",
    },
    {
      question: "What kind of support can I expect from instructors?",
      answer:
        "Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.",
    },
    {
      question:
        "Are the courses self-paced or do they have specific start and end dates?",
      answer:
        "Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.",
    },
    {
      question: "Are there any prerequisites for the courses?",
      answer:
        "Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.",
    },
  ];

  return (
    <div className="space-y-10">
      {/* Hero Section */}
      <div className="bg-white p-8 py-16 rounded-xl shadow-md text-center space-y-4">
        <div className="flex items-center justify-center gap-2">
          <img src="/flash.png" alt="flash" className="w-14 h-14" />
          <span className="font-semibold text-3xl text-gray-800">
            Unlock Your Creative Potential
          </span>
        </div>
        <div className="text-gray-600 space-y-1 py-6">
          <p className="text-xl font-medium">
            with Online Design and Development Courses.
          </p>
          <p>Learn from Industry Experts and Enhance Your Skills.</p>
        </div>
        <div className="flex justify-center gap-4 pt-5">
          <button className="bg-orange-500 cursor-pointer text-white px-6 py-2 rounded-lg shadow hover:bg-orange-600 transition">
            Explore Courses
          </button>
          <button className="bg-white border cursor-pointer border-gray-300 px-6 py-2 rounded-lg shadow hover:bg-gray-50 transition">
            View Pricing
          </button>
        </div>
      </div>

      {/* Logo Row */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <ul className="flex items-center justify-between gap-5 flex-wrap">
          {navLogos.map((logo, index) => (
            <li key={index}>
              <img src={`/${logo}`} alt={`navLogo-${index}`} className="h-10" />
            </li>
          ))}
        </ul>
      </div>
      {/* Baner Container */}
      <div className="py-16">
        <img src="/baner.png" alt="baner" className="w-full h-[500px]" />
      </div>

      {/* Benefits */}
      <div className="mt-10">
        <div className="flex justify-between items-start mb-6">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold">Benefits</h2>
            <p className="text-gray-600 mt-2 text-sm">
              Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam
              eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac
              cum eget habitasse in velit fringilla feugiat senectus in.
            </p>
          </div>
          <button className="cursor-pointer bg-white border border-gray-300 px-4 py-2 rounded-lg shadow-sm hover:shadow-md">
            View All
          </button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefitDetails.map((item, index) => (
            <BenefitCart
              key={index}
              number={item.number}
              title={item.title}
              desc={item.desc}
            />
          ))}
        </div>
      </div>
      {/* Courses Section */}
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
          {courses?.items?.map((item, index) => (
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

      {/* Testimonial */}
      <div className="bg-gray-50 py-12 px-4 rounded-xl">
        {/* هدر سکشن */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold">Our Testimonials</h2>
            <p className="text-gray-600 mt-2 text-sm">
              Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam
              eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac
              cum eget habitasse in velit fringilla feugiat senectus in.
            </p>
          </div>
          <button className="mt-4 sm:mt-0 cursor-pointer bg-white border border-gray-300 px-4 py-2 rounded-lg shadow-sm hover:shadow-md transition-all">
            View All
          </button>
        </div>

        {/* کارت‌ها */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {Ourtestimonial.map((item, index) => (
            <TestimonialCart key={index} desc={item.desc} name={item.name} />
          ))}
        </div>
      </div>

      {/* Pricing */}
      <div>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold">Our Pricing</h2>
            <p className="text-gray-600 mt-2 text-sm">
              Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam
              eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac
              cum eget habitasse in velit fringilla feugiat senectus in.
            </p>
          </div>
          <button className="mt-4 sm:mt-0 cursor-pointer bg-white border border-gray-300 px-4 py-2 rounded-lg shadow-sm hover:shadow-md transition-all">
            View All
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <PriceCart PlanType="Free Plan" Price={0} features={priceTitleFree} />
          <PriceCart PlanType="Pro Plan" Price={79} features={priceTitlePro} />
        </div>
      </div>
      {/* Frequently Asked Questions */}
      <div className="flex flex-col md:flex-row gap-8 bg-gray-50 p-8 rounded-lg">
        {/* Left Section */}
        <div className="md:w-1/3 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Still have any questions? Contact our team via{" "}
              <a
                href="mailto:support@skillbridge.com"
                className="text-blue-600 hover:underline"
              >
                support@skillbridge.com
              </a>
            </p>
          </div>
          <button className="mt-6 w-fit bg-white border border-gray-300 px-5 py-2 rounded-lg shadow-sm hover:shadow-md transition">
            See All FAQ’s
          </button>
        </div>

        {/* Right Section */}
        <div className="md:w-2/3 flex flex-col gap-4 ">
          {frequency.map((item, index) => (
            <Frequently
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
