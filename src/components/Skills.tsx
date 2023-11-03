import { useTranslation } from "next-i18next";
import { PiWrenchDuotone } from "react-icons/pi";
import Image from "@/common/components/Image";

const skills = [
  {
    name: "HTML",
    icon: "./html.svg",
  },
  {
    name: "CSS",
    icon: "./css.svg",
  },
  {
    name: "JavaScript",
    icon: "./javascript.svg",
  },
  {
    name: "React",
    icon: "./react.svg",
  },
  {
    name: "Angular",
    icon: "./angular.svg",
  },
  {
    name: "Tailwind",
    icon: "./tailwind.svg",
  },
  {
    name: "Git",
    icon: "./git.svg",
  },
  {
    name: "Next.js",
    icon: "./nextjs.svg",
  },
  {
    name: "R N",
    icon: "./react-native.svg",
  },
  {
    name: "Ionic",
    icon: "./ionic.svg",
  },
  {
    name: "node.js",
    icon: "./nodejs.svg",
  },
  {
    name: "TypeScript",
    icon: "./typescript.svg",
  },
];

const getImgUrl = (img: any) => {
  return `/assets/img/icons/${img}`;
};

const Skills = () => {
  const { t } = useTranslation("translation");
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 px-3">
        <PiWrenchDuotone size={24} />
        <h2 className="font-medium text-lg md:text-xl">
          {t("technicalSkills")}
        </h2>
      </div>

      <section
        className="bg-white rounded-2xl border shadow transition-all duration-300 hover:shadow hover:scale-105"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="p-6 lg:py-6 mx-auto max-w-screen-xl">
          <div className="flex flex-col items-center gap-5">
            <div className="flex flex-wrap gap-5 justify-center">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center gap-1"
                >
                  <Image
                    src={getImgUrl(skill.icon)}
                    alt={skill.name}
                    className="w-11 h-12 select-none"
                    width={40}
                    height={40}
                    unoptimized
                  />
                  <p className="text-center text-xs md:text-base text-gray-600">
                    {skill.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
