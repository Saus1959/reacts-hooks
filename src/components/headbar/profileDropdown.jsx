import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faGear,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

function ProfileDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleLogout = () => {
    console.log("Выход из аккаунта...");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 text-white border-2 transition-colors duration-300 ${
          isOpen ? "border-[#20D99A]" : "border-transparent"
        } hover:border-[#20D99A] focus:outline-none`}
      >
        <FontAwesomeIcon icon={faUser} />
      </button>

      {isOpen && (
        <div className="absolute right-0 z-10 w-48 mt-2 origin-top-right bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <div className="px-4 py-2 border-b border-gray-100">
              <p className="text-sm text-gray-500">Вошли как</p>
              <p className="text-sm font-medium text-gray-900 truncate">
                scout@example.com
              </p>
            </div>

            <button
              className="flex items-center w-full px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-50 hover:text-[#20D99A]"
              onClick={() => setIsOpen(false)}
            >
              <FontAwesomeIcon icon={faUser} className="mr-3 w-4" />
              Мой профиль
            </button>

            <button
              className="flex items-center w-full px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-50 hover:text-[#20D99A]"
              onClick={() => setIsOpen(false)}
            >
              <FontAwesomeIcon icon={faGear} className="mr-3 w-4" />
              Настройки
            </button>

            <button
              onClick={handleLogout}
              className="flex items-center w-full px-4 py-2 text-sm text-red-600 transition-colors hover:bg-red-50"
            >
              <FontAwesomeIcon icon={faRightFromBracket} className="mr-3 w-4" />
              Выйти
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProfileDropdown;
