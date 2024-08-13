import { useState } from "react";
import "./components/expandingCards.css";

export const ExpandingCards = () => {
  const [urls, setUrls] = useState([
    [
      "https://i.pinimg.com/474x/4f/58/82/4f588252a387e9aa79a3076ba1a689dd.jpg",
      "active",
    ],
    [
      "https://i.pinimg.com/236x/ab/ee/20/abee20be64f67f763a598676c40e3939.jpg",
      "disabled",
    ],
    [
      "https://i.pinimg.com/236x/ee/26/30/ee26308752068d34f95af5931eda2fcd.jpg",
      "disabled",
    ],
    [
      "https://i.pinimg.com/236x/b0/13/56/b013562ae8d14dca50b24d2ef55a3d0b.jpg",
      "disabled",
    ],
    [
      "https://i.pinimg.com/474x/dc/2e/a1/dc2ea149b7c07eeb0f035379a11e7a69.jpg",
      "disabled",
    ],
  ]);
  const changeImageApend = (index: number) => {
    setUrls((prev) =>
      prev.map((url, indexPrev) => [
        url[0],
        indexPrev === index ? "active" : "disabled",
      ])
    );
  };
  return (
    <div className="container">
      {urls.map((url, index) => (
        <div
          key={url[0]}
          className={`images ${url[1]}`}
          onClick={() => {
            changeImageApend(index);
          }}
          style={{ backgroundImage: `url(${url[0]})` }}
        >
          <h2>{url[0]}</h2>
        </div>
      ))}
    </div>
  );
};
