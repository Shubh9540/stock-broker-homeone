import React from 'react';
import Link from 'next/link';
import { StockBrokerTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';

export default function NotFoundPage() {
  const templateData: StockBrokerTemplateData = rawData;
  const sectionData = templateData?.categories?.StockBroker?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;
  const notFound = commonData.notFound;

  return (
    <main className="bg-white min-h-screen flex flex-col">
      <TopBar data={sectionData.TopBar?.variants?.StockBrokerTopBar2} />
      <Header data={sectionData.Header?.variants?.StockBrokerHeader2} />
      
      <section className="flex flex-1 items-center justify-center py-16 px-4">
        <div className="text-center max-w-md mx-auto">
          <h1 className="text-7xl font-extrabold text-[var(--color-primary)]">{notFound?.code || '404'}</h1>
          <h2 className="mt-4 text-2xl font-bold text-[var(--color-heading)]">{notFound?.title || 'Page Not Found'}</h2>
          <p className="mt-2 text-sm text-[var(--color-text-light)]">{notFound?.description || 'The page you are looking for does not exist.'}</p>
          <Link
            href={notFound?.buttonUrl || '/'}
            className="mt-6 inline-flex items-center justify-center rounded-lg bg-[var(--color-primary)] px-6 py-3 text-sm font-semibold text-white shadow hover:bg-[var(--color-primary-hover)] transition-colors"
          >
            {notFound?.buttonText || 'Back to Home'}
          </Link>
        </div>
      </section>

      <Footer data={commonData.Footer} />
    </main>
  );
}
