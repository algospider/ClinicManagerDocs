"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Database, Shield, Smartphone, Cloud, Settings } from 'lucide-react';

const Documentation = () => {
  const [activeTab, setActiveTab] = useState('usage');

  const tabs = [
    { id: 'usage', label: 'Usage Guide', icon: <Smartphone size={18} /> },
    { id: 'database', label: 'DB Schema', icon: <Database size={18} /> },
    { id: 'firebase', label: 'Firebase Model', icon: <Cloud size={18} /> },
    { id: 'permissions', label: 'Permissions', icon: <Shield size={18} /> },
    { id: 'setup', label: 'Build Setup', icon: <Settings size={18} /> },
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
              <p className="text-sm text-slate-500">Search by phone or register a patient, collect the doctor fee, and use Signals to notify the doctor or staff device.</p>
            </div>
          </div>
          <div className="flex gap-4 p-4 rounded-2xl bg-white shadow-sm border border-slate-100">
            <div className="w-8 h-8 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center font-bold shrink-0">2</div>
            <div>
              <div className="font-bold text-slate-900">Consultation & Pharmacy</div>
              <p className="text-sm text-slate-500">Record category, symptoms, diagnosis, payment mode, and then bill medicines from the same visit context.</p>
            </div>
          </div>
          <div className="flex gap-4 p-4 rounded-2xl bg-white shadow-sm border border-slate-100">
            <div className="w-8 h-8 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center font-bold shrink-0">3</div>
            <div>
              <div className="font-bold text-slate-900">Admin Operations</div>
              <p className="text-sm text-slate-500">Admins manage staff invitations, medicine inventory, illness categories, financial reports, and backup or restore.</p>
            </div>
          </div>
        </div>
      </div>
    ),
    database: (
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900">Relational SQLite Schema</h3>
        <p className="text-slate-600">The Android app uses <code>DBHelper</code> with versioned migrations. Current schema version: <code>7</code>.</p>
        <div className="space-y-4">
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
            <div className="font-mono text-xs font-bold text-primary-600 mb-1">TABLE: patients</div>
            <p className="text-xs text-slate-500 italic">uuid, name, age, phone, gender, created_by, created_by_role, last_updated, is_deleted</p>
          </div>
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
            <div className="font-mono text-xs font-bold text-primary-600 mb-1">TABLE: visits</div>
            <p className="text-xs text-slate-500 italic">uuid, patient_uuid, visit_date, visit_timestamp, category, symptoms, diagnosis, medicine_items, totals, payment_mode, created_by_name, is_medicine_billed</p>
          </div>
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
            <div className="font-mono text-xs font-bold text-primary-600 mb-1">TABLE: categories</div>
            <p className="text-xs text-slate-500 italic">id, cat_name (Unique)</p>
          </div>
          <div className="bg-slate-900 p-4 rounded-xl">
            <div className="font-mono text-xs font-bold text-white mb-1">Local files</div>
            <p className="text-xs text-slate-300 italic">/clinic/medicines.txt stores inventory names, prices, codes, stock, and expiry; /Clinic/Backup stores database backups.</p>
          </div>
        </div>
      </div>
    ),
    firebase: (
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900">Firebase Backend Model</h3>
        <p className="text-slate-600">Firebase Realtime Database handles clinic workspaces, staff invitations, shared settings, signals, and cloud sync. SQLite remains the local source of day-to-day app responsiveness.</p>
        
        <div className="grid sm:grid-cols-2 gap-4 mt-4">
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
            <h4 className="font-bold text-slate-900 mb-2">Workspace membership</h4>
            <p className="text-xs text-slate-500 leading-relaxed"><code>memberships_by_uid</code>, <code>invitations</code>, <code>users/&lt;clinicId&gt;/staff</code>, and <code>email_index</code> support staff invites and workspace switching.</p>
          </div>
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
            <h4 className="font-bold text-slate-900 mb-2">Signals and sync</h4>
            <p className="text-xs text-slate-500 leading-relaxed"><code>SignalingManager</code> wraps Firebase signal methods, while <code>FirebaseManager</code> pulls patients, visits, categories, settings, and medicine inventory.</p>
          </div>
        </div>

        <div className="bg-primary-50 border border-primary-100 rounded-2xl p-6">
          <h4 className="font-bold text-primary-900 mb-2">Setup Requirements:</h4>
          <ol className="list-decimal list-inside text-primary-800 space-y-2 text-sm">
            <li>Create project in <a href="https://console.firebase.google.com" className="underline font-bold">Firebase Console</a>.</li>
            <li>Add Android App: <code className="bg-primary-100 px-1 rounded">com.ramm</code>.</li>
            <li>Enable <strong>Realtime Database</strong> & <strong>Auth</strong>.</li>
            <li>Place <code className="bg-primary-100 px-1 rounded">google-services.json</code> in the Android app module.</li>
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
            <div className="font-bold text-slate-900 mb-1">STORAGE</div>
            <p className="text-xs text-slate-500">Used for inventory text files, database backup files, restore imports, and generated documents.</p>
          </div>
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
            <div className="font-bold text-slate-900 mb-1">POST_NOTIFICATIONS</div>
            <p className="text-xs text-slate-500">Required on newer Android versions for foreground sync and clinic signal notifications.</p>
          </div>
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
            <div className="font-bold text-slate-900 mb-1">FOREGROUND_SERVICE_DATA_SYNC</div>
            <p className="text-xs text-slate-500">Keeps the signal listener and Firebase sync service active while the app coordinates shared clinic data.</p>
          </div>
        </div>
      </div>
    ),
    setup: (
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900">Build and Release Notes</h3>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
            <div className="font-bold text-slate-900 mb-1">Android target</div>
            <p className="text-xs text-slate-500">Namespace and application ID are <code>com.ramm</code>. The app targets SDK 34, minimum SDK 24, and Java 17.</p>
          </div>
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
            <div className="font-bold text-slate-900 mb-1">Firebase dependencies</div>
            <p className="text-xs text-slate-500">Uses Firebase Auth, Realtime Database, Google Sign-In, and optional custom database URL saved in app settings.</p>
          </div>
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
            <div className="font-bold text-slate-900 mb-1">Scanning and QR</div>
            <p className="text-xs text-slate-500">CameraX and ML Kit read product barcodes. ZXing is kept for high-contrast UPI QR generation.</p>
          </div>
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
            <div className="font-bold text-slate-900 mb-1">Release signing</div>
            <p className="text-xs text-slate-500">Release builds read signing details from CI variables or local <code>secret.properties</code>.</p>
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
