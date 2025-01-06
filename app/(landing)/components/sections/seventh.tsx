import clsx from "clsx";
import { Rubik } from "next/font/google";
import Image from "next/image";

const rubikMedium = Rubik({
  subsets: ["latin"],
  weight: "500",
});

const rubikLight = Rubik({
  subsets: ["latin"],
  weight: "400",
});

const SeventhSection = () => {
  const steps = [
    {
      title: "Explore Ideas",
      description:
        "Find inspiration effortlessly by browsing trending topics and themes tailored to your creative goals and audience.",
      icon: "/bulb.svg",
    },
    {
      title: "Generate Videos",
      description:
        "Turn your ideas into professional-quality faceless videos in minutes with our powerful Al-driven tools.",
      icon: "/flash.svg",
    },
    {
      title: "Edit Videos",
      description:
        "Fine-tune your videos by adjusting visuals, captions, and voiceovers to create content that stands out.",
      icon: "/video.svg",
    },
    {
      title: "Publish",
      description:
        "Seamlessly schedule and share your videos across multiple platforms to reach your audience at the perfect time.",
      icon: "/rocket.svg",
    },
  ];
  return (
    <div className="flex flex-col items-center text-center w-full px-4 sm:px-6 md:px-8 lg:px-20 py-20 bg-background">
      <h3
        className={clsx(
          "bg-custom-gradient text-gradient bg-clip-text text-2xl lg:text-3xl font-semibold",
          rubikMedium.className
        )}
      >
        How Snapped Works
      </h3>
      <p
        className={clsx(
          "text-foreground/70 lg:w-2/4 text-base lg:text-lg mt-4 leading-6",
          rubikLight.className
        )}
      >
        Learn how Snaped simplifies video creation in just a few steps—explore,
        create, personalize, and publish your perfect faceless videos
        effortlessly!
      </p>
      <div className="mt-10 text-left">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-background shadow-lg flex flex-col rounded-lg p-4 border"
            >
              <div className="flex w-full justify-between">
                <div className="p-2 bg-[#E1DFFF] h-12 w-12 rounded-lg grid items-center overflow-hidden">
                  <Image
                    src={step.icon}
                    alt={step.title}
                    width={20}
                    height={20}
                    className="w-full"
                  />
                </div>
                <p className="text-black/70 text-sm">Step {index + 1}</p>
              </div>
              <div className="mt-6">
                <h2 className="text-lg">{step.title}</h2>
                <p className="text-secondary-foreground/70 text-sm leading-5 tracking-wider">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SeventhSection;
