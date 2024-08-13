import { useState } from "react";

export const ProgressSteps = () => {
  const contentSteps = [
    {
      title: "Step 1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, accusamus.",
    },
    {
      title: "Step 2",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, accusamus.",
    },
    {
      title: "Step 3",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, accusamus.",
    },
    {
        title: "Step 4",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, accusamus.",
      },
  ];
  const [position, setPosition] = useState(0);

  const decrement = () => {
    setPosition((prevPosition) => (prevPosition > 0 ? prevPosition - 1 : 0));
    // position > 0 && setPosition(position - 1);
    // if (position > 0) setPosition(position - 1);
  };
  const increment = () => {
    setPosition((prevPosition) =>
      prevPosition < contentSteps.length - 1
        ? prevPosition + 1
        : contentSteps.length - 1
    );
  };
  return (
    <div className="grid place-content-center min-h-screen">
        <div className="ring-1 ring-gray-300 rounded-lg p-5 bg-white">
            <h2 className="font-semibold text-lg">
                {contentSteps[position].title}
            </h2>
            <p>
                {contentSteps[position].description}
            </p>
        </div>
      <section className="w-full flex justify-between items-center relative mt-10 select-none">
        {contentSteps.map((step, index) => (
          <div
            key={step.title}
            style={{
              boxShadow:
                position >= index
                  ? "0 0 0px 3px #60a5fa"
                  : "0 0 0px 3px #d1d5db",
            }}
            className="bg-white rounded-full w-8 h-8 flex justify-center items-center z-10 transition-all duration-300 text-gray-400 font-semibold"
          >
            {index + 1}
          </div>
        ))}
        {/* LINE */}
        <div className="bg-gray-300 absolute h-1 w-full left-0 right-0">
          <div
            className="h-full bg-sky-500 transition-all duration-300"
            style={{
              width: `${(100 / (contentSteps.length - 1)) * position}%`,
            }}
          ></div>
        </div>
      </section>
      <div className="flex gap-3 mt-10 mx-auto select-none">
        <button
          onClick={decrement}
          style={{ backgroundColor: position > 0 ? "#60a5fa " : "#d1d5db " }}
          className="px-6 py-2 rounded-md capitalize text-white"
        >
          prev
        </button>
        <button
          onClick={increment}
          style={{
            backgroundColor:
              position < contentSteps.length - 1 ? "#60a5fa " : "#d1d5db ",
          }}
          className="px-6 py-2 rounded-md capitalize text-white"
        >
          next
        </button>
      </div>
    </div>
  );
};
