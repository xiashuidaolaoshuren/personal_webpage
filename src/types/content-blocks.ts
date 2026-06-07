export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "bullets"; items: string[] };
