export const profile = {
  name: "Ishan Chinthaka",
  role: "Full-Stack Software Engineer",
  label: "ISHAN — DIGITAL ENGINEERING LAB",
  headline: "Building responsive, reliable web applications, resilient RESTful APIs, and database-driven systems.",
  subhead: "Full-Stack Software Engineer and Associate Software Engineer at Amazoft IT, with commercial experience building production web applications, scalable REST APIs, and database-driven solutions using React, Next.js, TypeScript, Node.js, Spring Boot, and PostgreSQL.",
  about: [
    "I am a Full-Stack Software Engineer with commercial experience delivering production web applications, scalable REST APIs, and database-driven systems at Amazoft IT. My work spans modular React and TypeScript interfaces, optimized PostgreSQL schemas, and disciplined Agile delivery.",
    "Holding a BSc (Hons) 2:1 from Cardiff Metropolitan University, I engineer systems that solve real operational friction—from real-time IoT transit tracking to AI-powered document tools. My goal is to collaborate with forward-thinking teams to build high-availability software products that deliver measurable business value."
  ],
  location: "Meetiyagoda, Ambalangoda, Sri Lanka",
  email: "ishanchinthaka2002@gmail.com",
  github: "https://github.com/ish-22",
  linkedin: "https://www.linkedin.com/in/ishan-chinthaka-1a6b5a2b1",
  tiktok: "https://www.tiktok.com/@ish_22",
  facebook: "https://www.facebook.com/share/1HYwAWdnB7/",
  resume: "/Ishan%20Chinthaka.pdf",
  whatsapp: "+94765274750",
  whatsappFormatted: "+94 76 527 4750",
  phoneSecondary: "+94752464420",
  phoneSecondaryFormatted: "+94 75 246 4420",
  availability: "AVAILABLE FOR OPPORTUNITIES"
};

export const heroTechSignals = [
  "React.js",
  "Next.js",
  "TypeScript",
  "Java",
  "Spring Boot",
  "Node.js",
  "PostgreSQL",
  "Docker",
  "AWS"
];

export const engineeringCapabilities = [
  {
    id: "01",
    title: "PRODUCT DESIGN",
    subtitle: "Interface & Experience Architecture",
    description: "Designing user flows, scalable design systems, and responsive interaction patterns grounded in UX research.",
    items: ["UI/UX Design", "User Flow Mapping", "Design Systems", "Interaction Design", "Wireframing"],
    accent: "Lime"
  },
  {
    id: "02",
    title: "FRONTEND ENGINEERING",
    subtitle: "High-Performance Web Clients",
    description: "Architecting responsive, accessible, and fast web applications built with modern SSR and state management.",
    items: ["Next.js (App Router)", "React 19", "TypeScript", "Tailwind CSS", "Framer Motion"],
    accent: "Lime"
  },
  {
    id: "03",
    title: "BACKEND SYSTEMS",
    subtitle: "Robust API & Data Architectures",
    description: "Engineering scalable RESTful APIs, real-time message brokers, relational schemas, and microservice workflows.",
    items: ["Node.js & Express", "Laravel (PHP)", "REST & GraphQL", "MySQL & PostgreSQL", "Redis Caching"],
    accent: "Lime"
  },
  {
    id: "04",
    title: "CLOUD + AI",
    subtitle: "Intelligent Infrastructure & RAG",
    description: "Deploying automated cloud pipelines on AWS, integrating Amazon Bedrock LLMs, and building intelligent search systems.",
    items: ["AWS Cloud Architecture", "Amazon Bedrock AI", "Docker & CI/CD", "Vector Search / RAG", "Serverless Functions"],
    accent: "Lime"
  }
];

export interface ProjectData {
  id: string;
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  role: string;
  stack: string[];
  description: string;
  image: string;
  repo?: string | { frontend?: string; backend?: string };
  link?: string;
  status: "PRODUCTION" | "PROTOTYPE" | "DEVELOPMENT";
  overview: string;
  problem: string;
  users: string;
  goals: string[];
  research: string;
  userFlow: string;
  architectureNotes: string;
  challenges: string;
  solution: string;
  result: string;
}

