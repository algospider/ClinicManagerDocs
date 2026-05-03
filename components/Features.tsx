"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Users, ClipboardList, CreditCard, BarChart3, ShieldCheck, Zap } from 'lucide-react';

const features = [
  {
    title: "Patient Management",
    description: "Streamlined registration and check-in with duplicate detection and visit history tracking.",
    icon: <Users className="w-6 h-6" />,
    color: "bg-blue-500",
  },
  {
    title: "Clinical Consultation",
    description: "Specialized interface for doctors to record symptoms, diagnosis, and prescriptions in seconds.",
    icon: <ClipboardList className="w-6 h-6" />,
    color: "bg-emerald-500",
  },
  {
    title: "Smart Pharmacy Billing",
    description: "Integrated pharmacy module with barcode scanning and automated inventory updates.",
    icon: <CreditCard className="w-6 h-6" />,
    color: "bg-indigo-500",
  },
  {
    title: "Reports & Analytics",
    description: "Gain insights into clinic performance, patient flow, and revenue with detailed daily reports.",
    icon: <BarChart3 className="w-6 h-6" />,
    color: "bg-amber-500",
  },
  {
    title: "Cloud Sync & Offline",
    description: "Work seamlessly without internet. Data syncs automatically to Firebase once you're back online.",
    icon: <Zap className="w-6 h-6" />,
    color: "bg-purple-500",
  },
  {
    title: "Enterprise Security",
    description: "Role-based access control and secure data persistence to protect sensitive patient information.",
    icon: <ShieldCheck className="w-6 h-6" />,
    color: "bg-rose-500",
  },
];

const Features = () => {
  return (
    <section id="features" class="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              Everything you need to <span className="text-primary-600">run your clinic</span>
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              Clinic Manager replaces paper logs and fragmented tools with a single, unified digital workflow.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300"
            >
              <div className={`w-12 h-12 ${feature.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
