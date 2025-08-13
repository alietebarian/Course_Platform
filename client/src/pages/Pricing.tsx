import React from 'react'
import PriceCart from '../components/PriceCart';
import Frequently from '../components/Frequently';

export default function Pricing() {

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
    <div>
      <div className="flex justify-around py-8">
        <span className="text-2xl font-bold">Our Pricings</span>
        <span className="font-thin text-sm">
          Welcome to SkillBridge's Pricing Plan page, where we offer two
          comprehensive <br /> options to cater to your needs: Free and Pro. We believe
          in providing flexible and <br /> affordable pricing options for our services.
          Whether you're an individual looking to <br /> enhance your skills or a
          business seeking professional development solutions, we <br /> have a plan
          that suits you. Explore our pricing options below and choose the one
          that <br /> best fits your requirements.
        </span>
      </div>
      <div className='my-16'>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <PriceCart PlanType="Free Plan" Price={0} features={priceTitleFree} />
                <PriceCart PlanType="Pro Plan" Price={79} features={priceTitlePro} />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-8 bg-gray-50 p-8 rounded-lg mt-16">
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
                    <div className="md:w-2/3 flex flex-col gap-4">
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
