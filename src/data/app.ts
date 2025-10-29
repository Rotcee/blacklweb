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
    title: "LaSaramdonga",
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
      //{ name: "LinkedIn", icon: Linkedin, url: "#" },
      //{ name: "Twitter", icon: Twitter, url: "#" },
    ],
    projects: [""],
  },
  {
    name: "Alberto 'Gerson1423' Castro",
    slug: "Alberto-Castro",
    role: "Computer Engineering and IA student",
    bio: "Hello, I'm Alberto, a future Computer engineer and artificial intelligence . I love learning new things, especially if they are related to technology and programming, especially hardware.",
    skills: ["Python", "C++","Fast learning"],
    imageUrlId: "member2",
    socials: [
      { name: "GitHub", icon: Github, url: "https://github.com/Gerson1423" },
      //{ name: "LinkedIn", icon: Linkedin, url: "#" },
    ],
    projects: [""],
  },
  {
    name: "Brenda 'L1pbyte' Castro blanco",
    slug: "Brenda-Castro",
    role: "Web developer ",
    bio: " When an incident occurs, Brenda is the first on the scene. She meticulously pieces together digital evidence to understand the 'how' and 'why' of a breach, providing crucial insights that inform our future defense mechanisms.",
    skills: ["Web developer", "Java", "Php"],
    imageUrlId: "member3",
    socials: [
      { name: "GitHub", icon: Github, url: "https://github.com/Brendius00" },
     // { name: "LinkedIn", icon: Linkedin, url: "#" },
      //{ name: "Twitter", icon: Twitter, url: "#" },
    ],
    projects: [""],
  },
  {
    name: "Diego '0racl3' Gamote Silva",
    slug: "Diego-Gamote",
    role: "Computer Engineering student",
    bio: "Hi I'm Diego, a Computer Engineering with an interest in programming, cybersecurity, and software development. Continuously learning and motivated to solve problems using technology.",
    skills: ["Java", "C/C++"],
    imageUrlId: "member4",
    socials: [
     {name: "GitHub", icon: Github, url: "https://github.com/0racl363"},
     // { name: "LinkedIn", icon: Linkedin, url: "#" },
    ],
    projects: [""],
  },
  {
    name: "João 'J0hnny_C4$h' ",
    slug: "joao",
    role: "Computer Engineering student",
    bio: "Driven by an insatiable curiosity, Joao explores the uncharted territories of cybersecurity. His research into emerging threats and novel cryptographic methods keeps BlackL at the cutting edge of the industry.",
    skills: ["C/C++", "Java", ],
    imageUrlId: "member5",
    socials: [
      { name: "GitHub", icon: Github, url: "#" },
     // { name: "Twitter", icon: Twitter, url: "#" },
    ],
    projects: [""],
  },
];
