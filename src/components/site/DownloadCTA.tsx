import { useReveal } from "@/hooks/use-reveal";
import entregadorImg from "@/assets/up-entregador.png";
import empresasImg from "@/assets/up-empresas.png";
import clienteImg from "@/assets/up-cliente.jpg";
import { Apple, Play } from "lucide-react";

export const DownloadCTA = () => {
  const ref = useReveal<HTMLElement>();
  return (
    <section id="download" ref={ref} className="relative py-28 overflow-hidden bg-gradient-to-br from-[hsl(22_100%_50%)] via-[hsl(18_100%_48%)] to-[hsl(14_100%_42%)]">
      <div className="absolute inset-0 grid-pattern opacity-15" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[600px] w-[600px] rounded-full bg-white/20 blur-3xl" />

      <div className="container relative">
        <div className="reveal text-center max-w-4xl mx-auto text-white">
          <div className="text-xs font-bold tracking-[0.25em] uppercase opacity-80 mb-4">Disponível agora</div>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.02]">
            Pronto para fazer <span className="italic">acontecer?</span>
          </h2>
          <p className="mt-6 text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
            Baixe o app que combina com você. Lojista, entregador ou cliente — a UP é para todos.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href="#" className="inline-flex items-center gap-3 rounded-2xl bg-black px-7 py-4 text-white shimmer hover:scale-105 transition-transform">
              <Apple className="h-7 w-7" />
              <div className="text-left">
                <div className="text-[10px] uppercase tracking-wider opacity-70">Disponível na</div>
                <div className="font-semibold text-lg leading-none">App Store</div>
              </div>
            </a>
            <a href="#" className="inline-flex items-center gap-3 rounded-2xl bg-black px-7 py-4 text-white shimmer hover:scale-105 transition-transform">
              <Play className="h-7 w-7 fill-white" />
              <div className="text-left">
                <div className="text-[10px] uppercase tracking-wider opacity-70">Disponível no</div>
                <div className="font-semibold text-lg leading-none">Google Play</div>
              </div>
            </a>
          </div>
        </div>

        <div className="reveal mt-20 grid grid-cols-3 gap-4 md:gap-10 max-w-4xl mx-auto">
          {[
            { img: empresasImg, label: "UP Empresas" },
            { img: entregadorImg, label: "UP Entregador" },
            { img: clienteImg, label: "UP Cliente" },
          ].map((m, i) => (
            <div key={m.label} className="text-center">
              <div className={`rounded-2xl overflow-hidden shadow-2xl ${i === 1 ? "float-y" : "float-y-delay"}`} style={{ animationDelay: `${i * -1.5}s` }}>
                <img src={m.img} alt={m.label} className="w-full h-auto" />
              </div>
              <div className="mt-4 font-display font-bold text-white text-sm md:text-base">{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
