import { useEffect, useState } from "react";
import TextTransition, { presets } from "react-text-transition";
import { SocialLinks } from "./SocialLinks";

const greetings = ["Hey there", "Hello", "Howdy", "Hola", "What's up", "Wuddup", "Bonjour", "Aloha", "Ciao", "Yo"];

const randomIndex = (excluding?: number) => {
  const value = Math.floor(Math.random() * greetings.length);
  if (value === excluding) {
    // try once more
    return randomIndex();
  } else {
    return value;
  }
};

export const MainIntro = () => {
  const [index, setIndex] = useState(randomIndex());

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      4000 // every 4 sec
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <div className="flex flex-col my-0 md:my-12">
      <div className="text-3xl md:text-5xl font-serif font-bold flex flex-row">
        <TextTransition inline={true} text={greetings[index % greetings.length]} springConfig={presets.slow} />
        <div>, I'm Justin!</div>
      </div>
      <div className="text-l md:text-xl font-light mt-4">
        <div>I'm a software engineer 📱</div>
        <div> digital creator 🏗️ </div>
        <div>& curious optimist 🦊</div>
      </div>

      <div className="mt-4">
        <SocialLinks />
      </div>
    </div>
  );
};
