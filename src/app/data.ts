import type { LucideIcon } from "lucide-react";
import { Github, Linkedin, Twitter } from "lucide-react";

type SocialLink = {
  name: string;
  icon: LucideIcon;
  url: string;
};

type Member = {
  name: string;
  role: string;
  skills: string[];
  imageUrlId: string;
  socials: SocialLink[];
};

type Project = {
  title: string;
  description: string;
};

export const members: Member[] = [
  {
    name: "Alex 'Glitch' Volkov",
    role: "Team Lead & Threat Analyst",
    skills: ["Malware Analysis", "Reverse Engineering", "Threat Intelligence"],
    imageUrlId: "member1",
    socials: [
      { name: "GitHub", icon: Github, url: "#" },
      { name: "LinkedIn", icon: Linkedin, url: "#" },
      { name: "Twitter", icon: Twitter, url: "#" },
    ],
  },
  {
    name: "Maria 'Nyx' Rodriguez",
    role: "Penetration Tester",
    skills: ["Web Apps", "Network Security", "Social Engineering"],
    imageUrlId: "member2",
    socials: [
      { name: "GitHub", icon: Github, url: "#" },
      { name: "LinkedIn", icon: Linkedin, url: "#" },
    ],
  },
  {
    name: "Kenji 'Ronin' Tanaka",
    role: "DevSecOps Engineer",
    skills: ["CI/CD Security", "Cloud Security", "IaC"],
    imageUrlId: "member3",
    socials: [
      { name: "GitHub", icon: Github, url: "#" },
      { name: "LinkedIn", icon: Linkedin, url: "#" },
      { name: "Twitter", icon: Twitter, url: "#" },
    ],
  },
  {
    name: "Fatima 'Oracle' Al-Jamil",
    role: "Digital Forensics Expert",
    skills: ["Incident Response", "Memory Forensics", "Data Recovery"],
    imageUrlId: "member4",
    socials: [{ name: "LinkedIn", icon: Linkedin, url: "#" }],
  },
  {
    name: "Sam 'Root' Jones",
    role: "Security Researcher",
    skills: ["Cryptography", "Blockchain", "Vulnerability Research"],
    imageUrlId: "member5",
    socials: [
      { name: "GitHub", icon: Github, url: "#" },
      { name: "Twitter", icon: Twitter, url: "#" },
    ],
  },
];

export const projects: Project[] = [
  {
    title: "Project Chimera",
    description:
      "An advanced honeypot network designed to attract and analyze new strains of IoT malware.",
  },
  {
    title: "Aegis Shield",
    description:
      "A custom, lightweight intrusion detection system (IDS) for containerized environments.",
  },
  {
    title: "PhishGuard",
    description:
      "An open-source browser extension that uses machine learning to detect and block phishing sites in real-time.",
  },
];
