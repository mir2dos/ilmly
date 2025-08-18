import { Badge } from "../ui/badge";

interface Props {
  badge: string;
  title: string;
  subtitle: string;
}

export function SectionHeader({ badge, title, subtitle }: Props) {
  return (
    <div className="space-y-2 py-8 text-center">
      <Badge
        variant="default"
        className="bg-blue-900 px-3 py-1 text-xs font-medium tracking-widest uppercase"
      >
        {badge}
      </Badge>
      <h2 className="text-3xl font-semibold md:text-4xl">{title}</h2>
      <p className="text-muted-foreground">{subtitle}</p>
    </div>
  );
}
