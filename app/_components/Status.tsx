/* eslint-disable @next/next/no-img-element */
import { Card } from "@/components/ui/card";
import { Section } from "./Section";
import { Badge, Code, Rss, StickyNote } from "lucide-react";
import { Education } from "./Education";
import { Work, WorkProps } from "./Work";
import { SideProject, SideProjectProps } from "./SideProject";

export const Status = () => {
  return (
    <Section className="flex max-md:flex-col items-start gap-4">
      <div className="flex-[3] w-full">
        <Card className="w-full p-4 flex flex-col gap-2">
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

const WORKS: WorkProps[] = [
  {
    image: "https://youngdev.mg/_next/static/media/logo.5e85c4e6.svg",
    title: "Youngdev",
    role: "Front-end Developer",
    date: "2023",
  },
];
