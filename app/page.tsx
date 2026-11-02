import React from 'react';
import { StockBrokerTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Hero } from '@/components/sections/Hero';
import { AboutUs } from '@/components/sections/AboutUs';
import { Services } from '@/components/sections/Services';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { Process } from '@/components/sections/Process';
import { Testimonials } from '@/components/sections/Testimonials';
import { Team } from '@/components/sections/Team';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/common/Footer';

export const dynamic = 'force-dynamic';

export default function Home() {
  const templateData: StockBrokerTemplateData = rawData;
  const sectionData = templateData?.categories?.StockBroker?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  return (
    <main className="bg-[var(--color-bg-main)] min-h-screen flex flex-col scroll-smooth">
      <div className="relative">
        <TopBar data={sectionData.TopBar?.variants?.StockBrokerTopBar2} />
        <Header data={sectionData.Header?.variants?.StockBrokerHeader2} />
        <Hero data={sectionData.Hero?.variants?.StockBrokerHero2} />
      </div>
      <AboutUs data={sectionData.AboutUs?.variants?.StockBrokerAboutUs2} />
      <Services data={sectionData.Services?.variants?.StockBrokerServices2} isSlider={true} />
      <WhyChooseUs data={sectionData.whyChooseUs?.variants?.StockBrokerWhyChooseUs2} />
      <Process data={sectionData.Process?.variants?.StockBrokerProcess2} />
      <Testimonials data={sectionData.Testimonials?.variants?.StockBrokerTestimonials2} />
      <Team data={sectionData.Team?.variants?.StockBrokerTeam2} />
      <Contact data={sectionData.contact?.variants?.StockBrokerContact2} />
      <Footer data={commonData.Footer} />
    </main>
  );
}
