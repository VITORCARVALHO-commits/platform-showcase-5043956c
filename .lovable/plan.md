## Site de Marketing — Plataforma UP

Site institucional one-page, moderno e cinematográfico, apresentando os 3 apps da plataforma: **UP Empresas**, **UP Entregador** e **UP Cliente**. Estilo híbrido com cores próprias por seção, mockups dos celulares em destaque e efeitos visuais marcantes.

### Estrutura (one-page com navegação suave)

**1. Header fixo**
- Logo "UP" + menu (Plataforma, Apps, Como Funciona, Contato)
- Botão CTA "Baixar App"
- Fundo translúcido com blur ao rolar

**2. Hero cinematográfico (dark + glow laranja)**
- Headline grande: "A plataforma completa para o seu negócio"
- Subtítulo sobre conectar empresas, entregadores e clientes
- 3 mockups de celular flutuando em perspectiva 3D, com glow laranja de fundo
- Botões: "Baixar agora" + "Ver como funciona"
- Partículas/raios de luz animados ao fundo

**3. Os 3 Apps (híbrido por seção)**
Três blocos full-width alternados, cada um com sua identidade:

- **UP Empresas** (claro + azul): mockup do painel de pedidos, lista de benefícios para lojistas (restaurantes, açougues, mercados, papelarias). Card de destaque azul.
- **UP Entregador** (dark + laranja): mockup do mapa com glow laranja, ganhos sob controle, trabalhe no seu ritmo. Visual premium.
- **UP Cliente** (laranja vibrante): mockup do app de delivery, cards de restaurantes flutuando, badges App Store / Google Play.

Cada bloco com mockup grande, animação de entrada (fade + slide), cards de features ao lado.

**4. Funcionalidades detalhadas**
Grid de cards com ícones para cada app:
- Empresas: gestão de pedidos, controle de entregas, produtos organizados, dados na nuvem
- Entregador: pedidos em tempo real, ganhos transparentes, online/offline, alertas
- Cliente: delivery rápido, mercado e restaurantes, pagamento seguro, rastreio em tempo real

Cards com hover scale, glow na cor do app, ícones animados.

**5. Como funciona / Fluxo**
Diagrama visual horizontal mostrando a conexão dos 3 apps:
```
Cliente pede → Empresa prepara → Entregador entrega
```
Com setas animadas, ícones grandes, números de passo, linhas conectando com gradiente animado.

**6. CTA Download**
Seção full-width com gradiente dramático, mockups dos 3 apps lado a lado, badges de App Store e Google Play grandes, headline "Pronto para fazer acontecer?".

**7. Contato**
Formulário simples (nome, email, tipo de negócio, mensagem) + dados de contato. Layout em 2 colunas.

**8. Footer**
Logo, links rápidos, redes sociais, copyright.

### Efeitos cinematográficos

- **Hero**: mockups com transform 3D (rotateY/rotateX), glow laranja radial animado, partículas de luz, gradiente animado de fundo
- **Scroll reveal**: fade-in + slide-up nos elementos ao entrar na viewport (Intersection Observer)
- **Mockups dos celulares**: float animation contínua (subir/descer suave), tilt no hover
- **Cards**: hover com scale + glow colorido + leve elevação
- **Transições entre seções**: gradientes suaves ligando blocos, divisores em curva (igual ao mockup UP Empresas)
- **Botões**: shimmer/brilho passando, scale no hover
- **Headlines**: palavras-chave destacadas em laranja/azul aparecem com animação de digitação ou reveal sequencial
- **Linhas de luz**: raios diagonais sutis ao fundo das seções dark
- **Parallax leve** em elementos decorativos do hero

### Detalhes técnicos

- React + Tailwind, design system semântico em `index.css`
- Tokens HSL: laranja vibrante (UP Entregador/Cliente), azul corporativo (UP Empresas), backgrounds dark e light
- Mockups: copiar as 4 imagens enviadas para `src/assets/` e usar como imagens dos celulares/seções
- Componentes: `Header`, `Hero`, `AppShowcase` (reutilizado 3x com props), `Features`, `HowItWorks`, `DownloadCTA`, `ContactForm`, `Footer`
- Animações via Tailwind keyframes customizadas + classes utilitárias (`animate-fade-in`, `hover-scale`, float, glow)
- Intersection Observer hook para reveal on scroll
- Totalmente responsivo (mobile-first)
- Idioma: Português (PT-BR)
