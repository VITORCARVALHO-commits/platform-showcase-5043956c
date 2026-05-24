import { useReveal } from "@/hooks/use-reveal";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, TrendingUp, Users } from "lucide-react";
import restaurante from "@/assets/up-restaurante.png";

export const BusinessTeaser = () => {
  const ref = useReveal<HTMLElement>();
  return (
    <section ref={ref} className="relative overflow-hidden">
      <div className="relative h-[70vh] min-h-[520px] w-full">
        <img src={restaurante} alt="Cozinha profissional preparando pedidos" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

        <div className="container relative h-full flex items-center">
          <div className="reveal max-w-2xl">
            <div className="text-xs font-bold tracking-[0.25em] uppercase text-primary mb-4">UP Plataforma · Para quem empreende</div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05]">
              Sua cozinha lotada. <br />
              <span className="text-gradient-orange">Sua operação no controle.</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl">
              Restaurantes, açougues, mercados, farmácias, lojas — qualquer negócio escala pedidos dentro da
              <strong className="text-foreground"> UP Plataforma</strong>. Uma só tecnologia conectando você, sua equipe, entregadores e clientes.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-4 max-w-lg">
              {[
                { i: Zap, v: "3x", l: "mais rápido" },
                { i: TrendingUp, v: "+45%", l: "em vendas" },
                { i: Users, v: "∞", l: "clientes" },
              ].map((s) => (
                <div key={s.l} className="rounded-2xl border border-border bg-card/70 backdrop-blur p-4">
                  <s.i className="h-5 w-5 text-primary mb-2" />
                  <div className="font-display font-extrabold text-2xl">{s.v}</div>
                  <div className="text-xs text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </div>

            <Button asChild size="lg" className="mt-8 h-13 px-8 bg-gradient-to-r from-primary to-primary-glow shimmer">
              <a href="#contato">
                Quero para o meu negócio <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
