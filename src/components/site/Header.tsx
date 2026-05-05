import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";

const links = [
  { href: "#plataforma", label: "Plataforma" },
  { href: "#apps", label: "Apps" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#contato", label: "Contato" },
];

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "backdrop-blur-xl bg-background/70 border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container flex h-20 items-center justify-between">
        <a href="#top" aria-label="UP plataforma">
          <Logo />
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <Button asChild className="bg-gradient-to-r from-primary to-primary-glow hover:opacity-90 shimmer">
          <a href="#download">Baixar app</a>
        </Button>
      </div>
    </header>
  );
};
