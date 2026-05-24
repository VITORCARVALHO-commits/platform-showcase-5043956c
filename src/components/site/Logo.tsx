import logoSrc from "@/assets/up-plataforma-logo.png";

export const Logo = ({ label = "Plataforma", color = "orange" }: { label?: string; color?: "orange" | "blue" }) => (
  <div className="inline-flex items-center gap-3 font-display font-extrabold">
    <div className="relative flex h-11 w-11 items-center justify-center rounded-xl overflow-hidden bg-gradient-to-br from-primary to-primary-glow">
      <img src={logoSrc} alt="UP Plataforma" className="h-11 w-11 object-cover" />
    </div>
    <div className="leading-none">
      <div className="text-2xl tracking-tight">UP</div>
      <div className={`text-[10px] font-semibold tracking-[0.22em] uppercase mt-1 ${color === "blue" ? "text-secondary" : "text-primary"}`}>{label}</div>
    </div>
  </div>
);
