import type { Icon as PhosphorIcon, IconWeight } from "@phosphor-icons/react";
import {
  Buildings,
  CalendarCheck,
  ChartLineUp,
  ChatCircle,
  CircleHalf,
  ClipboardText,
  Compass,
  Diamond,
  Gear,
  Handshake,
  Heart,
  Leaf,
  Lightbulb,
  Mountains,
  ShieldCheck,
  SquareHalf,
  Star,
  Target,
  Tooth,
  Triangle,
  Users,
} from "@phosphor-icons/react/ssr";

const icons = {
  buildings: Buildings,
  calendar: CalendarCheck,
  chart: ChartLineUp,
  chat: ChatCircle,
  "circle-half": CircleHalf,
  clipboard: ClipboardText,
  compass: Compass,
  diamond: Diamond,
  gear: Gear,
  handshake: Handshake,
  heart: Heart,
  leaf: Leaf,
  lightbulb: Lightbulb,
  mountains: Mountains,
  shield: ShieldCheck,
  "square-half": SquareHalf,
  star: Star,
  target: Target,
  tooth: Tooth,
  triangle: Triangle,
  users: Users,
} satisfies Record<string, PhosphorIcon>;

export type IconName = keyof typeof icons;

export function Icon({
  name,
  size = 22,
  weight = "light",
  className,
}: {
  name: IconName;
  size?: number;
  weight?: IconWeight;
  className?: string;
}) {
  const Component = icons[name];
  return <Component size={size} weight={weight} className={className} aria-hidden />;
}