export const selectedProjects: ProjectData[] = [
  {
    id: "track-my-bus",
    slug: "track-my-bus",
    number: "WORK / 001",
    title: "TRACK MY BUS",
    subtitle: "Smart Public Transport & Fleet Tracking Ecosystem",
    category: "Full-Stack System",
    year: "2025",
    role: "Product Design · UI/UX · Full Stack Engineering",
    stack: ["Next.js", "TypeScript", "Laravel", "MySQL", "Redis", "Google Maps", "AWS"],
    description: "A real-time transit ecosystem featuring live GPS bus tracking with interactive maps, seat reservation pipelines, integrated payments, and dynamic ticketing queues.",
    image: "/projects/smart_bus.png",
    repo: {
      frontend: "https://github.com/ish-22/smartbus_frontend",
      backend: "https://github.com/ish-22/smartbus_backend"
    },
    link: "#",
    status: "PRODUCTION",
    overview: "Track My Bus solves daily commuter friction by unifying real-time GPS fleet location streaming, seat availability, and contactless QR ticket validation into a single web application.",
    problem: "Commuters in urban transit routes face unpredictable bus arrivals, overcapacity delays, and slow manual cash ticketing.",
    users: "Daily urban commuters, public transport operators, route fleet managers, and ticketing inspectors.",
    goals: [
      "Stream sub-second bus GPS locations on interactive Google Maps.",
      "Deliver instant interactive seat reservation with real-time capacity locks via Redis.",
      "Provide secure payment processing with dynamic QR code validation."
    ],
    research: "Identified recurring commuter boarding bottlenecks caused by slow manual cash transactions and lack of visibility into oncoming bus capacity.",
    userFlow: "Search Route → View Live GPS Map → Select Bus & Seats → Confirm Payment → Receive Dynamic QR Ticket → Scan at Vehicle Gate.",
    architectureNotes: "Client Next.js app communicates via REST API to a Laravel backend, which leverages Redis in-memory pub/sub for bus location updates and transactional MySQL storage.",
    challenges: "Handling rapid websocket location updates from dozens of active vehicles without degrading client map rendering frames.",
    solution: "Implemented debounced batch update intervals in Redis with client-side interpolation on Google Maps canvas layers.",
    result: "Streamlined passenger boarding by replacing manual cash ticketing with real-time seat reservation and instant QR code validation."
  },
  {
    id: "medisync-core",
    slug: "medisync-core",
    number: "WORK / 002",
    title: "MEDISYNC CORE",
    subtitle: "AI-Assisted Healthcare & Pharmaceutical Operations System",
    category: "Enterprise System",
    year: "2025",
    role: "Full Stack Development · UI/UX · System Architecture",
    stack: ["Next.js", "TypeScript", "Node.js", "MySQL", "Amazon Bedrock", "Tailwind CSS"],
    description: "Healthcare workflow suite managing clinical records, multi-role staff access, pharmacy inventory tracking, and AI-driven clinical summary extraction.",
    image: "/projects/pharmacy_inventory.png",
    repo: "https://github.com/ish-22/Pharmacy_inventory_Management",
    link: "#",
    status: "PRODUCTION",
    overview: "MediSync Core is an enterprise-grade medical and pharmaceutical portal designed to streamline patient records, drug stock logs, and prescription workflows with AI copilot assistance.",
    problem: "Manual paper prescriptions and disconnected inventory logs create fulfillment errors and slow down clinical consultations.",
    users: "Doctors, pharmacists, administrative staff, and hospital inventory directors.",
    goals: [
      "Unify patient electronic health records (EHR) with stock management.",
      "Provide AI assistance for instant prescription summarization and dosage alerts.",
      "Enforce strict role-based access control (RBAC) across sensitive medical logs."
    ],
    research: "Feedback from clinical and pharmacy staff highlighted consultation delays caused by disconnected physical drug availability catalogs.",
    userFlow: "Login (RBAC) → Patient Lookup → View EHR & History → Enter Prescription → AI Safety Audit → Automated Inventory Deduct → Dispense.",
    architectureNotes: "Built with Node.js microservices, MySQL relational schemas, Next.js dashboard UI, and Amazon Bedrock Nova model integration for clinical text processing.",
    challenges: "Maintaining strict data privacy while running LLM analysis on clinical notes.",
    solution: "Implemented automated client-side PII redactors prior to invoking Bedrock API endpoints.",
    result: "Eliminated manual stock verification delays by linking real-time pharmacy inventory with role-based clinical prescription workflows."
  },
  {
    id: "ai-study-assistant",
    slug: "ai-study-assistant",
    number: "WORK / 003",
    title: "AI STUDY ASSISTANT",
    subtitle: "Intelligent Learning Platform & Document RAG Pipeline",
    category: "AI Product",
    year: "2026",
    role: "Lead Full-Stack Developer · AI Pipeline Engineer",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Amazon Bedrock", "Tailwind CSS", "Zod"],
    description: "AI-powered study hub with PDF document chunking, dynamic Q&A, automated flashcard generation, and adaptive quiz assessment engines.",
    image: "/projects/study_assistant.png",
    repo: {
      frontend: "https://github.com/ish-22/AI-Powered-Intelligent-Study-Assistant-System",
      backend: "https://github.com/ish-22/AI-Powered-Intelligent-Study-Assistant-System--api-v2"
    },
    link: "#",
    status: "PRODUCTION",
    overview: "AI Study Assistant transforms static lecture slides and research papers into interactive study guides, instant semantic Q&A, and adaptive flashcard quizzes using Amazon Bedrock.",
    problem: "Students spend hours manually reading dense academic documents without immediate feedback or self-testing tools.",
    users: "University students, researchers, self-taught developers, and educators.",
    goals: [
      "Implement client-side PDF ingestion with server chunking.",
      "Deliver low-latency Q&A responses grounded strictly in uploaded document context.",
      "Generate structured multiple-choice quizzes with automatic scoring logs."
    ],
    research: "Applied cognitive science active-recall principles, structuring study materials into dynamic self-assessment quizzes to improve conceptual retention.",
    userFlow: "Upload PDF → Semantic Vector Chunking → Interactive Workspace → Generate Flashcards / Ask AI → Track Assessment Score.",
    architectureNotes: "Next.js frontend connects to an Express API executing chunked document ingestion, stored in PostgreSQL with indexed retrieval pipelines.",
    challenges: "Preventing AI model hallucinations when answering technical academic queries.",
    solution: "Enforced strict system prompt constraints requiring context citations and implemented Zod schema validation on structured AI outputs.",
    result: "Delivered contextually grounded document Q&A and active-recall quizzes by enforcing strict context citation prompts and Zod schema output validation."
  }
];

