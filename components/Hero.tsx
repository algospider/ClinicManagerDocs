"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Download, BookOpen } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden hero-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 py-1 px-4 rounded-full bg-primary-50 text-primary-700 text-sm font-bold tracking-tight mb-6 border border-primary-100 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
                Next-Gen Healthcare Orchestration
              </span>
              <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-8 uppercase">
                Digital Clinic Manager for <span className="text-primary-600">Modern Practices</span>
              </h1>
              <p className="text-lg lg:text-xl text-slate-600 leading-relaxed mb-10 max-w-2xl mx-auto lg:mx-0">
                A robust, offline-first clinical workspace designed for seamless coordination between doctors, pharmacy, and management. One App. Complete Clinic Management.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a
                  href="#docs"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-2xl font-bold shadow-xl shadow-primary-200 hover:bg-primary-700 hover:shadow-primary-300 transition-all active:scale-95"
                >
                  <BookOpen size={20} />
                  <span>View Documentation</span>
                </a>
                <a
                  href="https://github.com/algospider/Ramm"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white border border-slate-200 text-slate-700 px-8 py-4 rounded-2xl font-bold hover:bg-slate-50 transition-all active:scale-95 shadow-sm"
                >
                  <Download size={20} />
                  <span>Download APK</span>
                </a>
              </div>
            </motion.div>
          </div>

          <div className="flex-1 relative w-full max-w-md lg:max-w-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative z-10"
            >
              {/* Mockup Frame */}
              <div className="relative mx-auto border-slate-900 bg-slate-900 border-[14px] rounded-[3.5rem] h-[600px] w-[300px] shadow-[0_0_50px_rgba(0,0,0,0.1)]">
                <div className="h-[32px] w-[3px] bg-slate-900 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
                <div className="h-[46px] w-[3px] bg-slate-900 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
                <div className="h-[46px] w-[3px] bg-slate-900 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
                <div className="h-[64px] w-[3px] bg-slate-900 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
                <div className="rounded-[2.5rem] overflow-hidden w-full h-full bg-white">
                  <img
                    src="/ClinicManagerDocs/assets/img/1.png"
                    alt="App Dashboard"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Floating Cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-12 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 hidden sm:block"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 font-bold">✓</div>
                  <div>
                    <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">Status</div>
                    <div className="text-sm font-bold text-slate-800">Cloud Synced</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-12 -left-16 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 hidden sm:block"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">⚡</div>
                  <div>
                    <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">Real-time</div>
                    <div className="text-sm font-bold text-slate-800">12 Patients Waiting</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Background Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-primary-100 rounded-full blur-3xl opacity-30 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
