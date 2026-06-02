import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { AppShowcase } from "@/components/site/AppShowcase";
import { HowItWorks } from "@/components/site/HowItWorks";
import { DownloadCTA } from "@/components/site/DownloadCTA";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { EntregadorGallery } from "@/components/site/EntregadorGallery";
import empresasBanner from "@/assets/up-empresas-banner.jpg.asset.json";
import entregadorBanner from "@/assets/up-entregador-banner.jpg.asset.json";
import clienteBanner from "@/assets/up-cliente-banner.jpg.asset.json";
import iconEmpresas from "@/assets/up-icon-empresas.png.asset.json";
import iconCliente from "@/assets/up-icon-cliente.png.asset.json";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "UP Plataforma — Delivery completo: Empresas, Entregador e Cliente";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", "UP Plataforma: 3 apps integrados — Empresas, Entregador e Cliente. Gestão completa, entregas em tempo real e delivery do seu jeito. Goiânia · Brasil.");
  }, []);

  return (
    <main id="apps">
      <Header />
      <Hero />

      <AppShowcase
        id="empresas"
        eyebrow="UP Empresas"
        appIcon={iconEmpresas.url}
        title={<>Gestão completa para o <span className="text-gradient-blue">crescimento do seu negócio.</span></>}
        description="Pedidos em tempo real, financeiro inteligente e relatórios completos. Tudo o que sua empresa precisa em um só app."
        features={[
          "Pedidos em tempo real, ao vivo",
          "Lojas e restaurantes em um painel",
          "Financeiro inteligente com receita estimada",
          "Relatórios e métricas para decisões melhores",
        ]}
        image={empresasBanner.url}
        imageAlt="UP Empresas"
        variant="blue-light"
        cta="Baixar UP Empresas"
        href="https://apps.apple.com/gb/app/up-empresas/id6763678690"
      />

      <AppShowcase
        id="entregador"
        eyebrow="UP Entregador"
        title={<>Mais entregas. <span className="text-gradient-orange">Mais ganhos.</span></>}
        description="Seu app de entregas com mais controle e mais resultados. Mapa inteligente, ganhos em tempo real e alertas inteligentes."
        features={[
          "Navegação otimizada com mapa inteligente",
          "Pedidos organizados na palma da mão",
          "Ganhos diários, semanais e mensais",
          "Alertas para nunca perder uma corrida",
        ]}
        image={entregadorBanner.url}
        imageAlt="UP Entregador"
        variant="dark-orange"
        reverse
        cta="Baixar UP Entregador"
        href="https://apps.apple.com/gb/app/up-entregador/id6763692140"
      />

      <EntregadorGallery />

      <AppShowcase
        id="cliente"
        eyebrow="UP Cliente"
        appIcon={iconCliente.url}
        title={<>Seu delivery <em>do seu jeito.</em></>}
        description="Peça nos melhores restaurantes, mercados e farmácias — e receba onde estiver. Pagamento seguro, rastreio em tempo real e Clube de Pontos."
        features={[
          "Restaurantes, mercados, farmácias e muito mais",
          "Acompanhe em tempo real cada etapa",
          "Clube de Pontos com benefícios exclusivos",
          "Entrega rápida, ágil e segura",
        ]}
        image={clienteBanner.url}
        imageAlt="UP Cliente"
        variant="orange"
        cta="Baixar UP Cliente"
        href="https://apps.apple.com/gb/app/up-cliente/id6763890851"
      />

      <HowItWorks />
      <DownloadCTA />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
