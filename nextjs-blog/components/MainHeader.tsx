import { HeaderProfilePic } from "./HeaderProfilePic";

export const MainHeader = () => {
  return (
    <div className="flex h-full flex-row items-center justify-between">
      <div className="flex flex-row items-center">
        <HeaderProfilePic />
        <div className="ml-4 text-xl font-sans">Justin Poliachik</div>
      </div>
      <div className="flex flex-row items-center space-x-12">
        <div className="text-l font-sans">projects</div>
        <div className="text-l font-sans">posts</div>
        <div className="text-l font-sans">about</div>
      </div>
    </div>
  );
};
