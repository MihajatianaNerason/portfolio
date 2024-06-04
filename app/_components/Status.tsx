/* eslint-disable @next/next/no-img-element */
import { Card } from "@/components/ui/card";
import { Section } from "./Section";
import { Badge, Code, LucideIcon, Rss, StickyNote } from "lucide-react";

export const Status = () => {
  return (
    <Section className="flex max-md:flex-col items-start gap-4">
      <div className="flex-[3] w-full">
        <Card className="w-full p-4 flex flex-col gap-2 w-full">
          <p className="text-lg text-muted-foreground">Side, fun projects</p>
          <div className="flex flex-col gap-4">
            {SIDE_PROJECTS.map((project, index) => {
              return (
                <SideProject
                  key={index}
                  Logo={project.Logo}
                  title={project.title}
                  description={project.description}
                />
              );
            })}
          </div>
        </Card>
      </div>
      <div className="flex-[2] w-full flex flex-col gap-4">
        <Card className="p-4 flex-1">
          <p className="text-lg text-muted-foreground">Work</p>
          <div className="flex flex-col gap-4">
            {WORKS.map((work, index) => (
              <Work
                key={index}
                image={work.image}
                title={work.title}
                role={work.role}
                date={work.date}
              />
            ))}
          </div>
        </Card>
        <Card className="p-4 flex-1">
          <p className="text-lg text-muted-foreground">Education</p>
          <div className="flex flex-col gap-4">
            <Education
              image="https://esti.mg/assets/img/logo-ESTI1.png"
              title="Esti"
              grade="L3 IDEV"
              date="2024"
            />
          </div>
        </Card>
      </div>
    </Section>
  );
};

const SIDE_PROJECTS: SideProjectProps[] = [
  {
    Logo: Code,
    title: "Card Oversize",
    description: "A platform for developers to share their projects",
  },
  {
    Logo: Rss,
    title: "DocTera",
    description: "A platform for developers to share their knowledge",
  },
  {
    Logo: StickyNote,
    title: "Booking App",
    description: "A platform for developers to share their projects",
  },
];

type SideProjectProps = {
  Logo: LucideIcon;
  title: string;
  description: string;
};

const SideProject = (props: SideProjectProps) => {
  return (
    <div className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded">
      <span className="bg-accent text-accent-foreground p-3 rounded-sm">
        <props.Logo size={16} />
      </span>
      <div>
        <p className="text-lg font-semibold">{props.title}</p>
        <p className="text-sm text-muted-foreground">{props.description}</p>
      </div>
    </div>
  );
};

const WORKS: WorkProps[] = [
  {
    image: "https://youngdev.mg/_next/static/media/logo.5e85c4e6.svg",
    title: "Youngdev",
    role: "Front-end Developer",
    date: "2023",
  },
];

type WorkProps = {
  image: string;
  title: string;
  role: string;
  date: string;
};

const Work = (props: WorkProps) => {
  return (
    <div className="inline-flex items-center gap-4 bg-accent/25 hover:bg-accent/50 transition-colors p-1 rounded">
      <img
        src={props.image}
        alt={props.title}
        className="w-10 h-10 object-contain rounded-md"
      />
      <div>
        <p className="text-lg font-semibold">{props.title}</p>
        <p className="text-xs text-muted-foreground">{props.role}</p>
      </div>
      <div className="ml-auto">
        <p className="text-sm text-muted-foreground">{props.date}</p>
      </div>
    </div>
  );
};

type EducationProps = {
  image: string;
  title: string;
  grade: string;
  date: string;
};

const Education = (props: EducationProps) => {
  return (
    <div className="inline-flex items-center gap-4  bg-accent/25 hover:bg-accent/50 transition-colors p-1 rounded">
      <img
        src={props.image}
        alt={props.title}
        className="w-10 h-10 object-contain rounded-md"
      />
      <div>
        <p className="text-lg font-semibold">{props.title}</p>
        <p className="text-xs text-muted-foreground">{props.grade}</p>
      </div>
      <div className="ml-auto">
        <p className="text-sm text-muted-foreground">{props.date}</p>
      </div>
    </div>
  );
};
