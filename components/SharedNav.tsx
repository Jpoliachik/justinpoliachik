import { MainHeader } from "./MainHeader";

export const SharedNav = () => {
  return (
    <nav id="header" className="sticky w-full z-10 top-0">
      <div className="w-full h-14 md:h-20 bg-white justify-center border-b border-gray-200">
        <div className="h-full w-full md:max-w-3xl mx-auto px-4">
          <MainHeader />
        </div>
      </div>
    </nav>
  );
};
