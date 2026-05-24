import { cn } from "@/lib/utils";

interface BulletListProps {
  items: string[];
  className?: string;
}

export function BulletList({ items, className }: BulletListProps) {
  return (
    <ul
      className={cn(
        "list-inside list-disc space-y-2 marker:text-primary/70",
        className
      )}
    >
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
