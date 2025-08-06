'use client';

import { useState } from 'react';
import { NavItem } from '@/types';

const navItems: NavItem[] = [
  { href: '#story', label: 'Our Story' },
  { href: '#how-to', label: 'How to Use' },
  { href: '#b2b', label: 'B2B Partnership' },
  { href: '#store', label: 'Online Store' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full px-5 py-4 lg:px-20 bg-[rgba(26,26,46,0.9)] backdrop-blur-md border-b border-white/10">
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="text-4xl md:text-5xl font-bold text-white tracking-wider font-playfair-display">LUNA INK</div>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-10">
          {navItems.map((item) => (
            <li key={item.href}>
              <a 
                href={item.href} 
                className="text-[#e0e0e0] hover:text-[#f0a500] transition-colors duration-300 text-base lg:text-lg font-medium"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 mt-0 bg-[rgba(26,26,46,0.95)] backdrop-blur-md border-b border-white/10">
          <ul className="space-y-1 py-4 px-5">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block py-3 text-[#e0e0e0] hover:text-[#f0a500] transition-colors duration-300 text-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}