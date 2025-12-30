# Copilot Instructions for Personal Webpage

## Project Overview
- **Framework**: React 19, Vite 7, TypeScript 5.
- **Styling**: Tailwind CSS 4, Shadcn/ui components.
- **Routing**: React Router DOM v7.
- **Icons**: Lucide React.

## Architecture & Structure
- **Entry**: `src/main.tsx` renders `App`.
- **Routing**: `src/App.tsx` defines routes (`/`, `/projects`).
- **Layout**: `src/Layout.tsx` provides the global layout with `SidebarProvider` and `AppSidebar`.
- **Components**:
  - `src/components/ui/`: Atomic, reusable UI components (Shadcn/ui). Do not modify these unless necessary for global style changes.
  - `src/components/sections/`: Specific sections of pages (e.g., `Bio.tsx`, `Hero.tsx`).
  - `src/components/app-sidebar.tsx`: Main navigation sidebar.
- **Pages**: `src/pages/` contains top-level page components.

## Conventions
- **Imports**: Use `@/` alias for `src/` (e.g., `import { Button } from "@/components/ui/button"`).
- **Styling**:
  - Use Tailwind CSS utility classes.
  - Use the `cn()` utility from `@/lib/utils` for conditional class merging.
  - Example: `className={cn("base-class", condition && "conditional-class", className)}`.
- **Components**:
  - Prefer functional components.
  - Use `lucide-react` for icons.
  - Follow Shadcn/ui patterns for component composition.

## Development Workflow
- **Start Server**: `npm run dev`
- **Build**: `npm run build`
- **Lint**: `npm run lint`

## Key Files
- `src/lib/utils.ts`: Contains the `cn` helper.
- `src/Layout.tsx`: Main layout wrapper.
- `src/App.tsx`: Route definitions.

## Chrome DevTools (MCP) for Component Testing
- **When to use**: Use the DevTools MCP helpers when you need to open pages, run JS, capture snapshots, or interact with elements programmatically during UI/component testing.
- **Available helpers**: The functions are exposed under the `mcp_chromedevtool_*` namespace (e.g. `mcp_chromedevtool_new_page`, `mcp_chromedevtool_take_snapshot`, `mcp_chromedevtool_evaluate_script`, `mcp_chromedevtool_upload_file`, `mcp_chromedevtool_wait_for`).
- **Common workflows**:
  - Open a test page: call `mcp_chromedevtool_new_page` with the URL.
  - Interact/run assertions: use `mcp_chromedevtool_evaluate_script` to execute JS in the page context or `mcp_chromedevtool_press_key` to simulate keyboard input.
  - Capture DOM/a11y snapshots: use `mcp_chromedevtool_take_snapshot` to get the accessibility tree for debugging or visual diffing.
  - Wait for UI changes: `mcp_chromedevtool_wait_for` can poll for specific text or state before assertions.
- **Examples**: prefer snapshots and script evaluation for component-level checks rather than relying solely on screenshots. Use `mcp_chromedevtool_upload_file` when testing file inputs.

## Don't
1. Modify files in `src/components/ui/` unless necessary for global style changes.
