// import React from 'react'

export default function SplitLandingPage() {
  return (
    <div className="bg-rose-500 w-full min-h-screen flex">
      <div
        style={{
          backgroundImage:
            "url('https://50projects50days.com/projects/split-landing-page/ps.jpg')",
        }}
        className="bg-black w-1/2 hover:w-[150%] transition-all duration-500 flex justify-center items-center flex-col gap-20"
      >
        <div className="flex flex-col items-center justify-center gap-20 bg-blue-950/60 w-full h-full overflow-hidden relative">
          <h2 className="text-6xl font-semibold capitalize text-white text-center text-ellipsis whitespace-nowrap absolute top-[40%]">
            Play station 5
          </h2>
          <a
            href="#"
            className="border-[3px] border-white text-white px-10 py-5 text-xl font-semibold uppercase mt-20 hover:bg-indigo-500 hover:border-indigo-500 transition-all"
          >
            Buy now
          </a>
        </div>
      </div>
      <div
        style={{
          backgroundImage:
            "url('https://50projects50days.com/projects/split-landing-page/xbox.jpg')",
        }}
        className="bg-black w-1/2 hover:w-[150%] transition-all duration-500 flex justify-center items-center flex-col gap-20"
      >
        <div className="flex flex-col items-center justify-center gap-20 bg-gray-950/60 w-full h-full overflow-hidden relative">
          <h2 className="text-6xl font-semibold capitalize text-white text-center text-ellipsis whitespace-nowrap absolute top-[40%]">
            Xbox series x
          </h2>
          <a
            href="#"
            className="border-[3px] border-white text-white px-10 py-5 text-xl font-semibold uppercase mt-20 hover:bg-green-500 hover:border-green-500 transition-all"
          >
            Buy now
          </a>
        </div>
      </div>
    </div>
  );
}
