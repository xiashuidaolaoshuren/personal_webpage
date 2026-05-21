import { sectionEnterClass } from "@/lib/section-motion";
import { cn } from "@/lib/utils";

export interface MediaGalleryItem {
  src: string;
  alt: string;
  caption?: string;
}

interface MediaGalleryGridProps {
  title: string;
  items: MediaGalleryItem[];
  delayClass?: string;
}

export function MediaGalleryGrid({
  title,
  items,
  delayClass,
}: MediaGalleryGridProps) {
  if (items.length === 0) return null;

  return (
    <section className={cn("mt-10", sectionEnterClass(delayClass))}>
      <h2 className="mb-4 text-lg font-semibold tracking-tight">{title}</h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {items.map((item, index) => (
          <figure
            key={`${item.src}-${index}`}
            className="overflow-hidden rounded-xl border border-primary/15 bg-muted/25 shadow-sm"
          >
            <div className="relative aspect-video w-full bg-muted/40">
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="h-full w-full object-contain object-center"
              />
            </div>
            {item.caption ? (
              <figcaption className="border-t border-border/60 px-4 py-3 text-sm text-muted-foreground">
                {item.caption}
              </figcaption>
            ) : null}
          </figure>
        ))}
      </div>
    </section>
  );
}