export const secondaryProjects: ProjectData[] = [
  {
    id: "fix-now",
    slug: "fix-now",
    number: "WORK / 004",
    title: "FIXNOW SERVICE MARKETPLACE",
    subtitle: "Local Technical Services Booking Portal",
    category: "Web Application",
    year: "2024",
    role: "Full Stack Developer",
    stack: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3"],
    description: "A service marketplace connecting local users with verified service technicians, featuring online request dispatching, service ratings, and admin tracking.",
    image: "/projects/fix_now.png",
    repo: "https://github.com/ish-22/FIXNOW-FINAL_PROJECT",
    link: "#",
    status: "PRODUCTION",
    overview: "Service platform bridging customer repairs with skilled technicians.",
    problem: "Customers struggle to find vetted local technicians with transparent pricing.",
    users: "Homeowners, technicians, customer service admins.",
    goals: ["Fast request dispatching", "Transparent technician reviews", "Booking management"],
    research: "Surveyed local service providers regarding dispatch bottlenecks.",
    userFlow: "Browse Services → Select Provider → Schedule Request → Vendor Approval → Complete Service → Rate Provider.",
    architectureNotes: "Monolithic PHP web application with relational MySQL tables.",
    challenges: "Synchronizing real-time request status updates across client and technician dashboards.",
    solution: "Built polling updates and clean state machines in MySQL.",
    result: "Successfully processed service requests across multiple trial categories."
  },
  {
    id: "ocean-view-resort",
    slug: "ocean-view-resort",
    number: "WORK / 005",
    title: "OCEAN VIEW RESORT",
    subtitle: "Luxury Hospitality Management Portal",
    category: "Full Stack System",
    year: "2024",
    role: "Full Stack Engineer",
    stack: ["Spring Boot", "React", "Vite", "MySQL", "Tailwind CSS"],
    description: "Cinematic guest inquiry system and administrative suite for high-end resort booking management, room vacancy monitoring, and guest services.",
    image: "/projects/ocean_view.png",
    repo: "https://github.com/ish-22/Ocean-View_resort",
    link: "#",
    status: "PRODUCTION",
    overview: "Resort management software built with Java Spring Boot and React.",
    problem: "Outdated legacy software caused double-booking issues during peak seasons.",
    users: "Resort guests, front desk agents, reservation managers.",
    goals: ["Atomic room booking locks", "Luxury guest UI experience", "Financial reporting dashboard"],
    research: "Analyzed hospitality reservation workflows.",
    userFlow: "Search Dates → View Suite Gallery → Reserve Room → Admin Confirmation → Guest Check-in.",
    architectureNotes: "Java Spring Boot REST API serving a React SPA frontend.",
    challenges: "Preventing concurrent booking collisions for high-demand luxury suites.",
    solution: "Used database isolation transactions in Spring Data JPA.",
    result: "Zero booking collisions achieved across operational simulations."
  },
  {
    id: "pahana-bookshop",
    slug: "pahana-bookshop",
    number: "WORK / 006",
    title: "PAHANA BOOKSHOP SYSTEM",
    subtitle: "Desktop Inventory & Daily Billing Application",
    category: "Desktop Application",
    year: "2024",
    role: "Software Developer",
    stack: ["Java", "Swing", "MySQL", "JDBC", "OOP Design"],
    description: "Desktop POS software engineered for book retail, managing item catalogs, daily customer invoice generation, and real-time inventory deduction.",
    image: "/projects/pahana_bookshop.png",
    repo: "https://github.com/ish-22/pahana_bookshop",
    link: "#",
    status: "PRODUCTION",
    overview: "Desktop retail billing software built for fast daily transaction handling.",
    problem: "Slow manual billing queues during peak school term book sales.",
    users: "Retail cashiers, store manager.",
    goals: ["Sub-second barcode scan receipt generation", "Low-stock automated alerts"],
    research: "Observed cashier keying speeds at physical bookshops.",
    userFlow: "Scan Item ISBN → Add to Cart → Select Payment Method → Print Receipt → Deduct Inventory.",
    architectureNotes: "Java Swing desktop UI connecting via JDBC driver to MySQL database.",
    challenges: "Ensuring offline resilience when server connection drops.",
    solution: "Implemented local cached transaction queues with automatic re-sync.",
    result: "Significantly accelerated cashier checkout flows through instant ISBN barcode scanning, automated receipt generation, and real-time inventory deduction."
  }
];

