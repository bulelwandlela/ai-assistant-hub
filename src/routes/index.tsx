import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CalendarClock,
  Clock3,
  FileText,
  Info,
  ListChecks,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { Badge, Card } from "@/components/tool-kit";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dashboard — AI Workplace Productivity Assistant" },
      {
        name: "description",
        content:
          "Track meetings summarised, tasks planned, research reports and hours saved, then jump into any AI tool.",
      },
      { property: "og:title", content: "Dashboard — AI Workplace Productivity Assistant" },
      {
        property: "og:description",
        content: "Your workspace for AI-assisted meeting notes, task planning and research.",
      },
    ],
  }),
  component: Dashboard,
});

const STATS = [
  { label: "Meetings Summarised", value: "24", trend: "+12%", icon: FileText },
  { label: "Tasks Planned", value: "156", trend: "+8%", icon: ListChecks },
  { label: "Research Reports", value: "18", trend: "+5%", icon: Sparkles },
  { label: "Hours Saved", value: "32h", trend: "+21%", icon: Clock3 },
];

const ACTIONS = [
  {
    to: "/meeting-notes",
    title: "Meeting Notes Summarizer",
    desc: "Turn raw notes into a summary, decisions and owned action items.",
    icon: FileText,
  },
  {
    to: "/task-planner",
    title: "AI Task Planner",
    desc: "Prioritise your work and get a realistic time-blocked schedule.",
    icon: CalendarClock,
  },
  {
    to: "/research",
    title: "AI Research Assistant",
    desc: "Get a structured brief with insights, risks and recommendations.",
    icon: Sparkles,
  },
] as const;

const ACTIVITY = [
  {
    tool: "Meeting Notes",
    title: "Q3 Product Roadmap Review — summary and 6 action items",
    time: "Today, 11:04",
  },
  {
    tool: "Task Planner",
    title: "Product launch week — time-blocked schedule generated",
    time: "Today, 08:47",
  },
  {
    tool: "Research",
    title: "AI in the workplace 2026 — market brief",
    time: "Yesterday, 16:22",
  },
  {
    tool: "Meeting Notes",
    title: "Enterprise renewal call — Northwind Group",
    time: "Yesterday, 09:15",
  },
  {
    tool: "Task Planner",
    title: "Weekly plan — design review sprint",
    time: "Wed, 17:38",
  },
];

function Dashboard() {
  return (
    <div className="mx-auto max-w-6xl">
      <section className="hero-gradient rounded-2xl border border-border p-6 shadow-soft sm:p-8">
        <p className="text-[12.5px] font-medium uppercase tracking-wide text-primary">
          Friday, 11 September
        </p>
        <h1 className="mt-2 font-display text-[24px] font-semibold sm:text-[30px]">
          Good morning, Bulelwa Ndlela
        </h1>
        <p className="mt-2 max-w-2xl text-[14.5px] text-muted-foreground">
          You have three meetings today and a launch week to plan — start with the tool that clears
          the most from your plate.
        </p>
      </section>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {STATS.map((s) => {
          const Icon = s.icon;
          return (
            <Card key={s.label} className="p-5">
              <div className="flex items-start justify-between gap-3">
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-pink-fill text-primary">
                  <Icon className="size-[18px]" strokeWidth={1.75} />
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-success/12 px-2.5 py-1 text-[11.5px] font-medium text-success">
                  <TrendingUp className="size-3" strokeWidth={2} />
                  {s.trend}
                </span>
              </div>
              <p className="mt-4 font-display text-[26px] font-semibold leading-none">{s.value}</p>
              <p className="mt-1.5 text-[13px] text-muted-foreground">{s.label}</p>
            </Card>
          );
        })}
      </div>

      <h2 className="mb-3 mt-8 font-display text-[18px] font-semibold">Quick Actions</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {ACTIONS.map((a) => {
          const Icon = a.icon;
          return (
            <Link
              key={a.to}
              to={a.to}
              className="card-surface group flex flex-col p-5 transition-all hover:-translate-y-0.5 hover:border-pink-soft hover:shadow-lift"
            >
              <span className="grid size-11 place-items-center rounded-xl bg-pink-fill text-primary">
                <Icon className="size-5" strokeWidth={1.75} />
              </span>
              <span className="mt-4 font-display text-[15.5px] font-semibold">{a.title}</span>
              <span className="mt-1.5 flex-1 text-[13.5px] leading-relaxed text-muted-foreground">
                {a.desc}
              </span>
              <span className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-medium text-primary">
                Open tool
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          );
        })}
      </div>

      <h2 className="mb-3 mt-8 font-display text-[18px] font-semibold">Recent Activity</h2>
      <Card className="divide-y divide-border">
        {ACTIVITY.map((item) => (
          <div
            key={item.title}
            className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 p-4 sm:px-5"
          >
            <div className="min-w-0">
              <Badge>{item.tool}</Badge>
              <p className="mt-2 truncate text-[14px] font-medium">{item.title}</p>
              <p className="mt-0.5 text-[12.5px] text-muted-foreground">{item.time}</p>
            </div>
            <button className="shrink-0 rounded-full border border-border px-4 py-1.5 text-[13px] font-medium text-primary transition-colors hover:bg-pink-fill">
              View
            </button>
          </div>
        ))}
      </Card>

      <div className="mt-6 flex items-start gap-3 rounded-2xl border border-border bg-pink-fill/70 p-4 sm:p-5">
        <Info className="mt-0.5 size-5 shrink-0 text-primary" strokeWidth={1.75} />
        <div className="min-w-0">
          <p className="text-[14px] font-medium">Responsible AI</p>
          <p className="mt-1 text-[13.5px] leading-relaxed text-muted-foreground">
            AI outputs may contain errors or omissions. Always review, verify, and edit generated
            content before using it for business decisions.
          </p>
        </div>
      </div>
    </div>
  );
}
