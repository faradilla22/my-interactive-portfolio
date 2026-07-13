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
    link: "https://bit.ly/Portofolio_Faradilla-Maulia",
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
    link: "https://bit.ly/Portofolio_Faradilla-Maulia",
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
    link: "https://bit.ly/Portofolio_Faradilla-Maulia",
    accent: "clay",
  },
  {
    id: "looker-dashboards",
    title: "Retail & Credit Card Dashboards",
    category: "BI Dashboards",
    tool: "Looker Studio",
    year: "2026",
    summary:
      "Two interactive Google Looker Studio dashboards for retail transactions and credit risk profiles.",
    description:
      "Simplified the analysis of retail transactions and credit card customers' risk profiles by building two interactive dashboards with filters, calculated fields, and drill-down controls.",
    highlights: [
      "Retail transactions dashboard with KPI cards",
      "Credit card risk profiling with segments",
      "Filters, controls & calculated fields",
    ],
    stack: ["Looker Studio", "Data Modeling", "KPI Design"],
    link: "https://bit.ly/Portofolio_Faradilla-Maulia",
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
    link: "https://bit.ly/Portofolio_Faradilla-Maulia",
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
    link: "https://bit.ly/Portofolio_Faradilla-Maulia",
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
    link: "https://bit.ly/Portofolio_Faradilla-Maulia",
    accent: "clay",
  },
];

export const CERTIFICATES_LINK = "https://bit.ly/Sertifikat_Faradilla-Maulia";
export const PORTFOLIO_HUB = "https://bit.ly/Portofolio_Faradilla-Maulia";
export const INTERNSHIP_LETTER = "https://bit.ly/Surat-Keterangan-Internship";