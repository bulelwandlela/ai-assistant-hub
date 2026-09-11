import type { OutputSection } from "./app-store";

export const MEETING_PROMPT = `You are an executive assistant. From the meeting notes below, produce: (1) a 3-sentence executive summary, (2) key discussion points as bullets, (3) decisions made, (4) action items in a table with Owner, Task, Due Date, Priority, (5) open questions and risks. Be concise and factual. Do not invent owners or dates — mark them 'Unassigned' or 'No date' if absent.`;

export const PLANNER_PROMPT = `You are a productivity coach. Build a realistic daily/weekly schedule from the tasks provided. Prioritise using urgency and impact. Group similar work, protect focus blocks, include breaks, and flag overcommitment. Output: a prioritised task list with priority score and rationale, then a time-blocked schedule.`;

export const RESEARCH_PROMPT = `You are a business research analyst. Summarise the topic or article below. Provide: a plain-language overview, 5 key insights, opportunities and risks, data points worth noting, recommendations with reasoning, and 3 follow-up questions to explore. Clearly separate facts from interpretation.`;

export const EXAMPLE_MEETING_NOTES = `Q3 Product Roadmap Review — 12 Sept, 10:00–11:15
Attendees: Alex Morgan (PM), Thandi Mokoena (Eng Lead), Rui Costa (Design), Priya Naidoo (Customer Success), Daniel Weber (Data)

- Thandi reported the workspace sync rewrite is 80% complete; remaining work is conflict resolution and offline queueing. Estimated two more sprints.
- Priya flagged that 14 enterprise accounts have asked for granular permission roles; three of them named it as a renewal blocker.
- Rui walked through the new onboarding flow. Test group completed setup in 4m12s vs 9m40s on the current flow.
- Daniel showed activation data: 38% of new workspaces never invite a second user. Team agreed this is the biggest funnel leak.
- Debate on whether to ship permissions before or after the sync rewrite. Alex proposed splitting permissions into a read-only viewer role first.
- Budget: no additional headcount this quarter. Contractor design support approved for six weeks.
- Marketing wants a launch moment in November; Rui warned assets need four weeks lead time.`;

