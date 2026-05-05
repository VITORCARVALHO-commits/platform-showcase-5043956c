import { useReveal } from "@/hooks/use-reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { toast } from "sonner";
import { FormEvent } from "react";

export const Contact = () => {
  const ref = useReveal<HTMLElement>();

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    toast.success("Mensagem enviada! Em breve entraremos em contato.");
    (e.target as HTMLFormElement).reset();
  };

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
            Tire dúvidas, peça uma demonstração ou conte sobre seu projeto. Nossa equipe responde em até 24h.
          </p>

          <div className="mt-10 space-y-5">
            {[
              { icon: Mail, l: "Email", v: "contato@upplataforma.com" },
              { icon: Phone, l: "Telefone", v: "+55 (11) 99999-0000" },
              { icon: MapPin, l: "Endereço", v: "São Paulo, Brasil" },
            ].map((c) => (
              <div key={c.l} className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-glow">
                  <c.icon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">{c.l}</div>
                  <div className="font-medium">{c.v}</div>
                </div>
              </div>
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
            <Input id="business" placeholder="Restaurante, mercado, açougue..." className="h-12 bg-background border-border" />
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
