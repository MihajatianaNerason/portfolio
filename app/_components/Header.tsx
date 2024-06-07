import { buttonVariants } from "@/components/ui/button";
import { Section } from "./Section";
import { GithubIcon } from "./icons/GithubIcon";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { LinkedInIcon } from "./icons/LinkedInIcon";

export const Header = () => {
  return (
    <header className="sticky top-0 py-4" style={{ zIndex: "999" }}>
      <Section className="flex items-baseline">
        <h1 className="text-lg font-bold text-primary">MT.</h1>
        <div className="flex-1" />
        <ul className="flex items-center gap-2">
          <Link
            className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
            href={"https://github.com/MihajatianaNerason"}
          >
            <GithubIcon size={16} className="text-foreground" />
          </Link>

          <Link
            className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
            href={"/"}
          >
            <LinkedInIcon size={16} className="text-foreground" />
          </Link>
          <Link
            href="/CV_ANDRIAKOTONERASON_Mihajatiana.pdf"
            download={"CV_ANDRIAKOTONERASON_Mihajatiana.pdf"}
            className={cn(
              buttonVariants({ variant: "outline" }),
              "hover:bg-accent/50",
            )}
          >
            Here my CV
          </Link>
        </ul>
      </Section>
    </header>
  );
};
