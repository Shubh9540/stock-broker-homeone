import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaAngleRight,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaYoutube,
} from 'react-icons/fa';
import { FooterProps } from '@/types/templates.types';

const renderSocialIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaFacebookF':
      return <FaFacebookF />;
    case 'FaInstagram':
      return <FaInstagram />;
    case 'FaLinkedinIn':
      return <FaLinkedinIn />;
    case 'FaYoutube':
      return <FaYoutube />;
    default:
      return null;
  }
};

export const Footer = ({ data }: FooterProps) => {
  if (!data) return null;

  return (
    <footer className="w-full bg-[var(--color-heading)] text-white">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-10 px-4 py-10 md:grid-cols-2 md:px-6 lg:grid-cols-12 lg:gap-12 lg:px-8 lg:py-14">
        {/* Brand & About Column */}
        <div className="lg:col-span-5 lg:pr-6">
          <Link href={data.logoUrl} className="inline-block" aria-label={data.logoAlt}>
            <Image
              src={data.logo}
              alt={data.logoAlt}
              width={320}
              height={100}
              className="h-auto w-64 object-contain"
            />
          </Link>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-white/75 sm:text-base">
            {data.description}
          </p>
        </div>

        {/* Quick Links Column */}
        <div className="lg:col-span-3">
          <h2 className="text-lg font-bold">{data.quickLinksTitle}</h2>
          <span className="mt-3 block h-1 w-10 bg-[var(--color-primary)]" />
          <ul className="mt-5 space-y-3">
            {data.quickLinks.map((link) => (
              <li key={link.id}>
                <Link
                  href={link.url}
                  className="flex items-center gap-3 text-sm text-white/75 transition-colors duration-300 hover:text-[var(--color-accent-lighter)]"
                >
                  <FaAngleRight className="shrink-0 text-[var(--color-accent-cyan)]" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info Column */}
        <div className="lg:col-span-4 lg:border-l lg:border-white/15 lg:pl-10">
          <h2 className="text-lg font-bold">{data.contactTitle}</h2>
          <span className="mt-3 block h-1 w-10 bg-[var(--color-primary)]" />
          <ul className="mt-5 space-y-5">
            <li className="flex items-start gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-navy-light)] text-white">
                <FaMapMarkerAlt />
              </span>
              <span className="pt-1 text-sm leading-6 text-white/75">{data.contactInfo.address}</span>
            </li>
            <li className="flex items-center gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-navy-light)] text-white">
                <FaPhoneAlt />
              </span>
              <Link href={`tel:${data.contactInfo.phone}`} className="text-sm text-white/75 transition-colors hover:text-[var(--color-accent-lighter)]">
                {data.contactInfo.phone}
              </Link>
            </li>
            <li className="flex items-center gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-navy-light)] text-white">
                <FaEnvelope />
              </span>
              <Link href={`mailto:${data.contactInfo.email}`} className="text-sm text-white/75 transition-colors hover:text-[var(--color-accent-lighter)]">
                {data.contactInfo.email}
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/15">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-5 px-4 py-5 text-center md:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8 lg:text-left">
          <p className="text-xs text-white/70 sm:text-sm">{data.copyrightText}</p>

          <div className="flex items-center justify-center gap-3">
            {data.socialLinks.map((social) => (
              <Link
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-primary-accent)] text-sm text-white transition-colors duration-300 hover:bg-[var(--color-primary)]"
              >
                {renderSocialIcon(social.icon)}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