export const uxProcessSteps = [
  { step: "01", title: "RESEARCH", description: "Analyzing problem statements, studying user pain points, and discovering core friction." },
  { step: "02", title: "DEFINE", description: "Structuring target personas, key product goals, constraints, and success metrics." },
  { step: "03", title: "USER FLOW", description: "Mapping out logical navigational journeys, state transitions, and step sequences." },
  { step: "04", title: "WIREFRAME", description: "Constructing low-fidelity layout grids to test information architecture hierarchy." },
  { step: "05", title: "UI DESIGN", description: "Crafting visual design tokens, typography, dark-mode color palettes, and polished components." },
  { step: "06", title: "PROTOTYPE", description: "Building interactive micro-interactions and transitions to validate usability." },
  { step: "07", title: "DEVELOP", description: "Writing clean, accessible TypeScript code with modern frameworks and robust backend APIs." },
  { step: "08", title: "TEST", description: "Running cross-browser testing, accessibility audits, and Lighthouse performance checks." },
  { step: "09", title: "ITERATE", description: "Refining based on user metrics, performance feedback, and continuous product iteration." }
];

export const designLabExamples = [
  {
    id: "booking-flow",
    title: "BOOKING SEAT HIERARCHY",
    problem: "Users struggled to quickly differentiate between available, reserved, and selected seats in public transport interfaces.",
    solution: "Engineered a high-contrast visual matrix with distinct color indicators, micro-animations, and immediate total price updates.",
    beforeLabel: "Confusing list table",
    afterLabel: "Interactive visual spatial matrix",
    image: "/projects/smart_bus.png"
  },
  {
    id: "health-dashboard",
    title: "CLINICAL WORKFLOW DASHBOARD",
    problem: "Doctors experienced cognitive overload when reading dense unformatted patient record tables.",
    solution: "Re-architected the layout into categorized tab modules with AI-summarized health highlights and color-coded alert badges.",
    beforeLabel: "Dense unformatted text",
    afterLabel: "Modular card grid with AI summary",
    image: "/projects/pharmacy_inventory.png"
  },
  {
    id: "study-workspace",
    title: "AI STUDY WORKSPACE",
    problem: "Students felt overwhelmed switching between PDF documents, notepad, and chat windows.",
    solution: "Created a side-by-side split screen workspace with synchronized document scrolling and inline contextual AI actions.",
    beforeLabel: "Multiple overlapping windows",
    afterLabel: "Unified dual-pane workspace",
    image: "/projects/study_assistant.png"
  }
];

