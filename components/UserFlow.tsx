"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { UserPlus, Stethoscope, Beaker, ReceiptText, BarChart3, ArrowRight } from 'lucide-react';

const UserFlow = () => {
  const steps = [
    {
      title: "Patient Arrival",
      desc: "Search or register new patient instantly.",
      icon: <UserPlus className="w-6 h-6 text-primary-600" />,
    },
    {
      title: "Consultation",
      desc: "Doctor adds symptoms and clinical diagnosis.",
      icon: <Stethoscope className="w-6 h-6 text-primary-600" />,
    },
    {
      title: "Pharmacy",
      desc: "Scan barcodes and add medicines to order.",
      icon: <Beaker className="w-6 h-6 text-primary-600" />,
    },
    {
      title: "Billing",
      desc: "Generate professional bills and collect UPI payments.",
      icon: <ReceiptText className="w-6 h-6 text-primary-600" />,
    },
    {
      title: "Analytics",
      desc: "View daily revenue and case trends on dashboard.",
      icon: <BarChart3 className="w-6 h-6 text-primary-600" />,
    }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-4">The Seamless <span className="text-primary-600">Patient Journey</span></h2>
          <p className="text-slate-500 max-w-2xl mx-auto">From reception to pharmacy, every step is optimized for speed and accuracy.</p>
        </div>

        <div className="relative">
          <div className="flex flex-col md:flex-row justify-between gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex-1 text-center group relative"
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm border border-slate-100 group-hover:bg-primary-600 group-hover:text-white group-hover:shadow-xl group-hover:shadow-primary-200 transition-all duration-300">
                  <div className="group-hover:text-white">
                    {step.icon}
                  </div>
                </div>
                <h4 className="font-bold text-slate-900 mb-2">{step.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed px-4">{step.desc}</p>
                
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[calc(50%+40px)] w-[calc(100%-80px)] h-0.5 bg-slate-200">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2">
                      <ArrowRight size={14} className="text-slate-300" />
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserFlow;
