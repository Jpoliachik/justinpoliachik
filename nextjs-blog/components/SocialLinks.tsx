import Twitter from "../icons/twitter.svg";
import GitHub from "../icons/github.svg";
import YouTube from "../icons/youtube.svg";
import LinkedIn from "../icons/linkedin.svg";

const fillColor = "#262626";

export const SocialLinks = () => {
  return (
    <div className="flex flex-row space-x-4">
      <a href="https://twitter.com/JPoliachik">
        <Twitter className="svg-link w-5 h-5" fill={fillColor} />
      </a>
      <a href="https://github.com/Jpoliachik">
        <GitHub className="svg-link w-5 h-5" fill={fillColor} />
      </a>
      <a href="https://youtube.com/JustinPoliachik">
        <YouTube className="svg-link w-5 h-5" fill={fillColor} />
      </a>
      <a href="https://linkedin.com/in/justinpoliachik/">
        <LinkedIn className="svg-link w-5 h-5" fill={fillColor} />
      </a>
    </div>
  );
};
