import { brand } from "@/brand/brand.config";
import { Logo } from "@/components/logo";

export function Footer() {
  const { footer } = brand;
  const links = footer.columns.flatMap((column) => column.links);

  return (
    <footer className="mx-auto w-full max-w-7xl px-5 pt-16 pb-[max(7rem,calc(5.5rem+env(safe-area-inset-bottom)))] md:px-8">
      <div className="text-accent">
        <Logo size="lg" />
      </div>
      <p className="mt-4 max-w-[42ch] text-[15px] leading-relaxed text-muted">{footer.tagline}</p>
      <div className="mt-10 flex flex-col gap-4 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
        <ul className="flex flex-wrap gap-x-8 gap-y-2">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="inline-flex min-h-11 items-center text-sm text-foreground/80 transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="text-sm text-muted">{footer.copyright}</p>
      </div>
    </footer>
  );
}
