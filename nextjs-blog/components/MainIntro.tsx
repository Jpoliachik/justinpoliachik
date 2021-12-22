import { SocialLinks } from "./SocialLinks";

export const MainIntro = () => {
  return (
    <div className="flex flex-col">
      <div className="text-5xl font-serif">Hey there, I'm Justin!</div>
      <div className="text-l font-sans">I'm a software engineer 📱</div>
      <div className="text-l font-sans">digital creator 🏗️</div>
      <div className="text-l font-sans">& curious optimist 🦊</div>
      <SocialLinks />
    </div>
  );
};
