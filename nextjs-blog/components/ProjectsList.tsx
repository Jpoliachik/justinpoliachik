type IProjectLink = {
  label: string;
  href: string;
};

type IProject = {
  title: string;
  description: string;
  links: IProjectLink[];
};

export const ProjectsList = () => {
  const items: IProject[] = [
    {
      title: "Telios iOS & Android - Decentralized & Encrypted Email",
      description:
        "Telios turns your devices into a P2P encrypted email server. Building iOS and Android mobile apps using ",
      links: [
        {
          label: "Project Link",
          href: "https://www.telios.io/",
        },
      ],
    },
    {
      title: "One Second Everyday - Video Journal",
      description: "I take a video (almost) every day and stitch them together at the end. Ongoing since 2013",
      links: [
        {
          label: "Project Link",
          href: "https://www.youtube.com/JustinPoliachik", // todo: make dedicated post for this
        },
      ],
    },
    {
      title: "Flooded - iOS Game",
      description: "Fun arcade game for iOS. Created in 2014.",
      links: [
        {
          label: "App Store",
          href: "https://apps.apple.com/us/app/flooded/id882559598", // todo: make dedicated post for this
        },
      ],
    },
  ];

  return (
    <div>
      <div className="text-2xl font-serif text-gray-400">Projects</div>
      <div className="flex flex-col space-y-8 mt-4">
        {items.map((item) => (
          <Project {...item} />
        ))}
      </div>
    </div>
  );
};

const Project = (props: IProject) => {
  return (
    <div className="flex flex-row">
      <button className="w-20 h-20 md:w-40 md:h-40 lg:w-64 lg:h-44 rounded bg-green-500 hover:bg-green-400"></button>
      <div className="flex flex-1 flex-col ml-4 md:ml-8 justify-center">
        <div className="text-xl font-sans">{props.title}</div>
        <div className="text-m font-sans">{props.description}</div>
        {props.links?.map((link) => (
          <div className="text-l font-sans">{link.label}</div>
        ))}
      </div>
    </div>
  );
};
