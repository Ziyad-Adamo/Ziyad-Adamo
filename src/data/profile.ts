export interface NavItem {
  label: string;
  href: string;
}

export interface QuickFact {
  label: string;
  value: string;
}

export interface Highlight {
  title: string;
  description: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location?: string;
  responsibilities: string[];
  keyOutcomes?: string[];
  workflow?: string;
}

export interface EducationItem {
  id: string;
  level: "higher" | "secondary" | "primary";
  institution: string;
  title: string;
  period: string;
  location?: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface CourseCertificationItem {
  id: string;
  type: string;
  name: string;
  organization: string;
  date: string;
  focus?: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  description: string;
  workflow?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  typeLabel: string;
  role?: string;
  contributionSummary?: string;
  subtitle: string;
  heroImage: string;
  overview: string;
  problem: string;
  solution: string;
  systemArchitectureImage: string;
  controlLogicImage: string;
  circuitDesignImage: string;
  physicalPrototypeImage?: string;
  myContribution: string;
  toolsAndTech: string[];
  keyLearnings: string[];
  controlLogicImplementation: string;
  technicalConstraintsNotes?: string;
  badges: string[];
  slug: string;
  credibilityPhrase?: string;
}

export interface ContactLink {
  label: string;
  href: string;
}

export interface ProfileData {
  meta: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
    ogImage: string;
  };
  nav: NavItem[];
  personal: {
    fullName: string;
    headline: string;
    subheadline: string;
    location: string;
    email: string;
    phoneNumbers: string[];
    linkedin: string;
    status: string;
    quickFacts: QuickFact[];
  };
  ui: {
    heroPrimaryCta: string;
    heroSecondaryCta: string;
    sections: {
      about: string;
      experience: string;
      education: string;
      skills: string;
      certifications: string;
      achievements: string;
      projects: string;
      languages: string;
      contact: string;
      process: string;
    };
    educationLevels: {
      higher: string;
      secondary: string;
      primary: string;
    };
    responsibilitiesTitle: string;
    keyOutcomesTitle: string;
    qualitiesTitle: string;
    copyEmail: string;
    copied: string;
    clearFilter: string;
    filterHint: string;
    viewDetails: string;
    showLess: string;
    quickLinks: string;
    builtWith: string;
    footerDescription: string;
    footerLinks: {
      about: string;
      experience: string;
      skills: string;
      downloadCv: string;
    };
  };
  about: {
    summary: string;
    highlights: Highlight[];
  };
  process: {
    title: string;
    description: string;
    steps: { title: string; subtitle: string; description: string }[];
  }
  experience: ExperienceItem[];
  education: EducationItem[];
  skills: SkillCategory[];
  coursesAndCertifications: CourseCertificationItem[];
  achievements: AchievementItem[];
  projects: ProjectItem[];
  languages: string[];
  qualities: string[];
  contact: {
    heading: string;
    message: string;
    links: ContactLink[];
  };
}

