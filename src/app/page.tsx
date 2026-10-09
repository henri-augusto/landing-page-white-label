import { brand } from "@/brand/brand.config";
import { Logo } from "@/components/logo";
import { Benefits } from "@/sections/benefits";
import { Contact } from "@/sections/contact";
import { Footer } from "@/sections/footer";
import { Hero } from "@/sections/hero";
import { Navbar } from "@/sections/navbar";
import { Process } from "@/sections/process";
import { Services } from "@/sections/services";
import { Showcase } from "@/sections/showcase";
import { Testimonials } from "@/sections/testimonials";

export default function Home() {
  const { sections, nav } = brand;

  return (
    <>
      <Navbar logo={<Logo />} links={nav.links} cta={nav.cta} />
      <main>
        <Hero />
        {sections.services ? <Services /> : null}
        {sections.showcase ? <Showcase /> : null}
        {sections.benefits ? <Benefits /> : null}
        {sections.process ? <Process /> : null}
        {sections.testimonials ? <Testimonials /> : null}
        {sections.contact ? <Contact /> : null}
      </main>
      <Footer />
    </>
  );
}
