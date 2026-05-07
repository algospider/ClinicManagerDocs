"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Workflow } from 'lucide-react';

const SolutionSection = () => {
  const steps = [
    "Patient Registration",
    "Doctor Fee & Visit Notes",
    "Pharmacy Inventory",
    "UPI or Cash Billing",
    "Reports, Backup & Staff Roles"
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4 uppercase tracking-tight">
              One App. <span className="text-primary-600">Complete Clinic Management.</span>
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              Clinic Manager bridges reception, doctor, pharmacy, and admin work without forcing the clinic to depend on paper registers.
            </p>
          </motion.div>
        </div>

        <div className="bg-primary-600 rounded-2xl p-8 lg:p-16 text-white shadow-2xl shadow-primary-200">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2 space-y-8">
              <h3 className="text-3xl font-bold leading-tight italic">
                Replacing daily registers with one practical clinic workspace.
              </h3>
              <div className="space-y-4">
                {steps.map((step, i) => (
                  <div key={i} className="flex items-center gap-4 bg-primary-500/30 p-4 rounded-2xl backdrop-blur-sm border border-primary-400/20">
                    <CheckCircle2 className="text-primary-200" size={24} />
                    <span className="font-bold text-lg">{step}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:w-1/2 relative">
               <div className="bg-white/10 rounded-[2.5rem] p-8 aspect-video flex items-center justify-center border border-white/20 backdrop-blur-md">
                  <div className="text-center space-y-6">
                    <Workflow size={64} className="mx-auto text-primary-200 animate-pulse" />
                  <div className="text-sm font-mono tracking-widest text-primary-100">LOCAL_SQLITE + FIREBASE_SYNC</div>
                    <div className="flex justify-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                      <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping"></div>
                    </div>
                  </div>
               </div>
               
               {/* Decorative elements */}
               <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary-400/20 rounded-full blur-2xl"></div>
               <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary-700 rounded-full blur-3xl opacity-50"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
