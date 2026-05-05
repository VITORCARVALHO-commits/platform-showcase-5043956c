import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { AppShowcase } from "@/components/site/AppShowcase";
import { Features } from "@/components/site/Features";
import { HowItWorks } from "@/components/site/HowItWorks";
import { DownloadCTA } from "@/components/site/DownloadCTA";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import empresasImg from "@/assets/up-empresas.png";
import entregadorScreens from "@/assets/up-entregador-screens.png";
import clienteImg from "@/assets/up-cliente.jpg";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "UP Plataforma — O ecossistema que faz acontecer";
    const meta = document.querySelector('meta[name="description"]') || document.createElement("meta");
    meta.setAttribute("name", "description");
    meta.setAttribute("content", "Plataforma UP: 3 apps integrados — Empresas, Entregador e Cliente. Mais vendas, mais entregas, mais controle do pedido até a porta.");
    document.head.appendChild(meta);
  }, []);

  return (
    <main id="apps">
      <Header />
      <Hero />

      <AppShowcase
        id="empresas"
        eyebrow="UP Empresas"
        title={<>O controle que <span className="text-gradient-blue">todo negócio precisa.</span></>}
        description="Seja qual for o seu negócio, nosso app ajuda você a vender mais e ter tudo sob controle."
        features={[
          "Restaurantes, açougues, mercados e lojas em geral",
          "Organize pedidos e controle entregas",
          "Cadastro de produtos rápido e fácil",
          "Dados protegidos e na nuvem",
        ]}
        image={empresasImg}
        imageAlt="App UP Empresas"
        variant="blue-light"
        cta="Começar grátis"
      />

      <AppShowcase
        id="entregador"
        eyebrow="UP Entregador"
        title={<>Ganhe mais com <span className="text-gradient-orange">pedidos próximos.</span></>}
        description="Fique online e receba entregas em tempo real. Trabalhe no seu ritmo e acompanhe seus ganhos com clareza."
        features={[
          "Pedidos próximos no mapa em tempo real",
          "Saldo da semana, mês e total no app",
          "Online ou offline, você decide",
          "Experiência simples, rápida e eficiente",
        ]}
        image={entregadorScreens}
        imageAlt="App UP Entregador — telas"
        variant="dark-orange"
        reverse
        cta="Começar a entregar"
      />

      <AppShowcase
        id="cliente"
        eyebrow="UP Cliente"
        title={<>Tudo que você precisa em <em>um só app.</em></>}
        description="Delivery rápido, mercado, restaurantes e muito mais — pague de forma segura e acompanhe em tempo real."
        features={[
          "Delivery rápido na sua casa",
          "Mercado, restaurantes e muito mais",
          "Pagamento seguro e facilitado",
          "Rastreio do pedido em tempo real",
        ]}
        image={clienteImg}
        imageAlt="App UP Cliente"
        variant="orange"
        cta="Pedir agora"
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
