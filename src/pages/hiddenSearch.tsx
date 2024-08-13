import { useRef, useState } from "react";

// import style from "./styles/hiddenSearch.module.css";
export const HiddenSearch = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [status, setStatus] = useState(true);
  const focusInputRef = () => {
    inputRef.current?.focus();
    setStatus((prev) => !prev);
  };
  return (
    <div className="bg-indigo-500 w-full min-h-screen grid place-items-center">
      <div className="bg-white w-fit flex relative">
        <input
          style={{
            width: status ? "200px" : "0",
            transition: "0.3s width, 0.3s"
          }}
          ref={inputRef}
          className="outline-none border-none h-12 pl-3 text-lg font-[500] placeholder:font-[500]"
          type="text"
          placeholder="Search..."
        />
        <button
          onClick={focusInputRef}
          className="min-w-12 min-h-12 bg-white flex justify-center items-center text-black z-10 absolute right-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2rem"
            height="2rem"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M5 11a6 6 0 1 1 12 0a6 6 0 0 1-12 0m6-8a8 8 0 1 0 4.906 14.32l3.387 3.387a1 1 0 0 0 1.414-1.414l-3.387-3.387A8 8 0 0 0 11 3m0 12a4 4 0 1 0 0-8a4 4 0 0 0 0 8"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
