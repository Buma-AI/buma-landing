import Header from '@/components/layout/Header';
import Hero from '@/components/sections/Hero';
import Problem from '@/components/sections/Problem';
import Solution from '@/components/sections/Solution';
import HowItWorks from '@/components/sections/HowItWorks';
import Pillars from '@/components/sections/Pillars';
import Benefits from '@/components/sections/Benefits';
import CTA from '@/components/sections/CTA';
import FAQ from '@/components/sections/FAQ';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Hero />
        <div className="section-separator my-8" />
        <Problem />
        <div className="section-separator my-8" />
        <Solution />
        <div className="section-separator my-8" />
        <HowItWorks />
        <div className="section-separator my-8" />
        <Pillars />
        <div className="section-separator my-8" />
        <Benefits />
        <div className="section-separator my-8" />
        <FAQ />
        <div className="section-separator my-8" />
        <CTA />
        <Footer />
      </main>
    </>
  );
}
