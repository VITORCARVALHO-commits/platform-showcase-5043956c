import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import logoAsset from "@/assets/up-icon-main.png.asset.json";
import entregadorImg from "@/assets/up-entregador-hero.png";
import empresasImg from "@/assets/up-empresas-hero.jpg";
import clienteImg from "@/assets/up-cliente-hero.jpg";
import { useReveal } from "@/hooks/use-reveal";

export const Hero = () => {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="top" ref={ref} className="relative min-h-screen overflow-hidden bg-hero pt-32 pb-20">
      <div
        className="absolute left-1/2 top-[8%] h-[55vw] w-[55vw] -translate-x-1/2 rounded-full pointer-events-none"
        style={{ background: "var(--gradient-orange-glow)" }}
      />

      <div className="container relative z-10">
        <div className="reveal text-center max-w-4xl mx-auto">
          <img
            src={logoAsset.url}
            alt="UP Plataforma"
            className="h-28 md:h-32 w-auto mx-auto rounded-3xl object-contain mb-8 drop-shadow-[0_20px_50px_hsl(22_100%_55%/0.45)]"
          />

          <h1 className="font-display text-5xl md:text-7xl font-extrabold leading-[1.02] tracking-tight">
            Uma plataforma.
            <br />
            <span className="text-gradient-orange">Três super apps.</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            <strong className="text-foreground">UP Plataforma</strong> conecta lojistas, entregadores
            e clientes num só ecossistema. Pedidos em tempo real, entregas inteligentes.
          </p>

          <div className="mt-10 flex flex-wrap gap-3 justify-center">
            <Button size="lg" asChild className="h-13 px-7 text-base bg-gradient-to-r from-primary to-primary-glow hover:opacity-90 shimmer">
              <a href="#download">Baixar agora <ArrowRight className="ml-2 h-5 w-5" /></a>
            </Button>
            <Button size="lg" variant="outline" asChild className="h-13 px-7 text-base bg-card/40 backdrop-blur hover:bg-card">
              <a href="#como-funciona"><Play className="mr-2 h-4 w-4 fill-current" /> Como funciona</a>
            </Button>
          </div>
        </div>

        {/* Three phones */}
        <div className="reveal relative mt-20 flex items-end justify-center gap-4 md:gap-10">
          {[
            { src: empresasImg, label: "Empresas", tone: "text-secondary", cls: "hidden md:block w-[22%] max-w-[230px] -rotate-[8deg] translate-y-6 opacity-90" },
            { src: entregadorImg, label: "Entregador", tone: "text-primary", cls: "w-[58%] md:w-[28%] max-w-[280px] z-10" },
            { src: clienteImg, label: "Cliente", tone: "text-primary", cls: "hidden md:block w-[22%] max-w-[230px] rotate-[8deg] translate-y-6 opacity-90" },
          ].map((p, i) => (
            <div key={p.label} className={`relative ${p.cls}`}>
              <div className={`rounded-[1.8rem] overflow-hidden border border-border/40 ${i === 1 ? "glow-orange" : "shadow-2xl"}`}>
                <img src={p.src} alt={`UP ${p.label}`} className="w-full h-auto block" loading="eager" />
              </div>
              <div className="absolute -bottom-9 inset-x-0 text-center">
                <div className="inline-block rounded-full bg-card/90 backdrop-blur border border-border px-3 py-1 text-[10px] font-bold tracking-[0.2em] uppercase">
                  UP <span className={p.tone}>{p.label}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
