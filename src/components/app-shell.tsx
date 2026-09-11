import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import {
  Bell,
  CalendarClock,
  FileText,
  LayoutDashboard,
  Menu,
  Search,
  Sparkles,
  ShieldCheck,
  X,
} from "lucide-react";

const NAV = [
  { to: "/", label: "Dashboard", icon: LayoutDashboard, title: "Dashboard" },
  {
    to: "/meeting-notes",
    label: "Meeting Notes Summarizer",
    icon: FileText,
    title: "Meeting Notes Summarizer",
  },
  {
    to: "/task-planner",
    label: "AI Task Planner",
    icon: CalendarClock,
    title: "AI Task Planner",
  },
  {
    to: "/research",
    label: "AI Research Assistant",
    icon: Sparkles,
    title: "AI Research Assistant",
  },
] as const;

function SidebarContent({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div className="flex h-full flex-col bg-sidebar">
      <div className="flex items-center gap-3 px-5 py-6">
        <div className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary text-[15px] font-semibold text-primary-foreground">
          AI
        </div>
        <div className="min-w-0">
          <p className="truncate font-display text-[15px] font-semibold leading-tight">
            Workplace AI
          </p>
          <p className="truncate text-[12px] text-muted-foreground">Productivity Assistant</p>
        </div>
      </div>

      <nav className="flex-1 space-y-1 px-3">
        {NAV.map((item) => {
          const active = pathname === item.to;
          const Icon = item.icon;
          return (
            <Link
              key={item.to}
              to={item.to}
              onClick={onNavigate}
              className={`relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-[14px] transition-colors ${
                active
                  ? "bg-pink-fill font-medium text-primary"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              {active && (
                <span className="absolute left-0 top-1/2 h-6 w-1 -translate-y-1/2 rounded-r-full bg-primary" />
              )}
              <Icon className="size-[18px] shrink-0" strokeWidth={1.75} />
              <span className="truncate">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-border px-5 py-4">
        <Link
          to="/"
          onClick={onNavigate}
          className="flex items-center gap-2 text-[12.5px] text-muted-foreground transition-colors hover:text-primary"
        >
          <ShieldCheck className="size-4 shrink-0" strokeWidth={1.75} />
          Responsible AI
        </Link>
      </div>
    </div>
  );
}

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);
  const title = NAV.find((n) => n.to === pathname)?.title ?? "Dashboard";

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <div className="flex min-h-screen bg-background">
      <aside className="fixed inset-y-0 left-0 hidden w-[260px] border-r border-border lg:block">
        <SidebarContent />
      </aside>

      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            aria-label="Close menu"
            className="absolute inset-0 bg-foreground/30"
            onClick={() => setOpen(false)}
          />
          <div className="absolute inset-y-0 left-0 w-[260px] max-w-[80vw] border-r border-border shadow-lift">
            <button
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="absolute right-3 top-5 rounded-full p-1.5 text-muted-foreground hover:bg-muted"
            >
              <X className="size-4" />
            </button>
            <SidebarContent onNavigate={() => setOpen(false)} />
          </div>
        </div>
      )}

      <div className="flex min-w-0 flex-1 flex-col lg:pl-[260px]">
        <header className="sticky top-0 z-30 border-b border-border bg-card/85 backdrop-blur">
          <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-3 sm:px-6">
            <div className="flex min-w-0 items-center gap-3">
              <button
                aria-label="Open menu"
                onClick={() => setOpen(true)}
                className="rounded-lg p-2 text-muted-foreground hover:bg-muted lg:hidden"
              >
                <Menu className="size-5" strokeWidth={1.75} />
              </button>
              <h1 className="truncate font-display text-[18px] font-semibold sm:text-[20px]">
                {title}
              </h1>
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              <div className="relative hidden md:block">
                <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="search"
                  placeholder="Search"
                  className="h-9 w-44 rounded-full border border-border bg-muted/60 pl-9 pr-3 text-[13.5px] outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:bg-card lg:w-60"
                />
              </div>
              <button
                aria-label="Notifications"
                className="relative rounded-full border border-border bg-card p-2 text-muted-foreground transition-colors hover:text-primary"
              >
                <Bell className="size-[18px]" strokeWidth={1.75} />
                <span className="absolute right-2 top-2 size-1.5 rounded-full bg-primary" />
              </button>
              <div className="flex items-center gap-2.5 rounded-full border border-border bg-card py-1 pl-1 pr-1 sm:pr-4">
                <span className="grid size-8 shrink-0 place-items-center rounded-full bg-pink-fill text-[12.5px] font-semibold text-primary">
                  AM
                </span>
                <span className="hidden min-w-0 leading-tight sm:block">
                  <span className="block truncate text-[13px] font-medium">Alex Morgan</span>
                  <span className="block truncate text-[11.5px] text-muted-foreground">
                    Product Manager
                  </span>
                </span>
              </div>
            </div>
          </div>
        </header>

        <main className="min-w-0 flex-1 px-4 py-6 sm:px-6 lg:px-8">{children}</main>
      </div>
    </div>
  );
}
