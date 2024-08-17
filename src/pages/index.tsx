export const MainPage = () => {
  const links = [
    ["Expanding Cards", "/expanding-cards"],
    ["Progress Steps", "/progress-steps"],
    ["Rotating Navigation Animation", "/rotating-navigation-animation"],
    ["Hidden Search", "/hidden-search"],
    ["Blurry Loading", "/blurry-loading"],
    ["Scroll Animation", "/scroll-animation"],
    ["Split Landing Page", "/split-landing-page"],
    ["Form Input Wave", "/form-input-wave"],
    ["Sound Board", "/sound-board"],
    ["Dad Jokes", "/dad-jokes"],
    ["Event KeyCodes", "/event-keycodes"],
    ["Frequently Asked Questions", "/frequently-asked-questions"],
    ["Random Choice Picker", "/random-choice-picker"],
    ["Animation Navigation", "/animation-navigation"],
  ]
  return (
    <div>
      <h1 className="text-4xl font-bold">50 projects in react :D</h1>
      <ul className="list-decimal ml-10 mt-10">
        {links.map((arr,index) => (
          <li key={Number(index) + arr[1]}>
            <a className="text-rose-500 font-semibold" href={arr[1]}>{arr[0]}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};
