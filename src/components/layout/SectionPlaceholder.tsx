export function SectionPlaceholder({ title, note }: { title: string; note: string }) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <h2 className="rule-brand font-display text-2xl text-primary sm:text-3xl">{title}</h2>
      <div className="mt-6 rounded-md border border-dashed border-border bg-surface p-8">
        <p className="text-sm text-muted-foreground">{note}</p>
      </div>
    </section>
  );
}
