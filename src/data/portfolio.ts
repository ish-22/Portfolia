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
  role: "Software Developer",
  headline:
    "Full-Stack Software Developer building scalable, secure, and user-focused digital solutions.",
  bio: "I specialize in modern web applications, business management systems, responsive user interfaces, and complete software solutions across frontend, backend, and database technologies.",
  about: [
    "Dedicated Full-Stack Developer focused on building scalable, secure, and user-centric digital solutions using modern web technologies.",
    "With expertise in Next.js, React, Node.js, and PHP/Laravel, I have developed complex platforms such as POS, EMS, and School Management systems.",
    "I am a motivated problem solver who values clean architecture and continuous learning, striving to deliver high-performance applications with real-world impact."
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
    title: "Employee Management System",
    description:
      "A business management platform for organizing employee records, roles, attendance details, and internal administration workflows.",
    tags: ["React", "PHP", "MySQL"],
    link: "#",
    repo: "#"
  },
  {
    title: "POS System with GRN and Inventory Management",
    description:
      "A point-of-sale solution with goods received notes, stock tracking, sales handling, and inventory management features.",
    tags: ["PHP", "MySQL", "JavaScript"],
    link: "#",
    repo: "#"
  },
  {
    title: "School Management System",
    description:
      "A structured school administration system designed to manage student information, academic records, and operational workflows.",
    tags: ["React", "TypeScript", "MySQL"],
    link: "#",
    repo: "#"
  },
  {
    title: "Support Ticketing System",
    description:
      "A ticket management platform for creating, assigning, tracking, and resolving support requests with clear workflow states.",
    tags: ["PHP", "MySQL", "JavaScript"],
    link: "#",
    repo: "#"
  },
  {
    title: "FixNow Service Request Management System",
    description:
      "A service request management system for handling customer issues, technician assignments, request status updates, and service history.",
    tags: ["React", "TypeScript", "MongoDB"],
    link: "#",
    repo: "#"
  },
  {
    title: "Pahana Edu Bookshop System",
    description:
      "A bookshop management application focused on customer records, billing, item management, and efficient daily store operations.",
    tags: ["Java", "MySQL", "Business system"],
    link: "#",
    repo: "#"
  },
  {
    title: "FitZone Fitness Center Website",
    description:
      "A modern fitness center website with responsive layouts, service sections, membership-focused content, and a clean user experience.",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "#",
    repo: "#"
  },
  {
    title: "LuxeVista Resort Mobile App",
    description:
      "A resort mobile app concept for browsing accommodation, services, and guest-focused features through a clean mobile interface.",
    tags: ["Kotlin", "Java", "Mobile"],
    link: "#",
    repo: "#"
  },
  {
    title: "Country Cafe Website",
    description:
      "A responsive cafe website designed to present menu items, brand identity, location details, and customer-friendly content.",
    tags: ["HTML", "CSS", "Figma"],
    link: "#",
    repo: "#"
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
