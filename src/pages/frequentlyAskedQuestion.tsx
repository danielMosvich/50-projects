import { useRef } from "react";
import "./styles/frequentlyAskedQuestion.css";
export const FrequentlyAskedQuestion = () => {
  const questionsRefs = useRef<HTMLElement[] | null[]>([]);
  const questions = [
    {
      question: "What is the best way to learn react?",
      answer:
        "I recommend you to start with the official documentation and then move to the React tutorials on the official website. You can also check out the free courses on Udemy and egghead.io.",
    },
    {
      question: "What is the best way to learn react?",
      answer:
        "I recommend you to start with the official documentation and then move to the React tutorials on the official website. You can also check out the free courses on Udemy and egghead.io.",
    },
    {
      question: "How to use tailwind css with react?",
      answer:
        "You can use tailwind css with react by installing the tailwindcss package and then adding it to your project. You can also use the tailwind-react package to add tailwind classes to your components.",
    },
  ];
  return (
    <div className="w-full min-h-screen bg-rose-50">
      <ul className="pt-20 mx-auto w-fit text-center">
        <h2>Title</h2>
        {questions.map((question, index) => {
          return (
            <li
              ref={(el) => (questionsRefs.current[index] = el)}
              className="card transition-all  relative ring-1 ring-neutral-300 shadow-xl shadow-neutral-500/10"
              key={index}
            >
              <div
                className="absolute right-5 top-3 select-none cursor-pointer hover:bg-neutral-200 text-neutral-500 rounded-full w-10 h-10 flex items-center justify-center z-20" 
                onClick={() => {
                  if (questionsRefs.current[index]) {
                    questionsRefs.current[index].classList.toggle("active");
                  }
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.5rem"
                  height="1.5rem"
                  viewBox="0 0 24 24"
                >
                  <g fill="none" fillRule="evenodd">
                    <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                    <path
                      fill="currentColor"
                      d="M13.06 16.06a1.5 1.5 0 0 1-2.12 0l-5.658-5.656a1.5 1.5 0 1 1 2.122-2.121L12 12.879l4.596-4.596a1.5 1.5 0 0 1 2.122 2.12l-5.657 5.658Z"
                    />
                  </g>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-neutral-800 z-10 relative">{question.question}</h3>
              <div className="answer mt-3 text-neutral-900">{question.answer}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
