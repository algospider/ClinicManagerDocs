"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, Clock, Database, XCircle } from 'lucide-react';

const ProblemSection = () => {
  const problems = [
    {
      title: "Manual Inefficiency",
      desc: "Manual registers are slow, prone to handwriting errors, and difficult to manage during peak hours.",
      icon: <Clock className="text-rose-500" />
    },
    {
      title: "Data Fragmentation",
      desc: "Patient history, billing, and pharmacy records are scattered across disconnected paper logs.",
      icon: <Database className="text-rose-500" />
    },
    {
      title: "Zero Analytics",
      desc: "No way to track daily revenue, case categories, or patient growth trends without manual audits.",
      icon: <AlertCircle className="text-rose-500" />
    },
    {
      title: "Operational Bottlenecks",
      desc: "Heavy dependency on staff memory for stock levels and billing, leading to revenue leakage.",
      icon: <XCircle className="text-rose-500" />
    }
  ];

  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-6">
                The Cost of <span className="text-rose-600">Manual Systems</span>
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Traditional clinics struggle with fragmented workflows that slow down patient care and hide critical business insights. Manual record-keeping isn't just slow—it's a bottleneck to growth.
              </p>
              
              <div className="space-y-4">
                <div className="p-6 bg-white rounded-2xl border-l-4 border-rose-500 shadow-sm">
                  <p className="italic text-slate-500 font-medium">"We used to spend 15 minutes just looking for a patient's previous visit record. Now it takes 2 seconds."</p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:w-1/2 grid sm:grid-cols-2 gap-6">
            {problems.map((problem, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm"
              >
                <div className="w-10 h-10 bg-rose-50 rounded-xl flex items-center justify-center mb-4">
                  {problem.icon}
                </div>
                <h4 className="font-bold text-slate-900 mb-2">{problem.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{problem.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
