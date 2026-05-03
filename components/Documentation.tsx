"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Settings, Database, Shield, Smartphone } from 'lucide-react';

const Documentation = () => {
  const [activeTab, setActiveTab] = useState('setup');

  const tabs = [
    { id: 'setup', label: 'Setup Guide', icon: <Settings size={18} /> },
    { id: 'installation', label: 'Installation', icon: <Terminal size={18} /> },
    { id: 'firebase', label: 'Firebase Config', icon: <Database size={18} /> },
    { id: 'permissions', label: 'Permissions', icon: <Shield size={18} /> },
    { id: 'usage', label: 'Usage', icon: <Smartphone size={18} /> },
  ];

  const content = {
    setup: (
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900">Getting Started</h3>
        <p className="text-slate-600">Before building the application, ensure you have the following requirements met:</p>
        <ul className="space-y-4 list-disc list-inside text-slate-600">
          <li><span className="font-bold text-slate-900">Android Studio Iguana</span> or later</li>
          <li><span className="font-bold text-slate-900">Java Development Kit (JDK) 17</span></li>
          <li><span className="font-bold text-slate-900">Android SDK 34</span> (Target)</li>
          <li><span className="font-bold text-slate-900">Firebase Project</span> for synchronization</li>
        </ul>
        <div className="bg-slate-900 rounded-2xl p-6 text-slate-300 font-mono text-sm">
          <p className="text-primary-400"># Clone the repository</p>
          <p>git clone https://github.com/algospider/Ramm.git</p>
          <p className="text-primary-400 mt-4"># Open in Android Studio and sync Gradle</p>
        </div>
      </div>
    ),
    installation: (
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900">Installation Steps</h3>
        <ol className="space-y-6 list-decimal list-inside">
          <li className="text-slate-600">
            <span className="font-bold text-slate-900 ml-2">Build APK:</span>
            <p className="mt-2 ml-7">Navigate to `Build &gt; Build Bundle(s) / APK(s) &gt; Build APK(s)` in Android Studio.</p>
          </li>
          <li className="text-slate-600">
            <span className="font-bold text-slate-900 ml-2">Install on Device:</span>
            <p className="mt-2 ml-7">Transfer the generated `.apk` file to your Android device and install. Ensure "Install from Unknown Sources" is enabled.</p>
          </li>
          <li className="text-slate-600">
            <span className="font-bold text-slate-900 ml-2">Initial Launch:</span>
            <p className="mt-2 ml-7">Upon first launch, the app will request necessary permissions and local database initialization.</p>
          </li>
        </ol>
      </div>
    ),
    firebase: (
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900">Firebase Integration</h3>
        <p className="text-slate-600">Clinic Manager uses Firebase for real-time signaling and cloud backup.</p>
        <div className="bg-primary-50 border border-primary-100 rounded-2xl p-6">
          <h4 className="font-bold text-primary-900 mb-2">Step-by-step Setup:</h4>
          <ol className="list-decimal list-inside text-primary-800 space-y-2 text-sm">
            <li>Create a project in <a href="https://console.firebase.google.com" className="underline font-bold">Firebase Console</a>.</li>
            <li>Add an Android App with package name <code className="bg-primary-100 px-1 rounded">com.ramm.clinicmanager</code>.</li>
            <li>Download <code className="bg-primary-100 px-1 rounded">google-services.json</code> and place it in the <code className="bg-primary-100 px-1 rounded">app/</code> directory.</li>
            <li>Enable <span className="font-bold">Realtime Database</span> (for Signaling & Sync) and <span className="font-bold">Firebase Auth</span>.</li>
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
