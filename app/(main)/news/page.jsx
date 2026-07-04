"use client";

import { FaRegHandshake, FaDraftingCompass, FaSeedling } from "react-icons/fa";

export default function OutreachPage() {
  const milestones = [
    { title: "Institutional Foundation", date: "Q1 2026", icon: <FaDraftingCompass />, desc: "Official establishment of Ibrakan Micro Finance, focusing on legal compliance and operational structures." },
    { title: "Community Partnerships", date: "Ongoing", icon: <FaRegHandshake />, desc: "Active engagement with local cooperatives and farmer groups to understand grassroots financial needs." },
    { title: "Service Launch", date: "2026", icon: <FaSeedling />, desc: "Rolling out our tailored loan products for agriculture and small enterprise growth." },
  ];

  return (
    <main className="w-full bg-slate-50">
      <section className="bg-slate-900 py-24 text-white border-b-8 border-emerald-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-black uppercase tracking-tighter mb-6">Our Progress</h1>
          <p className="text-xl text-slate-300">We are currently building the foundation for sustainable finance in Sierra Leone. Follow our growth journey here.</p>
        </div>
      </section>

      <section className="py-24 max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-black text-slate-900 mb-16 uppercase text-center">Development Roadmap</h2>
        <div className="space-y-8">
          {milestones.map((m, i) => (
            <div key={i} className="bg-white p-8 border-l-8 border-emerald-600 shadow-sm flex items-start gap-6">
              <div className="text-4xl text-emerald-600 mt-1">{m.icon}</div>
              <div>
                <span className="text-emerald-700 font-bold uppercase tracking-widest text-xs">{m.date}</span>
                <h3 className="text-xl font-black text-slate-900 uppercase my-1">{m.title}</h3>
                <p className="text-slate-600">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Social proof of intent, not just content */}
      <section className="py-20 bg-white text-center border-t border-slate-200">
        <h3 className="text-2xl font-black uppercase mb-6">Stay Connected</h3>
        <p className="text-slate-600 mb-8 max-w-md mx-auto">We are actively updating our communities. Join our mission to promote financial inclusion in Sierra Leone.</p>
        <a href="https://facebook.com/your-page" className="inline-block bg-slate-900 text-white px-10 py-4 font-black uppercase hover:bg-emerald-700 transition">Follow our journey on Facebook</a>
      </section>
    </main>
  );
}