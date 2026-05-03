"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Download, BookOpen, Zap, Database, ShieldCheck } from 'lucide-react';

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
              <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-primary-50 text-primary-700 text-xs font-black tracking-[0.2em] mb-8 border border-primary-100 shadow-sm uppercase">
                <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
                Enterprise Clinical OS v1.0
              </span>
              <h1 className="text-5xl lg:text-7xl font-black text-slate-900 tracking-tight leading-[1.1] mb-8 uppercase">
                Digital Clinic Manager for <span className="text-primary-600">Modern Practices</span>
              </h1>
              <p className="text-lg lg:text-xl text-slate-600 leading-relaxed mb-10 max-w-2xl mx-auto lg:mx-0 font-medium">
                A robust, offline-first clinical workspace designed for seamless coordination between doctors, pharmacy, and management. One App. Complete Clinic Management.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a
                  href="#docs"
                  className="w-full sm:w-auto flex items-center justify-center gap-3 bg-primary-600 text-white px-10 py-5 rounded-[2rem] font-bold shadow-2xl shadow-primary-200 hover:bg-primary-700 hover:shadow-primary-300 transition-all active:scale-95"
                >
                  <BookOpen size={20} />
                  <span>View Documentation</span>
                </a>
                <a
                  href="https://github.com/algospider/Ramm"
                  className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white border border-slate-200 text-slate-700 px-10 py-5 rounded-[2rem] font-bold hover:bg-slate-50 transition-all active:scale-95 shadow-sm"
                >
                  <Download size={20} />
                  <span>Download APK</span>
                </a>
              </div>
              
              {/* Trust Badge / Features Mini */}
              <div className="mt-12 flex flex-wrap justify-center lg:justify-start gap-6 grayscale opacity-50">
                 <div className="flex items-center gap-2 font-bold text-xs tracking-widest uppercase">
                    <ShieldCheck size={16} /> 256-bit AES
                 </div>
                 <div className="flex items-center gap-2 font-bold text-xs tracking-widest uppercase">
                    <Database size={16} /> Offline-First
                 </div>
                 <div className="flex items-center gap-2 font-bold text-xs tracking-widest uppercase">
                    <Zap size={16} /> &lt;100ms Latency
                 </div>
              </div>
            </motion.div>
          </div>

          <div className="flex-1 relative w-full max-w-lg lg:max-w-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative z-10"
            >
              {/* Ultra-Premium Glass Device Frame */}
              <div className="relative mx-auto bg-[#0F172A] rounded-[4rem] p-4 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border-[1px] border-white/10 ring-1 ring-slate-800/50">
                {/* Device Inner Content */}
                <div className="relative rounded-[3.2rem] overflow-hidden bg-white h-[750px] w-full group cursor-ns-resize">
                  <motion.div 
                    className="absolute inset-0"
                    whileHover={{ y: "-60%" }}
                    transition={{ duration: 8, ease: "easeInOut" }}
                  >
                    <img
                      src="/ClinicManagerDocs/assets/img/home.jpg"
                      alt="Clinic Manager Enterprise Dashboard"
                      className="w-full h-auto object-cover"
                    />
                  </motion.div>
                  
                  {/* Glass Overlay for Depth */}
                  <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/10 via-transparent to-black/5"></div>
                  
                  {/* Scroll Hint */}
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full text-[10px] font-bold text-white uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity">
                    Hover to Scroll
                  </div>
                </div>

                {/* Device Hardware Details */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-[#0F172A] rounded-b-3xl z-30 flex justify-center items-center">
                   <div className="w-10 h-1.5 bg-slate-800 rounded-full"></div>
                </div>
                <div className="h-[40px] w-[4px] bg-slate-800 absolute -start-[4px] top-[120px] rounded-s-lg border-l border-white/10"></div>
                <div className="h-[60px] w-[4px] bg-slate-800 absolute -start-[4px] top-[180px] rounded-s-lg border-l border-white/10"></div>
              </div>
              
              {/* Dynamic Logic Indicators */}
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -top-10 -right-8 bg-white/90 backdrop-blur-md p-5 rounded-[2rem] shadow-2xl border border-white hidden lg:block z-40"
              >
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-600">
                      <Zap size={24} fill="currentColor" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white animate-ping"></div>
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">SignalingManager</div>
                    <div className="text-sm font-black text-slate-900 tracking-tight">Latency &lt; 85ms</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ x: [0, -5, 0] }}
                transition={{ duration: 6, repeat: Infinity, delay: 1 }}
                className="absolute bottom-10 -left-12 bg-slate-900/95 backdrop-blur-md p-5 rounded-[2rem] shadow-2xl border border-white/10 hidden lg:block z-40"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary-500/20 rounded-2xl flex items-center justify-center text-primary-400">
                    <Database size={24} />
                  </div>
                  <div>
                    <div className="text-[10px] text-primary-400/60 font-bold uppercase tracking-widest">SQLite Delta-Sync</div>
                    <div className="text-sm font-black text-white tracking-tight">Secure AES-256</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
            
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-primary-200/20 rounded-full blur-[120px] -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
