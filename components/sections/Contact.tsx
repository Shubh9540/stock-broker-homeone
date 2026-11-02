"use client";

import React, { useState } from 'react';
import { ContactProps } from '@/types/templates.types';
import {
  FaArrowRight,
  FaBriefcase,
  FaChevronDown,
  FaEnvelope,
  FaLock,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaRegCommentDots,
  FaShieldAlt,
  FaUser,
  FaUsers,
} from 'react-icons/fa';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaPhoneAlt':
      return <FaPhoneAlt />;
    case 'FaShieldAlt':
      return <FaShieldAlt />;
    case 'FaUsers':
      return <FaUsers />;
    case 'FaEnvelope':
      return <FaEnvelope />;
    case 'FaMapMarkerAlt':
      return <FaMapMarkerAlt />;
    default:
      return null;
  }
};

export const Contact = ({ data }: ContactProps) => {
  const [submitted, setSubmitted] = useState(false);

  if (!data) return null;

  return (
    <section id="contact" className="relative overflow-hidden bg-white py-8 lg:py-12">
      <div className="pointer-events-none absolute left-0 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[var(--color-bg-tint-3)] opacity-80 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-1/3 h-80 w-80 translate-x-1/2 rounded-full bg-[var(--color-bg-tint-3)] opacity-80 blur-3xl" />

      <div className="relative mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-6">
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-8 bg-[var(--color-primary-dark)]" />
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-primary-dark)]">{data.intro.eyebrow}</span>
            </div>
            <h1 className="text-4xl font-extrabold leading-tight text-[var(--color-heading)] md:text-5xl">
              {data.intro.title} <span className="text-[var(--color-primary-dark)]">{data.intro.titleHighlight}</span>
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-6 text-[var(--color-text-light)] md:text-base">{data.intro.description}</p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 lg:col-span-6">
            {data.intro.highlights.map((highlight) => (
              <div key={highlight.id} className="text-center">
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-bg-tint-5)] text-xl text-[var(--color-primary-dark)]">
                  {renderIcon(highlight.icon)}
                </span>
                <h2 className="mt-3 text-sm font-bold text-[var(--color-heading)]">{highlight.title}</h2>
                <p className="mx-auto mt-1 max-w-36 text-xs leading-5 text-[var(--color-text-light)]">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 items-stretch gap-5 lg:grid-cols-12">
          <div className="rounded-lg border border-[var(--color-border-card)] bg-white p-5 shadow-[0_16px_45px_rgba(15,64,120,0.07)] md:p-7 lg:col-span-7">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[var(--color-primary-dark)]" />
                <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-primary-dark)]">{data.form.eyebrow}</h2>
              </div>
              <p className="text-xs text-[var(--color-text-light)]">{data.form.helperText}</p>
            </div>

            <form
              className="mt-5 space-y-4"
              onChange={() => setSubmitted(false)}
              onSubmit={(event) => {
                event.preventDefault();
                setSubmitted(true);
                event.currentTarget.reset();
              }}
            >
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <label className="relative block">
                  <FaUser className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm text-[var(--color-text-subtle)]" />
                  <input name="fullName" type="text" required placeholder={data.form.fullNamePlaceholder} className="w-full rounded-md border border-[var(--color-border-card)] bg-[var(--color-bg-card-alt)] py-3 pl-11 pr-4 text-sm text-[var(--color-heading)] outline-none transition focus:border-[var(--color-primary-dark)] focus:ring-2 focus:ring-[var(--color-primary-dark)]/10" />
                </label>
                <label className="relative block">
                  <FaPhoneAlt className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm text-[var(--color-text-subtle)]" />
                  <input name="phone" type="tel" required placeholder={data.form.phonePlaceholder} className="w-full rounded-md border border-[var(--color-border-card)] bg-[var(--color-bg-card-alt)] py-3 pl-11 pr-4 text-sm text-[var(--color-heading)] outline-none transition focus:border-[var(--color-primary-dark)] focus:ring-2 focus:ring-[var(--color-primary-dark)]/10" />
                </label>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <label className="relative block">
                  <FaEnvelope className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm text-[var(--color-text-subtle)]" />
                  <input name="email" type="email" required placeholder={data.form.emailPlaceholder} className="w-full rounded-md border border-[var(--color-border-card)] bg-[var(--color-bg-card-alt)] py-3 pl-11 pr-4 text-sm text-[var(--color-heading)] outline-none transition focus:border-[var(--color-primary-dark)] focus:ring-2 focus:ring-[var(--color-primary-dark)]/10" />
                </label>
                <label className="relative block">
                  <FaBriefcase className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm text-[var(--color-text-subtle)]" />
                  <select name="service" required defaultValue="" className="w-full appearance-none rounded-md border border-[var(--color-border-card)] bg-[var(--color-bg-card-alt)] py-3 pl-11 pr-10 text-sm text-[var(--color-text-slate)] outline-none transition focus:border-[var(--color-primary-dark)] focus:ring-2 focus:ring-[var(--color-primary-dark)]/10">
                    <option value="" disabled>{data.form.servicePlaceholder}</option>
                    {data.form.servicesList.map((service) => (
                      <option key={service.id} value={service.value}>{service.label}</option>
                    ))}
                  </select>
                  <FaChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs text-[var(--color-text-subtle)]" />
                </label>
              </div>

              <label className="relative block">
                <FaRegCommentDots className="pointer-events-none absolute left-4 top-4 text-sm text-[var(--color-text-subtle)]" />
                <textarea name="message" required rows={5} placeholder={data.form.messagePlaceholder} className="w-full resize-none rounded-md border border-[var(--color-border-card)] bg-[var(--color-bg-card-alt)] py-3 pl-11 pr-4 text-sm text-[var(--color-heading)] outline-none transition focus:border-[var(--color-primary-dark)] focus:ring-2 focus:ring-[var(--color-primary-dark)]/10" />
              </label>

              <button type="submit" className="flex w-full items-center justify-center gap-3 rounded-md bg-[var(--color-primary-dark)] px-5 py-3.5 text-sm font-bold text-white shadow-[0_10px_25px_rgba(8,118,255,0.24)] transition hover:bg-[var(--color-primary-active)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-dark)] focus:ring-offset-2">
                {data.form.buttonText}
                <FaArrowRight />
              </button>

              {submitted && (
                <p role="status" className="rounded-md border border-[var(--color-success-border)] bg-[var(--color-success-bg)] px-4 py-3 text-sm font-semibold text-[var(--color-success-text)]">
                  {data.form.successMessage}
                </p>
              )}

              <div className="flex items-start justify-center gap-2 text-center text-xs leading-5 text-[var(--color-text-light)]">
                <FaLock className="mt-1 flex-shrink-0" />
                <p>{data.form.privacyText}</p>
              </div>
            </form>
          </div>

          <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-[var(--color-navy-rich)] to-[var(--color-navy-deep)] p-6 text-white shadow-[0_18px_45px_rgba(4,31,74,0.2)] md:p-8 lg:col-span-5">
            <div className="pointer-events-none absolute -bottom-10 -right-8 flex items-end gap-2 opacity-10">
              <span className="h-20 w-7 bg-[var(--color-accent-sky)]" />
              <span className="h-32 w-7 bg-[var(--color-accent-sky)]" />
              <span className="h-44 w-7 bg-[var(--color-accent-sky)]" />
            </div>

            <div className="relative">
              <div className="mb-3 flex items-center gap-3">
                <span className="h-px w-8 bg-[var(--color-accent-glow)]" />
                <span className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-accent-pastel)]">{data.contactPanel.eyebrow}</span>
              </div>
              <h2 className="text-3xl font-extrabold leading-tight md:text-4xl">
                {data.contactPanel.title1}
                <span className="block text-[var(--color-primary-bright)]">{data.contactPanel.titleHighlight}</span>
              </h2>
              <p className="mt-4 text-sm leading-6 text-[var(--color-border-muted)]">{data.contactPanel.description}</p>

              <div className="mt-7 space-y-5">
                {data.contactPanel.items.map((item) => (
                  <div key={item.id} className="flex items-start gap-4">
                    <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-[var(--color-primary-dark)] text-lg text-white">
                      {renderIcon(item.icon)}
                    </span>
                    <div>
                      <h3 className="font-bold text-white">{item.title}</h3>
                      <div className="mt-1 space-y-1">
                        {item.lines.map((line) => (
                          <p key={line.id} className="text-sm leading-5 text-[var(--color-border-muted)]">{line.text}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="relative mt-8 overflow-hidden rounded-lg border border-[var(--color-border-card)] bg-[var(--color-bg-tint-8)] shadow-[0_14px_40px_rgba(15,64,120,0.08)]">
          <div className="relative z-10 m-4 rounded-lg bg-white p-5 shadow-[0_12px_35px_rgba(15,64,120,0.14)] sm:absolute sm:left-3 sm:top-3 sm:m-0 sm:w-80 md:p-6">
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-8 bg-[var(--color-primary-dark)]" />
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-primary-dark)]">{data.location.eyebrow}</span>
            </div>
            <h2 className="text-2xl font-extrabold text-[var(--color-heading)]">{data.location.title}</h2>
            <p className="mt-3 text-sm leading-6 text-[var(--color-text-light)]">{data.location.description}</p>
            <a href={data.location.buttonUrl} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-3 rounded-md bg-[var(--color-primary-dark)] px-5 py-3 text-sm font-bold text-white transition hover:bg-[var(--color-primary-active)]">
              {data.location.buttonText}
              <FaArrowRight />
            </a>
          </div>

          <iframe src={data.location.mapUrl} title={data.location.mapTitle} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="h-80 w-full border-0 sm:h-96" />
        </div>
      </div>
    </section>
  );
};