export const architectureNodes = [
  {
    id: "client",
    title: "Next.js Web Client",
    type: "FRONTEND",
    description: "App Router SSR & React Client Components rendered with high performance.",
    tech: "Next.js 15 · React 19 · TypeScript"
  },
  {
    id: "api",
    title: "API Gateway & REST Routes",
    type: "GATEWAY",
    description: "Request validation, rate limiting, and route handling.",
    tech: "Node.js / Express · Laravel"
  },
  {
    id: "cache",
    title: "Redis In-Memory Cache",
    type: "CACHE",
    description: "Sub-millisecond data caching, session store, and real-time pub/sub queues.",
    tech: "Redis 7.0"
  },
  {
    id: "db",
    title: "Relational Database",
    type: "DATABASE",
    description: "ACID-compliant transactional store for structured application data.",
    tech: "MySQL 8.0 · PostgreSQL"
  },
  {
    id: "ai",
    title: "Amazon Bedrock AI Engine",
    type: "AI INFRASTRUCTURE",
    description: "Secure, low-latency LLM inference pipelines for document RAG and translations.",
    tech: "Amazon Bedrock Nova Micro / Pro"
  },
  {
    id: "cloud",
    title: "AWS Cloud Infrastructure",
    type: "CLOUD",
    description: "Scalable object storage, container management, and automated deployments.",
    tech: "AWS S3 · Amplify · Docker"
  }
];

export const aiLabItems = [
  {
    title: "Document Chunking & RAG Pipeline",
    description: "Intelligent PDF text parsing, semantic vector chunking, and contextual answer retrieval.",
    status: "PRODUCTION",
    tech: "Amazon Bedrock · Node.js · PostgreSQL"
  },
  {
    title: "Multilingual AI Translation System",
    description: "Context-aware UI translation into Sinhala and Tamil with script normalization.",
    status: "PRODUCTION",
    tech: "Amazon Nova Micro · MD5 Caching"
  },
  {
    title: "Automated Flashcard & Quiz Generator",
    description: "Extracting key concepts from study notes into structured flashcard sets.",
    status: "PRODUCTION",
    tech: "TypeScript · Zod Schema Validation"
  },
  {
    title: "AI Clinical Summary Copilot",
    description: "Experimental medical note summarization with PII redaction security.",
    status: "PROTOTYPE",
    tech: "Bedrock LLMs · Sanitization Filters"
  }
];

