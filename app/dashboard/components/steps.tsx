import { TbBulb, TbArrowRight } from "react-icons/tb";
import { BsLightningCharge } from "react-icons/bs";
import { HiOutlineVideoCamera } from "react-icons/hi";
import { PiRocketBold } from "react-icons/pi";
import { Button } from "@/components/button";

const Steps = () => {
  const steps = [
    {
      title: "Explore Ideas",
      description:
        "Find inspiration effortlessly by browsing trending topics and themes tailored to your creative goals and audience.",
      icon: TbBulb,
      button: "Explore",
    },
    {
      title: "Generate Videos",
      description:
        "Turn your ideas into professional-quality faceless videos in minutes with our powerful Al-driven tools.",
      icon: BsLightningCharge,
      button: "Generate",
    },
    {
      title: "Edit Videos",
      description:
        "Fine-tune your videos by adjusting visuals, captions, and voiceovers to create content that stands out.",
      icon: HiOutlineVideoCamera,
      button: "Edit",
    },
    {
      title: "Publish",
      description:
        "Seamlessly schedule and share your videos across multiple platforms to reach your audience at the perfect time.",
      icon: PiRocketBold,
      button: "Publish",
    },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
      {steps.map((step, index) => (
        <div
          key={index}
          className="bg-white shadow h-[264px] lg:h-80 xl:h-[264px] flex flex-col rounded-lg p-4"
        >
          <div className="flex w-full justify-between">
            <div className="p-2 bg-sky-200/30 rounded-lg">
              <step.icon className="size-8 text-sky-600" />
            </div>
            <p className="text-black/70 text-sm">Step {index + 1}</p>
          </div>
          <div className="mt-6">
            <h2 className="text-lg">{step.title}</h2>
            <p className="text-black/70 text-sm leading-5 tracking-wider">
              {step.description}
            </p>
          </div>
          <div className="mt-auto">
            <Button>
              {step.button}
              <TbArrowRight className="ml-1 size-5" />
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Steps;
