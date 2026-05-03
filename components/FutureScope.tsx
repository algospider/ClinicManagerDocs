"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, Globe2, MessageSquareText, CalendarCheck, FileBadge } from 'lucide-react';

const FutureScope = () => {
  const roadmap = [
    {
      title: "AI Diagnosis Suggestions",
      desc: "ML-powered assistance based on symptoms and historical clinical data patterns.",
      icon: <BrainCircuit className="text-primary-600" />
    },
    {
      title: "WhatsApp/SMS Alerts",
      desc: "Automated follow-up reminders and digital receipt delivery to patients.",
      icon: <MessageSquareText className="text-primary-600" />
    },
    {
      title: "Multi-Clinic Dashboard",
      desc: "Centralized monitoring for clinic owners with multiple branches.",
      icon: <Globe2 className="text-primary-600" />
    },
    {
      title: "E-Prescription Support",
      desc: "Digitally signed prescriptions for enhanced security and pharmacy verification.",
      icon: <FileBadge className="text-primary-600" />
    },
    {
      title: "Online Appointment Booking",
      desc: "Patient-facing portal for remote scheduling and queue status tracking.",
      icon: <CalendarCheck className="text-primary-600" />
    }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Future <span className="text-primary-600">Roadmap</span></h2>
          <p className="text-slate-500 max-w-2xl mx-auto">We are constantly evolving to provide the most advanced clinical workspace.</p>
        </div>

        <div className="relative">
          <div className="space-y-4">
            {roadmap.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-6 p-6 rounded-[2rem] bg-slate-50 border border-slate-100 hover:bg-primary-50 hover:border-primary-100 transition-all group"
              >
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm shrink-0 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{item.title}</h4>
                  <p className="text-sm text-slate-500">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FutureScope;
