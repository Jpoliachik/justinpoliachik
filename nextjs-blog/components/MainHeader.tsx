import { HeaderProfilePic } from "./HeaderProfilePic";

export const MainHeader = () => {
  return (
    <div className="flex h-full flex-row items-center justify-between font-sans">
      <div className="flex flex-row items-center">
        <HeaderProfilePic />
        <div className="flex flex-1 ml-2 md:ml-4 text-l font-light text-gray-500">Justin Poliachik</div>
      </div>
      <div className="flex flex-row ml-4 items-center space-x-4 md:space-x-8 font-semibold text-grey-800 ">
        <a href="#projects" className="no-underline hover:underline">
          projects
        </a>
        <a href="#" className="no-underline hover:underline">
          posts
        </a>
        <a href="#" className="no-underline hover:underline">
          about
        </a>
      </div>
    </div>
  );
};
