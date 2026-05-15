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
    "I am a dedicated and results-driven Full-Stack Software Developer with a strong passion for building scalable, secure, and user-focused digital solutions. I specialize in developing modern web applications, business management systems, and responsive user interfaces using advanced frontend and backend technologies.",
    "My expertise includes full-stack development with Next.js, React.js, TypeScript, JavaScript, Node.js, Express.js, PHP, and Laravel, along with database technologies such as MySQL, MongoDB, and SQLite. I have experience designing and developing complete software solutions including Employee Management Systems, POS and Inventory Management Platforms, School Management Systems, Support Ticketing Systems, Booking Platforms, and custom business websites.",
    "I am passionate about creating high-performance applications with clean architecture, optimized APIs, responsive UI/UX, and secure authentication systems. I enjoy working with modern development tools and frameworks including Tailwind CSS, REST APIs, GitHub, Figma, and cloud deployment platforms such as Vercel.",
    "My development approach focuses on writing maintainable, scalable, and efficient code while delivering seamless user experiences across desktop and mobile platforms. I continuously explore emerging technologies and best practices in software engineering to improve performance, usability, and system reliability.",
    "Beyond technical skills, I am a highly motivated and analytical problem solver who thrives in collaborative environments. I value teamwork, adaptability, leadership, and continuous learning, and I am always eager to contribute to innovative projects that create real-world impact through technology."
  ],
  location: "Sri Lanka",
  email: "ishanchinthaka2002@gmail.com",
  github: "https://github.com/ish-22",
  linkedin: "https://www.linkedin.com/in/ishan-chinthaka-1a6b5a2b1",
  resume: "/Ishan%20Chinthaka_cv%20(1).pdf"
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
    items: ["React", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS"]
  },
  {
    title: "Backend & Database",
    icon: Code2,
    items: ["PHP", "MySQL", "MongoDB", "Business systems", "Inventory workflows"]
  },
  {
    title: "Mobile & Tools",
    icon: Sparkles,
    items: ["Java", "Kotlin", "Figma", "GitHub", "Problem solving"]
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
