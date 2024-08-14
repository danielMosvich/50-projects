import { useEffect, useState } from "react";

export const DadJokes = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [jokes, setJokes] = useState<{ id: string; joke: string }[]>([]);
  const [position, setPosition] = useState(0);

  async function loadJoke() {
    setIsLoading(true);
    try {
      const res = await fetch("https://icanhazdadjoke.com", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      setPosition(0);
      setJokes((prev) => [...prev, data]);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  }

  const decrement = () => {
    if (position > 0) setPosition(position - 1);
  };
  const increment = () => {
    if (position < jokes.length - 1) {
      setPosition(position + 1);
    }
  };
  useEffect(() => {
    loadJoke();
  }, []);
  return (
    <div className="w-full h-screen bg-indigo-500 grid place-items-center ">
      <div className="bg-white max-w-[800px] w-full p-10 relative rounded-3xl">
        <span className="bg-rose-500 w-10 h-10 absolute right-2 top-2 flex items-center justify-center rounded-full text-white font-semibold ">
          {jokes.length - position}
        </span>
        <h2 className="text-center text-lg text-neutral-500">
          Intenta no reir xd
        </h2>
        {isLoading ? (
          <p className="text-2xl font-semibold text-center mt-10">Loading...</p>
        ) : (
          <p className="text-2xl font-semibold text-center mt-10">
            {jokes[jokes.length - 1 - position]?.joke}
          </p>
        )}
        <button
          className="shadow-lg shadow-purple-500/30 flex w-1/2 bg-purple-500 justify-center capitalize text-white items-center mx-auto py-3 rounded-xl mt-10 font-semibold"
          onClick={loadJoke}
        >
          Get another joke
        </button>
        <div className="mt-3 flex justify-center gap-3">
          <button
            disabled={position >= jokes.length - 1 }
            className="flex px-10 disabled:bg-purple-300 text-white capitalize py-3 bg-purple-500 rounded-xl"
            onClick={increment}
          >
            prev
          </button>
          <button
            disabled={position === 0 }
            className="flex px-10 disabled:bg-purple-300 text-white capitalize py-3 bg-purple-500 rounded-xl"
            onClick={decrement}
          >
            next
          </button>
        </div>
      </div>
    </div>
  );
};
