"use client";

import Image from "next/image";

export default function IbrakanHome() {
  return (
    <main className="w-full">
      {/* 1. HERO SECTION - Now uses relative positioning for better mobile flow */}
      <section className="relative w-full min-h-screen flex flex-col items-center justify-center py-10 overflow-hidden">
        
        {/* Background - Fixed to cover the section */}
        <Image
          src="/images/acodacommunity.jpg"
          alt="Ibrakan Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/70" />

        {/* Content Wrapper - Uses flex-col for mobile stacking */}
        <div className="relative z-10 w-full max-w-7xl px-6 flex flex-col lg:flex-row items-center justify-between gap-10">
          
          {/* Hero Text */}
          <div className="text-white lg:w-1/2">
            <div className="inline-block px-4 py-1 bg-emerald-600 text-white text-xs font-bold uppercase tracking-widest mb-4">
              Est. 2026
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">Building Financial Opportunities<br/>Across Sierra Leone</h1>
            <p className="text-lg text-slate-200 mb-8 max-w-md">We provide responsible microfinance, business loans and community development solutions that help entrepreneurs, farmers and small businesses achieve sustainable growth.</p>
          </div>

          {/* Floating Loan Card - Stacks naturally on mobile */}
        <div className="bg-white/10 backdrop-blur-lg p-6 md:p-8 rounded-2xl border border-white/20 shadow-2xl w-full max-w-md">
  <h2 className="text-xl font-black text-white mb-6 uppercase tracking-widest">Request Consultation</h2>
  <div className="space-y-4">
    <input 
      type="text" 
      placeholder="Full Name" 
      className="w-full p-4 rounded-lg bg-black/20 border border-white/20 text-white placeholder-slate-300 outline-none focus:ring-2 focus:ring-emerald-500" 
    />
    <input 
      type="tel" 
      placeholder="Phone Number" 
      className="w-full p-4 rounded-lg bg-black/20 border border-white/20 text-white placeholder-slate-300 outline-none focus:ring-2 focus:ring-emerald-500" 
    />
    <input 
      type="number" 
      placeholder="Loan Amount (SLL)" 
      className="w-full p-4 rounded-lg bg-black/20 border border-white/20 text-white placeholder-slate-300 outline-none focus:ring-2 focus:ring-emerald-500" 
    />
    <select className="w-full p-4 rounded-lg bg-black/20 border border-white/20 text-white outline-none appearance-none">
      <option className="text-black">Select Loan Type</option>
      <option className="text-black">Agricultural Loan</option>
      <option className="text-black">Business/SME Loan</option>
      <option className="text-black">Individual Lending</option>
    </select>
    <button className="w-full bg-emerald-600 hover:bg-emerald-500 py-4 rounded-lg font-black text-white transition transform hover:scale-105 uppercase tracking-widest">
      Submit Enquiry
    </button>
  </div>
  
  {/* Trust Indicators moved inside the card for better visual weight balance */}
  <div className="grid grid-cols-2 gap-y-3 gap-x-4 mt-8 text-xs font-semibold text-slate-200 border-t border-white/10 pt-6">
    <div className="flex items-center gap-2">
      <span className="text-emerald-400">✓</span> Registered Institution
    </div>
    <div className="flex items-center gap-2">
      <span className="text-emerald-400">✓</span> Transparent Lending
    </div>
    <div className="flex items-center gap-2">
      <span className="text-emerald-400">✓</span> Community Focused
    </div>
    <div className="flex items-center gap-2">
      <span className="text-emerald-400">✓</span> Customer Support
    </div>
  </div>
</div>
        </div>

        {/* Info Boxes - Positioned below content on mobile */}
        <div className="relative z-10 w-full max-w-7xl px-6 mt-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            <InfoBox icon="💰" label="CAPITAL ACCESS" />
            <InfoBox icon="🌱" label="AGRI FINANCE" />
            <InfoBox icon="🏪" label="SME LOANS" />
            <InfoBox icon="🤝" label="INDIVIDUAL LENDING" />
          </div>
        </div>
      </section>
    </main>
  );
}

function InfoBox({ icon, label }) {
  return (
    <div className="bg-emerald-900/90 border border-emerald-500 p-4 flex flex-col items-center justify-center text-center text-white transition hover:bg-emerald-800">
      <span className="text-2xl mb-2">{icon}</span>
      <span className="font-bold text-[10px] md:text-xs tracking-wider">{label}</span>
    </div>
  );
}