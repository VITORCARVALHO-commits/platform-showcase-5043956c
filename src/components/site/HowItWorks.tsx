import { useReveal } from "@/hooks/use-reveal";
import { ShoppingBag, Store, Bike, ArrowRight } from "lucide-react";

const steps = [
  { n: "01", icon: ShoppingBag, title: "Cliente faz o pedido", desc: "Pelo app UP Cliente, escolhe loja, monta o pedido e paga com segurança.", color: "primary" },
  { n: "02", icon: Store, title: "Empresa prepara", desc: "O lojista recebe e gerencia o pedido pelo UP Empresas em tempo real.", color: "secondary" },
  { n: "03", icon: Bike, title: "Entregador entrega", desc: "Pedido é direcionado ao entregador mais próximo via UP Entregador.", color: "primary" },
];

export const HowItWorks = () => {
  const ref = useReveal<HTMLElement>();
  return (
    <section id="como-funciona" ref={ref} className="relative py-28 bg-[hsl(0_0%_3%)] overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="absolute inset-0 light-rays opacity-60" />

      <div className="container relative">
        <div className="reveal max-w-3xl mb-20 text-center mx-auto">
          <div className="text-xs font-bold tracking-[0.25em] uppercase text-primary mb-4">Como funciona</div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05]">
            Três apps. <span className="text-gradient-orange">Um fluxo perfeito.</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Do toque do cliente até a entrega na porta — tudo conectado em tempo real.
          </p>
        </div>

        <div className="relative grid md:grid-cols-3 gap-8">
          {/* connecting line */}
          <div className="hidden md:block absolute top-16 left-[16%] right-[16%] h-px bg-gradient-to-r from-primary via-secondary to-primary opacity-40" />

          {steps.map((s, i) => (
            <div key={s.n} className="reveal relative" style={{ transitionDelay: `${i * 120}ms` }}>
              <div className="relative flex flex-col items-center text-center">
                <div className={`relative h-32 w-32 rounded-full bg-card border border-border flex items-center justify-center mb-6 ${s.color === "secondary" ? "shadow-[0_0_60px_-10px_hsl(222_89%_55%/0.5)]" : "shadow-[0_0_60px_-10px_hsl(22_100%_55%/0.5)]"}`}>
                  <div className={`absolute inset-3 rounded-full ${s.color === "secondary" ? "bg-gradient-to-br from-secondary to-secondary-glow" : "bg-gradient-to-br from-primary to-primary-glow"} flex items-center justify-center`}>
                    <s.icon className="h-10 w-10 text-white" strokeWidth={1.8} />
                  </div>
                  <div className="absolute -top-2 -right-2 h-10 w-10 rounded-full bg-background border border-border flex items-center justify-center font-display font-bold text-sm">
                    {s.n}
                  </div>
                </div>
                <h3 className="font-display text-2xl font-bold mb-2">{s.title}</h3>
                <p className="text-muted-foreground max-w-xs">{s.desc}</p>

                {i < steps.length - 1 && (
                  <ArrowRight className="hidden md:block absolute top-12 -right-4 h-8 w-8 text-primary/60" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
