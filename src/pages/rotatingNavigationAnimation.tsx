// import { useRef } from "react";

import { useState } from "react";

export const RotatingNavigationAnimation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuOpen = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className="bg-neutral-800 overflow-x-clip">
      {/* BUBLE */}
      <div
        style={{ rotate: menuOpen ? "-135deg" : "0deg" }}
        className="bg-rose-400 w-[200px] h-[200px] rounded-full fixed flex justify-center items-center text-white left-[-100px] top-[-100px] transition-all duration-500 z-10"
      >
        <button
          onClick={handleMenuOpen}
          className="self-end absolute bottom-10 right-10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2.5rem"
            height="2.5rem"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              d="M3 17h18M3 12h18M3 7h18"
            />
          </svg>
        </button>
        <button onClick={handleMenuOpen} className="absolute left-5 rotate-45">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2.5rem"
            height="2.5rem"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              d="M18 6L6 18M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      {/* CONTENT */}
      <main
        style={{
          rotate: menuOpen ? "-20deg" : "0deg",
          transformOrigin: "top left",
        }}
        className="py-24  bg-white w-screen h-fit transition-all duration-500"
      >
        <div className="mx-auto max-w-5xl  ">
          <h2 className="text-3xl font-semibold">Amazing Article</h2>
          <small className="italic text-gray-500">Florin Pop</small>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            quia in ratione dolores cupiditate, maxime aliquid impedit dolorem
            nam dolor omnis atque fuga labore modi veritatis porro laborum
            minus, illo, maiores recusandae cumque ipsa quos. Tenetur,
            consequuntur mollitia labore pariatur sunt quia harum aut. Eum
            maxime dolorem provident natus veritatis molestiae cumque quod
            voluptates ab non, tempore cupiditate? Voluptatem, molestias culpa.
            Corrupti, laudantium iure aliquam rerum sint nam quas dolor
            dignissimos in error placeat quae temporibus minus optio eum soluta
            cupiditate! Cupiditate saepe voluptates laudantium. Ducimus
            consequuntur perferendis consequatur nobis exercitationem molestias
            fugiat commodi omnis. Asperiores quia tenetur nemo ipsa.
          </p>
          <h3 className="text-xl font-semibold my-5">My Dog</h3>
          <img
            className=""
            src="https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
            alt="poppy"
          />
          <p className="mt-5 ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit libero
            deleniti rerum quo, incidunt vel consequatur culpa ullam. Magnam
            facere earum unde harum. Ea culpa veritatis magnam at aliquid.
            Perferendis totam placeat molestias illo laudantium? Minus id minima
            doloribus dolorum fugit deserunt qui vero voluptas, ut quia cum amet
            temporibus veniam ad ea ab perspiciatis, enim accusamus asperiores
            explicabo provident. Voluptates sint, neque fuga cum illum, tempore
            autem maxime similique laborum odio, magnam esse. Aperiam?
          </p>
        </div>
      </main>
      {/* Nabvar  */}
      <nav className="fixed left-8 bottom-20 transition-transform duration-500" style={{transform: !menuOpen ? "translatex(-150%)" : "none"}}>
        <ul className="flex flex-col gap-8">
          <li className="flex gap-2 items-center text-white text-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8z"
              />
            </svg>{" "}
            Home
          </li>
          <li className="flex gap-2 pl-5 items-center text-white text-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2S7.5 4.019 7.5 6.5M20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1z"
              />
            </svg>{" "}
            About
          </li>
          <li className="flex gap-2 pl-10 items-center text-white text-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7l8-5V6l-8 5l-8-5v2z"
              />
            </svg>{" "}
            Contact
          </li>
        </ul>
      </nav>
    </div>
  );
};
