import { AiOutlineDown } from "react-icons/ai";
import { useState } from "react";

const AppPages = [
  {
    title: "construction",
    href: "/search",
  },
  {
    title: "corporate",
    href: "/heavy-lifts",
  },
  {
    title: "environmental",
    href: "/latest-news",
  },
  {
    title: "Drones UV",
    href: "/contact",
  },
];

const MainMenu = () => {
  const [arrowColor, setArrowColor] = useState("#c06014");

  const changeArrowColor = (e) => {
    e.preventdefault();
    setArrowColor("#fff");
  };
  return (
    <div>
      <nav className="flex flex-row justify-end items-center lg:gap-6 h-full uppercase text-[14px]">
        {AppPages.map((page) => (
          <div className="w-full h-[12vh] flex flex-row gap-1 items-center justify-center py-2 px-4 hover:bg-[#c06014] hover:border-black hover:border-t-8">
            <span key={page.title}>
              <a href={page.href}>{page.title}</a>
            </span>
            <span>
              <AiOutlineDown color={arrowColor} onHover={changeArrowColor} />
            </span>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default MainMenu;
