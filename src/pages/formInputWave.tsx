import { useState } from "react";

export const FormInputWave = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [focusEmail, setFocusEmail] = useState(false);
  const [focusPassword, setFocusPassword] = useState(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  return (
    <div className="w-full h-screen bg-indigo-500 grid place-items-center">
      <form className="bg-indigo-800 p-10 rounded-lg w-[400px]">
        <h2 className="text-center text-4xl font-semibold text-white">
          Please Login
        </h2>
        <div className="mt-10 flex flex-col">
          <div className="text-white text-xl flex">
            <p
              style={{
                transform: focusEmail
                  ? "translateY(7px)"
                  : "translateY(1.75rem)",
              }}
              className="transition-all translate-y-7"
            >
              E
            </p>
            <p
              style={{
                transform: focusEmail
                  ? "translateY(7px)"
                  : "translateY(1.75rem)",
              }}
              className="transition-all translate-y-7 delay-[50ms]"
            >
              m
            </p>
            <p
              style={{
                transform: focusEmail
                  ? "translateY(7px)"
                  : "translateY(1.75rem)",
              }}
              className="transition-all translate-y-7 delay-100"
            >
              a
            </p>
            <p
              style={{
                transform: focusEmail
                  ? "translateY(7px)"
                  : "translateY(1.75rem)",
              }}
              className="transition-all translate-y-7 delay-[150ms]"
            >
              i
            </p>
            <p
              style={{
                transform: focusEmail
                  ? "translateY(7px)"
                  : "translateY(1.75rem)",
              }}
              className="transition-all translate-y-7 delay-200"
            >
              l
            </p>
          </div>
          <input
            value={email}
            onFocus={() => setFocusEmail(true)}
            onBlur={() => email.length <= 0 && setFocusEmail(false)}
            onChange={(e) => handleEmailChange(e)}
            type="text"
            className="bg-transparent z-10 border-b-2 outline-none text-white py-2"
          />
        </div>
        <div className="flex flex-col mt-5">
          <div className="text-white text-xl flex">
            <p
              style={{
                transform: focusPassword
                  ? "translateY(7px)"
                  : "translateY(1.75rem)",
              }}
              className="transition-all translate-y-7"
            >
              P
            </p>
            <p
              style={{
                transform: focusPassword
                  ? "translateY(7px)"
                  : "translateY(1.75rem)",
              }}
              className="transition-all translate-y-7 delay-[50ms]"
            >
              a
            </p>
            <p
              style={{
                transform: focusPassword
                  ? "translateY(7px)"
                  : "translateY(1.75rem)",
              }}
              className="transition-all translate-y-7 delay-100"
            >
              s
            </p>
            <p
              style={{
                transform: focusPassword
                  ? "translateY(7px)"
                  : "translateY(1.75rem)",
              }}
              className="transition-all translate-y-7 delay-[150ms]"
            >
              s
            </p>
            <p
              style={{
                transform: focusPassword
                  ? "translateY(7px)"
                  : "translateY(1.75rem)",
              }}
              className="transition-all translate-y-7 delay-200"
            >
              w
            </p>
            <p
              style={{
                transform: focusPassword
                  ? "translateY(7px)"
                  : "translateY(1.75rem)",
              }}
              className="transition-all translate-y-7 delay-[250ms]"
            >
              o
            </p>
            <p
              style={{
                transform: focusPassword
                  ? "translateY(7px)"
                  : "translateY(1.75rem)",
              }}
              className="transition-all translate-y-7 delay-300"
            >
              r
            </p>
            <p
              style={{
                transform: focusPassword
                  ? "translateY(7px)"
                  : "translateY(1.75rem)",
              }}
              className="transition-all translate-y-7 delay-[350ms]"
            >
              d
            </p>
          </div>
          <input
            value={password}
            onFocus={() => setFocusPassword(true)}
            onBlur={() => password.length <= 0 && setFocusPassword(false)}
            onChange={(e) => handlePasswordChange(e)}
            type="text"
            className="bg-transparent z-10 border-b-2 outline-none text-white py-2"
          />
        </div>
        <button className="bg-sky-200 text-black rounded-md font-semibold px-4 py-3 text-center w-full mt-10">Login</button>
        <p className="mt-5 text-white">
          Dont't have an account? <a href="#" className="text-blue-300">Register</a>
        </p>
      </form>
    </div>
  );
};
