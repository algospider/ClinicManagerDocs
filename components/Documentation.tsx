"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Database, Shield, Smartphone } from 'lucide-react';

const Documentation = () => {
  const [activeTab, setActiveTab] = useState('usage');

  const tabs = [
    { id: 'usage', label: 'Usage Guide', icon: <Smartphone size={18} /> },
    { id: 'database', label: 'DB Schema', icon: <Database size={18} /> },
    { id: 'firebase', label: 'Backend Logic', icon: <Database size={18} /> },
    { id: 'permissions', label: 'Permissions', icon: <Shield size={18} /> },
  ];

  const content = {
    usage: (
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900">Core Workflow Guide</h3>
        <div className="space-y-4">
          <div className="flex gap-4 p-4 rounded-2xl bg-white shadow-sm border border-slate-100">
            <div className="w-8 h-8 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center font-bold shrink-0">1</div>
            <div>
              <div className="font-bold text-slate-900">Check-in & Signaling</div>
              <p className="text-sm text-slate-500">Reception checks in the patient. Use the "Signal" button to instantly notify the doctor's device.</p>
            </div>
          </div>
          <div className="flex gap-4 p-4 rounded-2xl bg-white shadow-sm border border-slate-100">
            <div className="w-8 h-8 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center font-bold shrink-0">2</div>
            <div>
              <div className="font-bold text-slate-900">Inventory & Pharmacy</div>
              <p className="text-sm text-slate-500">Admin manages master stock. Pharmacy staff uses barcode scanner for accurate billing.</p>
            </div>
          </div>
          <div className="flex gap-4 p-4 rounded-2xl bg-white shadow-sm border border-slate-100">
            <div className="w-8 h-8 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center font-bold shrink-0">3</div>
            <div>
              <div className="font-bold text-slate-900">Financial Reports</div>
              <p className="text-sm text-slate-500">View revenue breakdown by category and export as PDF for audit.</p>
            </div>
          </div>
        </div>
      </div>
    ),
    database: (
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900">Relational SQLite Schema</h3>
        <p className="text-slate-600">The app uses a <code>DBHelper</code> with versioned migration support (Current: v7).</p>
        <div className="space-y-4">
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
            <div className="font-mono text-xs font-bold text-primary-600 mb-1">TABLE: patients</div>
            <p className="text-xs text-slate-500 italic">uuid (PK), name, phone, gender, total_visits, last_updated</p>
          </div>
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
            <div className="font-mono text-xs font-bold text-primary-600 mb-1">TABLE: visits</div>
            <p className="text-xs text-slate-500 italic">uuid (PK), patient_uuid (FK), symptoms, diagnosis, medicine_items, amount_paid</p>
          </div>
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
            <div className="font-mono text-xs font-bold text-primary-600 mb-1">TABLE: categories</div>
            <p className="text-xs text-slate-500 italic">id, cat_name (Unique)</p>
          </div>
        </div>
      </div>
    ),
    firebase: (
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900">Real-time Backend Integration</h3>
        <p className="text-slate-600">Clinic Manager utilizes a sophisticated multi-layer backend strategy powered by Firebase and custom management classes.</p>
        
        <div className="grid sm:grid-cols-2 gap-4 mt-4">
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
            <h4 className="font-bold text-slate-900 mb-2">SignalingManager.java</h4>
            <p className="text-xs text-slate-500 leading-relaxed">Handles instant node-to-node communication. Uses Firebase Realtime DB nodes to trigger hardware/UI alerts on staff devices with minimal latency.</p>
          </div>
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
            <h4 className="font-bold text-slate-900 mb-2">SyncManager.java</h4>
            <p className="text-xs text-slate-500 leading-relaxed">The orchestration engine for offline-first persistence. Manages Delta-Sync logic to ensure SQLite and Cloud DB stay identical.</p>
          </div>
        </div>

        <div className="bg-primary-50 border border-primary-100 rounded-2xl p-6">
          <h4 className="font-bold text-primary-900 mb-2">Setup Requirements:</h4>
          <ol className="list-decimal list-inside text-primary-800 space-y-2 text-sm">
            <li>Create project in <a href="https://console.firebase.google.com" className="underline font-bold">Firebase Console</a>.</li>
            <li>Add Android App: <code className="bg-primary-100 px-1 rounded">com.ramm.clinicmanager</code>.</li>
            <li>Enable <strong>Realtime Database</strong> & <strong>Auth</strong>.</li>
            <li>Enable <strong>Disk Persistence</strong> in Firebase Database settings for full offline support.</li>
          </ol>
        </div>
      </div>
    ),
    permissions: (
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900">Required Permissions</h3>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
            <div className="font-bold text-slate-900 mb-1">CAMERA</div>
            <p className="text-xs text-slate-500">Required for pharmacy barcode scanning and inventory management.</p>
          </div>
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
            <div className="font-bold text-slate-900 mb-1">INTERNET</div>
            <p className="text-xs text-slate-500">Used for Firebase synchronization and real-time signaling between devices.</p>
          </div>
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
            <div className="font-bold text-slate-900 mb-1">READ_EXTERNAL_STORAGE</div>
            <p className="text-xs text-slate-500">Accessing clinical resources and document exports.</p>
          </div>
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
            <div className="font-bold text-slate-900 mb-1">VIBRATE</div>
            <p className="text-xs text-slate-500">Haptic feedback for successful scans and critical alerts.</p>
          </div>
        </div>
      </div>
    ),
    usage: (
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900">Core Workflow Guide</h3>
        <div className="space-y-4">
          <div className="flex gap-4 p-4 rounded-2xl bg-white shadow-sm border border-slate-100">
            <div className="w-8 h-8 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center font-bold shrink-0">1</div>
            <div>
              <div className="font-bold text-slate-900">Check-in & Signaling</div>
              <p className="text-sm text-slate-500">Reception checks in the patient. Use the "Signal" button to instantly notify the doctor's device.</p>
            </div>
          </div>
          <div className="flex gap-4 p-4 rounded-2xl bg-white shadow-sm border border-slate-100">
            <div className="w-8 h-8 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center font-bold shrink-0">2</div>
            <div>
              <div className="font-bold text-slate-900">Inventory & Pharmacy</div>
              <p className="text-sm text-slate-500">Admin manages master stock. Pharmacy staff uses barcode scanner for accurate billing.</p>
            </div>
          </div>
          <div className="flex gap-4 p-4 rounded-2xl bg-white shadow-sm border border-slate-100">
            <div className="w-8 h-8 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center font-bold shrink-0">3</div>
            <div>
              <div className="font-bold text-slate-900">Financial Reports</div>
              <p className="text-sm text-slate-500">View revenue breakdown by category and export as PDF for audit.</p>
            </div>
          </div>
        </div>
      </div>
    ),
  };

  return (
    <section id="docs" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar Nav */}
          <div className="lg:w-1/4">
            <div className="sticky top-24 space-y-2">
              <h2 className="text-2xl font-bold text-slate-900 mb-8">Documentation</h2>
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${
                    activeTab === tab.id
                      ? 'bg-primary-600 text-white shadow-lg shadow-primary-200'
                      : 'text-slate-600 hover:bg-white hover:text-primary-600'
                  }`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Content Area */}
          <div className="lg:w-3/4">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-[2rem] p-8 lg:p-12 shadow-sm border border-slate-100 min-h-[500px]"
            >
              {content[activeTab as keyof typeof content]}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Documentation;
