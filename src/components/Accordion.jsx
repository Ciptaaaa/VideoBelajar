import { useState } from "react";
import Down from "../assets/down.png";

const Accordion = ({ title = "Kamu akan mempelajari", items = [] }) => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleDropDown = (index) => {
    setOpenAccordion((prev) => (prev === index ? null : index));
  };

  return (
    <div className="bg-white rounded-lg border p-6 mb-6">
      <h2 className="text-xl font-bold text-gray-900 mb-4">{title}</h2>
      <div className="border border-gray-200 rounded-lg">
        {items.map((item, index) => (
          <div className="border-b" key={index}>
            <button
              onClick={() => toggleDropDown(index)}
              className="w-full text-left p-4 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 flex justify-between items-center"
            >
              <span className="text-green-600 font-semibold">{item.title}</span>
              <img
                src={item.icon || Down}
                alt="Toggle"
                className={`w-6 h-6 text-gray-500 transform ${
                  openAccordion === index ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openAccordion === index
                  ? "max-h-screen opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="px-4 py-2">
                <ul className="space-y-2">
                  {item.lessons.map((lesson, lessonIndex) => (
                    <li
                      className="flex justify-between items-center"
                      key={lessonIndex}
                    >
                      <span>{lesson.name}</span>
                      <span>{lesson.duration}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Accordion;
