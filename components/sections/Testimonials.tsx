'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { FaArrowLeft, FaArrowRight, FaQuoteRight, FaStar } from 'react-icons/fa';
import { TestimonialsProps } from '@/types/templates.types';

export const Testimonials = ({ data }: TestimonialsProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!data?.testimonials.length) return;

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % data.testimonials.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, [data]);

  if (!data?.testimonials.length) return null;

  const total = data.testimonials.length;
  const visibleTestimonials = [0, 1, 2].map(
    (offset) => data.testimonials[(activeIndex + offset) % total],
  );

  const showPrevious = () => {
    setActiveIndex((current) => (current - 1 + total) % total);
  };

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % total);
  };

  return (
    <section id="testimonials" className="w-full overflow-hidden bg-[var(--color-bg-subtle)] py-8 lg:py-12">
      <div className="mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8">
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-0.5 w-8 bg-[var(--color-accent-soft)]" />
            <span className="text-sm font-bold text-[var(--color-primary)]">{data.subtitle}</span>
            <span className="h-0.5 w-8 bg-[var(--color-accent-soft)]" />
          </div>

          <h2 className="text-3xl font-extrabold leading-tight text-[var(--color-heading)] md:text-4xl">
            {data.title1}{' '}
            <span className="text-[var(--color-primary)]">{data.title2}</span>
          </h2>

          <p className="mt-3 text-sm leading-6 text-[var(--color-text-light)] sm:text-base">
            {data.description}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {visibleTestimonials.map((testimonial, index) => (
            <article
              key={`${testimonial.id}-${activeIndex}`}
              className={`flex min-h-72 flex-col rounded-md border border-[var(--color-border-soft)] bg-white shadow-sm transition-all duration-500 ${index === 1 ? 'hidden md:flex' : ''} ${index === 2 ? 'hidden lg:flex' : ''}`}
            >
              <div className="flex flex-1 flex-col px-6 pb-5 pt-5 sm:px-7">
                <div className="mb-4 flex items-start justify-between gap-4">
                  <div className="flex gap-1 text-[var(--color-warning)]">
                    {Array.from({ length: testimonial.rating }, (_, starIndex) => (
                      <FaStar key={`${testimonial.id}-star-${starIndex}`} className="text-lg" />
                    ))}
                  </div>
                  <div className="flex h-12 w-14 items-center justify-center rounded-md bg-[var(--color-bg-tint-2)] text-2xl text-[var(--color-primary)]">
                    <FaQuoteRight />
                  </div>
                </div>

                <p className="text-sm leading-6 text-[var(--color-text-steel)] sm:text-base">
                  {testimonial.quote}
                </p>
              </div>

              <div className="relative border-t border-[var(--color-accent-soft)] px-6 py-4 sm:px-7">
                <span className="absolute -top-2 left-4/5 h-4 w-4 -translate-x-1/2 rotate-45 border-b border-r border-[var(--color-accent-soft)] bg-white" />
                <div className="flex items-center gap-4">
                  <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border-2 border-[var(--color-accent-soft)] bg-[var(--color-bg-tint-2)]">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      fill
                      sizes="56px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-[var(--color-heading)]">{testimonial.name}</h3>
                    <p className="mt-0.5 text-sm text-[var(--color-text-light)]">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={showPrevious}
            aria-label={data.previousLabel}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-primary)] text-[var(--color-primary)] transition-colors duration-300 hover:bg-[var(--color-primary)] hover:text-white"
          >
            <FaArrowLeft />
          </button>
          <button
            type="button"
            onClick={showNext}
            aria-label={data.nextLabel}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-primary)] text-[var(--color-primary)] transition-colors duration-300 hover:bg-[var(--color-primary)] hover:text-white"
          >
            <FaArrowRight />
          </button>

          <span className="mx-2 hidden h-px w-28 bg-[var(--color-border-alt)] sm:block" />

          <div className="flex items-center gap-2">
            {data.testimonials.map((testimonial, index) => (
              <button
                key={testimonial.id}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`${data.slideLabel} ${index + 1}`}
                className={`h-2.5 w-2.5 rounded-full transition-colors duration-300 ${activeIndex === index ? 'bg-[var(--color-primary)]' : 'bg-[var(--color-border-cool)]'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
