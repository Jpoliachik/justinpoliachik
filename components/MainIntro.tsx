import { SocialLinks } from "./SocialLinks";

export const MainIntro = () => {
  return (
    <div className="flex flex-col my-0 md:my-12">
      <div className="text-3xl md:text-5xl font-serif font-bold">Hey there, I'm Justin!</div>
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
