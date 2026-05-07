"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Database, UserCheck, Stethoscope, ShoppingCart, BarChart } from 'lucide-react';

const SystemDesign = () => {
  const nodes = [
    {
      title: "Patient Registry",
      desc: "SQLite Table: patients",
      details: "UUID, Name, Phone, Gender, Total Visits",
      icon: <UserCheck className="text-blue-600" />,
      color: "border-blue-200 bg-blue-50"
    },
    {
      title: "Clinical Visit",
      desc: "SQLite Table: visits",
      details: "Symptoms, Diagnosis, Category, CreatedByRole",
      icon: <Stethoscope className="text-emerald-600" />,
      color: "border-emerald-200 bg-emerald-50"
    },
    {
      title: "Pharmacy Sync",
      desc: "Visit flag: is_medicine_billed",
      details: "Medicine items, discount flow, UPI QR, cash or online mode",
      icon: <ShoppingCart className="text-purple-600" />,
      color: "border-purple-200 bg-purple-50"
    },
    {
      title: "Master Admin",
      desc: "Roles: Admin, Doctor, Manager, Staff",
      details: "Inventory master, staff invitations, reports, backup",
      icon: <BarChart className="text-amber-600" />,
      color: "border-amber-200 bg-amber-50"
    }
  ];

  return (
    <section id="system" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-4 tracking-tight uppercase">Technical <span className="text-primary-600">System Design</span></h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">A practical view of how Ramm stores patient records, links pharmacy billing, and coordinates admin-controlled clinic workspaces.</p>
        </div>

        <div className="relative">
          {/* Connector Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 -z-10"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {nodes.map((node, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`p-8 rounded-2xl border-2 ${node.color} shadow-sm relative group hover:shadow-xl transition-all duration-300`}
              >
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-md mb-6 group-hover:scale-110 transition-transform">
                  {node.icon}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">{node.title}</h4>
                <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4">{node.desc}</div>
                <p className="text-sm text-slate-600 leading-relaxed font-medium">
                  {node.details}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Sync Indicator */}
        <div className="mt-16 bg-slate-900 rounded-2xl p-12 text-white relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
            <div className="max-w-md">
              <h3 className="text-2xl font-bold mb-4">Local-First Sync Contract</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Patient and visit rows carry <code>last_updated</code> and <code>is_deleted</code> fields so the app can merge local SQLite records with Firebase data without losing deleted records during sync.
              </p>
            </div>
            <div className="flex-1 flex justify-center gap-8">
               <div className="text-center">
                  <div className="text-4xl font-black text-primary-400 mb-2 tracking-tighter">SQL</div>
                  <div className="text-[10px] uppercase font-bold tracking-[0.3em] text-slate-500">Local Cache</div>
               </div>
               <div className="flex flex-col justify-center gap-2">
                  <div className="w-8 h-1 bg-primary-600 rounded-full animate-pulse"></div>
                  <div className="w-8 h-1 bg-primary-600 rounded-full delay-100 animate-pulse"></div>
               </div>
               <div className="text-center">
                  <div className="text-4xl font-black text-emerald-400 mb-2 tracking-tighter">FDB</div>
                  <div className="text-[10px] uppercase font-bold tracking-[0.3em] text-slate-500">Cloud Sync</div>
               </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-600/10 rounded-full blur-[100px]"></div>
        </div>
      </div>
    </section>
  );
};

export default SystemDesign;
