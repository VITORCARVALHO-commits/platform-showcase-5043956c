import { ArrowUp } from "lucide-react";

export const Logo = ({ label = "Empresas", color = "orange" }: { label?: string; color?: "orange" | "blue" }) => (
  <div className="inline-flex items-center gap-2 font-display font-extrabold">
    <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-glow text-primary-foreground">
      <ArrowUp className="h-5 w-5" strokeWidth={3} />
    </div>
    <div className="leading-none">
      <div className="text-2xl tracking-tight">UP</div>
      <div className={`text-[10px] font-semibold tracking-[0.2em] uppercase ${color === "blue" ? "text-secondary" : "text-primary"}`}>{label}</div>
    </div>
  </div>
);
