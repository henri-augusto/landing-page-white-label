"use client";

import { useEffect, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "motion/react";
import type { Link } from "@/brand/types";

export function Navbar({ logo, links, cta }: { logo: ReactNode; links: Link[]; cta: Link }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1024px)");
    const closeOnDesktop = () => {
      if (desktop.matches) setOpen(false);
    };
    closeOnDesktop();
    desktop.addEventListener("change", closeOnDesktop);
    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, []);

  return (
    <>
    <header className="fixed inset-x-0 top-0 z-50 bg-background/85 pt-[env(safe-area-inset-top)] backdrop-blur-md">
      <nav className="relative mx-auto flex w-full max-w-7xl items-center justify-between gap-3 px-5 py-3 md:px-8 lg:gap-6">
        <a href="#inicio" aria-label="Início" onClick={() => setOpen(false)} className="inline-flex min-h-11 min-w-0 items-center">
          {logo}
        </a>

        <div className="flex shrink-0 items-center gap-2 lg:gap-6">
          <ul className="hidden items-center text-sm lg:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="inline-flex min-h-11 items-center px-3 text-foreground/80 transition-colors hover:text-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href={cta.href}
            className="hidden min-h-11 items-center rounded-full bg-accent px-5 text-sm font-medium text-accent-foreground transition-transform duration-500 ease-fluid active:scale-[0.98] lg:inline-flex"
          >
            {cta.label}
          </a>

          <button
            type="button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="relative flex size-11 items-center justify-center rounded-full bg-foreground text-background lg:hidden"
          >
          <span
            className={`absolute h-px w-4 bg-current transition-transform duration-500 ease-fluid ${
              open ? "rotate-45" : "-translate-y-1"
            }`}
          />
          <span
            className={`absolute h-px w-4 bg-current transition-transform duration-500 ease-fluid ${
              open ? "-rotate-45" : "translate-y-1"
            }`}
          />
          </button>
        </div>
      </nav>
    </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            key="menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-background md:bg-foreground/25"
              onClick={() => setOpen(false)}
            />
            <div className="absolute inset-0 flex flex-col justify-end gap-8 overflow-y-auto bg-background px-8 pt-28 pb-[max(2.5rem,env(safe-area-inset-bottom))] md:left-auto md:w-[min(26rem,100%)] md:justify-center md:bg-background md:px-10 md:shadow-[0_24px_80px_-24px_color-mix(in_oklab,var(--color-foreground)_45%,transparent)]">
            <ul className="flex flex-col gap-2">
              {links.map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ type: "spring", stiffness: 120, damping: 20, delay: 0.05 * index }}
                >
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="inline-flex min-h-11 items-center font-display text-[clamp(2.25rem,8vw,3rem)] tracking-tight"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <a
              href={cta.href}
              onClick={() => setOpen(false)}
              className="inline-flex min-h-11 w-max items-center rounded-full bg-accent px-6 font-medium text-accent-foreground"
            >
              {cta.label}
            </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
