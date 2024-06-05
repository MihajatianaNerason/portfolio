/* eslint-disable @next/next/no-img-element */
import { Card } from "@/components/ui/card";

type EducationProps = {
  image: string;
  title: string;
  grade: string;
  date: string;
};
export const Education = (props: EducationProps) => {
  return (
    <Card className="p-3 bg-accent/10 inline-flex items-center gap-4  hover:bg-accent/50 transition-colors p-1 rounded">
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
    </Card>
  );
};
