// import { ChevronDown } from "lucide-react";

import { useState } from "react";
import Dropdown from "./Dropdown";

// import { FiCheck, FiChevronDown } from "react-icons/fi";

const usersArray = [
  {
    name: "Miguel",
    imgUrl: "/assets/user-1.svg",
    id: "M1",
  },
  {
    name: "Jane",
    imgUrl: "/assets/user-2.svg",
    id: "J2",
  },
  {
    name: "Paul",
    imgUrl: "/assets/user-3.svg",
    id: "P3",
  },
  {
    name: "Abbey",
    imgUrl: "/assets/user-4.svg",
    id: "A4",
  },
  {
    name: "Chad",
    imgUrl: "/assets/user-5.svg",
    id: "C5",
  },
  {
    name: "Fiona",
    imgUrl: "/assets/user-6.svg",
    id: "F6",
  },
  {
    name: "Andreas",
    imgUrl: "/assets/user-7.svg",
    id: "A7",
  },
  {
    name: "Jane",
    imgUrl: "/assets/user-8.svg",
    id: "J8",
  },
];

export default function App() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="flex h-[100dvh] flex-col items-center gap-4 bg-[#2b2c37] p-20 text-white">
      <div className="w-[400px]">
        <h1 className="text-2xl">My React Dropdown </h1>
        <Dropdown
          usersArray={usersArray}
          isDropdownOpen={isDropdownOpen}
          setIsDropdownOpen={setIsDropdownOpen}
        />
      </div>
    </div>
  );
}
