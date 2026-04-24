import { Code2, Globe, Database, Brain, Terminal, Github, Linkedin, Mail, Download, ExternalLink, Facebook, Instagram, Twitter } from 'lucide-react';

export const PERSONAL_INFO = {
  name: "Zulfiqar Ali Bhutto",
  tagline: "Computer Systems Engineer | Software Developer | Data Science Enthusiast",
  intro: "Final-year Computer Systems Engineering student with experience in web dev, ML, and site engineering. Seeking internships in software, IT, or data science.",
  bio: "Zulfiqar Ali Bhutto is a final-year Computer Systems Engineering student at QUEST Nawabshah. He is passionate about software development, web technologies, artificial intelligence, and data science. With practical experience as a Site Engineer Intern at Huawei/Ufone and a Web Development Intern, he is actively seeking new opportunities to apply his skills in C, C++, Python, JavaScript, and Machine Learning.",
  education: [
    {
      degree: "B.E Computer Systems Engineering",
      institution: "QUEST Nawabshah",
      period: "2022 - 2026",
      description: "Focusing on software engineering, OOP, DSA, and Machine Learning. FYP: Graph Neural Network for medical analysis."
    },
    {
      degree: "Intermediate Pre-Engineering",
      institution: "College",
      period: "2020 - 2022",
      description: "Foundation in Mathematics, Physics, and Chemistry."
    },
    {
      degree: "Matriculation (Science)",
      institution: "High School",
      period: "2018 - 2020",
      description: "Science fundamentals."
    }
  ],
  careerObjective: "Seeking internships in software engineering, IT, or data science where I can utilize my programming skills and background in computer systems.",
  socials: [
    { icon: Github, href: "https://github.com/zulfiqaralibhutto", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/mirzulfiqarbhutto", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com/mirzulfiqarb", label: "Twitter" },
    { icon: Facebook, href: "https://facebook.com/mirzulfiqarbhutto", label: "Facebook" },
    { icon: Instagram, href: "https://instagram.com/mirzulfiqarbhutto", label: "Instagram" },
    { icon: Mail, href: "mailto:22cs30@quest.edu.pk", label: "Email" }
  ]
};

export const SKILLS = [
  { 
    category: "Languages & Web",
    items: [
      { name: "C/C++", level: 85, icon: Terminal },
      { name: "Python", level: 90, icon: Brain },
      { name: "JavaScript/HTML/CSS", level: 85, icon: Globe }
    ]
  },
  { 
    category: "Tools & Tech",
    items: [
      { name: "Git & VS Code", level: 90, icon: Code2 },
      { name: "MySQL & Node.js", level: 75, icon: Database },
      { name: "PyTorch & scikit-learn", level: 80, icon: Brain }
    ]
  },
  { 
    category: "Specializations",
    items: [
      { name: "Machine Learning", level: 85, icon: Brain },
      { name: "Web Development", level: 85, icon: Globe },
      { name: "OOP / DSA", level: 80, icon: Code2 }
    ]
  }
];

export const PROJECTS = [
  {
    title: "Graph Neural Network for Medical Analysis",
    description: "Final Year Project utilizing Graph Neural Networks to analyze complex medical data structures and improve diagnostic predictions.",
    tech: ["Python", "PyTorch", "GNN"],
    github: "https://github.com/zulfiqaralibhutto",
    demo: "#",
    image: "/src/images/gnn.png"
  },
  {
    title: "Hospital Management System",
    description: "A comprehensive management system built in C for managing patient records, doctor schedules, and hospital administration.",
    tech: ["C"],
    github: "https://github.com/zulfiqaralibhutto",
    demo: "#",
    image: "/src/images/hospital.png"
  },
  {
    title: "SQL Cricket Database",
    description: "A relational database designed to track player statistics, team standings, and match details.",
    tech: ["SQL", "MySQL"],
    github: "https://github.com/zulfiqaralibhutto",
    demo: "#",
    image: "/src/images/cricket.png"
  },
  {
    title: "Stock Prediction ML",
    description: "Machine learning model to predict stock market trends analyzing historical financial data.",
    tech: ["Python", "scikit-learn"],
    github: "https://github.com/zulfiqaralibhutto",
    demo: "#",
    image: "/src/images/stock.png"
  },
  {
    title: "Book Library Record Application",
    description: "An offline Android system designed to efficiently manage books, users, and borrowing records. It provides a simple, reliable, and professional solution for small libraries with features like record management, automatic tracking, and PDF/CSV report generation.",
    tech: ["Kotlin", "MVVM", "Room Database", "Jetpack Compose"],
    github: "https://github.com/zulfiqaralibhutto",
    demo: "#",
    image: "/src/images/library.png"
  }
];

export const SERVICES = [
  {
    title: "Site Engineering",
    description: "Experience in telecom site monitoring and network troubleshooting from Huawei/Ufone internship.",
    icon: Database
  },
  {
    title: "Web Development",
    description: "Building HTML, CSS, JS web components and focusing on UI improvements.",
    icon: Globe
  },
  {
    title: "Machine Learning",
    description: "Developing models using PyTorch and scikit-learn for predictive and graph-based analysis.",
    icon: Brain
  }
];
