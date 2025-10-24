import type { LucideIcon } from "lucide-react";
import { Github, Linkedin, Twitter } from "lucide-react";

type SocialLink = {
  name: string;
  icon: LucideIcon;
  url: string;
};

type Member = {
  name: string;
  slug: string;
  role: string;
  bio: string;
  skills: string[];
  imageUrlId: string;
  socials: SocialLink[];
  projects: string[];
};

type Project = {
  id: string;
  title: string;
  description: string;
};

export const projects: Project[] = [
  {
    id: "chimera",
    title: "Bankai",
    description:
      "An advanced honeypot network designed to attract and analyze new strains of IoT malware.",
  },
  {
    id: "aegis",
    title: "Aegis Shield",
    description:
      "A custom, lightweight intrusion detection system (IDS) for containerized environments.",
  },
  {
    id: "phishguard",
    title: "PhishGuard",
    description:
      "An open-source browser extension that uses machine learning to detect and block phishing sites in real-time.",
  },
];

export const members: Member[] = [
  {
    name: "Héctor 'Rotce' Villar",
    slug: "hector-villar",
    role: "Team Lead & Threat Analyst",
    bio: "With a knack for deconstructing complex digital threats, Alex leads the team with a sharp analytical mind and a passion for staying one step ahead of adversaries. His expertise in malware analysis is the cornerstone of our defensive strategies.",
    skills: ["Malware Analysis", "Reverse Engineering", "Threat Intelligence"],
    imageUrlId: "member1",
    socials: [
      { name: "GitHub", icon: Github, url: "#" },
      { name: "LinkedIn", icon: Linkedin, url: "#" },
      { name: "Twitter", icon: Twitter, url: "#" },
    ],
    projects: [],
  },
  {
    name: "Maria 'Nyx' Rodriguez",
    slug: "maria-rodriguez",
    role: "Penetration Tester",
    bio: "Maria is our master of infiltration. She thinks like a hacker to find and exploit vulnerabilities before they can be leveraged by malicious actors. Her creative approach to security testing ensures our defenses are always battle-hardened.",
    skills: ["Web Apps", "Network Security", "Social Engineering"],
    imageUrlId: "member2",
    socials: [
      { name: "GitHub", icon: Github, url: "#" },
      { name: "LinkedIn", icon: Linkedin, url: "#" },
    ],
    projects: ["phishguard"],
  },
  {
    name: "Kenji 'Ronin' Tanaka",
    slug: "kenji-tanaka",
    role: "DevSecOps Engineer",
    bio: "Kenji bridges the gap between development and security, embedding security practices into the entire software lifecycle. His work ensures that our solutions are not only innovative but also secure from the ground up.",
    skills: ["CI/CD Security", "Cloud Security", "IaC"],
    imageUrlId: "member3",
    socials: [
      { name: "GitHub", icon: Github, url: "#" },
      { name: "LinkedIn", icon: Linkedin, url: "#" },
      { name: "Twitter", icon: Twitter, url: "#" },
    ],
    projects: ["aegis"],
  },
  {
    name: "Fatima 'Oracle' Al-Jamil",
    slug: "fatima-al-jamil",
    role: "Digital Forensics Expert",
    bio: "When an incident occurs, Fatima is the first on the scene. She meticulously pieces together digital evidence to understand the 'how' and 'why' of a breach, providing crucial insights that inform our future defense mechanisms.",
    skills: ["Incident Response", "Memory Forensics", "Data Recovery"],
    imageUrlId: "member4",
    socials: [{ name: "LinkedIn", icon: Linkedin, url: "#" }],
    projects: ["chimera"],
  },
  {
    name: "Sam 'Root' Jones",
    slug: "sam-jones",
    role: "Security Researcher",
    bio: "Driven by an insatiable curiosity, Sam explores the uncharted territories of cybersecurity. His research into emerging threats and novel cryptographic methods keeps BlackL at the cutting edge of the industry.",
    skills: ["Cryptography", "Blockchain", "Vulnerability Research"],
    imageUrlId: "member5",
    socials: [
      { name: "GitHub", icon: Github, url: "#" },
      { name: "Twitter", icon: Twitter, url: "#" },
    ],
    projects: ["phishguard", "aegis"],
  },
];
