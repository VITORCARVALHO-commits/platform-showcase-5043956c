import { useReveal } from "@/hooks/use-reveal";
import mapa from "@/assets/up-entregador-mapa.jpg.asset.json";
import pedidos from "@/assets/up-entregador-pedidos.jpg.asset.json";
import ganhos from "@/assets/up-entregador-ganhos.jpg.asset.json";
import perfil from "@/assets/up-entregador-perfil.jpg.asset.json";

const screens = [
  { img: mapa.url, title: "Mapa em tempo real", desc: "Veja pedidos próximos no mapa." },
  { img: pedidos.url, title: "Pedidos na hora certa", desc: "Aceite com rapidez e sem complicação." },
  { img: ganhos.url, title: "Ganhos sob controle", desc: "Acompanhe resultados todos os dias." },
  { img: perfil.url, title: "Trabalhe no seu ritmo", desc: "Online ou offline quando quiser." },
];

export const EntregadorGallery = () => {
  const ref = useReveal<HTMLElement>();
  return (
    <section ref={ref} className="relative py-28 bg-[hsl(0_0%_3%)] overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-15" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[900px] bg-orange-radial opacity-60" />

      <div className="container relative">
        <div className="reveal text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-bold tracking-[0.25em] uppercase text-primary mb-4">UP Entregador · Por dentro do app</div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05]">
            Cada tela pensada para <span className="text-gradient-orange">entregar mais.</span>
          </h2>
        </div>

        <div className="reveal grid grid-cols-2 lg:grid-cols-4 gap-6">
          {screens.map((s, i) => (
            <div key={s.title} className="group">
              <div
                className="overflow-hidden rounded-3xl border border-border/40 shadow-2xl"
                style={{ animationDelay: `${i * -1.2}s` }}
              >
                <img src={s.img} alt={s.title} className="w-full h-auto block transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="mt-4 text-center">
                <div className="font-display font-bold text-base md:text-lg">{s.title}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
