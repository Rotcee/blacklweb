"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Github, Linkedin, Lock, Twitter } from "lucide-react";

const Copyright = () => {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
      &copy; {year} BlackL Cyber Group. All rights reserved.
    </p>
  );
};

export const Footer = () => (
  <footer className="border-t border-border/40">
    <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
      <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
        <Lock className="hidden h-6 w-6 text-primary md:block" />
        <Copyright />
      </div>
      <div className="flex space-x-4">
        <Link
          href="#"
          className="text-muted-foreground transition-colors hover:text-primary"
          aria-label="GitHub"
        >
          <Github className="h-5 w-5" />
        </Link>
        <Link
          href="#"
          className="text-muted-foreground transition-colors hover:text-primary"
          aria-label="LinkedIn"
        >
          <Linkedin className="h-5 w-5" />
        </Link>
        <Link
          href="#"
          className="text-muted-foreground transition-colors hover:text-primary"
          aria-label="Twitter"
        >
          <Twitter className="h-5 w-5" />
        </Link>
      </div>
    </div>
  </footer>
);
