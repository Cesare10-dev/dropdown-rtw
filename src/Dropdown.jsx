import { useState } from "react";
import { AiOutlineCaretUp, AiOutlineCaretDown } from "react-icons/ai";

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative flex flex-col items-center  w-[300px] h-[300px] border border-red-700">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="bg-blue-300 p-4 w-36 flex items-center justify-between"
      >
        Dropdown
        {!isOpen ? (
          <AiOutlineCaretDown className="h-8" />
        ) : (
          <AiOutlineCaretUp className="h-8" />
        )}
      </button>
      {isOpen && (
        <div className="absolute top-16" value={isOpen}>
          <h3>Hello 👍🏻</h3>
          <h3>Hello</h3>
          <h3>Hello</h3>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
