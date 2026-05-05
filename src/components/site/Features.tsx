import { useReveal } from "@/hooks/use-reveal";
import { Store, BarChart3, Package, ShieldCheck, MapPin, Wallet, Power, Bell, Truck, ShoppingBag, CreditCard, Clock } from "lucide-react";

const groups = [
  {
    name: "UP Empresas",
    color: "secondary",
    items: [
      { icon: Store, t: "Para todo tipo de negócio", d: "Restaurantes, açougues, lojas, papelarias e muito mais." },
      { icon: BarChart3, t: "Mais vendas, menos esforço", d: "Organize pedidos, controle entregas e melhore resultados." },
      { icon: Package, t: "Produtos organizados", d: "Cadastre, edite e gerencie seu catálogo com facilidade." },
      { icon: ShieldCheck, t: "Tudo seguro na nuvem", d: "Seus dados protegidos e acessíveis de onde estiver." },
    ],
  },
  {
    name: "UP Entregador",
    color: "primary",
    items: [
      { icon: MapPin, t: "Pedidos em tempo real", d: "Receba ofertas próximas no mapa, sem atraso." },
      { icon: Wallet, t: "Ganhos transparentes", d: "Acompanhe saldo da semana, mês e total no app." },
      { icon: Power, t: "Você no controle", d: "Fique online ou offline quando quiser, no seu ritmo." },
      { icon: Bell, t: "Alertas inteligentes", d: "Notificações importantes para nunca perder uma corrida." },
    ],
  },
  {
    name: "UP Cliente",
    color: "primary",
    items: [
      { icon: Truck, t: "Entrega rápida", d: "Receba seus pedidos com agilidade na sua porta." },
      { icon: ShoppingBag, t: "Mercado e restaurantes", d: "Tudo que você precisa em um único aplicativo." },
      { icon: CreditCard, t: "Pagamento seguro", d: "Pague de forma simples e protegida." },
      { icon: Clock, t: "Acompanhe em tempo real", d: "Veja onde está o seu pedido a cada minuto." },
    ],
  },
];

export const Features = () => {
  const ref = useReveal<HTMLElement>();
  return (
    <section id="plataforma" ref={ref} className="relative py-28 bg-background">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="container relative">
        <div className="reveal max-w-3xl mb-16">
          <div className="text-xs font-bold tracking-[0.25em] uppercase text-primary mb-4">A plataforma</div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05]">
            Tudo que cada parte precisa, <span className="text-gradient-orange">em um só ecossistema.</span>
          </h2>
        </div>

        <div className="space-y-16">
          {groups.map((g) => (
            <div key={g.name} className="reveal">
              <div className={`mb-6 inline-block text-sm font-bold tracking-widest uppercase ${g.color === "secondary" ? "text-secondary" : "text-primary"}`}>
                {g.name}
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {g.items.map((it) => (
                  <div
                    key={it.t}
                    className="group relative rounded-2xl border border-border bg-card/60 backdrop-blur p-6 transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_20px_60px_-20px_hsl(22_100%_55%/0.4)]"
                  >
                    <div className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl ${g.color === "secondary" ? "bg-gradient-to-br from-secondary to-secondary-glow" : "bg-gradient-to-br from-primary to-primary-glow"}`}>
                      <it.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-display text-lg font-bold mb-2">{it.t}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{it.d}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
