import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { members, projects } from "@/data/app";
import { PlaceHolderImages } from "@/data/placeholder-images";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Network } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Header } from "@/components/layout/header";

export function generateStaticParams() {
  return members.map((member) => ({
    slug: member.slug,
  }));
}

const getImageUrl = (id: string) => {
  const image = PlaceHolderImages.find((img) => img.id === id);
  return image
    ? { url: image.imageUrl, hint: image.imageHint }
    : { url: "", hint: "" };
};

export default function MemberPage({ params }: { params: { slug: string } }) {
  const member = members.find((m) => m.slug === params.slug);

  if (!member) {
    notFound();
  }

  const memberProjects = projects.filter((p) => member.projects.includes(p.id));

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <div className="grid gap-12 md:grid-cols-3">
          <div className="flex flex-col items-center text-center">
             <Avatar className="mx-auto mb-6 h-48 w-48 border-4 border-primary">
                <AvatarImage
                  src={getImageUrl(member.imageUrlId).url}
                  alt={member.name}
                  data-ai-hint={getImageUrl(member.imageUrlId).hint}
                />
                <AvatarFallback>
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
            <h1 className="text-3xl font-bold font-headline sm:text-4xl">{member.name}</h1>
            <p className="mt-1 text-lg text-primary">{member.role}</p>
            
            <div className="mt-6 flex justify-center space-x-4">
              {member.socials.map((social) => (
                <Link
                  key={social.name}
                  href={social.url}
                  className="text-muted-foreground transition-colors hover:text-primary"
                  aria-label={`${member.name} on ${social.name}`}
                >
                  <social.icon className="h-6 w-6" />
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-8 md:col-span-2">
            <div>
              <h2 className="text-2xl font-bold font-headline tracking-tight">About Me</h2>
              <p className="mt-4 text-muted-foreground">{member.bio}</p>
            </div>

            <div>
              <h3 className="text-xl font-bold font-headline">Skills</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {member.skills.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold font-headline">Projects</h3>
              <div className="mt-4 grid gap-6">
                {memberProjects.length > 0 ? (
                    memberProjects.map((project) => (
                    <Card
                      key={project.id}
                      className="transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10"
                    >
                      <CardHeader>
                        <div className="flex items-center gap-4">
                          <Network className="h-8 w-8 text-primary" />
                          <CardTitle>{project.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{project.description}</p>
                      </CardContent>
                    </Card>
                  ))
                ) : (
                    <p className="text-muted-foreground">No projects to display.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
