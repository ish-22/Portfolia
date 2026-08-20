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
  tiktok: "https://www.tiktok.com/foryou?lang=en-GB",
  facebook: "https://www.facebook.com/share/1HYwAWdnB7/",
  resume: "/Ishan%20Chinthaka.pdf",
  whatsapp: "+94765274750",
  whatsappFormatted: "+94 76 527 4750"
};

export const stats = [
  { value: "9", label: "Projects featured" },
  { value: "13", label: "Technologies" },
  { value: "3", label: "App domains" }
];

export const skills = [
  {
    title: "Frontend Development",
    icon: Layers3,
    items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML5", "CSS3"]
  },
  {
    title: "Backend & Databases",
    icon: Code2,
    items: ["Node.js", "PHP & Laravel", "Java & Spring Boot", "Python", "MySQL", "PostgreSQL", "MongoDB", "SQLite"]
  },
  {
    title: "Cloud & DevOps",
    icon: Rocket,
    items: ["AWS", "Microsoft Azure", "Docker", "CI/CD Pipelines", "Git & GitHub", "cPanel Deployment"]
  },
  {
    title: "Mobile & Tools",
    icon: Sparkles,
    items: ["Android Studio", "Kotlin", "Postman", "Figma", "Canva", "Salesforce Automation"]
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
    title: "LuxeVista Resort App",
    description:
      "A mobile-based resort booking and inquiry Android application utilizing SQLite database schema to monitor and load vacancy reservations.",
    tags: ["Android", "Java", "SQLite", "Mobile"],
    link: "#",
    image: "/projects/luxe_vista.png",
    repo: "https://github.com/ish-22/LUXE_VISTA"
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
    title: "Fashion Design Platform",
    description:
      "A boutique web catalog presenting fashion items, mock scheduling, and customizable customer request collections.",
    tags: ["PHP", "HTML", "CSS", "Vercel"],
    link: "https://fashion-design-one-gold.vercel.app",
    image: "/projects/fashion_design.png",
    repo: "https://github.com/ish-22/Fashion-Design"
  },
  {
    title: "FitZone Gym Portal",
    description:
      "A modern fitness website featuring gym program details, scheduling, user roles, and class bookings with responsive layouts.",
    tags: ["HTML", "CSS", "JavaScript", "Vercel"],
    link: "#",
    image: "/projects/fitzone.png",
    repo: "https://github.com/ish-22/Fitzone_Fitness_Center"
  },
  {
    title: "Cafe Point-of-Sale System",
    description:
      "A lightweight order entry, cart calculation, and receipt logging system geared for local cafe store points of sale.",
    tags: ["PHP", "MySQL", "HTML", "CSS", "Business system"],
    link: "#",
    image: "/projects/cafe_pos.png",
    repo: "https://github.com/ish-22/Cafe_System"
  },
  {
    title: "Console Booking Utility",
    description:
      "A C++ desktop console database utility tracking record logs, file I/O operations, and user profiles structure.",
    tags: ["C++", "OOP", "Business system"],
    link: "#",
    image: "/projects/console_booking.png",
    repo: "https://github.com/ish-22/Basic_Management_System"
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
