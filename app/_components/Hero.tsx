import { Section } from "./Section";
import Image from "next/image";
import profile from "../../public/profile.jpeg";
import { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";
import { ReactIcon } from "./icons/ReactIcon";
import { YoutubeIcon } from "./icons/YoutubeIcon";

const Code = ({ className, ...props }: ComponentPropsWithoutRef<"span">) => {
  return (
    <span
      className={cn(
        "bg-accent/30 border hover:bg-accent/50 transition-colors border-accent px-1 py-0.5 text-primary rounded-md",
        className,
      )}
      {...props}
    />
  );
};

export const Hero = () => {
  return (
    <Section className="flex max-md:flex-col items-start gap-4">
      <div className="flex-[3] w-full flex flex-col gap-2">
        <h2 className="font-caption font-bold text-5xl text-primary">
          Mihajatiana Andriakotonerason
        </h2>
        <h3 className="font-caption text-3xl">Student and developer</h3>
        <p className="text-base">
          I am a Developer and i love coding with{" "}
          <Code className="inline-flex items-center gap-1">
            <ReactIcon size={16} className="inline" /> React
          </Code>
          . I usely watch{" "}
          <Code className="inline-flex items-center gap-1">
            <YoutubeIcon size={16} className="inline" /> Youtube
          </Code>{" "}
          to get in touch with the new technology and some many Youtubers
          inspires me. And I live in <Code>Antananarivo - 🇲🇬</Code> .
        </p>
      </div>

      <div className="flex-[2] max-md:m-auto ml-auto">
        <Image
          src={profile}
          className="w-full h-auto mx-xs max-md:w-56"
          alt="mihaja's picture"
        />
      </div>
    </Section>
  );
};
