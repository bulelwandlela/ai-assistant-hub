import { createContext, useContext, useMemo, useState, type ReactNode } from "react";

export type OutputSection = { id: string; title: string; html: string };
export type ToolKey = "meeting" | "planner" | "research";

type Store = {
  outputs: Record<ToolKey, OutputSection[] | null>;
  setOutput: (tool: ToolKey, sections: OutputSection[] | null) => void;
  updateSection: (tool: ToolKey, id: string, html: string) => void;
};

const AppStoreContext = createContext<Store | null>(null);

export function AppStoreProvider({ children }: { children: ReactNode }) {
  const [outputs, setOutputs] = useState<Record<ToolKey, OutputSection[] | null>>({
    meeting: null,
    planner: null,
    research: null,
  });

  const value = useMemo<Store>(
    () => ({
      outputs,
      setOutput: (tool, sections) => setOutputs((prev) => ({ ...prev, [tool]: sections })),
      updateSection: (tool, id, html) =>
        setOutputs((prev) => ({
          ...prev,
          [tool]: (prev[tool] ?? []).map((s) => (s.id === id ? { ...s, html } : s)),
        })),
    }),
    [outputs],
  );

  return <AppStoreContext.Provider value={value}>{children}</AppStoreContext.Provider>;
}

export function useAppStore() {
  const ctx = useContext(AppStoreContext);
  if (!ctx) throw new Error("useAppStore must be used inside AppStoreProvider");
  return ctx;
}