export interface TechCategory {
  category: string;
  description: string;
  items: {
    name: string;
    note: string;
  }[];
}

export const technologyMap: TechCategory[] = [
  {
    category: "Frontend Development",
    description: "Modern client-side web architectures, reactive state management, and responsive interfaces.",
    items: [
      { name: "React.js", note: "Component architecture, Virtual DOM, custom hooks & state patterns" },
      { name: "Next.js", note: "App Router SSR, Server Components, dynamic routing & SEO optimization" },
      { name: "Tailwind CSS", note: "Design tokens, responsive layouts, dark mode & utility styling" },
      { name: "HTML5 & CSS3", note: "Semantic structure, responsive CSS Grid/Flexbox & modern web standards" }
    ]
  },
  {
    category: "Backend Development",
    description: "Robust server runtimes, REST API architectures, middleware, and business logic services.",
    items: [
      { name: "Node.js", note: "Event-driven asynchronous server runtime & microservice architectures" },
      { name: "Express.js", note: "RESTful routing, modular middleware pipelines & controller architecture" },
      { name: "Spring Boot", note: "Enterprise Java services, Spring Data JPA, dependency injection & REST APIs" },
      { name: "Laravel", note: "PHP MVC architecture, Eloquent ORM, middleware & secure authentication" },
      { name: "RESTful APIs", note: "REST contract design, HTTP status conventions, JSON schemas & endpoints" },
      { name: ".NET Core", note: "Foundational backend architecture, C# web APIs & MVC patterns" }
    ]
  },
  {
    category: "Programming Languages",
    description: "Core languages applied across frontend, enterprise backend, and database scripting.",
    items: [
      { name: "TypeScript", note: "Strict static typing, generic interfaces, utility types & compile-time safety" },
      { name: "JavaScript (ES6+)", note: "Modern ECMAScript, asynchronous async/await, event loops & DOM APIs" },
      { name: "Java", note: "Object-oriented programming, enterprise services, JDBC & multithreading" },
      { name: "PHP", note: "Server-side scripting, modern PHP 8.x paradigms & OOP architecture" },
      { name: "C#", note: "Object-oriented design, strongly-typed backend logic & .NET architecture" },
      { name: "SQL", note: "Relational query composition, schema definition, indexing & joins" }
    ]
  },
  {
    category: "Databases",
    description: "Relational ACID stores, distributed document stores, and in-memory caching solutions.",
    items: [
      { name: "PostgreSQL", note: "Relational schema design, query indexing, constraints & high throughput" },
      { name: "MySQL", note: "Transactional tables, foreign keys, ACID compliance & relational queries" },
      { name: "MongoDB", note: "Document collections, NoSQL schema modeling & query aggregation" },
      { name: "SQLite", note: "Embedded relational datastores & lightweight local persistence" },
      { name: "Redis", note: "In-memory caching, sub-millisecond lookups & real-time pub/sub queues" }
    ]
  },
  {
    category: "Cloud and DevOps",
    description: "Cloud infrastructure provisioning, containerized environments, and continuous delivery.",
    items: [
      { name: "AWS Cloud", note: "Cloud hosting, S3 bucket storage, EC2 compute & Bedrock AI infrastructure" },
      { name: "Docker", note: "Multi-service containerization, Dockerfiles & reproducible deployment builds" },
      { name: "CI/CD & Automation", note: "Automated build checks, linting, regression testing & deployment pipelines" }
    ]
  },
  {
    category: "Development Tools",
    description: "Collaborative version control, API testing suites, UI wireframing, and development IDEs.",
    items: [
      { name: "Git", note: "Distributed version control, feature branching, interactive rebasing & conflict resolution" },
      { name: "GitHub", note: "Pull request reviews, GitHub Actions, repository administration & teamwork" },
      { name: "Postman", note: "API contract validation, automated test suites & endpoint regression testing" },
      { name: "VS Code", note: "Development environment, debugging workflows, linters & productivity tooling" },
      { name: "Figma", note: "UI/UX wireframing, user journey mapping & component design systems" }
    ]
  },
  {
    category: "AI and Integrations",
    description: "Generative AI pipelines, contextual retrieval systems, and third-party API integrations.",
    items: [
      { name: "Amazon Bedrock", note: "Foundation LLM integration, inference endpoints & clinical text processing" },
      { name: "Vector Search & RAG", note: "PDF text extraction, semantic vector chunking & contextual document retrieval" },
      { name: "Zod Schema Validation", note: "Runtime schema validation & strict type parsing on structured AI outputs" },
      { name: "Google Maps API", note: "Interactive map canvas, live GPS location markers & route polyline layers" },
      { name: "Stripe API", note: "Secure payment gateway checkout flows & transactional webhooks" }
    ]
  }
];

