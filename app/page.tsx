import Header from '@/components/layout/Header';
import Hero from '@/components/sections/Hero';
import Problem from '@/components/sections/Problem';
import Solution from '@/components/sections/Solution';
import HowItWorks from '@/components/sections/HowItWorks';
import Pillars from '@/components/sections/Pillars';
import Subjects from '@/components/sections/Subjects';
import Benefits from '@/components/sections/Benefits';
import CTA from '@/components/sections/CTA';
import EarlyAdopters from '@/components/sections/EarlyAdopters';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Hero />
        <Problem />
        <Solution />
        <HowItWorks />
        <Pillars />
        <Subjects />
        <Benefits />
        <CTA />
        <EarlyAdopters />
        <Footer />
      </main>
    </>
  );
}
