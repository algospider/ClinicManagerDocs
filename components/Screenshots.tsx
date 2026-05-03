"use client";

import React from 'react';
import { motion } from 'framer-motion';

const screenshots = [
  { src: "assets/img/1.png", title: "Login Screen" },
  { src: "assets/img/2.png", title: "Dashboard" },
  { src: "assets/img/3.png", title: "Patient Search" },
  { src: "assets/img/4.png", title: "Patient Registration" },
  { src: "assets/img/5.png", title: "Check-in Manager" },
  { src: "assets/img/6.png", title: "Clinical Visit" },
  { src: "assets/img/7.png", title: "Billing Console" },
  { src: "assets/img/8.png", title: "Inventory List" },
  { src: "assets/img/9.png", title: "Staff Controls" },
  { src: "assets/img/10.png", title: "Reporting Analytics" },
];

const Screenshots = () => {
  return (
    <section id="screens" className="py-24 bg-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-4">
              A Unified <span className="text-primary-400">Digital Experience</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Visual tour of the Clinic Manager workspace.
            </p>
          </motion.div>
        </div>

        <div className="relative">
          <div className="flex overflow-x-auto pb-12 gap-6 snap-x no-scrollbar">
            {screenshots.map((screen, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex-none w-[280px] snap-center"
              >
                <div className="relative aspect-[9/19] bg-slate-800 rounded-[2.5rem] p-3 border border-slate-700 shadow-2xl">
                  <div className="overflow-hidden rounded-[2rem] w-full h-full bg-slate-700">
                    <img
                      src={screen.src}
                      alt={screen.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white px-4 py-2 rounded-full shadow-lg border border-slate-100 whitespace-nowrap">
                    <p className="text-xs font-bold text-slate-900">{screen.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Gradients for scroll hint */}
          <div className="absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-slate-900 to-transparent pointer-events-none hidden lg:block"></div>
          <div className="absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-slate-900 to-transparent pointer-events-none hidden lg:block"></div>
        </div>
      </div>
    </section>
  );
};

export default Screenshots;
