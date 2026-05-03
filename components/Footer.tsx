"use client";

import React from 'react';
import { Github, Mail, Globe, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="space-y-4 max-w-xs">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center text-white font-bold">R</div>
              <span className="text-xl font-bold tracking-tight text-slate-900">Clinic Manager</span>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed">
              Empowering healthcare providers with modern digital tools for better patient outcomes and efficient clinic operations.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
            <div>
              <h4 className="font-bold text-slate-900 mb-4 uppercase text-xs tracking-widest">Resources</h4>
              <ul className="space-y-2 text-sm text-slate-500">
                <li><a href="#docs" className="hover:text-primary-600">Setup Guide</a></li>
                <li><a href="#screens" className="hover:text-primary-600">Visual Tour</a></li>
                <li><a href="#architecture" className="hover:text-primary-600">Architecture</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-4 uppercase text-xs tracking-widest">Community</h4>
              <ul className="space-y-2 text-sm text-slate-500">
                <li><a href="https://github.com/algospider/Ramm" className="hover:text-primary-600">GitHub</a></li>
                <li><a href="https://github.com/algospider/Ramm/issues" className="hover:text-primary-600">Issues</a></li>
                <li><a href="https://github.com/algospider/Ramm/pulls" className="hover:text-primary-600">Contributions</a></li>
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <h4 className="font-bold text-slate-900 mb-4 uppercase text-xs tracking-widest">Contact</h4>
              <div className="flex gap-4">
                <a href="mailto:mohanrajauria@gmail.com" className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 hover:text-primary-600 hover:border-primary-100 transition-all">
                  <Mail size={18} />
                </a>
                <a href="https://github.com/algospider" className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 hover:text-primary-600 hover:border-primary-100 transition-all">
                  <Github size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <p>© 2024 Clinic Manager Project. Open source under MIT License.</p>
          <p className="flex items-center gap-1">
            Developed with <Heart size={12} className="text-rose-500 fill-rose-500" /> by <a href="https://github.com/algospider" className="text-slate-600 font-bold hover:text-primary-600 transition-colors">algospider</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
