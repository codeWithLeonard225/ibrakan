"use client";

import Link from "next/link";

export default function ApplyPage() {
  return (
    <main className="w-full bg-slate-50">
      {/* HERO SECTION */}
      <section className="bg-slate-900 py-20 text-white border-b-8 border-emerald-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-black mb-6 uppercase tracking-tighter">Loan Application Portal</h1>
          <p className="text-slate-300 text-lg font-light border-l-4 border-emerald-600 pl-6 text-left inline-block">
            Secure the capital necessary for structural growth. <br />
            Please review the requirements below to initiate your credit request.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-3 gap-12">
          
          {/* REQUIREMENTS SIDEBAR */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white p-10 border-b-4 border-emerald-600 shadow-sm">
              <h3 className="font-black text-slate-900 mb-8 uppercase tracking-widest text-sm flex items-center gap-2">
                <span className="text-emerald-600 text-xl">📋</span> Requirements
              </h3>
              <ul className="space-y-6 text-slate-700 text-sm font-bold">
                {[
                  "Valid National ID (Sierra Leonean)",
                  "Proof of Business/Farm Location",
                  "Two (2) Passport-sized Photos",
                  "Group Registration (If applicable)"
                ].map((req, i) => (
                  <li key={i} className="flex gap-4 border-b border-slate-100 pb-4">
                    <span className="text-emerald-600">0{i + 1}.</span>
                    {req}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-10 bg-slate-900 text-white">
              <h4 className="font-black mb-4 uppercase tracking-widest text-emerald-500">Need help?</h4>
              <p className="text-sm text-slate-400 mb-6 font-light">Visit our offices in Freetown or Bo for direct consultation.</p>
              <Link href="/contact" className="text-emerald-400 font-black uppercase text-xs tracking-widest hover:text-white">
                Contact Support →
              </Link>
            </div>
          </div>

          {/* APPLICATION FORM */}
          <div className="lg:col-span-2 bg-white border-2 border-slate-200 p-12">
            <h2 className="text-3xl font-black text-slate-900 mb-10 uppercase tracking-tighter">Start Application</h2>
            
            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-xs font-black text-slate-500 uppercase tracking-widest">Full Name</label>
                  <input type="text" className="w-full p-5 bg-slate-100 border-b-4 border-slate-300 focus:border-emerald-600 outline-none" placeholder="Leonard Sankoh" />
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-black text-slate-500 uppercase tracking-widest">Phone Number</label>
                  <input type="tel" className="w-full p-5 bg-slate-100 border-b-4 border-slate-300 focus:border-emerald-600 outline-none" placeholder="+232..." />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-xs font-black text-slate-500 uppercase tracking-widest">Loan Type</label>
                <select className="w-full p-5 bg-slate-100 border-b-4 border-slate-300 focus:border-emerald-600 outline-none cursor-pointer">
                  <option>Select a product...</option>
                  <option>Group Loan</option>
                  <option>Agricultural Loan</option>
                  <option>Enterprise Loan</option>
                </select>
              </div>

              <div className="space-y-3">
                <label className="text-xs font-black text-slate-500 uppercase tracking-widest">Amount Requested (SLL)</label>
                <input type="number" className="w-full p-5 bg-slate-100 border-b-4 border-slate-300 focus:border-emerald-600 outline-none" placeholder="0.00" />
              </div>

              <div className="p-6 bg-slate-900 text-slate-300 text-sm">
                <p><strong>Note:</strong> Submission initiates a formal field assessment and verification by our credit officers.</p>
              </div>

              <button className="w-full py-6 bg-slate-900 text-white font-black uppercase tracking-widest hover:bg-emerald-700 transition-all">
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}