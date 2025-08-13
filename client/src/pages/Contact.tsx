import React from "react";

export default function Contact() {
  return (
    <div className="bg-gray-50 min-h-screen py-16 px-6">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-4xl font-extrabold text-gray-800">Contact Us</h2>
        <p className="text-gray-600 mt-4 text-lg leading-relaxed">
          Welcome to our online course page, where you can enhance your skills
          in design and development. Choose from our carefully curated selection
          of courses designed to provide you with comprehensive knowledge and
          practical experience.
        </p>
      </div>

      {/* Contact Section */}
      <div className="bg-white shadow-xl rounded-2xl p-8 flex flex-col md:flex-row gap-10 max-w-6xl mx-auto">
        {/* Form */}
        <form className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              First Name
            </label>
            <input
              type="text"
              placeholder="Enter First Name"
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400 outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Last Name
            </label>
            <input
              type="text"
              placeholder="Enter Last Name"
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400 outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your Email"
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400 outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Phone
            </label>
            <input
              type="tel"
              placeholder="Enter Phone Number"
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400 outline-none"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-gray-700 font-semibold mb-2">
              Subject
            </label>
            <input
              type="text"
              placeholder="Enter your Subject"
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400 outline-none"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-gray-700 font-semibold mb-2">
              Message
            </label>
            <textarea
              placeholder="Enter your Message here..."
              rows={5}
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400 outline-none resize-none"
            />
          </div>

          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition duration-300"
            >
              Send Your Message
            </button>
          </div>
        </form>

        {/* Contact Info */}
        <div className="flex-1 flex flex-col gap-6 justify-center">
          <div className="flex items-center gap-4">
            <img src="/name.png" alt="email" className="w-6 h-6" />
            <span className="text-gray-700">support@skillbridge.com</span>
          </div>

          <div className="flex items-center gap-4">
            <img src="/tele.png" alt="phone" className="w-6 h-6" />
            <span className="text-gray-700">+98 991 726 6467</span>
          </div>

          <div className="flex items-center gap-4">
            <img src="/locat.png" alt="location" className="w-6 h-6" />
            <span className="text-gray-700">Somewhere in the World</span>
          </div>

          <div className="flex items-center gap-4 mt-4">
            <span className="text-gray-700 font-semibold">
              Social Profiles:
            </span>
            <div className="flex gap-3">
              <img
                src="/twit.png"
                alt="Twitter"
                className="w-6 h-6 cursor-pointer hover:opacity-80"
              />
              <img
                src="/face.png"
                alt="Facebook"
                className="w-6 h-6 cursor-pointer hover:opacity-80"
              />
              <img
                src="/link.png"
                alt="LinkedIn"
                className="w-6 h-6 cursor-pointer hover:opacity-80"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
