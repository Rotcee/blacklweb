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
    title: "Chimera",
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
    role: "Computer and AI Engineer",
    bio: "Hi! I'm Héctor, a Dual Degree student in Computer Engineering and Artificial Intelligence. I'm passionate about technology and continuous learning: building projects, exploring new tools, and deepening my knowledge in AI and software development. Outside of academics, I love working out and, above all, enjoying great food.",
    skills: ["Fast learner & self-taught", "Python", "Git/Github"],
    imageUrlId: "member1",
    socials: [
      { name: "GitHub", icon: Github, url: "https://github.com/Rotcee" },
//      { name: "LinkedIn", icon: Linkedin, url: "#" },
//      { name: "Twitter", icon: Twitter, url: "#" },
    ],
    projects: [],
  },
  {
    name: "Brenda",
    slug: "maria-rodriguez",
    role: "Penetration Tester",
    bio: "Brenda is our master of infiltration. She thinks like a hacker to find and exploit vulnerabilities before they can be leveraged by malicious actors. Her creative approach to security testing ensures our defenses are always battle-hardened.",
    skills: ["Web Apps", "Network Security", "Social Engineering"],
    imageUrlId: "member2",
    socials: [
      { name: "GitHub", icon: Github, url: "#" },
      { name: "LinkedIn", icon: Linkedin, url: "#" },
    ],
    projects: ["phishguard"],
  },
  {
    name: "Alberto",
    slug: "alberto-castro",
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
    name: "Diego '0racl3' Gamote",
    slug: "fatima-al-jamil",
    role: "Computer Engineering student",
    bio: "Hi I'm Diego, a Computer Engineering with an interest in programming, cybersecurity, and software development. Continuously learning and motivated to solve problems using technology.",
    skills: ["Java", "C/C++"],
    imageUrlId: "member4",
    socials: [{name: "GitHub", icon: Github, url: "https://github.com/0racl363"}
    ],
    projects: [],
  },
  {
    name: "Joao",
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