export const meetingOutput = (): OutputSection[] => [
  {
    id: "summary",
    title: "Executive Summary",
    html: `<p>The team reviewed Q3 roadmap progress and aligned on sequencing between the workspace sync rewrite and enterprise permission roles. Engineering expects the sync rewrite to complete within two sprints, while Customer Success reported that three enterprise renewals are blocked on granular permissions, prompting a proposal to ship a read-only viewer role first. Activation data showing that 38% of new workspaces never invite a second user was accepted as the quarter's highest-priority funnel problem, with the redesigned onboarding flow positioned as the primary intervention.</p>`,
  },
  {
    id: "points",
    title: "Key Discussion Points",
    html: `<ul>
<li><strong>Sync rewrite status:</strong> 80% complete; conflict resolution and offline queueing remain, estimated at two sprints.</li>
<li><strong>Enterprise permissions demand:</strong> 14 accounts requested granular roles; 3 named it a renewal blocker.</li>
<li><strong>Onboarding redesign results:</strong> test group finished setup in 4m12s versus 9m40s on the current flow, a 57% reduction.</li>
<li><strong>Activation leak:</strong> 38% of new workspaces never invite a second user — identified as the largest drop-off in the funnel.</li>
<li><strong>Sequencing debate:</strong> whether permissions should precede or follow the sync rewrite; a phased viewer-role approach was proposed as the compromise.</li>
<li><strong>Resourcing:</strong> no new headcount this quarter; six weeks of contractor design support approved.</li>
<li><strong>Launch timing:</strong> Marketing requested a November launch moment; design assets require four weeks lead time.</li>
</ul>`,
  },
  {
    id: "decisions",
    title: "Decisions Made",
    html: `<ul>
<li>Ship a read-only viewer role as an interim step before the full permissions model.</li>
<li>Prioritise the multi-user invite flow as the quarter's primary activation initiative.</li>
<li>Continue the sync rewrite to completion without reallocating engineers to permissions.</li>
<li>Approve six weeks of contractor design support; no additional headcount.</li>
<li>Target a November launch moment, contingent on design assets being locked four weeks in advance.</li>
</ul>`,
  },
  {
    id: "actions",
    title: "Action Items",
    html: `<table>
<thead><tr><th>Owner</th><th>Task</th><th>Due Date</th><th>Priority</th></tr></thead>
<tbody>
<tr><td>Thandi Mokoena</td><td>Complete conflict resolution and offline queueing for sync rewrite</td><td>10 Oct 2026</td><td>High</td></tr>
<tr><td>Alex Morgan</td><td>Write spec for read-only viewer role and circulate for review</td><td>19 Sept 2026</td><td>High</td></tr>
<tr><td>Priya Naidoo</td><td>Confirm permission requirements with the three at-risk enterprise accounts</td><td>18 Sept 2026</td><td>High</td></tr>
<tr><td>Rui Costa</td><td>Finalise onboarding invite step and hand off to engineering</td><td>26 Sept 2026</td><td>Medium</td></tr>
<tr><td>Daniel Weber</td><td>Instrument activation funnel to track second-user invites weekly</td><td>23 Sept 2026</td><td>Medium</td></tr>
<tr><td>Unassigned</td><td>Brief marketing on November launch scope and asset deadlines</td><td>No date</td><td>Medium</td></tr>
</tbody>
</table>`,
  },
  {
    id: "deadlines",
    title: "Deadlines",
    html: `<ul>
<li><strong>18–19 Sept:</strong> Enterprise requirements confirmed and viewer-role spec circulated.</li>
<li><strong>26 Sept:</strong> Onboarding invite designs handed to engineering.</li>
<li><strong>10 Oct:</strong> Sync rewrite feature-complete and in QA.</li>
<li><strong>Mid-Oct:</strong> Marketing assets locked to protect the four-week lead time.</li>
<li><strong>November:</strong> Public launch moment.</li>
</ul>`,
  },
  {
    id: "risks",
    title: "Open Questions & Risks",
    html: `<ul>
<li>Will a read-only viewer role satisfy the three renewal-blocked accounts, or do they require full role granularity?</li>
<li>Sync rewrite estimates have slipped once already; a further slip would collide with the November launch.</li>
<li>No owner has been named for the marketing brief, creating a gap in launch preparation.</li>
<li>Contractor design support ends in six weeks — unclear who maintains the onboarding work afterwards.</li>
<li>Activation improvements assume invite friction is the cause; the hypothesis has not yet been validated with user interviews.</li>
</ul>`,
  },
];

