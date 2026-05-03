"use client";

import React from 'react';
import { motion } from 'framer-motion';

const tech = [
  { name: "Android SDK", level: "Target 34", icon: "🤖" },
  { name: "Java/Kotlin", level: "Core Logic", icon: "☕" },
  { name: "Firebase", level: "Real-time DB", icon: "🔥" },
  { name: "SQLite", level: "Persistence", icon: "📦" },
  { name: "Lottie", level: "Animations", icon: "✨" },
  { name: "Zxing", level: "Barcode", icon: "📷" },
  { name: "Retrofit", level: "Networking", icon: "🌐" },
  { name: "Material 3", level: "UI/UX", icon: "🎨" },
];

const TechStack = () => {
  return (
    <section id="tech" className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-6">
              Modern <span className="text-primary-400">Engineering</span> Stack
            </h2>
            <p className="text-lg text-slate-400 mb-10">
              Clinic Manager is built with industry-standard technologies to ensure stability, performance, and long-term maintainability.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {tech.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="bg-slate-800/50 p-4 rounded-2xl border border-slate-700/50 flex items-center gap-4 hover:border-primary-500/50 transition-all group"
                >
                  <div className="text-2xl group-hover:scale-110 transition-transform">{item.icon}</div>
                  <div>
                    <div className="font-bold text-sm">{item.name}</div>
                    <div className="text-xs text-slate-500">{item.level}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="aspect-video bg-gradient-to-br from-primary-600 to-blue-800 rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center p-12 relative">
               <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
               <div className="text-center z-10">
                  <div className="text-6xl font-black mb-2 tracking-tighter">APP_V1.0</div>
                  <div className="text-primary-200 font-mono text-sm tracking-widest uppercase">Production Ready Build</div>
               </div>
            </div>
            
            {/* Dots Pattern */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-[radial-gradient(#334155_2px,transparent_2px)] [background-size:16px_16px] opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
