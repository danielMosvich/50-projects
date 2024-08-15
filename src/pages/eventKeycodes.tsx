import { useEffect, useState } from "react";

export const EventKeycodes = () => {
  const [keycodes, setKeycodes] = useState<{
    key: string;
    code: string;
    keyCode: number;
  } | null>(null);
  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      setKeycodes({ key: e.key, code: e.code, keyCode: e.keyCode });
    });
  }, []);
  return (
    <div className="w-full h-screen bg-neutral-200 grid place-items-center">
      {keycodes ? (
        <div className="flex gap-5">
          <div className="bg-white w-[150px] py-5 border relative border-neutral-500 text-center text-xl font-semibold shadow-xl">
            <span className="absolute -top-7 text-sm text-neutral-500 left-0 right-0 mx-auto">
              code
            </span>
            {keycodes.code}
          </div>
          <div className="bg-white w-[150px] py-5 border relative border-neutral-500 text-center text-xl font-semibold shadow-xl">
            <span className="absolute -top-7 text-sm text-neutral-500 left-0 right-0 mx-auto">
              keyCode
            </span>
            {keycodes.keyCode}
          </div>
          <div className="bg-white w-[150px] py-5 border relative border-neutral-500 text-center text-xl font-semibold shadow-xl">
            <span className="absolute -top-7 text-sm text-neutral-500 left-0 right-0 mx-auto">
              key
            </span>
            {keycodes.key}
          </div>
        </div>
      ) : (
        <div className="w-[150px] py-5 border shadow-xl bg-neutral-100 text-center font-semibold capitalize border-neutral-500">
          press any key
        </div>
      )}
    </div>
  );
};
