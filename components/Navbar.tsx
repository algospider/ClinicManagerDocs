"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X, Github } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Screens', href: '#screens' },
    { name: 'Docs', href: '#docs' },
    { name: 'Architecture', href: '#architecture' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-primary-200">
              R
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900 hidden sm:block">
              Clinic Manager
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://github.com/algospider/Ramm"
              className="inline-flex items-center gap-2 bg-slate-900 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-slate-800 transition-all shadow-md active:scale-95"
            >
              <Github size={18} />
              <span>GitHub</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-primary-600 transition-colors p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg border-b border-slate-100 animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-4 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-primary-600 rounded-xl transition-all"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="px-3 pt-4">
              <a
                href="https://github.com/algospider/Ramm"
                className="flex items-center justify-center gap-2 bg-slate-900 text-white px-5 py-3 rounded-xl text-base font-semibold shadow-lg"
                onClick={() => setIsOpen(false)}
              >
                <Github size={20} />
                <span>View on GitHub</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
