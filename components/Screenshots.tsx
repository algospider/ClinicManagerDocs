"use client";

import React from 'react';
import { motion } from 'framer-motion';

const screenshots = [
  { src: "/ClinicManagerDocs/assets/img/login.jpg", title: "Secure Login" },
  { src: "/ClinicManagerDocs/assets/img/permission.jpg", title: "Smart Onboarding" },
  { src: "/ClinicManagerDocs/assets/img/home.jpg", title: "Clinic Dashboard" },
  { src: "/ClinicManagerDocs/assets/img/pharmacy.jpg", title: "Pharmacy & Billing" },
  { src: "/ClinicManagerDocs/assets/img/history.jpg", title: "Visit History" },
  { src: "/ClinicManagerDocs/assets/img/inventory.jpg", title: "Inventory Master" },
  { src: "/ClinicManagerDocs/assets/img/notification.jpg", title: "Real-time Signals" },
  { src: "/ClinicManagerDocs/assets/img/rolemanagement.jpg", title: "Staff Authorization" },
  { src: "/ClinicManagerDocs/assets/img/report.jpg", title: "Financial Reports" },
  { src: "/ClinicManagerDocs/assets/img/settings.jpg", title: "App Configuration" },
  { src: "/ClinicManagerDocs/assets/img/usermanual.jpg", title: "Integrated Help" },
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
                className="flex-none w-[340px] snap-center group"
              >
                <div className="relative aspect-[3/5] bg-slate-900 rounded-[2.5rem] p-2 border border-white/10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] ring-1 ring-slate-800 transition-all duration-500 hover:scale-[1.02]">
                  <div className="overflow-hidden rounded-[2rem] w-full h-full bg-slate-800">
                    <img
                      src={screen.src}
                      alt={screen.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  
                  {/* Floating Glass Label */}
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md px-6 py-3 rounded-full shadow-2xl border border-white whitespace-nowrap z-20 transition-all group-hover:bg-primary-600">
                    <p className="text-xs font-black text-slate-900 uppercase tracking-[0.2em] group-hover:text-white transition-colors">{screen.title}</p>
                  </div>
                  
                  {/* Reflection Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent pointer-events-none rounded-[2rem]"></div>
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
