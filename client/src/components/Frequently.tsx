import { useState } from "react";
import { LuPlus, LuMinus } from "react-icons/lu";

interface FrequentlyProps {
  question: string;
  answer: string;
}

export default function Frequently({ question, answer }: FrequentlyProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white border-b border-gray-200 p-4 rounded-xl">
      {/* Question Row */}
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span className="font-medium text-gray-800">{question}</span>
        {isOpen ? (
          <LuMinus className="text-gray-500" size={20} />
        ) : (
          <LuPlus className="text-gray-500" size={20} />
        )}
      </div>

      {/* Answer */}
      {isOpen && (
        <p className="mt-2 text-gray-600 text-sm leading-relaxed">{answer}</p>
      )}
    </div>
  );
}
