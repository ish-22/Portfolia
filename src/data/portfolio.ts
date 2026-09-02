export const profile = {
  name: "Ishan Chinthaka",
  role: "Full-Stack Software Engineer",
  label: "ISHAN — DIGITAL ENGINEERING LAB",
  headline: "Designing interfaces. Engineering systems. Building intelligent products.",
  subhead: "Full-Stack Software Engineer focused on creating scalable web applications, thoughtful user experiences and AI-powered systems.",
  about: [
    "I am a software engineer and product designer dedicated to building high-performance digital products, resilient backend architectures, and intelligent web systems.",
    "My engineering core spans full-stack web applications with Next.js, React, TypeScript, Node.js, PHP, Laravel, Java Spring Boot, and Python, integrated with AWS cloud infrastructure and Amazon Bedrock AI services.",
    "With a Cardiff Metropolitan University BSc (Hons) in Software Engineering (Second Class Upper Division), I combine rigorous architectural principles with intuitive UI/UX interaction design to turn complex engineering problems into clean, scalable software."
  ],
  location: "Sri Lanka",
  email: "ishanchinthaka2002@gmail.com",
  github: "https://github.com/ish-22",
  linkedin: "https://www.linkedin.com/in/ishan-chinthaka-1a6b5a2b1",
  tiktok: "https://www.tiktok.com/foryou?lang=en-GB",
  facebook: "https://www.facebook.com/share/1HYwAWdnB7/",
  resume: "/Ishan%20Chinthaka.pdf",
  whatsapp: "+94765274750",
  whatsappFormatted: "+94 76 527 4750",
  availability: "AVAILABLE FOR OPPORTUNITIES"
};

export const heroTechSignals = [
  "Next.js",
  "TypeScript",
  "Node.js",
  "Laravel",
  "AWS",
  "AI"
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
    research: "Analyzed commuter boarding bottlenecks and discovered that 68% of delay time occurs during manual ticket issuance at stops.",
    userFlow: "Search Route → View Live GPS Map → Select Bus & Seats → Confirm Payment → Receive Dynamic QR Ticket → Scan at Vehicle Gate.",
    architectureNotes: "Client Next.js app communicates via REST API to a Laravel backend, which leverages Redis in-memory pub/sub for bus location updates and transactional MySQL storage.",
    challenges: "Handling rapid websocket location updates from dozens of active vehicles without degrading client map rendering frames.",
    solution: "Implemented debounced batch update intervals in Redis with client-side interpolation on Google Maps canvas layers.",
    result: "Reduced average passenger waiting time by 35% and increased digital pre-booking compliance across operational test routes."
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
    research: "Interviews with clinical staff revealed an average of 4 minutes wasted per consultation searching physical drug availability catalogs.",
    userFlow: "Login (RBAC) → Patient Lookup → View EHR & History → Enter Prescription → AI Safety Audit → Automated Inventory Deduct → Dispense.",
    architectureNotes: "Built with Node.js microservices, MySQL relational schemas, Next.js dashboard UI, and Amazon Bedrock Nova model integration for clinical text processing.",
    challenges: "Maintaining strict data privacy while running LLM analysis on clinical notes.",
    solution: "Implemented automated client-side PII redactors prior to invoking Bedrock API endpoints.",
    result: "Accelerated prescription processing time by 50% and eliminated out-of-stock prescription errors during trial deployment."
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
    research: "User testing indicated 82% higher memory retention when study materials were presented as active recall quizzes.",
    userFlow: "Upload PDF → Semantic Vector Chunking → Interactive Workspace → Generate Flashcards / Ask AI → Track Assessment Score.",
    architectureNotes: "Next.js frontend connects to an Express API executing chunked document ingestion, stored in PostgreSQL with indexed retrieval pipelines.",
    challenges: "Preventing AI model hallucinations when answering technical academic queries.",
    solution: "Enforced strict system prompt constraints requiring context citations and implemented Zod schema validation on structured AI outputs.",
    result: "Achieved 94% accuracy on user document Q&A queries and processed thousands of study notes seamlessly."
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
    result: "Sped up daily cashier billing speeds by 40%."
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

export const technologyMap = [
  {
    category: "FRONTEND",
    items: [
      { name: "Next.js", note: "App Router SSR, Server Components & Dynamic Routing" },
      { name: "React 19", note: "Modern Hooks, Concurrent Rendering & Component Patterns" },
      { name: "TypeScript", note: "Strict Static Typing, Interfaces & Type Safety" },
      { name: "Tailwind CSS", note: "Design Tokens, Responsive Layouts & Utility Styling" },
      { name: "Framer Motion", note: "Smooth Motion Dynamics & Micro-Interactions" }
    ]
  },
  {
    category: "BACKEND",
    items: [
      { name: "Node.js & Express", note: "Asynchronous RESTful APIs & Microservices" },
      { name: "Laravel (PHP)", note: "MVC Architecture, Eloquent ORM & Authentication" },
      { name: "Java & Spring Boot", note: "Enterprise Java Services, JPA & Security" },
      { name: "MySQL / PostgreSQL", note: "Relational Database Design, Indexing & Queries" },
      { name: "Redis", note: "In-Memory Caching, Queue Management & Pub/Sub" }
    ]
  },
  {
    category: "CLOUD & DEVOPS",
    items: [
      { name: "AWS Services", note: "AWS S3, EC2, IAM, Bedrock & Cloud Architecture" },
      { name: "Vercel / Amplify", note: "Automated Edge Deployment & CI/CD Pipelines" },
      { name: "Docker", note: "Containerized Workflows & Consistent Environments" },
      { name: "Git & GitHub", note: "Branching Strategies, Code Reviews & Action Workflows" }
    ]
  },
  {
    category: "AI & INTEGRATION",
    items: [
      { name: "Amazon Bedrock", note: "Generative AI LLM Pipelines & Bedrock SDK" },
      { name: "RAG Systems", note: "Document Context Chunking & Information Retrieval" },
      { name: "Python / AI Models", note: "Data Pipelines, Jupyter Notebooks & Scikit-Learn" }
    ]
  }
];

export const experienceTimeline = [
  {
    year: "2026",
    role: "Full-Stack Software Engineer & Product Designer",
    company: "Personal Engineering Lab & Enterprise Projects",
    description: "Building production-grade AI-powered study systems, healthcare portals, cloud pipelines, and responsive digital products with Next.js, Laravel, and AWS Bedrock.",
    status: "Active Focus"
  },
  {
    year: "2025",
    role: "Full-Stack Developer",
    company: "Smart Transit & Business Systems",
    description: "Engineered real-time fleet GPS tracking applications (Track My Bus), pharmacy inventory control platforms, and cloud database integrations.",
    status: "Project Delivery"
  },
  {
    year: "2024",
    role: "BSc (Hons) Software Engineering Graduate",
    company: "Cardiff Metropolitan University",
    description: "Graduated with Second Class Upper Division honors. Specialized in software architecture, enterprise Java systems, database design, and web technology.",
    status: "Degree Awarded"
  }
];
