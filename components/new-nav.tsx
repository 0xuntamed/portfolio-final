'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Mail, Phone } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (!section) {
      return;
    }

    if (window.location.hash) {
      window.history.replaceState(
        null,
        '',
        window.location.pathname + window.location.search
      );
    }

    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 transition-all duration-500">
      <div
        className={`mx-auto flex items-center transition-all duration-500 ease-in-out ${
          isScrolled
            ? 'w-fit justify-center bg-purple-500 backdrop-blur-md mt-4 rounded-full h-14 px-6 shadow-lg'
            : 'max-w-2xl justify-between bg-transparent h-20 px-6'
        }`}
      >
        {/* Logo */}
        <button
          type="button"
          onClick={() => scrollToSection('hero')}
          className="text-xl shrink-0 whitespace-nowrap text-black transition-colors duration-500"
        >
          bilal ahmed.
        </button>

        {/* Nav Links — fade out on scroll */}
        <ul
          className={`flex gap-6 overflow-hidden transition-all duration-500 ease-in-out ${
            isScrolled
              ? 'opacity-0 w-0 pointer-events-none ml-0'
              : 'opacity-100 w-auto ml-auto justify-end'
          }`}
        >
          <li>
            <button
              type="button"
              onClick={() => scrollToSection('experience')}
              className="transition-colors hover:text-black/70"
            >
              work
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick={() => scrollToSection('projects')}
              className="transition-colors hover:text-black/70"
            >
              projects
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick={() => scrollToSection('blogs')}
              className="transition-colors hover:text-black/70"
            >
              blogs
            </button>
          </li>
          <li>
            <Link href="https://digitalgarden-tan.vercel.app/" target='_blank' className="transition-colors hover:text-black/70">
              vault
            </Link>
          </li>
        </ul>

        {/* Action Icons — appear on scroll */}
        <div
          className={`flex items-center gap-4 overflow-hidden transition-all duration-500 ease-in-out ${
            isScrolled
              ? 'opacity-100 w-auto ml-4'
              : 'opacity-0 w-0 pointer-events-none'
          }`}
        >
          <a
            href="mailto:bilal@example.com"
            aria-label="Send email"
            className="text-white hover:text-gray-300 transition-colors"
          >
            <Mail size={20} />
          </a>
          <a
            href="tel:+1234567890"
            aria-label="Call"
            className="text-white hover:text-gray-300 transition-colors"
          >
            <Phone size={20} />
          </a>
        </div>
      </div>
    </nav>
  );
}
