import { useRef, useState, type ReactNode } from "react";
import { toast } from "sonner";
import {
  ChevronDown,
  Copy,
  Download,
  Info,
  Pencil,
  RefreshCw,
  Sparkles,
  Trash2,
} from "lucide-react";
import type { OutputSection } from "@/lib/app-store";

/* ---------- primitives ---------- */

export function Card({ className = "", children }: { className?: string; children: ReactNode }) {
  return <div className={`card-surface ${className}`}>{children}</div>;
}

export function SectionTitle({ children }: { children: ReactNode }) {
  return <h2 className="font-display text-[18px] font-semibold">{children}</h2>;
}

export function PageTitle({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="mb-6">
      <h1 className="font-display text-[24px] font-semibold sm:text-[30px]">{title}</h1>
      <p className="mt-1 text-[14px] text-muted-foreground">{subtitle}</p>
    </div>
  );
}

export function Label({ children }: { children: ReactNode }) {
  return (
    <label className="mb-1.5 block text-[12.5px] font-medium text-muted-foreground">
      {children}
    </label>
  );
}

const fieldClass =
  "w-full rounded-xl border border-border bg-card px-3.5 py-2.5 text-[14px] outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-primary/15";

export function TextField(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={`${fieldClass} h-11 ${props.className ?? ""}`} />;
}

export function TextArea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea {...props} className={`${fieldClass} resize-y ${props.className ?? ""}`} />;
}

export function SelectField(props: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return <select {...props} className={`${fieldClass} h-11 ${props.className ?? ""}`} />;
}

export function PrimaryButton({
  loading,
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { loading?: boolean }) {
  return (
    <button
      {...props}
      disabled={loading || props.disabled}
      className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-primary px-6 text-[14px] font-medium text-primary-foreground shadow-soft transition-all hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
    >
      {loading ? (
        <RefreshCw className="size-4 animate-spin" strokeWidth={2} />
      ) : (
        <Sparkles className="size-4" strokeWidth={2} />
      )}
      {loading ? "Generating…" : children}
    </button>
  );
}

export function GhostButton({
  icon: Icon,
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
}) {
  return (
    <button
      {...props}
      className="inline-flex h-9 items-center gap-1.5 rounded-full border border-border bg-card px-3.5 text-[13px] font-medium text-muted-foreground transition-colors hover:border-primary hover:text-primary disabled:opacity-50"
    >
      <Icon className="size-3.5" strokeWidth={1.9} />
      {children}
    </button>
  );
}

export function Badge({
  children,
  tone = "pink",
}: {
  children: ReactNode;
  tone?: "pink" | "success" | "warning" | "muted";
}) {
  const tones = {
    pink: "bg-pink-fill text-primary",
    success: "bg-success/12 text-success",
    warning: "bg-warning/15 text-warning",
    muted: "bg-muted text-muted-foreground",
  } as const;
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-[11.5px] font-medium ${tones[tone]}`}
    >
      {children}
    </span>
  );
}

/* ---------- AI helpers ---------- */

export function AiInfoTooltip() {
  const [open, setOpen] = useState(false);
  return (
    <span className="relative inline-flex">
      <button
        type="button"
        aria-label="How we use AI"
        onClick={() => setOpen((v) => !v)}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        className="inline-flex items-center gap-1.5 text-[12.5px] text-muted-foreground transition-colors hover:text-primary"
      >
        <Info className="size-4" strokeWidth={1.75} />
        How we use AI
      </button>
      {open && (
        <span className="card-surface absolute bottom-full left-0 z-40 mb-2 w-72 p-3 text-[12.5px] leading-relaxed text-muted-foreground">
          Output is generated from patterns in training data. It can be incomplete, out of date or
          biased, and it may state incorrect details confidently. Treat every result as a first
          draft that needs human review before it informs a decision.
        </span>
      )}
    </span>
  );
}

export function PromptPanel({ prompt }: { prompt: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-xl border border-border bg-muted/50">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left text-[13px] font-medium text-muted-foreground"
      >
        Structured prompt used
        <ChevronDown
          className={`size-4 shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <p className="border-t border-border px-4 py-3 text-[13px] leading-relaxed text-muted-foreground">
          {prompt}
        </p>
      )}
    </div>
  );
}

