import React from 'react'
import AchievementsCart from '../components/AchievementsCart';

export default function AboutUs() {

  const AchievementsElem = [
    {
      icon: "/a1.png",
      title: "Trusted by Thousands",
      desc: "We have successfully served thousands of students, helping them unlock their potential and achieve their career goals.",
    },
    {
      icon: "/a2.png",
      title: "Award-Winning Courses",
      desc: "Our courses have received recognition and accolades in the industry for their quality, depth of content, and effective teaching methodologies.",
    },
    {
      icon: "/a3.png",
      title: "Positive Student Feedback",
      desc: "We take pride in the positive feedback we receive from our students, who appreciate the practicality and relevance of our course materials.",
    },
    {
      icon: "/a4.png",
      title: "Industry Partnerships",
      desc: "We have established strong partnerships with industry leaders, enabling us to provide our students with access to the latest tools and technologies",
    },
  ];

  const GoalsElem = [
    {
      icon: "/a5.png",
      title: "Provide Practical Skills",
      desc: "We focus on delivering practical skills that are relevant to the current industry demands. Our courses are designed to equip learners with the knowledge and tools needed to excel in their chosen field.",
    },
    {
      icon: "/a6.png",
      title: "Foster Creative Problem-Solving",
      desc: "We encourage creative thinking and problem-solving abilities, allowing our students to tackle real-world challenges with confidence and innovation.",
    },
    {
      icon: "/a7.png",
      title: "Promote Collaboration and Community",
      desc: "We believe in the power of collaboration and peer learning. Our platform fosters a supportive and inclusive community where learners can connect, share insights, and grow together.",
    },
    {
      icon: "/a8.png",
      title: "Stay Ahead of the Curve",
      desc: "The digital landscape is constantly evolving, and we strive to stay at the forefront of industry trends. We regularly update our course content to ensure our students receive the latest knowledge and skills.",
    },
  ];

  return (
    <div>
      <div className="flex justify-around py-8">
        <span className="text-2xl font-bold">About Skillbridge</span>
        <span className="font-thin text-sm">
          Welcome to our platform, where we are passionate about empowering
          individuals to <br /> master the world of design and development. We
          offer a wide range of online courses <br /> designed to equip learners
          with the skills and knowledge needed to succeed in the <br />{" "}
          ever-evolving digital landscape.
        </span>
      </div>

      <div className="flex flex-col">
        <span className="text-2xl font-bold">Achievements</span>
        <span className="font-thin text-sm">
          Our commitment to excellence has led us to achieve significant
          milestones along our journey. Here are some of our notable
          achievements
        </span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {AchievementsElem.map((item, index) => (
          <AchievementsCart
            key={index}
            icon={item.icon}
            desc={item.desc}
            title={item.title}
          />
        ))}
      </div>
      <div className="flex flex-col py-16">
        <span className="text-2xl font-bold">Our Goals</span>
        <span className="font-thin text-sm">
          At SkillBridge, our goal is to empower individuals from all
          backgrounds to thrive in the world of design and development. We
          believe that education should be accessible and transformative,
          enabling learners to pursue their passions and make a meaningful
          impact. Through our carefully crafted courses, we aim to
        </span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {GoalsElem.map((item, index) => (
          <AchievementsCart
            key={index}
            icon={item.icon}
            desc={item.desc}
            title={item.title}
          />
        ))}
      </div>

      <div className="bg-white rounded-2xl shadow-lg flex flex-col md:flex-row items-center justify-between gap-6 p-8 py-16 mt-18 mb-24 transition-all duration-300 hover:shadow-xl">
        <div className="flex flex-col max-w-xl text-center md:text-left">
          <h2 className="text-3xl font-extrabold text-gray-900 leading-snug">
            Together, let's shape the future of{" "}
            <span className="text-orange-500">digital innovation</span>
          </h2>
          <p className="mt-3 text-gray-600 text-base leading-relaxed">
            Join us on this exciting learning journey and unlock your potential
            in design and development.
          </p>
        </div>
        <div>
          <button className="bg-orange-500 cursor-pointer text-white font-semibold rounded-full px-6 py-3 shadow-md hover:bg-orange-600 hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300">
            Join Now
          </button>
        </div>
      </div>
    </div>
  );
}
