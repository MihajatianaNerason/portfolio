import { Badge } from "@/components/ui/badge";
import { Section } from "./Section";
import { Code } from "./Code";
import { GmailIcon } from "./icons/GmailIcon";
import { WhatsappIcon } from "./icons/WhatsappIcon";
import { Download } from "lucide-react";
import Link from "next/link";

export const Contact = () => {
  return (
    <Section className="flex flex-col items-start gap-8 w-full">
      <Badge variant={"outline"}>Contact Me</Badge>
      <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        I will be happy to work with you.
      </h2>
      <div className="flex flex-col md:flex-row gap-4 w-full">
        <div className="flex flex-1 flex-col gap-4">
          <Code className="inline-flex items-center justify-center gap-1 w-full">
            <GmailIcon size={16} className="inline" />{" "}
            miandriakotonerason@gmail.com
          </Code>
        </div>
        <div className="flex flex-1 flex-col gap-4">
          <Code className="inline-flex items-center justify-center gap-1 w-full">
            <WhatsappIcon size={16} className="inline" /> +261 34 75 406 13
          </Code>
        </div>
        <div className="flex flex-1 flex-col gap-4">
          <Link
            href="/CV_ANDRIAKOTONERASON_Mihajatiana.pdf"
            download={"CV_ANDRIAKOTONERASON_Mihajatiana.pdf"}
          >
            <Code className="inline-flex items-center justify-center gap-1 w-full">
              <Download /> Here is my CV
            </Code>
          </Link>
        </div>
      </div>
    </Section>
  );
};