export const plannerOutput = (): OutputSection[] => [
  {
    id: "matrix",
    title: "Priority Matrix",
    html: `<table>
<thead><tr><th>Quadrant</th><th>Tasks</th></tr></thead>
<tbody>
<tr><td><strong>Do First</strong></td><td>Finalise launch messaging, sign off pricing page copy, complete pre-launch QA pass</td></tr>
<tr><td><strong>Schedule</strong></td><td>Record product walkthrough video, prepare customer webinar deck, draft launch-day support macros</td></tr>
<tr><td><strong>Delegate</strong></td><td>Social asset resizing, changelog formatting, press list clean-up</td></tr>
<tr><td><strong>Defer</strong></td><td>Post-launch case study outline, Q4 pricing experiment brief</td></tr>
</tbody>
</table>`,
  },
  {
    id: "tasks",
    title: "Prioritised Task List",
    html: `<table>
<thead><tr><th>Task</th><th>Score</th><th>Priority</th><th>Rationale</th></tr></thead>
<tbody>
<tr><td>Finalise launch messaging</td><td>96</td><td>High</td><td>Blocks website, email and sales enablement — everything downstream waits on it.</td></tr>
<tr><td>Pre-launch QA pass</td><td>92</td><td>High</td><td>Defects found after launch cost far more in support load and trust.</td></tr>
<tr><td>Pricing page copy sign-off</td><td>85</td><td>High</td><td>Legal and finance review needs 48 hours; late sign-off risks launch day.</td></tr>
<tr><td>Product walkthrough video</td><td>71</td><td>Medium</td><td>High impact for activation but can ship two days after launch without harm.</td></tr>
<tr><td>Customer webinar deck</td><td>64</td><td>Medium</td><td>Webinar is scheduled for the following week, so there is slack.</td></tr>
<tr><td>Support macros</td><td>58</td><td>Medium</td><td>Needed before launch day, but drafting is quick and easily parallelised.</td></tr>
<tr><td>Case study outline</td><td>32</td><td>Low</td><td>Requires post-launch data that does not exist yet.</td></tr>
</tbody>
</table>`,
  },
  {
    id: "schedule",
    title: "Time-Blocked Schedule",
    html: `<table>
<thead><tr><th>Time</th><th>Task</th><th>Focus Type</th></tr></thead>
<tbody>
<tr><td>08:30 – 09:00</td><td>Inbox triage and launch channel check-in</td><td>Shallow</td></tr>
<tr><td>09:00 – 11:00</td><td>Finalise launch messaging (protected focus block)</td><td>Deep</td></tr>
<tr><td>11:00 – 11:15</td><td>Break — step away from screen</td><td>Recovery</td></tr>
<tr><td>11:15 – 12:30</td><td>Pricing page copy review with finance and legal</td><td>Collaborative</td></tr>
<tr><td>12:30 – 13:15</td><td>Lunch</td><td>Recovery</td></tr>
<tr><td>13:15 – 15:00</td><td>Pre-launch QA pass with engineering</td><td>Deep</td></tr>
<tr><td>15:00 – 15:45</td><td>Record product walkthrough video</td><td>Creative</td></tr>
<tr><td>15:45 – 16:15</td><td>Draft support macros and hand to CS</td><td>Shallow</td></tr>
<tr><td>16:15 – 17:00</td><td>Buffer, follow-ups and plan tomorrow</td><td>Admin</td></tr>
</tbody>
</table>`,
  },
  {
    id: "workload",
    title: "Workload Insight",
    html: `<p>The submitted tasks total roughly 41 hours against a 37.5-hour working week, which is a 9% overcommitment before meetings are counted. With four hours of recurring launch stand-ups already scheduled, the realistic capacity gap is closer to eight hours. Two deep-focus blocks per day is the sustainable ceiling; anything beyond that tends to erode quality by mid-week.</p>`,
  },
  {
    id: "recommendations",
    title: "Recommendations",
    html: `<ul>
<li>Move the case study outline and Q4 pricing brief out of this week entirely — neither has a launch dependency.</li>
<li>Delegate asset resizing and changelog formatting to reclaim about five hours.</li>
<li>Protect the 09:00–11:00 block daily; treat it as unbookable in your calendar.</li>
<li>Batch all launch communication into a single afternoon slot rather than reacting throughout the day.</li>
<li>Keep Friday afternoon empty as a slip buffer — launch weeks rarely run to plan.</li>
</ul>`,
  },
];

