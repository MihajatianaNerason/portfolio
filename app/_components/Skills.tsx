import { Badge } from "@/components/ui/badge";
import { Section } from "./Section";
import { LaravelIcon } from "./icons/LaravelIcon";
import { MongoDbIcon } from "./icons/MongoDbIcon";
import { MysqlIcon } from "./icons/MysqlIcon";
import { TailwindIcon } from "./icons/TailwindIcon";
import { ReactIcon } from "./icons/ReactIcon";
import { Code } from "./Code";
import { DatabaseLogo } from "./icons/DatabaseLogo";

export const Skills = () => {
  return (
    <Section className="flex flex-col max-md:flex-col items-start gap-4">
      <Badge variant={"outline"}>Skills</Badge>
      <h2 className="scroll-m-20  pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        I love working on...
      </h2>
      <div className="flex max-md:flex-col gap-4">
        <div className="flex flex-1 flex-col gap-4">
          <ReactIcon
            size={42}
            className="animate-spin"
            style={{ animationDuration: "10s" }}
          />
          <h3 className="mb-2 scroll-m-20 text-2xl font-semibold tracking-tight">
            React
          </h3>
          <p className="text-sm text-muted-foreground">
            My main front-end framework is <Code>React</Code>. I also use{" "}
            <Code>Tailwind</Code> as a css framework.
          </p>
        </div>
        <div className="flex flex-1 flex-col gap-4">
          <DatabaseLogo size={42} />
          <h3 className="mb-2 scroll-m-20 text-2xl font-semibold tracking-tight">
            Databases
          </h3>
          <p className="text-sm text-muted-foreground">
            I use <Code>Mysql</Code> for relational databases and{" "}
            <Code>MongoDb</Code> as a nosql databases.
          </p>
        </div>
        <div className="flex flex-1 flex-col gap-4">
          <LaravelIcon size={42} />
          <h3 className="mb-2 scroll-m-20 text-2xl font-semibold tracking-tight">
            Laravel
          </h3>
          <p className="text-sm text-muted-foreground">
            My main back-end framework is <Code>Laravel</Code>. But I&apos;m
            intersting in <Code>NestJs</Code> too.
          </p>
        </div>
      </div>
    </Section>
  );
};
