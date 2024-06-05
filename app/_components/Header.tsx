import { buttonVariants } from "@/components/ui/button";
import { Section } from "./Section";
import { GithubIcon } from "./icons/GithubIcon";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { LinkedInIcon } from "./icons/LinkedInIcon";

export const Header = () => {
  return (
    <header className="sticky top-0 py-4 ">
      <Section className="flex items-baseline">
        <h1 className="text-lg font-bold text-primary">Mihajatiana</h1>
        <div className="flex-1" />
        <ul className="flex items-center gap-2">
          <Link
            className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
            href={"#"}
          >
            <GithubIcon size={16} className="text-foreground" />
          </Link>

          <Link
            className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
            href={"#"}
          >
            <LinkedInIcon size={16} className="text-foreground" />
          </Link>
          <Link
            className={cn(
              buttonVariants({ variant: "secondary" }),
              // "size-6 p-0",
            )}
            href={"#"}
          >
            Here my CV
          </Link>
        </ul>
      </Section>
    </header>
  );
};
