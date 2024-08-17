// import React from 'react'
import "./styles/animationNavigation.css";
import { useState } from "react";

export const AnimationNavigation = () => {
  const [active, setActive] = useState(true);
  return (
    <div
      style={{
        background: "linear-gradient(to top, #5290F9 50%, #EAFBFF 50%)",
      }}
      className="grid place-content-center  w-full h-screen"
    >
      <header
        className="shadow-2xl"
        style={{
          backgroundColor: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
          transition: active ? "all 0.3s ease" : "all 0.8s ease",
          width: active ? "360px" : "60px",
          height: "70px",
          position: "relative",
          borderRadius: "10px",
        }}
      >
        <ul
          style={{
            width: active ? "100%" : "0",
            opacity: active ? "1" : "0",
          }}
          className="flex gap-5 transition-all duration-300 absolute mx-auto left-0 right-0  items-center justify-start pl-10"
        >
          <li>Home</li>
          <li>Works</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div className="flex justify-center items-center w-[60px] right-0 h-full transition-all absolute">
          <button
            onClick={() => setActive((prev) => !prev)}
            className=" min-w-[30px] min-h-[30px] flex justify-center items-center"
          >
            <div
              style={{
                width: active ? "25px" : "20px ",
                transform: active
                  ? "rotate(45deg)"
                  : "rotate(360deg) translateY(5px)",
              }}
              className="ring-2 ring-blue-500 rounded-full rotate-45 absolute transition-all duration-700"
            ></div>
            <div
              style={{
                width: active ? "25px" : "20px ",
                transform: active
                  ? "rotate(-45deg)"
                  : "rotate(360deg) translateY(-5px)",
              }}
              className="ring-2 ring-blue-500 rounded-full -rotate-45 absolute transition-all duration-700"
            ></div>
          </button>
        </div>
      </header>
    </div>
  );
};
