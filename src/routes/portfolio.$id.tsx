import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowLeft, ArrowUpRight, ExternalLink, CheckCircle2 } from "lucide-react";
import { PORTFOLIO, type PortfolioItem } from "@/lib/portfolio-data";

export const Route = createFileRoute("/portfolio/$id")({
  head: ({ params }) => {
    const item = PORTFOLIO.find((p) => p.id === params.id);
    return {
      meta: [
        { title: item ? `${item.title} — Faradilla Maulia` : "Project — Faradilla Maulia" },
        { name: "description", content: item?.summary ?? "Portfolio project by Faradilla Maulia." },
      ],
    };
  },
  loader: ({ params }): { item: PortfolioItem } => {
    const item = PORTFOLIO.find((p) => p.id === params.id);
    if (!item) throw notFound();
    return { item };
  },
  component: ProjectPage,
  notFoundComponent: () => (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 px-6 text-center">
      <h1 className="font-display text-5xl">Project not found</h1>
      <Link to="/" className="text-primary underline">← Back home</Link>
    </div>
  ),
  errorComponent: ({ error, reset }) => (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 px-6 text-center">
      <h1 className="font-display text-3xl">Something went wrong</h1>
      <p className="text-muted-foreground text-sm">{error.message}</p>
      <button onClick={reset} className="rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm">Try again</button>
    </div>
  ),
});

function ProjectPage() {
  const { item } = Route.useLoaderData();
  const others = PORTFOLIO.filter((p) => p.id !== item.id).slice(0, 3);

  const accents: Record<string, string> = {
    terracotta: "from-terracotta/25 via-clay/10 to-transparent",
    sage: "from-sage/25 via-clay/10 to-transparent",
    clay: "from-clay/30 via-terracotta/10 to-transparent",
    ink: "from-ink/20 via-sage/10 to-transparent",
  };

  return (
    <div className="min-h-screen bg-background">
      <div className={`relative bg-gradient-to-b ${accents[item.accent]} border-b border-border`}>
        <div className="mx-auto max-w-5xl px-6 py-8">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition">
            <ArrowLeft className="w-4 h-4" /> All projects
          </Link>
        </div>
        <div className="mx-auto max-w-5xl px-6 pb-20 pt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-wrap gap-2 text-xs uppercase tracking-widest text-primary mb-4">
              <span>{item.category}</span>
              <span className="text-muted-foreground">·</span>
              <span>{item.tool}</span>
              <span className="text-muted-foreground">·</span>
              <span>{item.year}</span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl leading-[0.95] tracking-tight max-w-4xl">
              {item.title}
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">{item.description}</p>
            <a
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium hover:bg-primary transition"
            >
              Open project <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-6 py-20 grid md:grid-cols-3 gap-12">
        <div className="md:col-span-2 space-y-8">
          <section>
            <h2 className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Highlights</h2>
            <ul className="space-y-3">
              {item.highlights.map((h: string) => (
                <li key={h} className="flex items-start gap-3 text-lg">
                  <CheckCircle2 className="w-5 h-5 mt-1 text-primary flex-shrink-0" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xs uppercase tracking-[0.3em] text-primary mb-4">What this shows</h2>
            <p className="text-muted-foreground leading-relaxed">
              This project is part of Faradilla's public portfolio. Use the "Open project" button above to view the
              live artifact ({item.tool}) — whether it's an executable notebook, an interactive dashboard, an
              editable design file, or the source repository.
            </p>
          </section>
        </div>

        <aside className="space-y-6">
          <div className="rounded-2xl border border-border bg-card p-6">
            <h3 className="text-xs uppercase tracking-widest text-primary mb-3">Stack</h3>
            <div className="flex flex-wrap gap-1.5">
              {item.stack.map((s: string) => (
                <span key={s} className="rounded-full border border-border bg-background px-2.5 py-1 text-xs font-mono">{s}</span>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6">
            <h3 className="text-xs uppercase tracking-widest text-primary mb-3">Tool</h3>
            <div className="font-display text-2xl">{item.tool}</div>
            <a href={item.link} target="_blank" rel="noreferrer" className="mt-2 inline-flex items-center gap-1 text-sm text-primary hover:underline">
              Open link <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </aside>
      </div>

      <section className="border-t border-border">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <h2 className="font-display text-3xl md:text-4xl mb-8">Other projects</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {others.map((p) => (
              <Link
                key={p.id}
                to="/portfolio/$id"
                params={{ id: p.id }}
                className="group rounded-2xl border border-border bg-card p-5 hover:border-primary transition hover:-translate-y-0.5"
              >
                <div className="text-xs uppercase tracking-widest text-primary mb-2">{p.tool}</div>
                <div className="font-display text-xl leading-tight group-hover:text-primary transition">{p.title}</div>
                <div className="mt-3 flex items-center gap-1 text-sm text-muted-foreground">
                  View <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}