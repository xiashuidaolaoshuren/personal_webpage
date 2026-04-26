---
name: browser-ui-testing
description: >-
  When testing or debugging this Vite app in a browser using MCP: open the dev
  URL, interact with the page, capture a11y/DOM snapshots, and run script
  checks. Use whenever browser automation or Chrome DevTools-style MCP is
  involved for this repository.
---

# Browser UI testing (MCP)

## Before calling tools

1. List and read the JSON tool descriptors for your enabled MCP server (e.g. under the project `mcps/` folder or Cursor’s tool pickers) so you use the **actual** tool names and parameters. Names differ between Copilot, Cursor, and each MCP build.

## Typical workflow

1. Start the app locally (`npm run dev`) and use the Vite dev URL (often `http://localhost:5173` unless configured otherwise).
2. **Open a page** using your browser MCP’s “new page” or equivalent tool with the target URL.
3. **Interact** with the page: click, type, or press keys using the MCP’s interaction tools as documented.
4. **Evaluate script in page context** when you need to assert on DOM, React state, or run small checks; prefer this over relying only on screenshots.
5. **Snapshot** using the accessibility tree or DOM snapshot tool your MCP provides for structure and a11y debugging.
6. **Wait** for text or state when the UI updates asynchronously, using a wait or poll tool if available.

## Preferences

- Prefer accessibility or DOM snapshots plus script evaluation for component-level checks over bitmap screenshots alone.
- For file inputs, use the upload helper from your MCP if the scenario requires it.

## This project

- Routes to exercise: `/` and `/projects`.
- The running instance must match the branch you are testing (rebuild/refresh as needed after edits).
