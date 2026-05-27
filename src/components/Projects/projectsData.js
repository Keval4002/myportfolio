export const projectsData = [
  {
    id: 1,
    title: "Gullak AI — Personal Finance Manager",
    year: "2026",
    description: "Built an AI-powered personal finance platform enabling bulk ingestion of financial records through Excel, OCR receipt scanning, and bank statements. Developed intelligent transaction pipelines for MoM analytics, anomaly detection, and recurring expense tracking. Implemented a low-latency RAG-based assistant using vector embeddings and Redis caching to provide personalized insights and natural-language querying. Features an 'action layer' triggering behavioral alerts like crunch-period warnings based on predictive spending analysis.",
    image: "/images/gullak_display.png",
    techStack: [
      "Next.js",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "RAG",
      "OCR"
    ],
    liveUrl: "https://gullak-nu.vercel.app/",
    githubUrl: "https://github.com/Keval4002/Gullak"
  },
  {
    id: 2,
    title: "PrepSetGo — Unified Job Tracker",
    year: "2025",
    description: "An all-in-one platform built to solve the fragmentation of modern job preparation. By consolidating application tracking, outreach management, and highly-tailored mock interviews into a single streamlined workspace, it eliminates the need for scattered spreadsheets. Addresses the clear gap in generic mock interviews by providing deeply personalized preparation experiences, making the entire job hunt lifecycle structured, consistent, and significantly more effective for seekers.",
    image: "/images/prepsetgo_display.png",
    techStack: [
      "React",
      "Node.js",
      "Express.js",
      "OpenAI API",
      "Tailwind CSS",
      "MongoDB"
    ],
    liveUrl: "https://prepsetgo-henna.vercel.app/",
    githubUrl: "https://github.com/Keval4002/prepsetgo"
  },
  {
    id: 3,
    title: "RoleFit — Resume Editor",
    year: "2025",
    description: "Built an AI-powered platform that tailors resumes to job descriptions using semantic similarity, keyword extraction, and LLM-based content optimization. Implemented robust pipelines for PDF/DOCX parsing, contextual ATS scoring, and professional headless browser PDF exports. Integrated vector similarity search enabling skill-gap analysis and semantic keyword highlighting. Designed a scalable full-stack architecture with configurable integrations across OpenAI, Ollama, Gemini, and Anthropic APIs.",
    image: "/images/rolefit_display.png",
    techStack: [
      "React",
      "Node.js",
      "LLMs",
      "Vector Embeddings",
      "Puppeteer",
      "MongoDB",
      "Vector DB"
    ],
    liveUrl: "",
    githubUrl: ""
  }
];
