export type PortfolioItem = {
  id: string;
  title: string;
  category: string;
  tool: "Google Colab" | "Looker Studio" | "Figma" | "MySQL" | "Streamlit" | "Google Drive" | "Canva";
  year: string;
  summary: string;
  description: string;
  highlights: string[];
  stack: string[];
  link: string;
  accent: "terracotta" | "sage" | "clay" | "ink";
};

// NOTE: Replace `link` values with your real Google Colab / Looker Studio /
// Figma / Drive / Canva URLs. These placeholders point to your portfolio hub.
export const PORTFOLIO: PortfolioItem[] = [
  {
    id: "user-retention-cohort",
    title: "User Retention Cohort Analysis",
    category: "Data Analysis",
    tool: "Google Colab",
    year: "2026",
    summary:
      "Cohort retention heatmap built with Pandas to reveal how customers stick around over time.",
    description:
      "Identified customer retention patterns by building a cohort retention analysis using Pandas and visualizing it as a heatmap — turning raw transaction logs into a story about loyalty.",
    highlights: [
      "Cleaned & pivoted transactional data into monthly cohorts",
      "Built retention heatmap with seaborn / matplotlib",
      "Surfaced drop-off week that guides re-engagement",
    ],
    stack: ["Python", "Pandas", "Seaborn", "Google Colab"],
    link: "https://colab.research.google.com/drive/1mOzOAeZ2XP4JJ7DyHd-_VITJKCwkjZk_?usp=sharing",
    accent: "terracotta",
  },
  {
    id: "sql-techcorp",
    title: "SQL Analysis — TechCorp E-Commerce",
    category: "SQL & Databases",
    tool: "MySQL",
    year: "2026",
    summary:
      "6-table relational schema with JOINs, CTEs, and subqueries answering real business questions.",
    description:
      "Generated business insights from an e-commerce database by designing a 6-table relational schema and writing SQL queries — JOINs, CTEs, subqueries — to answer questions on revenue, customer behavior, and product mix.",
    highlights: [
      "Designed 6-table normalized schema",
      "Wrote CTEs & window functions for cohort revenue",
      "Turned SQL results into decision-ready insight",
    ],
    stack: ["SQL", "MySQL Workbench", "ERD"],
    link: "https://canva.link/8anjsopjanqosbd",
    accent: "sage",
  },
  {
    id: "credit-card-default",
    title: "Credit Card Default Prediction",
    category: "Machine Learning",
    tool: "Google Colab",
    year: "2026",
    summary:
      "Compared Logistic Regression, XGBoost & Random Forest with GridSearchCV to pick the best classifier.",
    description:
      "Determined the best default-prediction model by building and comparing three classification algorithms — Logistic Regression, XGBoost, and Random Forest — through GridSearchCV hyperparameter tuning.",
    highlights: [
      "Feature engineering + class imbalance handling",
      "GridSearchCV hyperparameter tuning across 3 models",
      "Model comparison on precision / recall / F1",
    ],
    stack: ["Python", "scikit-learn", "XGBoost", "Google Colab"],
    link: "https://colab.research.google.com/drive/1MXjpRQ3kXYMeGrj_wzeNln3qPmxuM_S7?usp=drive_link",
    accent: "clay",
  },
  {
    id: "looker-dashboards",
    title: "Retail Transaction Report Dashboards",
    category: "BI Dashboards",
    tool: "Looker Studio",
    year: "2026",
    summary:
      "An interactive Google Looker Studio dashboards for retail transactions.",
    description:
      "Simplified the analysis of retail transactions by building an interactive dashboards with filters, calculated fields, and drill-down controls.",
    highlights: [
      "Retail transactions dashboard with KPI cards",
      "Filters, controls & calculated fields",
    ],
    stack: ["Looker Studio", "Data Modeling", "KPI Design"],
    link: "https://datastudio.google.com/reporting/0193955f-159d-4741-a555-2258e7f1f181",
    accent: "terracotta",
  },
  {
    id: "looker-dashboards-2",
    title: "Credit Card Report Dashboards",
    category: "BI Dashboards",
    tool: "Looker Studio",
    year: "2026",
    summary:
      "An interactive Google Looker Studio dashboards for credit risk profiles.",
    description:
      "Simplified the analysis of credit card customers' risk profiles by building an interactive dashboards with filters, calculated fields, and drill-down controls.",
    highlights: [
      "Credit card risk profiling with segments",
      "Filters, controls & calculated fields",
    ],
    stack: ["Looker Studio", "Data Modeling", "Credit Card Risk"],
    link: "https://datastudio.google.com/reporting/34940cb5-9726-4c7a-a2b7-54a4cb289930",
    accent: "terracotta",
  },
  {
    id: "swimming-thesis",
    title: "Swimming Talent Scouting — Hybrid BP + GA",
    category: "Thesis · Deep Learning",
    tool: "Google Colab",
    year: "2025 – 2026",
    summary:
      "Improved swimming talent classification accuracy 82% → 92% using Backpropagation + Genetic Algorithm feature selection.",
    description:
      "Improved the accuracy of swimming talent classification from 82% to 92% (F1-score 91.11%) by developing a Hybrid Backpropagation–Genetic Algorithm model where GA serves as the feature-selection method.",
    highlights: [
      "Backpropagation neural network baseline",
      "Genetic Algorithm for feature selection",
      "F1-score 91.11% on the final hybrid model",
    ],
    stack: ["Python", "TensorFlow", "Genetic Algorithms"],
    link: "https://drive.google.com/drive/folders/1OPIuV51-YCYjbqXmOXT4h589hAs7gz6Q?usp=sharing",
    accent: "ink",
  },
  {
    id: "heart-failure",
    title: "Heart Failure Risk — Decision Tree",
    category: "Data Mining",
    tool: "Streamlit",
    year: "2025",
    summary:
      "92.42% accuracy heart failure risk predictor deployed to an interactive Streamlit web app.",
    description:
      "Provides access to heart failure risk predictions with 92.42% accuracy by building a Decision Tree model and deploying it to an interactive Streamlit-based web application.",
    highlights: [
      "Decision Tree classifier on clinical dataset",
      "92.42% test accuracy",
      "Streamlit web app for public access",
    ],
    stack: ["Python", "scikit-learn", "Streamlit"],
    link: "https://drive.google.com/drive/folders/1Jkw1qVKIqRx0Nx82gI4sRjttvoQizn-x?usp=sharing",
    accent: "sage",
  },
  {
    id: "duitzup-uiux",
    title: "DuitZup — Budgeting App UI/UX",
    category: "UI/UX Design",
    tool: "Figma",
    year: "2024",
    summary:
      "End-to-end Figma design (83/100 GDSC assessment) for a personal finance & budgeting app.",
    description:
      "Achieved 83/100 on the Sriwijaya University GDSC assessment by designing DuitZup end-to-end — creative process, technical process, UI design, prototyping, and UX testing — in Figma.",
    highlights: [
      "Design-thinking process from research to test",
      "High-fidelity UI + prototype in Figma",
      "Usability testing with target users",
    ],
    stack: ["Figma", "Design Thinking", "Prototyping"],
    link: "https://www.figma.com/proto/KKVDFU745OO5eW9rmU816N/Design-Aplikasi?page-id=288%3A772&node-id=288-773&p=f&viewport=282%2C249%2C0.02&t=CfylWLhWaLzKWt3H-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=288%3A773",
    accent: "clay",
  },
];

