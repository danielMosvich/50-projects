import { useRef, useState } from "react";
export const RandomChoicePicker = () => {
  const [words, setWords] = useState<string[]>([]);
  const [wordsReversed, setWordsReversed] = useState<string[]>([]);
  const [input, setInput] = useState<string>("");
  const [winner, setWinner] = useState<string>("");
  const [lastWinner, setLastWinner] = useState<string>("");
  const [vueltas, setVueltas] = useState<number>(25);
  const [duration, setDuration] = useState<number>(5);
  const [isSpinning, setIsSpinning] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const ruleteRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement[] | null[]>([]);

  // const disabledDelete = (e) => {};
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  const handleVueltas = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (Number(e.target.value) < 20 || Number(e.target.value) > 50) return;
    setVueltas(Number(e.target.value));
    setWinner("");
    setLastWinner("");
  };
  const handleDuration = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (Number(e.target.value) < 3 || Number(e.target.value) > 5) return;
    setDuration(Number(e.target.value));
    setWinner("");
    setLastWinner("");
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
    setLastWinner("");
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  function handleRandom() {
    setIsSpinning(true);
    setWinner("");
    let lastWinnerIndex = 0;
    const itemHeight = 70;
    if (ruleteRef.current && itemsRef.current[0]) {
      if (lastWinner) {
        lastWinnerIndex = words.indexOf(lastWinner);
        const translateY = itemHeight * (lastWinnerIndex + words.length - 1);
        ruleteRef.current.style.transition = "transform 0s";
        ruleteRef.current.style.transform = `translateY(${translateY}px)`;
      } else {
        ruleteRef.current.style.transition = "transform 0s";
        ruleteRef.current.style.transform = `translateY(0px)`;
      }
      const winner = words[Math.floor(Math.random() * words.length)];
      const winnerIndex = words.indexOf(winner);
      const containerHeight = itemsRef.current[0].offsetHeight;
      const translateY =
        containerHeight * (vueltas + 1) - itemHeight + itemHeight * winnerIndex;
      ruleteRef.current.style.transition = `transform ${
        duration * 1000
      }ms cubic-bezier(.73,-0.1,0,1.08)`;
      ruleteRef.current.style.transform = `translateY(${translateY}px)`;
      ruleteRef.current.addEventListener("transitionend", () => {
        // setIsSpinning(false);
        setWinner(winner);
        setLastWinner(winner);
        setIsSpinning(false);
      });
      // ? set winner
    }
  }

  return (
    <div className="w-full min-h-screen bg-lime-50 grid place-content-center">
      {/* MACHINE */}
      <div className="bg-gradient-to-t from-lime-500 to-lime-400 border-2 shadow-xl shadow-lime-500/30 border-lime-700 px-10 py-10  max-w-[800px] h-fit w-[800px] min-w-[90%] rounded-2xl flex-col">
        <div className="grid grid-cols-2 gap-5 w-full h-full">
          {/* display */}
          <div
            style={{
              boxShadow:
                "inset 0 0 10px 5px rgba(0,0,0,0.2), 0 0 0 2px rgba(0,0,0,0.4)",
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
          <div className="flex flex-col gap-3">
            <div className="border-2 border-lime-700 bg-lime-600 rounded-xl p-2 flex gap-2 h-[165px] items-start content-start overflow-auto flex-wrap">
              {words.length > 0 &&
                words.map((word, index) => {
                  return (
                    <button
                      key={String(index) + word}
                      className="bg-lime-400 text-lime-700 ring-2 hover:bg-lime-500 transition-colors ring-lime-700 font-semibold px-4 py-1 text-sm rounded-full"
                    >
                      {word}
                    </button>
                  );
                })}
            </div>
            <form onSubmit={(e) => e.preventDefault()} className="flex">
              <input
                ref={inputRef}
                className="rounded-full w-full bg-lime-200 text-lime-950 placeholder:text-lime-700/50 px-4 py-1 border-2 border-lime-700 rounded-r-none outline-none"
                value={input}
                onChange={(e) => handleInput(e)}
                type="text"
                placeholder="set word"
              />
              <button
                type="submit"
                className="bg-lime-600 text-lime-200 border-2 rounded-l-none border-l-0 border-lime-700 font-semibold px-6 py-1 rounded-full"
                onClick={addWord}
              >
                Add
              </button>
            </form>
          </div>
        </div>
        {winner && (
          <div className="mt-5 flex justify-center">
            <div className="text-center text-xl font-semibold text-lime-800 bg-lime-300 ring-2 ring-lime-700 px-4 py-2 rounded-full ">
              WINNER: {winner}
            </div>
          </div>
        )}
        <div className="w-full h-full flex gap-5 items-center">
          <div className="flex w-1/2 h-12  gap-5">
            <div className="w-1/2 h-full">
              <p className="text-xs text-center font-semibold text-lime-800 mb-1">
                Vueltas 20 - 50
              </p>
              <input
                style={{
                  boxShadow: "inset 0 0 8px 0px rgb(0,0,0,0.4)",
                }}
                className="w-full h-full px-5 rounded-lg bg-lime-600 text-lime-200 font-bold text-center text-2xl border-2 border-lime-600"
                onChange={handleVueltas}
                value={vueltas}
                min={"20"}
                max={"50"}
                type="number"
              />
            </div>
            <div className="w-1/2 h-full">
              <p className="text-xs text-center font-semibold text-lime-800 mb-1">
                Duraction 3 - 5 seconds
              </p>
              <input
                style={{
                  boxShadow: "inset 0 0 8px 0px rgb(0,0,0,0.4)",
                }}
                className="w-full h-full px-5 rounded-lg bg-lime-600 text-lime-200 font-bold text-center text-2xl border-2 border-lime-600"
                onChange={handleDuration}
                value={duration}
                min={"3"}
                max={"5"}
                type="number"
              />
            </div>
          </div>
          {/* <button>asd</button> */}
          <div className="mt-10 w-1/2">
            <button
              onClick={handleRandom}
              disabled={words.length <= 1 || isSpinning}
              className="w-full bg-gradient-to-l from-lime-200 to-lime-400 border-2 border-lime-700 text-lime-700 font-bold text-lg  py-2 rounded-full active:scale-95 transition-transform disabled:grayscale disabled:cursor-not-allowed disabled:scale-95 uppercase"
            >
              spin
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
