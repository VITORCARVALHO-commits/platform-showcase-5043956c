import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import entregadorImg from "@/assets/up-entregador.png";
import empresasImg from "@/assets/up-empresas.png";
import clienteImg from "@/assets/up-cliente.jpg";
import { useReveal } from "@/hooks/use-reveal";

export const Hero = () => {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="top" ref={ref} className="relative min-h-screen overflow-hidden bg-hero pt-32 pb-24">
      {/* Backdrop FX */}
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="absolute inset-x-0 bottom-0 h-[60vh] light-rays" />
      <div
        className="absolute left-1/2 top-[20%] h-[60vw] w-[60vw] -translate-x-1/2 rounded-full"
        style={{ background: "var(--gradient-orange-glow)", animation: "pulseGlow 8s ease-in-out infinite" }}
      />

      <div className="container relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        <div className="reveal">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 backdrop-blur px-4 py-1.5 text-xs font-medium text-muted-foreground mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Plataforma completa em 3 apps
          </div>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight">
            O ecossistema que <span className="text-gradient-orange">faz acontecer</span> no seu negócio.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl">
            Conectamos lojistas, entregadores e clientes em uma só plataforma. Mais vendas, mais entregas, mais controle —
            do pedido até a porta.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button size="lg" asChild className="h-14 px-8 text-base bg-gradient-to-r from-primary to-primary-glow hover:opacity-90 shimmer">
              <a href="#download">
                Baixar agora <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="h-14 px-8 text-base border-border bg-card/40 backdrop-blur hover:bg-card">
              <a href="#como-funciona">
                <Play className="mr-2 h-4 w-4" /> Como funciona
              </a>
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
            {[
              { v: "3", l: "apps integrados" },
              { v: "24/7", l: "tempo real" },
              { v: "100%", l: "na nuvem" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-3xl font-bold text-gradient-orange">{s.v}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Mockups */}
        <div className="relative reveal h-[600px] lg:h-[680px]">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="absolute h-[80%] w-[80%] bg-orange-radial" />
          </div>

          {/* Entregador (back left) */}
          <div className="absolute left-0 top-10 w-[55%] float-y-delay">
            <div className="tilt-3d rounded-[2rem] overflow-hidden glow-orange">
              <img src={entregadorImg} alt="App UP Entregador" className="w-full h-auto" loading="eager" />
            </div>
          </div>

          {/* Cliente (front center) */}
          <div className="absolute right-0 bottom-0 w-[60%] float-y z-10">
            <div className="tilt-3d rounded-[2rem] overflow-hidden glow-orange" style={{ transform: "perspective(1400px) rotateY(8deg) rotateX(4deg)" }}>
              <img src={clienteImg} alt="App UP Cliente" className="w-full h-auto" loading="eager" />
            </div>
          </div>

          {/* Empresas (small badge top right) */}
          <div className="absolute right-4 top-0 w-[35%] float-y" style={{ animationDelay: "-1s" }}>
            <div className="tilt-3d rounded-2xl overflow-hidden glow-blue" style={{ transform: "perspective(1400px) rotateY(-6deg) rotateX(-4deg)" }}>
              <img src={empresasImg} alt="App UP Empresas" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
