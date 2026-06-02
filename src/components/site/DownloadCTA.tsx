import { useReveal } from "@/hooks/use-reveal";
import { Apple, Play } from "lucide-react";
import iconEntregador from "@/assets/up-icon-main.png.asset.json";
import iconEmpresas from "@/assets/up-icon-empresas.png.asset.json";
import iconCliente from "@/assets/up-icon-cliente.png.asset.json";

const apps = [
  {
    name: "UP Empresas",
    sub: "Gestão e vendas para lojistas",
    icon: iconEmpresas.url,
    ios: "https://apps.apple.com/gb/app/up-empresas/id6763678690",
    accent: "from-[hsl(218_82%_54%)] to-[hsl(222_47%_15%)]",
  },
  {
    name: "UP Entregador",
    sub: "Mais entregas. Mais ganhos.",
    icon: iconEntregador.url,
    ios: "https://apps.apple.com/gb/app/up-entregador/id6763692140",
    accent: "from-[hsl(22_100%_55%)] to-[hsl(14_100%_45%)]",
  },
  {
    name: "UP Cliente",
    sub: "Seu delivery do seu jeito",
    icon: iconCliente.url,
    ios: "https://apps.apple.com/gb/app/up-cliente/id6763890851",
    accent: "from-[hsl(22_100%_55%)] to-[hsl(28_100%_60%)]",
  },
];

export const DownloadCTA = () => {
  const ref = useReveal<HTMLElement>();
  return (
    <section id="download" ref={ref} className="relative py-28 overflow-hidden bg-gradient-to-br from-[hsl(22_100%_50%)] via-[hsl(18_100%_48%)] to-[hsl(14_100%_42%)]">
      <div className="absolute inset-0 grid-pattern opacity-15" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[600px] w-[600px] rounded-full bg-white/20 blur-3xl" />

      <div className="container relative">
        <div className="reveal text-center max-w-4xl mx-auto text-white">
          <div className="text-xs font-bold tracking-[0.25em] uppercase opacity-80 mb-4">Baixe agora</div>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.02]">
            Pronto para fazer <span className="italic">acontecer?</span>
          </h2>
          <p className="mt-6 text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
            Escolha o app que combina com você. Lojista, entregador ou cliente — a <strong>UP Plataforma</strong> é para todos.
          </p>
        </div>

        <div className="reveal mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {apps.map((a, i) => (
            <div
              key={a.name}
              className={`group rounded-3xl bg-gradient-to-br ${a.accent} p-8 shadow-2xl hover:scale-[1.02] transition-transform ${i === 1 ? "md:-translate-y-4" : ""}`}
            >
              <div className="flex items-center gap-4">
                <img src={a.icon} alt={a.name} className="h-20 w-20 rounded-2xl shadow-xl object-cover" />
                <div className="text-white">
                  <div className="font-display font-extrabold text-2xl leading-none">{a.name}</div>
                  <div className="text-sm opacity-90 mt-1">{a.sub}</div>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3">
                <a href={a.ios} target="_blank" rel="noreferrer"
                   className="inline-flex items-center gap-3 rounded-2xl bg-black px-5 py-3 text-white hover:bg-black/80 transition-colors">
                  <Apple className="h-6 w-6" />
                  <div className="text-left">
                    <div className="text-[10px] uppercase tracking-wider opacity-70">Baixar na</div>
                    <div className="font-semibold leading-none">App Store</div>
                  </div>
                </a>
                <a href="#" className="inline-flex items-center gap-3 rounded-2xl bg-black/40 backdrop-blur px-5 py-3 text-white border border-white/20">
                  <Play className="h-6 w-6 fill-white" />
                  <div className="text-left">
                    <div className="text-[10px] uppercase tracking-wider opacity-70">Em breve no</div>
                    <div className="font-semibold leading-none">Google Play</div>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
