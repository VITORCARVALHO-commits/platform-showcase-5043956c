import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import logoSrc from "@/assets/up-plataforma-logo.png";
import entregadorImg from "@/assets/up-entregador-hero.png";
import empresasImg from "@/assets/up-empresas-hero.jpg";
import clienteImg from "@/assets/up-cliente-hero.jpg";
import teamImg from "@/assets/up-entregas-team.png";
import { useReveal } from "@/hooks/use-reveal";

export const Hero = () => {
  const ref = useReveal<HTMLDivElement>();

  const phones = [
    { src: empresasImg, label: "Empresas", tone: "secondary", rotate: "-rotate-[10deg] -translate-y-4", delay: "-1s" },
    { src: entregadorImg, label: "Entregador", tone: "primary", rotate: "rotate-0 z-10 scale-110", delay: "0s" },
    { src: clienteImg, label: "Cliente", tone: "primary", rotate: "rotate-[10deg] -translate-y-4", delay: "-2.5s" },
  ];

  return (
    <section id="top" ref={ref} className="relative min-h-screen overflow-hidden bg-hero pt-28 pb-20">
      <div className="absolute inset-0 grid-pattern opacity-25" />
      <div className="absolute inset-x-0 bottom-0 h-[60vh] light-rays" />
      <div
        className="absolute left-1/2 top-[12%] h-[70vw] w-[70vw] -translate-x-1/2 rounded-full pointer-events-none"
        style={{ background: "var(--gradient-orange-glow)", animation: "pulseGlow 8s ease-in-out infinite" }}
      />
      <div className="absolute right-0 top-0 hidden lg:block h-full w-[45%] pointer-events-none opacity-40">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${teamImg})`, maskImage: "linear-gradient(to left, black 10%, transparent 90%)", WebkitMaskImage: "linear-gradient(to left, black 10%, transparent 90%)" }}
        />
      </div>

      <div className="container relative z-10">
        <div className="reveal text-center max-w-5xl mx-auto">
          {/* Big logo */}
          <div className="inline-flex flex-col items-center gap-4 mb-8">
            <img
              src={logoSrc}
              alt="UP Plataforma"
              className="h-28 md:h-36 w-auto object-contain float-y drop-shadow-[0_20px_60px_hsl(22_100%_55%/0.55)]"
            />
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur px-4 py-1.5 text-xs font-semibold text-primary">
              <Sparkles className="h-3.5 w-3.5" />
              UP PLATAFORMA — o ecossistema completo
            </div>
          </div>

          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[1.0] tracking-tight">
            Uma plataforma.
            <br />
            <span className="text-gradient-orange">Três super apps.</span>
            <br />
            <span className="text-foreground/90 text-3xl md:text-5xl lg:text-6xl block mt-4 font-bold">
              Um único ecossistema que conecta tudo.
            </span>
          </h1>

          <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            <strong className="text-foreground">UP Plataforma</strong> reúne lojistas, entregadores e clientes em uma
            só tecnologia. Pedidos em tempo real, entregas inteligentes e uma experiência que faz seu negócio decolar.
          </p>

          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Button size="lg" asChild className="h-14 px-8 text-base bg-gradient-to-r from-primary to-primary-glow hover:opacity-90 shimmer">
              <a href="#download">Baixar agora <ArrowRight className="ml-2 h-5 w-5" /></a>
            </Button>
            <Button size="lg" variant="outline" asChild className="h-14 px-8 text-base border-border bg-card/40 backdrop-blur hover:bg-card">
              <a href="#como-funciona"><Play className="mr-2 h-4 w-4 fill-current" /> Ver como funciona</a>
            </Button>
          </div>
        </div>

        {/* Three phones cinematic stack */}
        <div className="reveal relative mt-20 h-[520px] md:h-[640px]">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="absolute h-[60%] w-[80%] bg-orange-radial" />
          </div>
          <div className="absolute inset-x-0 top-0 flex items-center justify-center gap-4 md:gap-8">
            {phones.map((p, i) => (
              <div
                key={p.label}
                className={`relative w-[28%] max-w-[260px] ${p.rotate} ${i === 1 ? "float-y" : "float-y-delay"}`}
                style={{ animationDelay: p.delay }}
              >
                <div className={`rounded-[1.8rem] overflow-hidden border border-border/40 ${i === 1 ? "glow-orange" : "shadow-2xl"}`}>
                  <img src={p.src} alt={`UP ${p.label}`} className="w-full h-auto block" loading="eager" />
                </div>
                <div className="absolute -bottom-10 inset-x-0 text-center">
                  <div className="inline-block rounded-full bg-card/80 backdrop-blur border border-border px-3 py-1 text-[10px] font-bold tracking-[0.2em] uppercase">
                    UP <span className={`text-${p.tone}`}>{p.label}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 grid grid-cols-3 gap-6 max-w-2xl mx-auto text-center">
          {[
            { v: "3 apps", l: "totalmente integrados" },
            { v: "24/7", l: "em tempo real" },
            { v: "100%", l: "na nuvem" },
          ].map((s) => (
            <div key={s.l}>
              <div className="font-display text-2xl md:text-4xl font-extrabold text-gradient-orange">{s.v}</div>
              <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
