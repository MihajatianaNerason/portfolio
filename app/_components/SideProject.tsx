import { LucideIcon } from "lucide-react";

export type SideProjectProps = {
  Logo: LucideIcon;
  title: string;
  description: string;
};
export const SideProject = (props: SideProjectProps) => {
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
