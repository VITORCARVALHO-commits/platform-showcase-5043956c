import iconAsset from "@/assets/up-icon-main.png.asset.json";

export const Logo = ({ compact = false }: { compact?: boolean }) => (
  <div className="inline-flex items-center gap-3">
    <img
      src={iconAsset.url}
      alt="UP Plataforma"
      className={`${compact ? "h-10" : "h-12"} w-auto rounded-xl object-contain drop-shadow-[0_4px_18px_hsl(22_100%_55%/0.55)]`}
    />
    <div className="leading-none">
      <div className="font-display font-extrabold text-xl tracking-tight">UP</div>
      <div className="text-[10px] font-bold tracking-[0.28em] uppercase mt-1 text-primary">Plataforma</div>
    </div>
  </div>
);
