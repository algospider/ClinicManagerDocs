"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Rocket } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-primary-600 rounded-[3rem] p-12 lg:p-20 text-center text-white relative overflow-hidden shadow-2xl shadow-primary-200"
        >
          <div className="relative z-10">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-8 backdrop-blur-md">
              <Rocket size={32} />
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold mb-6 tracking-tight">
              Start Your Digital Clinic Journey
            </h2>
            <p className="text-xl text-primary-100 mb-10 max-w-2xl mx-auto leading-relaxed">
              Join the modern healthcare era with a system designed for efficiency, accuracy, and growth. Experience complete control over your practice.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#docs"
                className="w-full sm:w-auto bg-white text-primary-600 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-primary-50 transition-all flex items-center justify-center gap-2"
              >
                Get Started
                <ArrowRight size={20} />
              </a>
            </div>
          </div>
          
          {/* Background shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-400/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
