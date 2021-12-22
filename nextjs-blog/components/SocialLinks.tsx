import { SocialIcon } from "react-social-icons";

const bgColor = "transparent";
const fgColor = "#303030";
export const SocialLinks = () => {
  return (
    <div className="flex flex-row">
      <SocialIcon bgColor={bgColor} fgColor={fgColor} url="https://twitter.com/JPoliachik" />
      <SocialIcon bgColor={bgColor} fgColor={fgColor} url="https://github.com/Jpoliachik" />
      <SocialIcon bgColor={bgColor} fgColor={fgColor} url="https://www.youtube.com/JustinPoliachik" />
      <SocialIcon bgColor={bgColor} fgColor={fgColor} url="https://www.linkedin.com/in/justinpoliachik/" />
    </div>
  );
};
