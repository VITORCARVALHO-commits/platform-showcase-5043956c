import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import { ReactNode } from "react";

type Props = {
  id: string;
  eyebrow: string;
  title: ReactNode;
  description: string;
  features: string[];
  image: string;
  imageAlt: string;
  variant: "blue-light" | "dark-orange" | "orange";
  reverse?: boolean;
  cta?: string;
};

export const AppShowcase = ({
  id, eyebrow, title, description, features, image, imageAlt, variant, reverse, cta = "Conhecer",
}: Props) => {
  const ref = useReveal<HTMLElement>();

  const styles = {
    "blue-light": {
      bg: "bg-[hsl(210_30%_97%)] text-[hsl(222_47%_15%)]",
      eyebrow: "text-secondary",
      glow: "bg-blue-radial",
      btn: "bg-gradient-to-r from-secondary to-secondary-glow text-secondary-foreground",
      shadow: "glow-blue",
      check: "text-secondary",
      muted: "text-[hsl(215_16%_40%)]",
    },
    "dark-orange": {
      bg: "bg-[hsl(0_0%_3%)] text-foreground",
      eyebrow: "text-primary",
      glow: "bg-orange-radial",
      btn: "bg-gradient-to-r from-primary to-primary-glow text-primary-foreground",
      shadow: "glow-orange",
      check: "text-primary",
      muted: "text-muted-foreground",
    },
    orange: {
      bg: "bg-gradient-to-br from-[hsl(22_100%_55%)] to-[hsl(14_100%_45%)] text-white",
      eyebrow: "text-white/90",
      glow: "",
      btn: "bg-white text-[hsl(22_100%_45%)] hover:bg-white/90",
      shadow: "shadow-2xl",
      check: "text-white",
      muted: "text-white/85",
    },
  }[variant];

  return (
    <section id={id} ref={ref} className={`relative overflow-hidden py-28 ${styles.bg}`}>
      {styles.glow && <div className={`absolute -top-20 ${reverse ? "right-0" : "left-0"} h-[80%] w-[60%] ${styles.glow} opacity-70`} />}
      <div className={`container relative grid lg:grid-cols-2 gap-16 items-center ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
        <div className="reveal">
          <div className={`text-xs font-bold tracking-[0.25em] uppercase ${styles.eyebrow} mb-4`}>{eyebrow}</div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05]">{title}</h2>
          <p className={`mt-5 text-lg max-w-xl ${styles.muted}`}>{description}</p>
          <ul className="mt-8 space-y-3">
            {features.map((f) => (
              <li key={f} className="flex items-start gap-3">
                <Check className={`mt-1 h-5 w-5 flex-shrink-0 ${styles.check}`} strokeWidth={3} />
                <span className="text-base">{f}</span>
              </li>
            ))}
          </ul>
          <Button asChild size="lg" className={`mt-10 h-13 px-8 ${styles.btn} shimmer`}>
            <a href="#download">{cta}</a>
          </Button>
        </div>

        <div className="reveal relative">
          <div className={`relative rounded-[2rem] overflow-hidden ${styles.shadow}`}>
            <img src={image} alt={imageAlt} className="w-full h-auto float-y" />
          </div>
        </div>
      </div>
    </section>
  );
};
