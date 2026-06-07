import { BulletList } from "@/components/BulletList";
import { cn } from "@/lib/utils";
import type { ContentBlock } from "@/types/content-blocks";

function isRenderableBlock(block: ContentBlock): boolean {
  if (block.type === "paragraph") {
    return block.text.trim().length > 0;
  }
  return block.items.some((item) => item.trim().length > 0);
}

interface ContentBlocksProps {
  blocks: ContentBlock[];
  className?: string;
}

export function ContentBlocks({ blocks, className }: ContentBlocksProps) {
  const visibleBlocks = blocks.filter(isRenderableBlock);

  if (visibleBlocks.length === 0) {
    return null;
  }

  return (
    <div className={cn("space-y-4", className)}>
      {visibleBlocks.map((block, index) => {
        if (block.type === "paragraph") {
          return <p key={index}>{block.text}</p>;
        }

        return <BulletList key={index} items={block.items} />;
      })}
    </div>
  );
}
