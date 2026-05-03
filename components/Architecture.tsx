"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Server, Smartphone, Globe } from 'lucide-react';

const Architecture = () => {
  return (
    <section id="architecture" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            System <span className="text-primary-600">Architecture</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Designed for reliability in low-connectivity environments using a hybrid offline-first strategy.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="w-14 h-14 bg-primary-100 rounded-2xl flex items-center justify-center text-primary-600 shrink-0">
                <Smartphone size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Android Client Layer</h3>
                <p className="text-slate-600">Built with Java/Kotlin using the Repository pattern. Handles complex UI states for registration, consultation, and billing.</p>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 shrink-0">
                <Layers size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Local Persistence (SQLite)</h3>
                <p className="text-slate-600">Full local database mirroring. Ensures the clinic never stops working even if the internet goes down.</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 shrink-0">
                <Globe size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Real-time Sync (Firebase)</h3>
                <p className="text-slate-600">Two-way synchronization for patient records, visit status, and pharmacy inventory across all authorized devices.</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-600 shrink-0">
                <Server size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Admin Panel</h3>
                <p className="text-slate-600">Centralized control for inventory management, staff permissions, and clinic-wide analytics.</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-slate-50 rounded-[2.5rem] p-8 border border-slate-100 aspect-square flex items-center justify-center overflow-hidden">
              {/* Simplified Architecture Diagram with CSS */}
              <div className="relative w-full max-w-xs aspect-square">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-20 bg-primary-600 rounded-2xl flex items-center justify-center text-white font-bold text-sm shadow-xl z-20">
                  Firebase Cloud
                </div>
                <div className="absolute top-24 left-1/2 -translate-x-1/2 w-0.5 h-12 bg-slate-200"></div>
                
                <div className="absolute top-36 left-1/2 -translate-x-1/2 w-48 h-32 bg-white border-2 border-primary-100 rounded-3xl flex items-center justify-center shadow-lg z-10">
                  <div className="text-center">
                    <div className="text-primary-600 font-bold text-xs uppercase tracking-widest mb-1">Local Client</div>
                    <div className="text-slate-900 font-bold">Repository</div>
                  </div>
                </div>

                <div className="absolute top-44 -left-4 w-32 h-16 bg-emerald-500 rounded-xl flex items-center justify-center text-white font-bold text-xs shadow-lg transform -rotate-12">
                  SQLite DB
                </div>
                <div className="absolute top-44 -right-4 w-32 h-16 bg-blue-500 rounded-xl flex items-center justify-center text-white font-bold text-xs shadow-lg transform rotate-12">
                  UI Layer
                </div>
              </div>
            </div>
            
            {/* Decoration */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary-50 rounded-full blur-3xl opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Architecture;
