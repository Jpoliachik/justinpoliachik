import ProfilePic from "./ProfilePic";
import SocialLinks from "./SocialLinks";

export default function SectionHomeHeader() {
  return (
    <div className="flex items-center bg-emerald-50 p-20 justify-center">
      <div className="flex flex-row items-center">
        <div className="flex flex-col items-center mr-24">
          <div className="text-3xl font-serif">Justin Poliachik</div>
          <div className="text-base font-sans mt-2">software engineer 💻📱 curious optimist 🦊</div>
          <SocialLinks />
        </div>
        <ProfilePic />
      </div>
    </div>
  );
}
