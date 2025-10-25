'use client';

import Link from "next/link";
import { useState } from "react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Home, Menu } from "lucide-react";

interface HeaderProps {
  showNav?: boolean;
}

export const Header = ({ showNav = false }: HeaderProps) => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const handleLinkClick = () => {
    setIsSheetOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b-4 border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Logo className="h-8 w-8 text-primary" />
          <span className="font-bold font-headline text-xl">BlackL</span>
        </Link>
        <div className="ml-auto flex items-center gap-4">
          {showNav ? (
            <>
              {/* Desktop Navigation */}
              <nav className="hidden items-center gap-4 text-base md:flex lg:gap-6">
                <Link
                  href="/#about"
                  className="text-muted-foreground/80 transition-colors hover:text-foreground text-lg"
                >
                  About Us
                </Link>
                <Link
                  href="/#members"
                  className="text-muted-foreground/80 transition-colors hover:text-foreground text-lg"
                >
                  Members
                </Link>
                <Link
                  href="/#contact"
                  className="text-muted-foreground/80 transition-colors hover:text-foreground text-lg"
                >
                  Contact
                </Link>
              </nav>
              {/* Mobile Navigation */}
              <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="md:hidden"
                    aria-label="Open navigation menu"
                  >
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right">
                  <SheetHeader>
                    <SheetTitle className="sr-only">Menu</SheetTitle>
                  </SheetHeader>
                  <nav className="flex flex-col gap-6 text-lg font-medium mt-8">
                    <Link
                      href="/"
                      className="flex items-center gap-2 text-lg font-semibold mb-4"
                      onClick={handleLinkClick}
                    >
                      <Logo className="h-8 w-8 text-primary" />
                      <span className="font-bold font-headline text-xl">BlackL</span>
                    </Link>
                    <Link
                      href="/#about"
                      className="text-muted-foreground hover:text-foreground"
                      onClick={handleLinkClick}
                    >
                      About Us
                    </Link>
                    <Link
                      href="/#members"
                      className="text-muted-foreground hover:text-foreground"
                      onClick={handleLinkClick}
                    >
                      Members
                    </Link>
                    <Link
                      href="/#contact"
                      className="text-muted-foreground hover:text-foreground"
                      onClick={handleLinkClick}
                    >
                      Contact
                    </Link>
                  </nav>
                </SheetContent>
              </Sheet>
            </>
          ) : (
            <Button asChild variant="ghost" size="sm">
              <Link href="/" className="flex items-center gap-2">
                <Home className="h-8 w-8" />
                Home
              </Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};