export const education = [
  {
    degree: "BSc (Hons) in Software Engineering",
    institution: "Cardiff Metropolitan University, United Kingdom",
    classification: "Second Class Upper Division (2:1)",
    period: "2025 – 2026",
    status: "Completed"
  },
  {
    degree: "Higher Diploma in Computing & Software Engineering",
    institution: "Cardiff Met. (via ICBT Campus, Sri Lanka)",
    classification: "Merit / Distinction",
    period: "2023 – 2025",
    status: "Completed"
  }
];

export const experienceTimeline = [
  {
    year: "2025 – Present",
    role: "Associate Software Engineer",
    company: "Amazoft IT",
    description: "Architecting React.js & TypeScript web applications, designing optimized PostgreSQL schemas, conducting root-cause diagnostics, and collaborating in Agile sprint cycles.",
    status: "Current Commercial Role"
  },
  {
    year: "2022 – 2025",
    role: "Trainee Software Developer",
    company: "Amazoft IT",
    description: "Built responsive UIs with React.js, supported Java Spring Boot REST APIs, implemented JWT/OAuth 2.0 token authentication, Docker containerization, and Postman test suites.",
    status: "Commercial Role"
  },
  {
    year: "2025 – 2026",
    role: "BSc (Hons) in Software Engineering",
    company: "Cardiff Metropolitan University, UK",
    description: "Graduated with Second Class Upper Division (2:1). Specialized in software architecture, enterprise systems, database design, and web technology.",
    status: "Degree Awarded"
  },
  {
    year: "2023 – 2025",
    role: "Higher Diploma in Computing & Software Engineering",
    company: "Cardiff Met. (via ICBT Campus, Sri Lanka)",
    description: "Completed with Merit / Distinction, establishing rigorous foundations in computing fundamentals, OOP, database design, and software engineering.",
    status: "Merit / Distinction"
  }
];

export interface CompanyProject {
  id: string;
  name: string;
  area: string;
  description: string;
  link?: string;
  tech: string[];
}

export interface WorkExperience {
  company: string;
  role: string;
  period: string;
  status: "CURRENT" | "PAST";
  location: string;
  summary: string;
  responsibilities: string[];
  technologies: string[];
  projects: CompanyProject[];
  achievements: string[];
}

