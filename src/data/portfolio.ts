import {
  BriefcaseBusiness,
  Code2,
  GraduationCap,
  Layers3,
  Mail,
  Rocket,
  Sparkles
} from "lucide-react";

export const profile = {
  name: "Ishan Chinthaka",
  role: "Software Engineer",
  headline:
    "Software Engineer building business-critical systems, full-stack solutions, and automated workflows.",
  bio: "I build maintainable software solutions across web applications, business management systems, cloud environments, and databases.",
  about: [
    "I am a Software Engineer with professional experience developing and handling business-critical software systems, including an AI-powered recruitment platform, Salesforce automation, HR attendance logs, and POS solutions.",
    "My technical core spans full-stack development using TypeScript, React, Next.js, Node.js, PHP, Laravel, Java, Spring Boot, Python, MySQL, PostgreSQL, and MongoDB. I am also experienced with cloud environments like AWS, Azure, Docker, and CI/CD.",
    "As a Cardiff Metropolitan University BSc (Hons) Software Engineering graduate (Second Class Upper Division), I focus on building clean architectures, solving business problems, and collaborating across high-performance software projects."
  ],
  location: "Sri Lanka",
  email: "ishanchinthaka2002@gmail.com",
  github: "https://github.com/ish-22",
  linkedin: "https://www.linkedin.com/in/ishan-chinthaka-1a6b5a2b1",
  resume: "/Ishan%20Chinthaka.pdf"
};

export const stats = [
  { value: "9", label: "Projects featured" },
  { value: "13", label: "Technologies" },
  { value: "3", label: "App domains" }
];

export const skills = [
  {
    title: "Frontend",
    icon: Layers3,
    items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML", "CSS"]
  },
  {
    title: "Backend & Database",
    icon: Code2,
    items: ["PHP", "Laravel", "MySQL", "MongoDB", "NoSQL", "Node.js", "REST APIs"]
  },
  {
    title: "Mobile & Tools",
    icon: Sparkles,
    items: ["Java", "Kotlin", "Git", "GitHub", "Figma", "Vercel"]
  }
];

export const projects = [
  {
    title: "AI-Powered Study Assistant",
    description:
      "A production-grade educational platform featuring automated flashcards, a relational quiz master tracking system, and AI-driven document chunking for RAG pipelines.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Zod", "Tailwind CSS"],
    link: "#",
    image: "/projects/study_assistant.png",
    repo: {
      frontend: "https://github.com/ish-22/AI-Powered-Intelligent-Study-Assistant-System",
      backend: "https://github.com/ish-22/AI-Powered-Intelligent-Study-Assistant-System--api-v2"
    }
  },
  {
    title: "AI & ML Model Training",
    description:
      "An AI/ML repository featuring data training pipelines, Jupyter notebook analysis, and an operational test/train scoring model exported as serialized pickle files.",
    tags: ["Python", "Jupyter Notebook", "Scikit-Learn", "Machine Learning"],
    link: "#",
    image: "/projects/ai_ml_model.png",
    repo: "https://github.com/ish-22/AI-and-ML-Project"
  },
  {
    title: "SmartBus Transit Tracker",
    description:
      "A real-time transit solution featuring GPS live bus tracking with interactive maps, seat reservation, Stripe payment integration, and QR code ticket generation.",
    tags: ["Next.js", "Express.js", "Socket.io", "React", "MongoDB", "Stripe"],
    link: "#",
    image: "/projects/smart_bus.png",
    repo: {
      frontend: "https://github.com/ish-22/smartbus_frontend",
      backend: "https://github.com/ish-22/smartbus_backend"
    }
  },
  {
    title: "FixNow Service Platform",
    description:
      "A web-based service marketplace connecting local customers with vendors. Supports online booking, request statuses, rating feedback, and secure account panels.",
    tags: ["PHP", "MySQL", "JavaScript", "HTML", "CSS"],
    link: "#",
    image: "/projects/fix_now.png",
    repo: "https://github.com/ish-22/FIXNOW-FINAL_PROJECT"
  },
  {
    title: "Ocean View Resort Portal",
    description:
      "A premium, luxury-vintage themed resort management system featuring a cinematic guest inquiry system and a high-fidelity administrative suite.",
    tags: ["Spring Boot", "React", "Vite", "MySQL", "Tailwind CSS"],
    link: "#",
    image: "/projects/ocean_view.png",
    repo: "https://github.com/ish-22/Ocean-View_resort"
  },
  {
    title: "Pahana Bookshop System",
    description:
      "An inventory management, online book order, and daily billing application focused on robust client workflows and books item stock control.",
    tags: ["Java", "MySQL", "Swing", "JDBC", "OOP"],
    link: "#",
    image: "/projects/pahana_bookshop.png",
    repo: "https://github.com/ish-22/pahana_bookshop"
  },
  {
    title: "Pharmacy Inventory Control",
    description:
      "A secure inventory management system designed for pharmacies, dealing with supplier directories, admin workflows, and stock tracking logs.",
    tags: ["PHP", "MySQL", "JavaScript", "Business system"],
    link: "#",
    image: "/projects/pharmacy_inventory.png",
    repo: "https://github.com/ish-22/Pharmacy_inventory_Management"
  },
  {
    title: "Cycle Rental & Tracking App",
    description:
      "An Android mobile booking application utilizing SQLite local storage schema to log and track cycle rent items for customers.",
    tags: ["Android", "Kotlin", "SQLite", "Mobile"],
    link: "#",
    image: "/projects/cycle_app.png",
    repo: "https://github.com/ish-22/Cycle_Aapp"
  },
  {
    title: "FitZone Gym Portal",
    description:
      "A modern fitness website featuring gym program details, scheduling, user roles, and class bookings with responsive layouts.",
    tags: ["HTML", "CSS", "JavaScript", "Vercel"],
    link: "#",
    image: "/projects/fitzone.png",
    repo: "https://github.com/ish-22/Fitzone_Fitness_Center"
  }
];

export const timeline = [
  {
    title: "Software Developer",
    place: "Web, mobile, and business management systems",
    period: "Current focus",
    description:
      "Building practical software solutions across web applications, mobile apps, POS systems, inventory workflows, employee management, and support ticketing platforms.",
    icon: BriefcaseBusiness
  },
  {
    title: "Project-Based Development",
    place: "Portfolio projects",
    period: "Recent work",
    description:
      "Developed projects including FixNow, Pahana Edu, FitZone, LuxeVista, Country Cafe, school management, POS, and employee management systems.",
    icon: Rocket
  },
  {
    title: "Continuous Learning",
    place: "Software engineering and modern development tools",
    period: "Ongoing",
    description:
      "Focused on improving skills in React, TypeScript, PHP, MySQL, MongoDB, Java, Kotlin, responsive design, UI planning, and clean project delivery.",
    icon: GraduationCap
  }
];

export const contact = {
  title: "Let us build something practical and reliable.",
  description:
    "I am open to software development opportunities, project collaborations, and building modern web or mobile systems for real business needs.",
  icon: Mail
};
