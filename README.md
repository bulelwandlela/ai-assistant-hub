# AI Assistant Hub

Build a modern, responsive SaaS web app called "AI Workplace Productivity Assistant" — a dashboard where professionals automate workplace tasks with AI. No authentication, no sign-up, no backend, no database. All AI responses are simulated client-side with realistic pre-written content. Everything must be fully responsive (mobile, tablet, desktop).

DESIGN SYSTEM

- Palette: light pink and white. Background #FFF7FA / #FDF2F8, cards pure white #FFFFFF, primary accent #EC4899, soft pink #F9A8D4, light pink fills #FCE7F3, text #1F2937 headings and #6B7280 body, borders #FBCFE8, success #10B981, warning #F59E0B.

- Typography: Inter (or Poppins for headings). Consistent sizes: 30px page titles, 18px section headings, 14–15px body, 12–13px labels. No font switching between pages.

- Style: clean, professional, generous whitespace, rounded-2xl cards, soft shadows (0 1px 3px rgba(236,72,153,0.08)), 1px light pink borders, subtle pink gradient hero on the dashboard, pill-shaped buttons, minimal line icons.

- Components stay identical across all pages: same card style, same button style, same input style, same badge style.

LAYOUT

- Fixed left sidebar (collapsible on mobile via hamburger, slides in as overlay): logo mark "AI" in a pink rounded square + app name, then nav items — Dashboard, Meeting Notes Summarizer, AI Task Planner, AI Research Assistant. Active item has a light pink background with pink left indicator. Bottom of sidebar: small "Responsible AI" link.

- Top bar: page title, subtle search field, notification bell icon, user avatar placeholder with name "Alex Morgan — Product Manager".

- Main content area scrolls independently. Sidebar is 260px on desktop, hidden behind a hamburger on mobile.

PAGE 1 — DASHBOARD

- Hero greeting: "Good morning, Bulelwa Ndlela" with a one-line subtitle and a pink gradient panel.

- Four stat cards with icons and trend badges: Meetings Summarised (24, +12%), Tasks Planned (156, +8%), Research Reports (18, +5%), Hours Saved (32h, +21%).

- "Quick Actions" row: three large clickable cards that route to each tool, each with an icon, title, and one-line description.

- "Recent Activity" list: 5 items with tool badge, title, timestamp, and a "View" link.

- "Responsible AI" disclaimer banner (light pink, info icon): "AI outputs may contain errors or omissions. Always review, verify, and edit generated content before using it for business decisions."

PAGE 2 — MEETING NOTES SUMMARIZER

- Two-column layout on desktop (input left, output right), stacked on mobile.

- Input panel: meeting title field, optional attendees field, large textarea for pasting notes, "Load example" text link, and a pink "Summarise Meeting" button with a loading state.

- Below the button, an expandable "Structured prompt used" section showing the exact prompt template:

  "You are an executive assistant. From the meeting notes below, produce: (1) a 3-sentence executive summary, (2) key discussion points as bullets, (3) decisions made, (4) action items in a table with Owner, Task, Due Date, Priority, (5) open questions and risks. Be concise and factual. Do not invent owners or dates — mark them 'Unassigned' or 'No date' if absent."

- Output panel (fully editable — contenteditable or editable fields, with an "Editing" indicator): Executive Summary paragraph, Key Discussion Points, Decisions Made, Action Items table, Deadlines, Open Questions & Risks.

- Action bar on output: Copy, Regenerate, Download, Clear.

PAGE 3 — AI TASK PLANNER

- Input panel: goal/project field, list of tasks (add/remove rows with task name, estimated hours, priority High/Medium/Low, deadline), toggle for Daily or Weekly plan, working hours selector, "Generate Plan" button.

- Structured prompt shown in an expandable panel:

  "You are a productivity coach. Build a realistic daily/weekly schedule from the tasks provided. Prioritise using urgency and impact. Group similar work, protect focus blocks, include breaks, and flag overcommitment. Output: a prioritised task list with priority score and rationale, then a time-blocked schedule."

- Output panel (editable): Priority Matrix (Do First / Schedule / Delegate / Defer), Prioritised Task List with priority scores and reasoning, Time-Blocked Schedule table (time, task, focus type), Workload Insight note, and Recommendations.

- Action bar: Copy, Regenerate, Download, Clear.

PAGE 4 — AI RESEARCH ASSISTANT

- Input panel: research topic or question field, optional paste-article textarea, depth selector (Quick Brief / Standard / Deep Dive), focus area chips (Market, Competitor, Technical, Strategy), "Research Topic" button.

- Structured prompt shown in expandable panel:

  "You are a business research analyst. Summarise the topic or article below. Provide: a plain-language overview, 5 key insights, opportunities and risks, data points worth noting, recommendations with reasoning, and 3 follow-up questions to explore. Clearly separate facts from interpretation."

- Output panel (editable): Overview, Key Insights, Opportunities, Risks & Considerations, Recommendations, Suggested Follow-Up Questions, and a small "Sources & confidence" note reminding the user to verify.

- Action bar: Copy, Regenerate, Download, Clear.

INTERACTION & STATE

- All generated content is mock/simulated: clicking a Generate button shows a 1.5s skeleton loading state, then renders the realistic pre-written sample output for that tool.

- Every output field is editable inline and changes persist while navigating between pages in the session.

- Toast notifications ("Summary generated", "Plan copied to clipboard").

- Buttons, badges, cards, tables and empty states all use the same design tokens across pages.

- Empty states show a friendly pink illustration placeholder and "Your results will appear here."

RESPONSIBLE AI

- Disclaimer banner on the Dashboard.

- Persistent footer line on every tool page: "AI-generated content. Review and verify before use. Your data is not stored."

- Small "How we use AI" info tooltip near each generate button explaining limits, bias, and the need for human oversight.

CONTENT

Populate all four pages with realistic, professional example data: a product roadmap meeting for the summarizer, a product launch week for the planner, and an "AI in the workplace 2026" market brief for the research assistant. Write full, believable paragraphs and tables — no lorem ipsum, no placeholder text.

Deliver a polished, production-quality front end that looks like a paid SaaS product.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/48286594-f298-48c0-8617-433b2c7c1c29).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