export const workExperience: WorkExperience[] = [
  {
    company: "Amazoft IT",
    role: "Associate Software Engineer",
    period: "December 2025 – Present",
    status: "CURRENT",
    location: "Meetiyagoda, Ambalangoda, Sri Lanka",
    summary:
      "Architect and maintain production web features using React.js, TypeScript, and REST APIs, design and optimize relational SQL schemas in PostgreSQL, conduct root-cause diagnostics, and collaborate in Agile sprint cycles.",
    responsibilities: [
      "Architect and maintain production web features using React.js, TypeScript, and REST APIs, ensuring modularity and optimal browser performance.",
      "Design and optimize relational SQL schemas and indexing strategies in PostgreSQL, ensuring data integrity, minimal latency, and high query throughput.",
      "Conduct rigorous debugging, log analysis, and root-cause diagnostics to resolve defect tickets and improve overall application stability.",
      "Collaborate in Agile sprint planning, daily scrums, and thorough peer code reviews via Git/GitHub to uphold clean code standards and test coverage."
    ],
    technologies: [
      "React.js",
      "TypeScript",
      "RESTful APIs",
      "PostgreSQL",
      "SQL Indexing",
      "Git",
      "GitHub",
      "Agile/Scrum",
      "Root-Cause Diagnostics"
    ],
    projects: [
      {
        id: "nipunex",
        name: "nipuneX – AI-Driven Recruitment Platform",
        area: "AI / Recruitment Platform",
        description:
          "Developed high-speed user interfaces in Next.js/React.js integrated with REST endpoints for talent filtering and automated candidate assessment. Integrated AWS cloud services and PostgreSQL database queries, achieving sub-second response times for complex applicant searches.",
        link: "https://www.nipunex.com/",
        tech: ["Next.js", "React.js", "Node.js", "PostgreSQL", "AWS"]
      },
      {
        id: "school-management",
        name: "School Management System (EdTech Platform)",
        area: "EdTech Platform",
        description:
          "Engineered role-based portals (Admin, Teacher, Student, Parent) with modules for attendance tracking, grading, timetables, and notification alerts. Modeled normalized MySQL relational databases ensuring transactional reliability, granular permissions, and dynamic reporting analytics.",
        tech: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3"]
      }
    ],
    achievements: [
      "Optimized PostgreSQL queries and AWS integration on nipuneX to achieve sub-second response times for complex applicant search filters.",
      "Enforced strict modular component architecture and TypeScript type safety across production web features.",
      "Conducted thorough peer code reviews on GitHub and proactive root-cause diagnostics, resolving defect tickets and improving application stability."
    ]
  },
  {
    company: "Amazoft IT",
    role: "Trainee Software Developer",
    period: "June 2022 – December 2025",
    status: "PAST",
    location: "Meetiyagoda, Ambalangoda, Sri Lanka",
    summary:
      "Developed responsive user interfaces with HTML5, CSS3, and React.js while supporting Java Spring Boot RESTful API services, token authentication, Docker builds, and Postman API contract testing.",
    responsibilities: [
      "Developed responsive user interfaces with HTML5, CSS3, and React.js while supporting RESTful API services built with Java and Spring Boot.",
      "Implemented secure token-based authentication (JWT, OAuth 2.0) and Role-Based Access Control (RBAC) following secure coding guidelines.",
      "Assisted in containerizing multi-service components using Docker, preparing reproducible builds, and deploying services to AWS test environments.",
      "Authored comprehensive Postman test collections and unit test suites to validate API endpoint contracts and regression stability."
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "Spring Framework",
      "React.js",
      "HTML5",
      "CSS3",
      "JWT",
      "OAuth 2.0",
      "RBAC",
      "Docker",
      "AWS",
      "Postman"
    ],
    projects: [
      {
        id: "attendance-pos",
        name: "Employee Attendance & HR Management System / POS & Inventory",
        area: "HR / Attendance & POS Inventory",
        description:
          "Built attendance and shift tracking microservices with strict RBAC; engineered transactional POS sales, GRN (Goods Received Note), and real-time inventory logic.",
        tech: ["Java", "Spring Boot", "PostgreSQL", "Docker", "REST APIs"]
      }
    ],
    achievements: [
      "Built resilient attendance microservices with strict RBAC and token-based authentication (JWT, OAuth 2.0).",
      "Prepared reproducible multi-service Docker builds and deployed containerized services to AWS test environments.",
      "Authored comprehensive Postman test suites validating API endpoint contracts and ensuring regression stability."
    ]
  }
];
