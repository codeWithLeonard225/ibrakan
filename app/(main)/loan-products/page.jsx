"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const products = [
  { title: "Group Loan", desc: "Tailored financial support for community groups and cooperatives to foster collective growth.", icon: "👥" },
  { title: "Commercial / Enterprise Loan", desc: "Working capital for small and medium enterprises (MSMEs) looking to scale operations and inventory.", icon: "📈" },
  { title: "Agricultural Loan", desc: "Seasonal and long-term financing designed specifically for farmers and agricultural value-chain businesses.", icon: "🌾" },
  { title: "Asset Finance Loan", desc: "Direct financing for equipment, machinery, and productive assets to modernize your business.", icon: "🚜" },
  { title: "Salary Loan", desc: "Short-term, accessible credit solutions for salaried workers with flexible repayment terms.", icon: "💳" },
];

const clients = [
  { name: "MSMEs", full: "Micro, Small and Medium Enterprises", desc: "Support for small businesses to expand operations and create jobs." },
  { name: "SACCOs", full: "Savings and Credit Cooperative Societies", desc: "Financial liquidity and support for cooperative savings groups." },
  { name: "Farmer CUs", full: "Farmer Cooperative Unions", desc: "Strengthening the bargaining power and production of agricultural unions." },
  { name: "ACEs", full: "Area Cooperative Enterprises", desc: "Empowering community-based enterprises to thrive in local markets." },
  { name: "VSLAs", full: "Village Savings and Loans Associations", desc: "Grassroots financial support for community-led savings initiatives." },
];

export default function LoanProductsPage() {
  return (
    <main className="w-full bg-slate-50">
      {/* 1. BRAND IDENTITY SECTION */}
      <section className="bg-slate-900 text-white py-28 border-b-8 border-emerald-600">
        <div className="max-w-7xl mx-auto px-6">
          <span className="inline-block px-4 py-1 bg-emerald-600 text-white text-xs font-black uppercase tracking-[0.2em] mb-6">
            Registered Microfinance Institution
          </span>
          {/* Optimized Hero Header */}
<h1 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter">
  Financial Products <br /> For Growth
</h1>
<p className="text-xl text-emerald-400 font-bold uppercase tracking-[0.2em] mb-8">
  Ibrakan Micro Finance & Progressive Association
</p>
        </div>
      </section>

      {/* 2. LOAN PRODUCTS GRID */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-black text-slate-900 mb-16 uppercase">Our Loan Products</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-slate-200">
            {products.map((product, idx) => (
              <div key={idx} className="bg-white p-10 border-r border-b border-slate-200 hover:bg-slate-900 hover:text-white transition-colors group">
                <div className="text-4xl mb-6">{product.icon}</div>
                <h3 className="text-xl font-black mb-4 uppercase">{product.title}</h3>
                <p className="text-slate-600 group-hover:text-slate-300 mb-8">{product.desc}</p>
                <Link href="/apply" className="text-emerald-600 font-black uppercase tracking-widest text-sm underline decoration-2 underline-offset-4">
                  Apply Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. TARGETED CLIENTS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-[500px] border-r-8 border-b-8 border-emerald-600 overflow-hidden">
            <Image src="/images/market-women.jpg" alt="Clients" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-500" />
          </div>

          <div>
            <h2 className="text-4xl font-black text-slate-900 mb-10 uppercase">Who We Serve</h2>
            <div className="space-y-6">
              {clients.map((client, idx) => (
                <div key={idx} className="border-l-4 border-slate-200 hover:border-emerald-600 pl-6 py-2 transition-colors">
                  <h4 className="font-black text-slate-900 text-lg">{client.name}</h4>
                  <p className="text-emerald-700 text-xs font-black uppercase tracking-widest mb-1">{client.full}</p>
                  <p className="text-slate-600 text-sm">{client.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
<section className="py-24 bg-slate-50">
  <div className="max-w-7xl mx-auto px-6">
    <h2 className="text-3xl font-black text-slate-900 mb-16 text-center uppercase">The Application Process</h2>
    <div className="grid md:grid-cols-3 gap-8">
      {[
        { step: "01", title: "Enquiry", desc: "Submit your details via our online portal." },
        { step: "02", title: "Assessment", desc: "Our team reviews your business needs." },
        { step: "03", title: "Disbursement", desc: "Funds transferred securely to your account." },
      ].map((s) => (
        <div key={s.step} className="text-center p-8 bg-white border border-slate-200">
          <div className="text-emerald-600 font-black text-4xl mb-4">{s.step}</div>
          <h3 className="font-black text-slate-900 uppercase mb-2">{s.title}</h3>
          <p className="text-sm text-slate-600">{s.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* 4. FINAL CTA */}
      <section className="py-24 bg-slate-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-black mb-8 uppercase">Start Your Application</h2>
          <p className="text-slate-400 mb-12 text-lg">
            Join the network of entrepreneurs growing their futures with Ibrakan Financial.
          </p>
          <Link href="/apply" className="inline-block bg-emerald-600 text-white px-12 py-5 font-black uppercase tracking-widest hover:bg-emerald-700 transition-all">
            Apply for Loan
          </Link>
        </div>
      </section>
    </main>
  );
}