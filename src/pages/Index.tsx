import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { AppShowcase } from "@/components/site/AppShowcase";
import { Features } from "@/components/site/Features";
import { HowItWorks } from "@/components/site/HowItWorks";
import { DownloadCTA } from "@/components/site/DownloadCTA";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { BusinessTeaser } from "@/components/site/BusinessTeaser";
import empresasImg from "@/assets/up-empresas-hero.jpg";
import entregadorImg from "@/assets/up-entregador-hero.png";
import clienteImg from "@/assets/up-cliente-hero.jpg";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "UP Plataforma — A nova era do delivery";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", "UP Plataforma: 3 apps integrados — Empresas, Entregador e Cliente. Mais vendas, mais entregas, mais controle do pedido até a porta.");
  }, []);

  return (
    <main id="apps">
      <Header />
      <Hero />

      <AppShowcase
        id="empresas"
        eyebrow="UP Empresas"
        title={<>Gerencie pedidos <span className="text-gradient-blue">em tempo real.</span></>}
        description="O app gratuito que coloca o seu negócio no controle. Acompanhe cada pedido do início ao fim e entregue mais com organização e agilidade."
        features={[
          "Fila de pedidos atualizada ao vivo",
          "Status claros em cada etapa do pedido",
          "Alertas instantâneos para novos pedidos",
          "Financeiro e relatórios completos",
        ]}
        image={empresasImg}
        imageAlt="UP Empresas — Gerencie pedidos em tempo real"
        variant="blue-light"
        cta="Começar grátis"
        flatImage
      />

      <BusinessTeaser />

      <AppShowcase
        id="entregador"
        eyebrow="UP Entregador"
        title={<>Seu app de <span className="text-gradient-orange">entregas e ganhos.</span></>}
        description="Mais controle, mais ganhos, mais liberdade. Fique online e receba entregas em tempo real, no seu ritmo."
        features={[
          "Receba pedidos em tempo real no mapa",
          "Acompanhe seus ganhos da semana, mês e total",
          "Online ou offline — você decide quando trabalhar",
          "Fique por dentro de tudo com alertas inteligentes",
        ]}
        image={entregadorImg}
        imageAlt="UP Entregador — Seu app de entregas e ganhos"
        variant="dark-orange"
        reverse
        cta="Quero começar a entregar"
        flatImage
      />

      <AppShowcase
        id="cliente"
        eyebrow="UP Cliente"
        title={<>Peça tudo em <em>um só lugar.</em></>}
        description="Comida, mercado, farmácia e muito mais perto de você. Pagamento seguro, entrega rápida e rastreio em tempo real."
        features={[
          "Comida, lojas, mercado e entrega rápida",
          "Top lojas e cardápios completos no app",
          "Pagamento 100% seguro",
          "Acompanhe o pedido em tempo real até a porta",
        ]}
        image={clienteImg}
        imageAlt="UP Cliente — Peça tudo em um só lugar"
        variant="orange"
        cta="Quero pedir agora"
        flatImage
      />

      <Features />
      <HowItWorks />
      <DownloadCTA />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
