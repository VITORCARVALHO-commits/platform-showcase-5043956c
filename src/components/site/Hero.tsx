import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import entregadorImg from "@/assets/up-entregador-hero.png";
import teamImg from "@/assets/up-entregas-team.png";
import { useReveal } from "@/hooks/use-reveal";

export const Hero = () => {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="top" ref={ref} className="relative min-h-screen overflow-hidden bg-hero pt-32 pb-24">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute inset-x-0 bottom-0 h-[60vh] light-rays" />
      <div
        className="absolute left-1/2 top-[18%] h-[65vw] w-[65vw] -translate-x-1/2 rounded-full"
        style={{ background: "var(--gradient-orange-glow)", animation: "pulseGlow 8s ease-in-out infinite" }}
      />

      {/* Team image as cinematic backdrop on right */}
      <div className="absolute right-0 top-0 hidden lg:block h-full w-[55%] pointer-events-none">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${teamImg})`, maskImage: "linear-gradient(to left, black 30%, transparent 95%)", WebkitMaskImage: "linear-gradient(to left, black 30%, transparent 95%)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
      </div>

      <div className="container relative z-10 grid lg:grid-cols-12 gap-10 items-center">
        <div className="reveal lg:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur px-4 py-1.5 text-xs font-semibold text-primary mb-6">
            <Sparkles className="h-3.5 w-3.5" />
            Em breve revolucionando o seu mercado
          </div>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.02] tracking-tight">
            A nova era do <span className="text-gradient-orange">delivery</span> chegou.
            <br />
            <span className="text-foreground/90 text-4xl md:text-5xl lg:text-6xl block mt-3 font-bold">
              Você está pronto para subir?
            </span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl">
            <strong className="text-foreground">UP Plataforma</strong> conecta lojistas, entregadores e clientes em um único ecossistema inteligente.
            Mais vendas, mais entregas, mais liberdade — com a tecnologia que faz o seu negócio decolar.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button size="lg" asChild className="h-14 px-8 text-base bg-gradient-to-r from-primary to-primary-glow hover:opacity-90 shimmer">
              <a href="#download">
                Quero baixar agora <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="h-14 px-8 text-base border-border bg-card/40 backdrop-blur hover:bg-card">
              <a href="#como-funciona">
                <Play className="mr-2 h-4 w-4 fill-current" /> Ver como funciona
              </a>
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 max-w-lg">
            {[
              { v: "3 apps", l: "totalmente integrados" },
              { v: "24/7", l: "tempo real" },
              { v: "100%", l: "na nuvem" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-2xl md:text-3xl font-extrabold text-gradient-orange">{s.v}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Hero phone mockup */}
        <div className="relative reveal lg:col-span-5 h-[520px] lg:h-[640px]">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="absolute h-[80%] w-[80%] bg-orange-radial" />
          </div>
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 mx-auto w-[88%] float-y">
            <div className="tilt-3d rounded-[2rem] overflow-hidden glow-orange">
              <img src={entregadorImg} alt="UP Entregador — Ganhos e entregas em tempo real" className="w-full h-auto" loading="eager" />
            </div>
          </div>
          {/* floating badges */}
          <div className="absolute top-4 left-2 hidden md:block float-y-delay">
            <div className="rounded-2xl border border-primary/30 bg-card/80 backdrop-blur px-4 py-3 shadow-xl">
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Saldo semanal</div>
              <div className="font-display font-extrabold text-primary text-lg">R$ 124,50</div>
            </div>
          </div>
          <div className="absolute bottom-8 right-0 hidden md:block float-y" style={{ animationDelay: "-3s" }}>
            <div className="rounded-2xl border border-secondary/30 bg-card/80 backdrop-blur px-4 py-3 shadow-xl">
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Pedidos hoje</div>
              <div className="font-display font-extrabold text-secondary text-lg">+ 248</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
