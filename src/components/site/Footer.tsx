import { Logo } from "./Logo";
import { Instagram, Linkedin, Facebook } from "lucide-react";

export const Footer = () => (
  <footer className="border-t border-border bg-[hsl(0_0%_3%)] py-12">
    <div className="container grid md:grid-cols-4 gap-10">
      <div className="md:col-span-2">
        <Logo label="Plataforma" />
        <p className="mt-4 text-sm text-muted-foreground max-w-sm">
          A plataforma completa que conecta empresas, entregadores e clientes em um só ecossistema.
        </p>
        <div className="mt-6 flex gap-3">
          {[Instagram, Linkedin, Facebook].map((Icon, i) => (
            <a key={i} href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-border hover:border-primary hover:text-primary transition-colors">
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
      <div>
        <div className="font-display font-bold mb-4">Apps</div>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li><a href="#empresas" className="hover:text-foreground">UP Empresas</a></li>
          <li><a href="#entregador" className="hover:text-foreground">UP Entregador</a></li>
          <li><a href="#cliente" className="hover:text-foreground">UP Cliente</a></li>
        </ul>
      </div>
      <div>
        <div className="font-display font-bold mb-4">Plataforma</div>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li><a href="#como-funciona" className="hover:text-foreground">Como funciona</a></li>
          <li><a href="#download" className="hover:text-foreground">Download</a></li>
          <li><a href="#contato" className="hover:text-foreground">Contato</a></li>
        </ul>
      </div>
    </div>
    <div className="container mt-10 pt-6 border-t border-border flex flex-col sm:flex-row gap-4 justify-between text-xs text-muted-foreground">
      <div>© {new Date().getFullYear()} UP Plataforma. Todos os direitos reservados.</div>
      <div className="flex gap-6">
        <a href="#" className="hover:text-foreground">Privacidade</a>
        <a href="#" className="hover:text-foreground">Termos</a>
      </div>
    </div>
  </footer>
);
