import { useRef, useState } from "react";
export const RandomChoicePicker = () => {
  const [words, setWords] = useState<string[]>([]);
  const [wordsReversed, setWordsReversed] = useState<string[]>([]);
  const [input, setInput] = useState<string>("");
  const [winner, setWinner] = useState<string>("");
  const [vueltas, setVueltas] = useState<number>(20);
  const [duration, setDuration] = useState<number>(3);
  const inputRef = useRef<HTMLInputElement>(null);
  const ruleteRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement[] | null[]>([]);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const addWord = () => {
    if (ruleteRef.current) {
      ruleteRef.current.style.transition = "transform 0s";
      ruleteRef.current.style.transform = `translateY(0px)`;
    }
    if (input.length <= 0) return;
    setWords([...words, input.trim()]);
    setWordsReversed([input.trim(), ...wordsReversed]);
    setInput("");
    setWinner("");
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  function handleRandom() {
    if (ruleteRef.current && itemsRef.current[0]) {
      ruleteRef.current.style.transition = "transform 0s";
      ruleteRef.current.style.transform = `translateY(0px)`;
      const random = Math.floor(Math.random() * words.length);
      const winner = words[random];
      const winnerIndex = words.indexOf(winner);
      const itemHeight = 70;
      const containerHeight = itemsRef.current[0].offsetHeight;
      const sumatoria = itemHeight * winnerIndex;
      const translateY = containerHeight * (vueltas + 1);
      ruleteRef.current.style.transition = `transform ${
        duration * 1000
      }ms ease-in-out`;
      ruleteRef.current.style.transform = `translateY(${
        translateY - itemHeight + sumatoria
      }px)`;
      console.log(winner, winnerIndex);
    }
  }

  return (
    <div className="w-full min-h-screen bg-rose-500 grid place-content-center">
      {/* DISPLAY */}
      <div className="bg-white max-w-[800px] w-full p-10 rounded-2xl grid grid-cols-2 gap-10">
        {/* MACHINE */}
        <div
          style={{
            boxShadow: "inset 0 0 10px 5px rgba(0,0,0,0.2), 0 0 0 2px rgba(0,0,0,0.4)",
          }}
          className="items-center bg-white justify-center flex flex-col text-center w-full  rounded-xl h-[210px] overflow-hidden"
        >
          <div
            ref={ruleteRef}
            className="w-full h-full flex flex-col items-center justify-end transition-transform duration-1000"
          >
            {Array.from({ length: vueltas + 3 }).map((_section, _index) => {
              return (
                <div
                  ref={(el) => (itemsRef.current[_index] = el)}
                  key={String(_index)}
                  className=" w-full h-fit grid row-auto"
                >
                  {wordsReversed.map((word, i) => {
                    return (
                      <div
                        style={{
                          boxShadow:
                            "inset 0 0 20px 0px rgba(0,0,0,0.1), 0 0 0 0.5px rgba(0,0,0,0.05)",
                        }}
                        className="w-full min-h-[70px]  flex items-center justify-center font-semibold text-xl"
                        key={String(i) + word}
                      >
                        <div className="text-neutral-800">{word}</div>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
        {/* OPTIONS */}
        <div className="flex flex-col">
          <div className="ring-1  rounded-xl p-2 flex gap-1 h-full items-start overflow-auto flex-wrap">
            {words.length > 0 &&
              words.map((word, index) => {
                return (
                  <button
                    key={String(index) + word}
                    className="bg-indigo-500 px-4 py-1 text-sm rounded-full text-white"
                  >
                    {word}
                  </button>
                );
              })}
          </div>
          <div className="mt-2">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="bg-rose-100 flex gap-1"
            >
              <input
                ref={inputRef}
                className="rounded-full px-4 py-1 ring-1 ring-neutral-400 outline-none"
                value={input}
                onChange={(e) => handleInput(e)}
                type="text"
                placeholder="set word"
              />
              <button
                type="submit"
                className="bg-rose-500 ring-2 ring-rose-900 text-rose-900 font-semibold px-4 py-1 rounded-full"
                onClick={addWord}
              >
                add
              </button>
            </form>
            <div>
              <button
                className="bg-rose-500 w-full py-2 rounded-full mt-1 text-white"
                onClick={handleRandom}
              >
                RANDOM!
              </button>
            </div>
          </div>
        </div>
      </div>

      <code className="shadow-sm bg-white mt-10 rounded-xl p-5 w-fit">
        <section>Winner: {winner}</section>
        {/* <button onClick={handleRandom2}>RANDOM2</button> */}
      </code>
    </div>
  );
};
