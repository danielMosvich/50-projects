import { useEffect, useState } from "react";

export const BlurryLoading = () => {
  const [blurPercent, setBlurPercent] = useState(0);
  //   const scale = (num:number, in_min:number, in_max:number, out_min:number, out_max:number) => {
  //     return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
  //   }
  const scale = (numero: number, salida_maxima: number) =>
    salida_maxima + (numero * -salida_maxima) / 100;

//   scale(blurPercent, 100);

  useEffect(() => {
    const interval = setInterval(() => {
      if (blurPercent < 100) {
        setBlurPercent((prev) => prev + 1);
      }
    }, 30);
    return () => clearInterval(interval);
  });
  return (
    <div className="bg-black w-full h-screen grid place-items-center">
      <div
        style={{
          backgroundColor: "black",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1576161787924-01bb08dad4a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2104&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: `blur(${scale(blurPercent, 30)}px)`,
        }}
        className="w-full h-screen absolute"
      ></div>
      <div
        className="text-white text-2xl z-10"
        style={{ opacity: scale(blurPercent, 100) / 100}} 
      >
        {blurPercent}%{" "}
      </div>
    </div>
  );
};