export const profileData: ProfileData = {
  meta: {
    title: "Ziyad Ussene Adamo | Electronic & Telecommunications Engineer",
    description:
      "Portfolio of Ziyad Ussene Adamo, an Electronic & Telecommunications Engineer focused on IoT, automation, telecommunications systems, and energy optimization.",
    ogTitle: "Ziyad Ussene Adamo | Electronic & Telecommunications Engineer",
    ogDescription:
      "IoT, automation, telecommunications systems, and energy optimization.",
    ogImage: "/og-za.svg",
  },
  nav: [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Skills", href: "#skills" },
    { label: "Certifications", href: "#certifications" },
    { label: "Achievements", href: "#achievements" },
    { label: "Projects", href: "#projects" },
    { label: "Languages", href: "#languages" },
    { label: "Contact", href: "#contact" },
  ] as NavItem[],
  personal: {
    fullName: "Ziyad Ussene Adamo",
    headline: "Electronic & Telecommunications Engineer",
    subheadline:
      "Bachelor's graduate with hands-on experience in IoT, automation, telecommunications systems, and energy optimization projects.",
    location: "Maputo, Mozambique",
    email: "ziyadadamo58@gmail.com",
    phoneNumbers: ["+258 87 086 4573", "+258 83 332 4075", "+258 84 295 3132"],
    linkedin: "https://linkedin.com/in/ziyad-adamo",
    status: "Open to opportunities",
    quickFacts: [
      { label: "Location", value: "Maputo" },
      { label: "Languages", value: "Portuguese, English" },
      { label: "Key Domains", value: "IoT, Networks, Automation, AI Workflows" },
    ] as QuickFact[],
  },
  ui: {
    heroPrimaryCta: "View Experience",
    heroSecondaryCta: "Download CV",
    sections: {
      about: "About Me",
      experience: "Experience",
      education: "Education",
      skills: "Skills",
      certifications: "Courses & Certifications",
      achievements: "Achievements",
      projects: "Featured Projects",
      languages: "Languages & Qualities",
      contact: "Let's connect",
      process: "How I Work",
    },
    educationLevels: {
      higher: "Higher Education",
      secondary: "Secondary",
      primary: "Primary",
    },
    responsibilitiesTitle: "Responsibilities",
    keyOutcomesTitle: "Key Outcomes",
    qualitiesTitle: "Professional Qualities",
    copyEmail: "Copy email",
    copied: "Copied",
    clearFilter: "Clear Filter",
    filterHint: "Select a skill to filter related experience & achievements.",
    viewDetails: "View details",
    showLess: "Show less",
    quickLinks: "Quick Links",
    builtWith: "Designed with {heart} & Built with Next.js",
    footerDescription: "focused on practical engineering outcomes in IoT, telecommunications, automation, and AI workflows.",
    footerLinks: {
      about: "About Me",
      experience: "Experience",
      skills: "Skills",
      downloadCv: "Download CV",
    },
  },
  about: {
    summary:
      "As an Electronic & Telecommunications Engineer, I combine technical foundations in IoT, automation, and networking with AI-assisted workflows to deliver faster, higher-quality digital solutions and innovation.",
    highlights: [
      {
        title: "IoT & Automation",
        description:
          "Built and structured an IoT-based residential energy optimization project focused on intelligent control of outlets and lighting.",
      },
      {
        title: "Telecom Systems",
        description:
          "Supported transmission operations, monitoring, calibration, and technical continuity in live audiovisual broadcasting.",
      },
      {
        title: "Professional Discipline",
        description:
          "Demonstrated teamwork, effective communication, leadership, flexibility, and practical problem-solving in technical environments.",
      },
    ] as Highlight[],
  },
  process: {
    title: "AI-Assisted Engineering Workflow",
    description: "I leverage modern AI tools to accelerate development and problem-solving, always ensuring manual validation and responsibility for the final output.",
    steps: [
      {
        title: "Discover",
        subtitle: "Requirements Analysis",
        description: "Understanding technical constraints and defining the core problem.",
      },
      {
        title: "Break Down",
        subtitle: "Task Structuring",
        description: "Using AI to brainstorm architecture and slice requirements into actionable engineering tasks.",
      },
      {
        title: "Prototype",
        subtitle: "AI-Assisted Code & Build",
        description: "Accelerating code generation, documentation, and prototyping with Claude, VS Code (Copilot), and Vercel.",
      },
      {
        title: "Validate",
        subtitle: "Manual Review & Iteration",
        description: "Rigorous manual testing, real-world operational verification, and continuous improvement.",
      },
    ]
  },
  experience: [
    {
      id: "tvm",
      role: "Telecommunications and Audiovisual Intern",
      company: "Televisao de Mocambique (TVM)",
      period: "Jul 2025 - Sep 2025",
      location: "Maputo, Mozambique",
      responsibilities: [
        "Provided technical support in the operation and maintenance of audiovisual transmission equipment.",
        "Collaborated on systems integration tasks and optimization of technical workflows.",
        "Participated in resolving technical failures during live broadcasts.",
        "Assisted with configuration and testing of telecommunications equipment.",
        "Performed real-time monitoring and calibration support to preserve transmission quality.",
      ],
      keyOutcomes: [
        "Contributed to reducing live-broadcast downtime through technical failure response.",
        "Supported implementation of technical improvements that strengthened operational efficiency.",
      ],
    },
    {
      id: "uniservice",
      role: "Automotive Electronic Diagnostic Technician Assistant",
      company: "UNISERVICE, E.I.",
      period: "Feb 2025 - Jun 2025",
      location: "Xai-Xai, Gaza, Mozambique",
      responsibilities: [
        "Diagnosed faults in automotive systems using scanners and specialized tools.",
        "Supported mechanical and electronic interventions during maintenance routines.",
        "Recorded and analyzed vehicle performance data for maintenance optimization.",
        "Performed targeted tests on automotive electronic systems to identify failure causes.",
        "Interpreted error codes and collaborated on repair plans with maintenance teams.",
      ],
    },
  ] as ExperienceItem[],
  education: [
    {
      id: "isutc",
      level: "higher",
      institution: "Instituto Superior de Transportes e Comunicacoes (ISUTC)",
      title: "Bachelor's degree in Electronic and Telecommunications Engineering",
      period: "2021 - 2025",
      location: "Maputo, Mozambique",
    },
    {
      id: "secondary",
      level: "secondary",
      institution: "Escola Secundaria de Xai-Xai",
      title: "Secondary Education (General)",
      period: "2016 - 2021",
      location: "Xai-Xai, Gaza, Mozambique",
    },
    {
      id: "primary",
      level: "primary",
      institution: "Escola 1 de Janeiro",
      title: "Primary Education",
      period: "2008 - 2015",
      location: "Xai-Xai, Gaza, Mozambique",
    },
  ] as EducationItem[],
  skills: [
    {
      category: "IoT & Automation",
      items: [
        "IoT energy optimization concepts",
        "Sensor and actuator integration",
        "Microcontrollers for automation",
        "PLC ladder programming",
        "SCADA systems",
      ],
    },
    {
      category: "Networking & Telecommunications",
      items: [
        "Transmission equipment operation",
        "Transmission signal monitoring",
        "Technical support in telecommunications",
        "Basic networks and telecommunications concepts",
      ],
    },
    {
      category: "Electronics & Diagnostics",
      items: [
        "Automotive electronic diagnostics",
        "Fault identification with scanners",
        "Error code interpretation",
        "Audiovisual equipment maintenance",
      ],
    },
    {
      category: "Tools & Platforms",
      items: [
        "Microsoft Office",
        "Google / Internet",
        "E-mail & social media tools",
        "Technical reporting",
      ],
    },
    {
      category: "Professional Strengths",
      items: [
        "Effective communication",
        "Teamwork",
        "Leadership skills",
        "Problem-solving",
        "Flexibility",
        "Task execution with clear instructions",
      ],
    },
  ] as SkillCategory[],
  coursesAndCertifications: [
    {
      id: "ready-to-work",
      type: "Course",
      name: "Ready to Work",
      organization: "Absa Bank Mozambique",
      date: "Dec 2025",
      focus: "Professional, financial, interpersonal, and business skills.",
    },
    {
      id: "ielts",
      type: "Certification",
      name: "IELTS Academic",
      organization: "IELTS",
      date: "Dec 2025",
      focus:
        "Academic English proficiency, structured writing, critical reading, and formal oral communication.",
    },
    {
      id: "basic-robotics",
      type: "Course & Certification",
      name: "Basic Robotics",
      organization: "Basic Robotics",
      date: "Sep 2023",
      focus:
        "Fundamental robotics concepts, C++ basics, and practical integration of microcontrollers, sensors, and actuators.",
    },
  ] as CourseCertificationItem[],
  achievements: [
    {
      id: "iot-energy-project",
      title: "Residential Energy Optimization with IoT",
      description:
        "Developed an IoT-based system for intelligent control of residential energy consumption in outlets and lighting.",
      workflow: "Workflow: C++ + Microcontrollers + IoT Prototyping",
    },
    {
      id: "scalable-model",
      title: "Scalable Efficiency Model",
      description:
        "Structured a replicable model for residential energy efficiency in Mozambique.",
    },
    {
      id: "tvm-technical-support",
      title: "Broadcast Transmission Technical Support",
      description:
        "Provided technical support for transmission systems and professional audiovisual equipment.",
    },
    {
      id: "infra-monitoring",
      title: "Telecom Infrastructure Monitoring",
      description:
        "Participated in maintenance and monitoring of telecommunications infrastructure and studios.",
    },
    {
      id: "broadcasting-observation",
      title: "Broadcast Operations Exposure",
      description:
        "Observed and learned operational broadcasting routines and electronics applied to social communication.",
    },
    {
      id: "broadcast-failures",
      title: "Live Broadcast Technical Response",
      description:
        "Actively supported technical failure resolution during live broadcasts to minimize downtime.",
    },
    {
      id: "telecom-improvements",
      title: "Telecom Operational Improvements",
      description:
        "Collaborated in implementing solutions that improved operational efficiency in telecommunications systems.",
    },
    {
      id: "routine-coordination",
      title: "Technical Routine Coordination",
      description:
        "Supported coordination of technical routines to ensure continuity of transmissions.",
    },
    {
      id: "equipment-config",
      title: "Telecom Equipment Configuration and Testing",
      description:
        "Assisted in configuring and testing telecommunications equipment to maintain system operability.",
    },
    {
      id: "automotive-diagnostics",
      title: "Automotive Electronics Diagnostics",
      description:
        "Diagnosed and helped resolve faults in modern vehicle electronic systems using scanner-based analysis.",
    },
    {
      id: "scanner-error-codes",
      title: "Scanner-Based Fault Analysis",
      description:
        "Used diagnostic scanners and interpreted error codes in modern automotive systems.",
    },
    {
      id: "academic-builds",
      title: "Engineering Academic Projects",
      description:
        "Built academic projects in electronics and telecommunications with practical technical application.",
    },
  ] as AchievementItem[],
  projects: [
    {
      id: "residential-water-tank",
      slug: "residential-water-tank-monitoring-pump-control-system",
      title: "Residential Water Tank Monitoring and Pump Control System",
      category: "Featured Project",
      typeLabel: "Academic Group Project",
      role: "Project Lead · Embedded Programming · Final Integration & Testing",
      contributionSummary: "Developed as a university group project, with my primary contribution centered on project leadership, embedded programming, final system integration, and functional testing.",
      subtitle: "Embedded monitoring and control prototype for residential water tanks using ATmega328P, level sensors, and simulation-driven system validation.",
      credibilityPhrase: "Validated through both simulation and physical prototyping.",
      heroImage: "/projects/water-tank/smt-proteus-circuit.png",
      overview: "This project presents an embedded system designed to monitor residential water tank levels and support pump control through sensor-based logic. Developed as a university group project, it combined circuit simulation, control programming, physical prototyping, and functional validation for a practical low-cost residential automation solution.",
      problem: "In many residential settings, water tank level management is still performed manually, which may lead to delayed pump activation, tank overflow, or low-water situations. This project explored a low-cost embedded solution capable of improving awareness and control of tank levels using simple digital sensing and visual feedback.",
      solution: "The proposed solution uses level sensors positioned at key tank thresholds, an ATmega328P microcontroller for logic processing, LED-based level indication, and a pump-control stage. The control logic was first modeled and validated in Proteus, then implemented in a functional physical prototype to verify real behavior under practical test conditions.",
      systemArchitectureImage: "/projects/water-tank/smt-block-diagram.png",
      controlLogicImage: "/projects/water-tank/smt-flowchart.png",
      circuitDesignImage: "/projects/water-tank/smt-proteus-circuit.png",
      physicalPrototypeImage: "/projects/water-tank/smt-physical-prototype.png",
      myContribution: "I led the project development, designed and implemented the control code, validated the circuit design with teammates, completed the final assembly, refined the programming logic, and carried out the final functional testing. Although the project was developed as a group assignment, I took primary responsibility for final integration and completion.",
      toolsAndTech: [
        "ATmega328P",
        "Proteus",
        "Embedded C/C++",
        "Arduino-style programming",
        "Level sensors",
        "LEDs",
        "Relay-based pump control",
        "LCD-based monitoring concept"
      ],
      keyLearnings: [
        "Embedded control logic design",
        "Sensor-state interpretation",
        "Simulation-based validation",
        "Physical prototyping and practical testing",
        "System integration and testing",
        "Practical low-cost automation design"
      ],
      controlLogicImplementation: "The embedded logic was implemented in Arduino-style C/C++, with digital inputs mapped to tank level sensors and outputs assigned to LED indicators and pump actuation. The control loop continuously evaluates sensor states and updates system behavior according to predefined water-level conditions.",
      technicalConstraintsNotes: "The LCD display was part of the original system architecture and design intent. However, full display integration was not completed in the final functional prototype due to practical implementation constraints related to using the ATmega328P directly instead of a complete Arduino development board. The project therefore prioritized validation of the core sensing logic, LED-based indication, and pump-control behavior.",
      badges: [
        "Embedded Systems",
        "Automation",
        "Proteus",
        "ATmega328P",
        "Simulation",
        "Pump Control",
        "Real Prototype",
        "Physical Validation",
        "Bench Testing"
      ]
    }
  ] as ProjectItem[],
  languages: ["Portuguese", "English"],
  qualities: [
    "Effective communication",
    "Teamwork",
    "Leadership skills",
    "Problem-solving skills",
    "Flexibility",
    "Ability to complete properly instructed and explained tasks",
  ],
  contact: {
    heading: "Let's connect",
    message:
      "If you are building work in IoT, telecommunications, automation, or AI workflows, I would be glad to connect.",
    links: [
      { label: "Email", href: "mailto:ziyadadamo58@gmail.com" },
      { label: "LinkedIn", href: "https://linkedin.com/in/ziyad-adamo" },
    ] as ContactLink[],
  },
};
