import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchInput = ({ onChange }) => {
  return (
    <div className="py-3 px-4 md:px-5 relative">
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        className="absolute left-7 md:left-10 top-1/2 -translate-y-1/2 text-gray-400"
      />
      <input
        type="search"
        placeholder="Search clubs,players, leagues or etc."
        className="w-full border border-[#20D99A] px-3 pl-10 md:pl-15 py-2 rounded-lg transition-shadow duration-100 hover:shadow-[0_0_15px_#20D99A] "
        onChange={onChange}
      />
    </div>
  );
};

export default SearchInput;
