import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useState } from "react";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Linkedin,
  Phone,
  Download,
  Sparkles,
  GraduationCap,
  Briefcase,
  Award,
  Code2,
  Palette,
  Database,
  BarChart3,
  Brain,
} from "lucide-react";
import heroIllustration from "@/assets/hero-illustration.jpg";
import { PORTFOLIO, CERTIFICATES_LINK, INTERNSHIP_LETTER, type PortfolioItem } from "@/lib/portfolio-data";

export const Route = createFileRoute("/")({
  component: Index,
});

const CATEGORIES = ["All", "Data Analysis", "SQL & Databases", "Machine Learning", "BI Dashboards", "UI/UX Design", "Thesis · Deep Learning", "Data Mining"] as const;

const SKILLS = {
  Data: ["Python", "SQL", "Pandas", "scikit-learn", "XGBoost", "Data Cleaning", "Cohort Analysis"],
  BI: ["Microsoft Power BI", "Google Looker Studio", "Excel (Intermediate)", "Dashboard Design"],
  "AI / ML": ["AI Prompting", "AI Agents", "Generative AI", "n8n Automations", "Genetic Algorithms"],
  "Design & Dev": ["Figma", "UI/UX Research", "Design Thinking", "Laravel", "HTML/CSS"],
};

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Experience />
      <Portfolio />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/70 border-b border-border">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 font-display text-2xl">
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-primary" />
          Faradilla Maulia<span className="text-primary">.</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#about" className="hover:text-primary transition-colors">About</a>
          <a href="#experience" className="hover:text-primary transition-colors">Experience</a>
          <a href="#portfolio" className="hover:text-primary transition-colors">Portfolio</a>
          <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </nav>
        <a
          href="mailto:faradillamaulia.official@gmail.com"
          className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm font-medium hover:opacity-90 transition"
        >
          Let's talk <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 pt-16 pb-24 md:pt-24 md:pb-32 grid md:grid-cols-[1.3fr_1fr] gap-12 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs uppercase tracking-widest text-muted-foreground mb-6"
          >
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            Data · BI · UI/UX
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight"
          >
            Hi, I'm <span className="text-primary italic">Faradilla  Maulia</span>.
            <br />
            I turn data
            <br />
            into <span className="italic">stories.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed"
          >
            Fresh Informatics Engineering graduate from Universitas Sriwijaya (GPA 3.95/4.00). I build dashboards,
            train ML models, and design interfaces — currently exploring roles as
            <span className="text-foreground"> Data Analyst</span>,
            <span className="text-foreground"> BI Analyst</span>, and
            <span className="text-foreground"> UI/UX Designer</span>.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a href="#portfolio" className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-3 text-sm font-medium hover:bg-primary transition">
              View portfolio <ArrowUpRight className="w-4 h-4" />
            </a>
            <a href={CERTIFICATES_LINK} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-medium hover:border-primary transition">
              <Download className="w-4 h-4" /> Certificates
            </a>
          </motion.div>

          <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
            <Stat value="3.95" label="GPA / 4.00" />
            <Stat value="9+" label="Certifications" />
            <Stat value="7" label="Portfolio Projects" />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-primary/10 blur-2xl" />
          <div className="relative rounded-[2.5rem] overflow-hidden border border-border bg-card shadow-2xl">
            <img src={heroIllustration} alt="Illustration of Faradilla analyzing data" className="w-full h-auto" width={1024} height={1280} />
          </div>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -left-6 top-10 rounded-2xl bg-card border border-border p-3 shadow-lg"
          >
            <div className="text-xs text-muted-foreground">Model Accuracy</div>
            <div className="font-display text-2xl text-primary">92.4%</div>
          </motion.div>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute -right-4 bottom-16 rounded-2xl bg-foreground text-background p-3 shadow-lg"
          >
            <div className="text-xs opacity-70">F1 Score</div>
            <div className="font-display text-2xl">0.911</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-display text-3xl md:text-4xl text-foreground">{value}</div>
      <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{label}</div>
    </div>
  );
}

function Marquee() {
  const items = ["Python", "SQL", "Power BI", "Looker Studio", "Figma", "Pandas", "Streamlit", "Laravel", "AI Agents", "Excel"];
  const doubled = [...items, ...items];
  return (
    <div className="border-y border-border bg-card overflow-hidden py-5">
      <div className="flex marquee-track gap-12 whitespace-nowrap">
        {doubled.map((it, i) => (
          <span key={i} className="font-display text-3xl md:text-4xl text-muted-foreground flex items-center gap-12">
            {it}
            <span className="w-2 h-2 rounded-full bg-primary" />
          </span>
        ))}
      </div>
    </div>
  );
}

function SectionHead({ eyebrow, title, kicker }: { eyebrow: string; title: string; kicker?: string }) {
  return (
    <div className="mb-12 md:mb-16">
      <div className="text-xs uppercase tracking-[0.3em] text-primary mb-3">{eyebrow}</div>
      <h2 className="font-display text-4xl md:text-6xl leading-tight max-w-3xl">{title}</h2>
      {kicker && <p className="mt-4 max-w-2xl text-muted-foreground">{kicker}</p>}
    </div>
  );
}

