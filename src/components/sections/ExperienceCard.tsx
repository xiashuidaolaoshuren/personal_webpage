import { useId } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { ExperienceItem } from "@/data/experience";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export type { ExperienceItem } from "@/data/experience";

interface ExperienceCardProps {
  item: ExperienceItem;
}

export function ExperienceCard({ item }: ExperienceCardProps) {
  const titleId = useId();
  const isClickable = Boolean(item.id);

  const cardBody = (
    <Card
      className={cn(
        "border border-transparent transition-[transform,box-shadow,border-color] duration-300 ease-out",
        "hover:-translate-y-1 hover:shadow-xl hover:border-primary/50",
        isClickable &&
          "group-hover:-translate-y-1 group-hover:shadow-xl group-hover:border-primary/50 cursor-pointer"
      )}
    >
      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          <CardTitle id={titleId} className="min-w-0 flex-1 text-xl">
            {item.title}
          </CardTitle>
          <div className="flex shrink-0 items-center gap-2">
            {isClickable ? (
              <>
                <ArrowRight
                  className="h-5 w-5 shrink-0 text-muted-foreground transition-colors group-hover:text-primary"
                  aria-hidden
                />
                <span className="sr-only">View experience details</span>
              </>
            ) : null}
            <Badge
              variant={
                item.engagement === "Full-time" ? "default" : "secondary"
              }
            >
              {item.engagement}
            </Badge>
          </div>
        </div>
        <div className="flex justify-between gap-4 text-muted-foreground font-medium">
          <span className="min-w-0">{item.organization}</span>
          <span className="shrink-0">{item.time}</span>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col md:flex-row gap-6 items-center">
        <div className="w-full md:w-1/3 flex items-center justify-center p-4">
          <div className="relative w-32 h-32 flex items-center justify-center bg-muted rounded-full text-muted-foreground text-xs text-center p-2">
            {item.emblem && !item.emblem.includes("placeholder") ? (
              <img
                src={item.emblem}
                alt={`${item.organization} emblem`}
                className="max-w-full max-h-full object-contain"
              />
            ) : (
              <span>Emblem</span>
            )}
          </div>
        </div>
        <div className="w-full md:w-2/3">
          <p className="line-clamp-3 leading-relaxed">
            {item.cardSummary ?? item.institutionOverview}
          </p>
        </div>
      </CardContent>
    </Card>
  );

  if (!isClickable) {
    return cardBody;
  }

  return (
    <Link
      to={`/experience/${item.id}`}
      aria-labelledby={titleId}
      className="group block rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      {cardBody}
    </Link>
  );
}
