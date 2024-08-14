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
    <div className="w-full h-screen bg-rose-500 grid place-items-center">
      {keycodes ? (
        <div className="flex gap-5">
          <div className="bg-rose-100 w-[150px] py-5 border border-neutral-500 text-center text-xl font-semibold">
            {keycodes.code}
          </div>
          <div className="bg-rose-100 w-[150px] py-5 border border-neutral-500 text-center text-xl font-semibold">
            {keycodes.keyCode}
          </div>
          <div className="bg-rose-100 w-[150px] py-5 border border-neutral-500 text-center text-xl font-semibold">
            {keycodes.key}
          </div>
        </div>
      ) : (
        <div>press any key...</div>
      )}
    </div>
  );
};
