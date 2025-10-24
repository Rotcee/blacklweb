import Image from "next/image";
import Link from "next/link";
import {
  Github,
  Linkedin,
  Twitter,
  ShieldCheck,
  ArrowRight,
  Mail,
  User,
  MessageSquare,
  Network,
  Users,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { members, projects } from "./data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Footer } from "@/components/footer";
import { Logo } from "@/components/logo";

const getImageUrl = (id: string) => {
  const image = PlaceHolderImages.find((img) => img.id === id);
  return image
    ? { url: image.imageUrl, hint: image.imageHint }
    : { url: "", hint: "" };
};

const Header = () => (
  <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
    <div className="container flex h-14 max-w-screen-2xl items-center">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <Logo className="h-6 w-6 text-primary" />
        <span className="font-bold font-headline">BlackL</span>
      </Link>
      <nav className="flex items-center gap-4 text-base lg:gap-6 ml-auto">
        <Link
          href="#about"
          className="text-muted-foreground/80 transition-colors hover:text-foreground text-lg"
        >
          About Us
        </Link>
        <Link
          href="#members"
          className="text-muted-foreground/80 transition-colors hover:text-foreground text-lg"
        >
          Members
        </Link>
        <Link
          href="#contact"
          className="text-muted-foreground/80 transition-colors hover:text-foreground text-lg"
        >
          Contact
        </Link>
      </nav>
    </div>
  </header>
);

const HeroSection = () => (
  <section className="container flex h-[calc(100dvh-3.5rem)] flex-col items-center justify-center text-center">
    <Logo className="mb-8 h-28 w-28 animate-pulse text-primary drop-shadow-[0_0_15px_hsl(var(--primary)/0.5)]" />
    <h1 className="text-4xl font-extrabold tracking-tight font-headline md:text-6xl lg:text-7xl">
      BlackL Cyber Group
    </h1>
    <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
      Guardians of the Digital Frontier. A collective of cybersecurity
      enthusiasts dedicated to research, innovation, and education in the
      digital defense space.
    </p>
    <div className="mt-8 flex flex-wrap justify-center gap-4">
      <Button asChild size="lg">
        <Link href="#members">
          Meet the Team <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </Button>
      <Button asChild variant="outline" size="lg">
        <Link href="#contact">Contact Us</Link>
      </Button>
    </div>
  </section>
);

const AboutUsSection = () => (
  <section id="about" className="w-full py-24 sm:py-32">
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <Badge variant="outline">About Us</Badge>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
          Our Mission & Projects
        </h2>
        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          We are a team of students passionate about cybersecurity, dedicated to exploring the depths of digital security through hands-on projects and collaborative research. Our goal is to innovate and educate, making the digital world a safer place.
        </p>
      </div>
      <div className="mx-auto mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
           <Card
            key={project.id}
            className="transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10 flex flex-col"
          >
            <CardHeader>
              <div className="flex items-center gap-4">
                <Network className="h-8 w-8 text-primary" />
                <CardTitle>{project.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground">{project.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);


const MembersSection = () => (
  <section id="members" className="w-full py-24 sm:py-32 bg-card/50">
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <Badge variant="outline">The Team</Badge>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
          Meet the Architects of Defense
        </h2>
        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          A diverse group of dedicated individuals with a shared passion for
          cybersecurity. Each member brings a unique set of skills and
          perspectives to the team.
        </p>
      </div>
      <div className="mx-auto mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {members.map((member) => (
          <Card
            key={member.name}
            className="overflow-hidden text-center transition-all duration-300 ease-in-out hover:shadow-primary/20 hover:shadow-lg hover:-translate-y-2 flex flex-col"
          >
            <Link href={`/members/${member.slug}`} className="flex flex-col flex-grow">
              <CardContent className="p-6 flex flex-col flex-grow">
                <Avatar className="mx-auto mb-4 h-24 w-24 border-2 border-primary">
                  <AvatarImage
                    src={getImageUrl(member.imageUrlId).url}
                    alt={member.name}
                    width={100}
                    height={100}
                    data-ai-hint={getImageUrl(member.imageUrlId).hint}
                  />
                  <AvatarFallback>
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <h3 className="text-lg font-bold font-headline">{member.name}</h3>
                <p className="text-sm text-primary flex-grow">{member.role}</p>
                <div className="mt-4 flex flex-wrap justify-center gap-2">
                  {member.skills.slice(0, 2).map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                  {member.skills.length > 2 && (
                     <Badge variant="secondary">...</Badge>
                  )}
                </div>
              </CardContent>
            </Link>
            <div className="mt-auto border-t border-border/40 p-4 flex justify-center space-x-4">
              {member.socials.map((social) => (
                <Link
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

const ContactSection = () => (
  <section id="contact" className="w-full py-24 sm:py-32">
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <Badge variant="outline">Contact</Badge>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
          Get in Touch
        </h2>
        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Have a question, a proposal, or just want to talk about security?
          Drop us a line.
        </p>
      </div>
      <div className="mx-auto mt-12 max-w-xl">
        <Card>
          <CardContent className="p-6">
            <form className="grid gap-4">
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="name"
                  placeholder="Your Name"
                  className="pl-10"
                  aria-label="Your Name"
                />
              </div>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="Your Email"
                  className="pl-10"
                  aria-label="Your Email"
                />
              </div>
              <div className="relative">
                <MessageSquare className="absolute left-3 top-4 h-4 w-4 text-muted-foreground" />
                <Textarea
                  id="message"
                  placeholder="Your Message"
                  className="min-h-32 pl-10 pt-3"
                  aria-label="Your Message"
                />
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
);

export default function HomePage() {
  return (
    <div className="flex min-h-dvh flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutUsSection />
        <MembersSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
