export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 text-accent text-xs font-medium uppercase tracking-[0.2em]">
      <span className="h-px w-8 bg-accent" />
      {children}
    </div>
  );
}
