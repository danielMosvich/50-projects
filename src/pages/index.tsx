export const MainPage = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold">50 projects in react :D</h1>
      <ul className="list-disc ml-10 mt-10">
        <li>
          <a className="text-sky-500 font-semibold" href="/expanding-cards">
            Expanding Cards
          </a>
        </li>
        <li>
          <a className="text-sky-500 font-semibold" href="/progress-steps">
            Progress Steps
          </a>
        </li>
        <li>
          <a
            className="text-sky-500 font-semibold"
            href="/rotating-navigation-animation"
          >
            Rotating Navigation Animation
          </a>
        </li>
        <li>
          <a className="text-sky-500 font-semibold" href="/hidden-search">
            Hidden Search
          </a>
        </li>
        <li>
          <a className="text-sky-500 font-semibold" href="/blurry-loading">
            Blurry Loading
          </a>
        </li>
        <li>
          <a className="text-sky-500 font-semibold" href="/scroll-animation">
            Scroll Animation
          </a>
        </li>
        <li>
          <a className="text-sky-500 font-semibold" href="/split-landing-page">
            Split Landing Page
          </a>
        </li>
        <li>
          <a className="text-sky-500 font-semibold" href="/form-input-wave">
            Form Input Wave
          </a>
        </li>
      </ul>
    </div>
  );
};
