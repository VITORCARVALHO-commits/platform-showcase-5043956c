import { useReveal } from "@/hooks/use-reveal";
import { Apple, Bike } from "lucide-react";
import iconEmpresas from "@/assets/up-icon-empresas.png.asset.json";
import iconCliente from "@/assets/up-icon-cliente.png.asset.json";

type App = {
  name: string;
  sub: string;
  icon?: string;
  fallback?: React.ReactNode;
  ios: string;
};

const apps: App[] = [
  {
    name: "UP Empresas",
    sub: "Gestão para lojistas",
    icon: iconEmpresas.url,
    ios: "https://apps.apple.com/gb/app/up-empresas/id6763678690",
  },
  {
    name: "UP Entregador",
    sub: "Mais entregas. Mais ganhos.",
    fallback: <Bike className="h-10 w-10 text-white" strokeWidth={2.2} />,
    ios: "https://apps.apple.com/gb/app/up-entregador/id6763692140",
  },
  {
    name: "UP Cliente",
    sub: "Seu delivery do seu jeito",
    icon: iconCliente.url,
    ios: "https://apps.apple.com/gb/app/up-cliente/id6763890851",
  },
];

export const DownloadCTA = () => {
  const ref = useReveal<HTMLElement>();
  return (
    <section id="download" ref={ref} className="relative py-24 md:py-28 overflow-hidden bg-[hsl(0_0%_3%)]">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[700px] bg-orange-radial opacity-80" />

      <div className="container relative">
        <div className="reveal text-center max-w-3xl mx-auto">
          <div className="text-xs font-bold tracking-[0.25em] uppercase text-primary mb-4">Baixe agora</div>
          <h2 className="font-display text-4xl md:text-6xl font-extrabold leading-[1.02]">
            Pronto para fazer <span className="text-gradient-orange">acontecer?</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Escolha o app que combina com você. Lojista, entregador ou cliente.
          </p>
        </div>

        <div className="reveal mt-14 grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {apps.map((a) => (
            <div
              key={a.name}
              className="group rounded-3xl border border-border bg-card/60 backdrop-blur p-7 hover:border-primary/60 hover:-translate-y-1 hover:shadow-[0_30px_60px_-20px_hsl(22_100%_55%/0.4)] transition-all duration-500"
            >
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center shadow-lg overflow-hidden flex-shrink-0">
                  {a.icon ? (
                    <img src={a.icon} alt={a.name} className="h-full w-full object-cover" />
                  ) : a.fallback}
                </div>
                <div>
                  <div className="font-display font-extrabold text-xl leading-none">{a.name}</div>
                  <div className="text-xs text-muted-foreground mt-1.5">{a.sub}</div>
                </div>
              </div>

              <a href={a.ios} target="_blank" rel="noreferrer"
                 className="mt-6 inline-flex w-full items-center justify-center gap-3 rounded-xl bg-foreground text-background px-5 py-3 hover:opacity-90 transition-opacity">
                <Apple className="h-5 w-5" />
                <div className="text-left">
                  <div className="text-[9px] uppercase tracking-wider opacity-70 leading-none">Baixar na</div>
                  <div className="font-semibold leading-tight text-sm">App Store</div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
