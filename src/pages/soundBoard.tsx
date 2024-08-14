import { useRef } from "react";

export const SoundBoard = () => {
  const buttonsRef = useRef<HTMLAudioElement[] | null[]>([]);
  const buttons = [
    ["👏", "applause"],
    ["🥱", "boo"],
    ["😲", "gasp"],
    ["⭐", "tada"],
    ["👑", "victory"],
    ["❌", "wrong"],
  ];
  const stopSongs = () => {
    buttonsRef.current.forEach((button) => {
      if (button) {
        button.pause();
        button.currentTime = 0;
      }
    });
  };
  const playSound = (index: number) => {
    stopSongs();
    if (buttonsRef.current[index]) {
      buttonsRef.current[index].volume = 0.3;
      buttonsRef.current[index].play();
    }
  };
  return (
    <div className="w-full min-h-screen bg-purple-700 grid place-items-center">
      <div className="absolute hidden top-0 left-0 w-full h-full">
        {buttons.map((button, index) => (
          <audio
            ref={(el) => {
              if (buttonsRef.current) {
                buttonsRef.current[index] = el;
              }
            }}
            key={index + button[1]}
            src={`/sounds/${button[1]}.mp3`}
          ></audio>
        ))}
      </div>
      <div className="flex gap-5">
        {buttons.map((button, index) => (
          <button
            onClick={() => playSound(index)}
            key={index + button[1]}
            className="bg-purple-900 px-10 py-6 rounded-xl text-6xl cursor-pointer"
          >
            {button[0]}
          </button>
        ))}
      </div>
    </div>
  );
};
