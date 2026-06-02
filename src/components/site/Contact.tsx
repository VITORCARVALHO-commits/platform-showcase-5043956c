import { useReveal } from "@/hooks/use-reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send, Instagram } from "lucide-react";
import { toast } from "sonner";
import { FormEvent } from "react";

export const Contact = () => {
  const ref = useReveal<HTMLElement>();

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    toast.success("Mensagem enviada! Em breve entraremos em contato.");
    (e.target as HTMLFormElement).reset();
  };

  const contacts = [
    { icon: Mail, l: "Email", v: "upaplicativo@outlook.com", href: "mailto:upaplicativo@outlook.com" },
    { icon: Phone, l: "WhatsApp", v: "+55 (62) 98452-8435", href: "https://wa.me/5562984528435" },
    { icon: Instagram, l: "Instagram", v: "@upplataformabr", href: "https://www.instagram.com/upplataformabr" },
    { icon: MapPin, l: "Endereço", v: "Goiânia · Goiás · Brasil", href: "#" },
  ];

  return (
    <section id="contato" ref={ref} className="relative py-28 bg-background overflow-hidden">
      <div className="absolute top-0 right-0 h-[500px] w-[500px] bg-orange-radial opacity-50" />
      <div className="container relative grid lg:grid-cols-2 gap-16">
        <div className="reveal">
          <div className="text-xs font-bold tracking-[0.25em] uppercase text-primary mb-4">Fale com a gente</div>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold leading-[1.05]">
            Vamos conversar sobre <span className="text-gradient-orange">o seu negócio.</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground max-w-lg">
            Tire dúvidas, peça uma demonstração ou conte sobre seu projeto. Nossa equipe responde rapidinho.
          </p>

          <div className="mt-10 grid sm:grid-cols-2 gap-5">
            {contacts.map((c) => (
              <a key={c.l} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
                 className="flex items-start gap-4 rounded-2xl border border-border bg-card/40 p-4 hover:border-primary/50 transition-colors">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-glow flex-shrink-0">
                  <c.icon className="h-5 w-5 text-white" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">{c.l}</div>
                  <div className="font-medium truncate">{c.v}</div>
                </div>
              </a>
            ))}
          </div>
        </div>

        <form onSubmit={onSubmit} className="reveal rounded-3xl border border-border bg-card/60 backdrop-blur p-8 space-y-5">
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="space-y-2">
              <Label htmlFor="name">Nome</Label>
              <Input id="name" required placeholder="Seu nome" className="h-12 bg-background border-border" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" required placeholder="voce@email.com" className="h-12 bg-background border-border" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="business">Tipo de negócio</Label>
            <Input id="business" placeholder="Restaurante, mercado, açougue, farmácia..." className="h-12 bg-background border-border" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="msg">Mensagem</Label>
            <Textarea id="msg" required placeholder="Como podemos ajudar?" rows={5} className="bg-background border-border resize-none" />
          </div>
          <Button type="submit" size="lg" className="w-full h-13 bg-gradient-to-r from-primary to-primary-glow shimmer">
            Enviar mensagem <Send className="ml-2 h-4 w-4" />
          </Button>
        </form>
      </div>
    </section>
  );
};
