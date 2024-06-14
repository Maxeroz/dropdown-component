import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

function Dropdown({ setIsDropdownOpen, isDropdownOpen, usersArray }) {
  const toggleDropdown = () => {
    setIsDropdownOpen(true);
  };

  return (
    <div>
      <label className="mt-4">Assign user(s) to as task:</label>

      <button
        className="hover:border-primary relative flex w-full cursor-pointer items-center justify-between rounded border border-[#828FA340] px-4 py-2"
        onClick={toggleDropdown}
      >
        <span className="block">
          <FiChevronDown color="#635FC7" size={24} />
        </span>
        {isDropdownOpen && (
          <div className="absolute bottom-full left-full w-max translate-x-9 translate-y-full rounded bg-[#20212c]">
            <ul className="flex flex-col p-2">
              {usersArray.map((user) => (
                <li
                  key={user.id}
                  className={`flex items-center gap-2 rounded p-4 transition-all duration-200 hover:bg-[#2b2c37]`}
                >
                  <img
                    className="h-6 w-6"
                    src={user.imgUrl}
                    alt={`${user.name} image`}
                  />
                  <span>{user.name}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </button>
    </div>
  );
}

export default Dropdown;