export const CERTIFICATES_LINK = "https://bit.ly/Sertifikat_Faradilla-Maulia";
export const PORTFOLIO_HUB = "https://bit.ly/Portofolio_Faradilla-Maulia";
export const INTERNSHIP_LETTER = "https://bit.ly/Surat-Keterangan-Internship";

export type Certificate = {
  id: string;
  title: string;
  issuer: string;
  date: string;
  link: string;
  tags: string[];
};

// NOTE: Replace `link` values with the real URLs to each certificate.
// `id` is the slug; `tags` is only used as labels on the card.
export const CERTIFICATES: Certificate[] = [
  {
    id: "data-analyst-dicoding",
    title: "Data Analyst Bootcamp",
    issuer: "Dicoding Indonesia",
    date: "2024",
    link: "#",
    tags: ["Data Analysis", "Python", "SQL"],
  },
  {
    id: "sql-hacker-rank",
    title: "SQL Intermediate",
    issuer: "HackerRank",
    date: "2024",
    link: "#",
    tags: ["SQL", "Querying"],
  },
  {
    id: "google-data-analytics",
    title: "Google Data Analytics Specialization",
    issuer: "Coursera (Google)",
    date: "2024",
    link: "#",
    tags: ["R", "Spreadsheet", "Data Viz"],
  },
  {
    id: "machine-learning-dicoding",
    title: "Machine Learning Beginner",
    issuer: "Dicoding Indonesia",
    date: "2024",
    link: "#",
    tags: ["Python", "TensorFlow", "scikit-learn"],
  },
  {
    id: "ux-research-google",
    title: "UX Research Fundamentals",
    issuer: "Google UX Design Certificate",
    date: "2023",
    link: "#",
    tags: ["UX Research", "Figma"],
  },
  {
    id: "bi-dashboard",
    title: "Power BI & Looker Studio Workshop",
    issuer: "Universitas Sriwijaya",
    date: "2023",
    link: "#",
    tags: ["Power BI", "Looker Studio"],
  },
];