function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHead
        eyebrow="About"
        title="A curious mind at the intersection of data & design."
      />
      <div className="grid md:grid-cols-5 gap-8">
        <div className="md:col-span-3 space-y-5 text-lg leading-relaxed">
          <p>
            I'm a fresh graduate of <strong>Sriwijaya University</strong>, Department of Computer Science, with a
            focus on data analysis, machine learning, and UI/UX. I love breaking down messy problems and
            turning them into clear dashboards, models, and stories.
          </p>
          <p>
            Outside class, I served on the UI/UX division of <strong>Google Developer Student Clubs</strong> and as a
            staff of the Strategic Studies and Advocacy Department at <strong>HMIF Unsri</strong> — where I chaired
            plenary sessions, ran 5 club events, and supervised programming session of 20+ newly students.
          </p>
        </div>
        <div className="md:col-span-2 space-y-3">
          <InfoRow icon={<GraduationCap className="w-4 h-4" />} label="Education" value="B.Sc Informatics Engineering — Universitas Sriwijaya (2022–2026)" />
          <InfoRow icon={<Award className="w-4 h-4" />} label="GPA" value="3.95 / 4.00" />
          <InfoRow icon={<MapPin className="w-4 h-4" />} label="Based in" value="Palembang, South Sumatra" />
          <InfoRow icon={<Sparkles className="w-4 h-4" />} label="Languages" value="Indonesian · English" />
        </div>
      </div>
    </section>
  );
}

function InfoRow({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-4">
      <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-primary">
        {icon} {label}
      </div>
      <div className="mt-1.5 text-sm">{value}</div>
    </div>
  );
}

function Experience() {
  const items = [
    {
      when: "Jul 2024",
      role: "Internship — IT Dept",
      org: "PT Pupuk Sriwidjaja Palembang",
      icon: <Briefcase className="w-4 h-4" />,
      body: "Built a web-based Equipment Criticality Rating (ECR) module in Laravel 11 with role-based access, RAD workflow, and Black Box Testing until 100% test cases were Accepted.",
      link: "#",
    },
    {
      when: "Oct 2023 – Aug 2024",
      role: "UI/UX Division Member",
      org: "Google Developer Student Clubs Unsri",
      icon: <Palette className="w-4 h-4" />,
      body: "Delivered an end-to-end UI/UX portfolio via the design thinking process and supported 4 workprograms including a Redesign Challenge and Flutter × TensorFlow Workshop.",
      link: "https://media.licdn.com/dms/image/v2/D562DAQEdZXaY2dCUkg/profile-treasury-document-images_1280/profile-treasury-document-images_1280/1/1724915479045?e=1784764800&v=beta&t=HJ-AJ5qQNOAEak7NbC4gwonA8FNNWICVx8s43vUwfmI",
    },
    {
      when: "Feb 2023 – Jan 2024",
      role: "Staff, Strategic Studies & Advocacy",
      org: "HMIF Universitas Sriwijaya",
      icon: <Sparkles className="w-4 h-4" />,
      body: "Chaired the HMIF General Assembly plenary, organized 5 events (SRIFOTON, IF Cup), and mentored 20+ new members through programming training.",
      link: "https://media.licdn.com/dms/image/v2/D562DAQFsI0g1F8sywA/profile-treasury-image-shrink_1920_1920/profile-treasury-image-shrink_1920_1920/0/1719372011279?e=1784548800&v=beta&t=scTc_wRdArRi0pr6EDc-b95xU421bElv44OWTUyqL_8",
    },
  ];
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHead
        eyebrow="Experience"
        title="Where I've built, led & learned."
      />
      <div className="space-y-4">
        {items.map((it, i) => (
          <motion.a
            key={i}
            href={it.link}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: i * 0.08 }}
            className="group grid md:grid-cols-[160px_1fr_auto] gap-4 md:gap-8 rounded-2xl border border-border bg-card p-6 hover:border-primary transition-all hover:shadow-lg"
          >
            <div className="text-sm text-muted-foreground font-mono">{it.when}</div>
            <div>
              <div className="flex items-center gap-2 text-primary mb-1">
                {it.icon}
                <span className="text-xs uppercase tracking-widest">{it.org}</span>
              </div>
              <h3 className="font-display text-2xl md:text-3xl">{it.role}</h3>
              <p className="mt-2 text-muted-foreground max-w-2xl">{it.body}</p>
            </div>
            <ArrowUpRight className="w-6 h-6 text-muted-foreground group-hover:text-primary group-hover:rotate-45 transition-all" />
          </motion.a>
        ))}
      </div>
    </section>
  );
}

