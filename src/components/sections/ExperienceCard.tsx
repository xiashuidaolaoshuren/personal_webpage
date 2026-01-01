import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export interface ExperienceItem {
  title: string;
  organization: string;
  time: string;
  description: string;
  emblem?: string;
}

interface ExperienceCardProps {
  item: ExperienceItem;
}

export function ExperienceCard({ item }: ExperienceCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">{item.title}</CardTitle>
        <div className="flex justify-between text-muted-foreground font-medium">
          <span>{item.organization}</span>
          <span>{item.time}</span>
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
          <p className="leading-relaxed">
            {item.description}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
