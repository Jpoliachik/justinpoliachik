import ProfilePic from "./ProfilePic";
import SocialLinks from "./SocialLinks";

export default function SectionHomeHeader() {
  return (
    <div className="flex items-center space-x-4 bg-emerald-100">
      <div className="flex flex-col">
        <div>
          <div className="text-lg font-sans">Justin Poliachik</div>
          <div className="text-base font-sans">
            <div>
              Working on something new
              <br /> Creator of asdf
              <br /> Check out my
            </div>
          </div>
          <SocialLinks />
        </div>
        <ProfilePic />
      </div>
    </div>
  );
}