function Portfolio() {
  const [filter, setFilter] = useState<string>("All");
  const filtered = filter === "All" ? PORTFOLIO : PORTFOLIO.filter((p) => p.category === filter);
  return (
    <section id="portfolio" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHead
        eyebrow="Portfolio"
        title="Selected projects across data, ML & design."
        kicker="Click any project to see the story behind it — problem, approach, and the tools I reached for."
      />
      <div className="flex flex-wrap gap-2 mb-8">
        {CATEGORIES.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`px-4 py-1.5 rounded-full text-sm border transition ${
              filter === c
                ? "bg-foreground text-background border-foreground"
                : "bg-card border-border hover:border-primary"
            }`}
          >
            {c}
          </button>
        ))}
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        {filtered.map((p, i) => (
          <PortfolioCard key={p.id} item={p} index={i} />
        ))}
      </div>
    </section>
  );
}

function PortfolioCard({ item, index }: { item: PortfolioItem; index: number }) {
  const accents: Record<PortfolioItem["accent"], string> = {
    terracotta: "from-terracotta/20 to-clay/10",
    sage: "from-sage/20 to-clay/10",
    clay: "from-clay/25 to-terracotta/10",
    ink: "from-ink/15 to-sage/10",
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: index * 0.06 }}
    >
      <Link
        to="/portfolio/$id"
        params={{ id: item.id }}
        className={`group relative block rounded-3xl border border-border bg-gradient-to-br ${accents[item.accent]} p-6 md:p-8 h-full overflow-hidden hover:border-primary transition-all hover:-translate-y-1`}
      >
        <div className="flex items-start justify-between gap-4 mb-8">
          <div>
            <div className="text-xs uppercase tracking-widest text-primary mb-2">
              {item.tool} · {item.year}
            </div>
            <h3 className="font-display text-2xl md:text-3xl leading-tight max-w-sm">{item.title}</h3>
          </div>
          <div className="rounded-full bg-background/80 backdrop-blur border border-border p-2 group-hover:bg-primary group-hover:text-primary-foreground transition">
            <ArrowUpRight className="w-5 h-5" />
          </div>
        </div>
        <p className="text-sm text-muted-foreground max-w-md min-h-[3rem]">{item.summary}</p>
        <div className="mt-6 flex flex-wrap gap-1.5">
          {item.stack.slice(0, 4).map((s) => (
            <span key={s} className="rounded-full bg-background/70 border border-border px-2.5 py-0.5 text-[11px] font-mono">
              {s}
            </span>
          ))}
        </div>
      </Link>
    </motion.div>
  );
}

function Skills() {
  const iconFor: Record<string, React.ReactNode> = {
    Data: <Database className="w-5 h-5" />,
    BI: <BarChart3 className="w-5 h-5" />,
    "AI / ML": <Brain className="w-5 h-5" />,
    "Design & Dev": <Code2 className="w-5 h-5" />,
  };
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHead eyebrow="Toolkit" title="Skills I bring to a team." />
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {Object.entries(SKILLS).map(([group, list], i) => (
          <motion.div
            key={group}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="rounded-2xl border border-border bg-card p-6"
          >
            <div className="flex items-center gap-2 text-primary mb-4">
              {iconFor[group]}
              <span className="text-xs uppercase tracking-widest">{group}</span>
            </div>
            <ul className="space-y-2">
              {list.map((s) => (
                <li key={s} className="text-sm flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-primary" /> {s}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <div className="rounded-3xl bg-foreground text-background p-10 md:p-16 relative overflow-hidden grain">
        <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-primary/40 blur-3xl" />
        <div className="relative">
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Get in touch</div>
          <h2 className="font-display text-5xl md:text-7xl leading-[0.95] max-w-3xl">
            Let's build something <span className="italic text-primary">useful.</span>
          </h2>
          <p className="mt-6 max-w-xl opacity-80">
            Open to entry-level roles in Data Analytics, Business Intelligence, Data Science, and UI/UX Design.
            Happy to chat about internships, freelance work, or collaborations.
          </p>
          <div className="mt-10 grid sm:grid-cols-2 gap-3 max-w-2xl">
            <ContactRow href="mailto:faradillamaulia.official@gmail.com" icon={<Mail className="w-4 h-4" />} label="faradillamaulia.official@gmail.com" />
            <ContactRow href="https://linkedin.com/in/faradilla-maulia" icon={<Linkedin className="w-4 h-4" />} label="linkedin.com/in/faradilla-maulia" />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="group flex items-center justify-between gap-4 rounded-2xl border border-white/15 bg-white/5 px-5 py-4 hover:border-primary hover:bg-white/10 transition">
      <div className="flex items-center gap-3 text-sm">
        <span className="text-primary">{icon}</span>
        {label}
      </div>
      <ArrowUpRight className="w-4 h-4 opacity-60 group-hover:opacity-100 group-hover:rotate-45 transition" />
    </a>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div>© {new Date().getFullYear()} Faradilla Maulia — Designed & built with care.</div>
        <div className="font-mono text-xs">Made with data ✦ curiosity ✦ coffee</div>
      </div>
    </footer>
  );
}
