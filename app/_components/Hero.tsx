import { Section } from "./Section";
import Image from "next/image";
import profile from "../../public/profile.jpg";
import { ReactIcon } from "./icons/ReactIcon";
import { YoutubeIcon } from "./icons/YoutubeIcon";
import { Code } from "./Code";

export const Hero = () => {
  return (
    <Section className="flex max-md:flex-col items-start gap-4">
      <div className="flex-[3] w-full flex flex-col gap-2">
        <h2 className="font-caption font-bold text-5xl text-primary">
          Mihajatiana <br />
          <span className="text-4xl sm:text-5xl">Andriakotonerason</span>
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
        {/* <p className="text-base">
          Welcome to my world of <Code>Web Development</Code>, where passion and
          precision shape every line of code. Based in{" "}
          <Code>Antananarivo - 🇲🇬</Code>, I create innovative digital
          experiences with{" "}
          <Code className="inline-flex items-center gap-1">
            <ReactIcon size={16} className="inline" /> React
          </Code>
          , inspired by the latest trends on{" "}
          <Code className="inline-flex items-center gap-1">
            <YoutubeIcon size={16} className="inline" /> Youtube
          </Code>
          . Let&apos;s transform your ideas into dynamic web solutions.
        </p> */}
      </div>

      <div className="flex-[2] max-md:m-auto ml-auto">
        <Image
          src={profile}
          className="w-[80%] h-auto mx-xs max-md:w-56 rounded-full"
          alt="Mihajatiana's picture"
        />
      </div>
    </Section>
  );
};