export function ResponsibleFooter() {
  return (
    <p className="mt-6 text-center text-[12.5px] text-muted-foreground">
      AI-generated content. Review and verify before use. Your data is not stored.
    </p>
  );
}

/* ---------- output ---------- */

export function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-pink-fill/40 px-6 py-16 text-center">
      <div className="grid size-16 place-items-center rounded-2xl bg-card shadow-soft">
        <Sparkles className="size-7 text-pink-soft" strokeWidth={1.5} />
      </div>
      <p className="mt-4 text-[15px] font-medium">Your results will appear here.</p>
      <p className="mt-1 max-w-xs text-[13px] text-muted-foreground">
        Fill in the details on the left and generate to see a structured, editable draft.
      </p>
    </div>
  );
}

export function LoadingSkeleton() {
  return (
    <div className="space-y-5">
      {[0, 1, 2].map((i) => (
        <div key={i} className="space-y-2.5">
          <div className="h-4 w-40 animate-pulse rounded-full bg-pink-fill" />
          <div className="h-3 w-full animate-pulse rounded-full bg-muted" />
          <div className="h-3 w-11/12 animate-pulse rounded-full bg-muted" />
          <div className="h-3 w-9/12 animate-pulse rounded-full bg-muted" />
        </div>
      ))}
    </div>
  );
}

export function EditableSection({
  section,
  onChange,
}: {
  section: OutputSection;
  onChange: (html: string) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <section className="border-b border-border pb-5 last:border-0 last:pb-0">
      <h3 className="mb-2 font-display text-[15px] font-semibold">{section.title}</h3>
      <div
        ref={ref}
        className="rich -mx-2 overflow-x-auto rounded-lg px-2 py-1 outline-none transition-colors focus:bg-pink-fill/40 focus:ring-2 focus:ring-primary/15"
        contentEditable
        suppressContentEditableWarning
        onBlur={() => onChange(ref.current?.innerHTML ?? section.html)}
        dangerouslySetInnerHTML={{ __html: section.html }}
      />
    </section>
  );
}

function toPlainText(sections: OutputSection[]) {
  return sections
    .map((s) => {
      const el = typeof document !== "undefined" ? document.createElement("div") : null;
      if (!el) return `${s.title}\n`;
      el.innerHTML = s.html
        .replace(/<\/(p|li|tr|h[1-4])>/g, "\n")
        .replace(/<\/(td|th)>/g, "\t");
      return `${s.title.toUpperCase()}\n${(el.textContent ?? "").replace(/\n{3,}/g, "\n\n").trim()}\n`;
    })
    .join("\n");
}

export function OutputActions({
  sections,
  filename,
  onRegenerate,
  onClear,
  copyToast,
}: {
  sections: OutputSection[];
  filename: string;
  onRegenerate: () => void;
  onClear: () => void;
  copyToast: string;
}) {
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(toPlainText(sections));
      toast.success(copyToast);
    } catch {
      toast.error("Could not copy to clipboard");
    }
  };

  const download = () => {
    const blob = new Blob([toPlainText(sections)], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
    toast.success("Download started");
  };

  return (
    <div className="flex flex-wrap items-center gap-2">
      <GhostButton icon={Copy} onClick={copy}>
        Copy
      </GhostButton>
      <GhostButton icon={RefreshCw} onClick={onRegenerate}>
        Regenerate
      </GhostButton>
      <GhostButton icon={Download} onClick={download}>
        Download
      </GhostButton>
      <GhostButton icon={Trash2} onClick={onClear}>
        Clear
      </GhostButton>
    </div>
  );
}

export function EditingIndicator() {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-success/12 px-2.5 py-1 text-[11.5px] font-medium text-success">
      <Pencil className="size-3" strokeWidth={2} />
      Editing
    </span>
  );
}