export const researchOutput = (): OutputSection[] => [
  {
    id: "overview",
    title: "Overview",
    html: `<p>AI adoption in the workplace has moved past experimentation and into operational deployment, but the value is concentrating in narrow, well-defined tasks rather than broad autonomous workflows. Organisations reporting measurable returns tend to be those that redesigned a specific process — meeting documentation, first-draft writing, ticket triage, research summarisation — instead of layering assistants over existing habits. The dominant constraint in 2026 is no longer model capability; it is governance, data access and the change management required to get teams to trust and verify AI output.</p>
<p><em>Interpretation:</em> the market is consolidating around embedded, task-level assistants inside tools people already use, rather than standalone AI destinations.</p>`,
  },
  {
    id: "insights",
    title: "Key Insights",
    html: `<ol>
<li><strong>Task-level beats tool-level.</strong> Teams that scoped AI to one repeatable task reported clearer time savings than those deploying general-purpose assistants organisation-wide.</li>
<li><strong>Documentation is the beachhead.</strong> Meeting summaries, status reports and research briefs remain the highest-adoption use cases because output is easy to verify.</li>
<li><strong>Verification is now a job.</strong> Review time is a real cost line; the practical net saving is typically 40–60% of the raw time saved, not 100%.</li>
<li><strong>Governance drives procurement.</strong> Data residency, retention policy and audit trails increasingly decide vendor selection ahead of model quality.</li>
<li><strong>Trust follows transparency.</strong> Products that show the prompt, cite sources and make outputs editable see materially higher sustained usage than black-box tools.</li>
</ol>`,
  },
  {
    id: "opportunities",
    title: "Opportunities",
    html: `<ul>
<li>Vertical assistants tuned to a single profession's document types and vocabulary.</li>
<li>Human-in-the-loop editing experiences that make review fast rather than pretending it is unnecessary.</li>
<li>Workflow hand-offs — turning a summary directly into tasks, calendar blocks or CRM updates.</li>
<li>Enterprise governance layers: policy enforcement, retention controls and usage reporting.</li>
<li>Onboarding and training content that teaches teams how to prompt and verify, sold alongside the tool.</li>
</ul>`,
  },
  {
    id: "risks",
    title: "Risks & Considerations",
    html: `<ul>
<li><strong>Accuracy and hallucination:</strong> confident-sounding errors in summaries can propagate into decisions if review is skipped.</li>
<li><strong>Bias:</strong> prioritisation and evaluation outputs can encode assumptions that disadvantage certain teams or individuals.</li>
<li><strong>Data exposure:</strong> pasting confidential material into third-party models remains the leading compliance concern.</li>
<li><strong>Over-reliance:</strong> skill atrophy in writing, synthesis and critical review among junior staff.</li>
<li><strong>Cost drift:</strong> per-seat pricing plus usage-based inference costs can outrun the measured productivity gain.</li>
</ul>`,
  },
  {
    id: "datapoints",
    title: "Data Points Worth Noting",
    html: `<table>
<thead><tr><th>Metric</th><th>Reported Value</th><th>Note</th></tr></thead>
<tbody>
<tr><td>Knowledge workers using AI weekly</td><td>~72%</td><td>Self-reported; includes informal personal use</td></tr>
<tr><td>Time saved on documentation tasks</td><td>30–45 min/day</td><td>Before verification overhead</td></tr>
<tr><td>Organisations with a formal AI usage policy</td><td>~48%</td><td>Up sharply year on year</td></tr>
<tr><td>Pilots reaching org-wide rollout</td><td>~1 in 4</td><td>Most stall at team level</td></tr>
</tbody>
</table>
<p><em>Interpretation:</em> figures are directional and drawn from mixed-methodology industry surveys; treat them as order-of-magnitude signals rather than precise benchmarks.</p>`,
  },
  {
    id: "recommendations",
    title: "Recommendations",
    html: `<ul>
<li><strong>Start with one documented workflow.</strong> Measure baseline time before deployment so the gain is provable — unmeasured pilots are the most common reason rollouts stall.</li>
<li><strong>Budget for review.</strong> Build verification into the process and staff it; treating review as free is what turns AI output into downstream errors.</li>
<li><strong>Publish a short usage policy early.</strong> Clarity on what may be pasted into a model removes the main source of hesitation among cautious teams.</li>
<li><strong>Prefer editable, transparent tools.</strong> Visible prompts and editable output shorten the trust curve and reduce shadow usage of unapproved tools.</li>
<li><strong>Review quarterly.</strong> Capability and pricing are both moving fast enough that annual vendor reviews are too slow.</li>
</ul>`,
  },
  {
    id: "followups",
    title: "Suggested Follow-Up Questions",
    html: `<ol>
<li>Which of our recurring documents consume the most staff hours, and which are safe to draft with AI?</li>
<li>What verification standard would make leadership comfortable acting on AI-assisted analysis?</li>
<li>How would our data handling obligations change if AI processing moved to a third-party provider?</li>
</ol>`,
  },
  {
    id: "sources",
    title: "Sources & Confidence",
    html: `<p>This brief is a simulated analyst summary generated for demonstration. Figures are illustrative and not linked to verified primary sources. Confidence: moderate on directional trends, low on specific percentages. Verify all statistics against original research before citing them externally.</p>`,
  },
];
