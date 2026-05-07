"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Users, ClipboardList, CreditCard, BarChart3, ShieldCheck, Zap, Bell, Package, ScanLine } from 'lucide-react';

const features = [
  {
    title: "Clinic Signaling",
    description: "Send patient-ready alerts to doctors, staff, or a selected team member through Firebase-backed signal listeners.",
    icon: <Bell className="w-6 h-6" />,
    color: "bg-blue-500",
  },
  {
    title: "Inventory Master",
    description: "Admin-managed medicine catalog with price, barcode, stock, and expiry metadata stored locally and synced to the clinic workspace.",
    icon: <Package className="w-6 h-6" />,
    color: "bg-emerald-500",
  },
  {
    title: "Barcode Billing",
    description: "Use ML Kit barcode scanning to add medicines to the cart, calculate discounts, reduce stock, and generate UPI QR payments.",
    icon: <ScanLine className="w-6 h-6" />,
    color: "bg-indigo-500",
  },
  {
    title: "Workspace Roles",
    description: "Admins invite doctors, managers, and staff by email. Users can accept invitations and switch between active clinic workspaces.",
    icon: <ShieldCheck className="w-6 h-6" />,
    color: "bg-rose-500",
  },
  {
    title: "Patient Journey",
    description: "Register by phone, avoid duplicate records, capture symptoms and diagnosis, and review searchable visit history.",
    icon: <ClipboardList className="w-6 h-6" />,
    color: "bg-amber-500",
  },
  {
    title: "Backup & Sync",
    description: "SQLite keeps the clinic usable locally, Firebase mirrors shared data, and backup tools support merge or overwrite restore.",
    icon: <Zap className="w-6 h-6" />,
    color: "bg-purple-500",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-white relative">
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
              className="group p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300"
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
