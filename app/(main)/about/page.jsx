"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutPage() {
  const values = [
    { title: "Integrity", desc: "Upholding the highest ethical standards." },
    { title: "Transparency", desc: "Clear, honest communication." },
    { title: "Accountability", desc: "Taking responsibility for outcomes." },
    { title: "Innovation", desc: "Creative solutions for growth." },
    { title: "Customer Focus", desc: "Our clients come first." },
    { title: "Community Development", desc: "Investing in Sierra Leone." },
  ];

  return (
    <main className="w-full bg-slate-50">
      {/* 1. UPDATED HERO */}
      <section className="relative py-24 bg-slate-900 text-white border-b-8 border-emerald-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-black uppercase tracking-tight mb-4">About Ibrakan Micro Finance</h1>
          <p className="text-xl text-emerald-500 font-bold uppercase tracking-[0.2em]">
            Micro Finance, General Merchandise & Progressive Association
          </p>
        </div>
      </section>

    
      {/* 2. WHO WE ARE - Reframed for a new, energetic entrant */}
{/* 2. WHO WE ARE */}
<section className="py-24 bg-white">
  <div className="max-w-5xl mx-auto px-6 text-center">

    <span className="inline-block bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full font-bold uppercase tracking-wider text-sm mb-4">
      Who We Are
    </span>

    <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8">
      Building Financial Opportunities for Every Community
    </h2>

    <p className="text-lg text-slate-600 leading-9 mb-6">
      Ibrakan Micro Finance, General Merchandise & Progressive Association is
      a newly established Sierra Leonean institution dedicated to supporting
      individuals, entrepreneurs, traders, farmers and community groups through
      accessible financial services and business support.
    </p>

    <p className="text-lg text-slate-600 leading-9 mb-6">
      Although we are a young institution, our vision is clear—to promote
      financial inclusion, encourage entrepreneurship, and contribute to the
      economic development of Sierra Leone through responsible lending,
      transparent operations and excellent customer service.
    </p>

    <p className="text-lg text-slate-600 leading-9">
      Every journey starts with a single step. We are committed to growing
      together with our clients by building long-term relationships based on
      trust, integrity and shared success.
    </p>

  </div>
</section>

{/* INSTITUTIONAL STATS */}
<section className="py-12 bg-emerald-700 text-white">
  <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
    <div>
      <h3 className="text-3xl font-black">2026</h3>
      <p className="text-xs uppercase tracking-widest font-bold opacity-80">Established</p>
    </div>
    <div>
      <h3 className="text-3xl font-black">100%</h3>
      <p className="text-xs uppercase tracking-widest font-bold opacity-80">Commitment</p>
    </div>
    <div>
      <h3 className="text-3xl font-black">Local</h3>
      <p className="text-xs uppercase tracking-widest font-bold opacity-80">Community Focus</p>
    </div>
    <div>
      <h3 className="text-3xl font-black">Reliable</h3>
      <p className="text-xs uppercase tracking-widest font-bold opacity-80">Lending</p>
    </div>
  </div>
</section>

      {/* 3. IMPROVED CEO MESSAGE */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-2">
            <div className="relative w-full aspect-[3/4] bg-slate-900 border-r-8 border-b-8 border-emerald-600 overflow-hidden">
              <Image src="/images/ibrakanCeo.jpeg" alt="Ibrahim Alhaji Kanu" fill className="object-cover grayscale" />
            </div>
            <h4 className="text-2xl font-black text-slate-900 mt-6">IBRAHIM ALHAJI KANU</h4>
            <p className="text-emerald-700 font-black uppercase tracking-widest text-sm">Founder & Executive Director</p>
            <p className="text-slate-600 text-sm mt-4 italic">
              Ibrahim provides strategic leadership and is committed to promoting financial inclusion and sustainable economic development throughout Sierra Leone.
            </p>
          </div>
          <div className="lg:col-span-3">
            <div className="text-5xl text-emerald-600 mb-6">"</div>
            <p className="text-xl font-bold text-slate-900 leading-relaxed">
              At Ibrakan Micro Finance, we believe that access to finance is the foundation of economic growth. Our mission is to support hardworking individuals, entrepreneurs, farmers, and communities with affordable financial solutions that improve lives and create sustainable businesses.
            </p>
          </div>
        </div>
      </section>

      {/* 4. CORE VALUES */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-black uppercase mb-16 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <div key={i} className="p-8 border border-slate-700 hover:border-emerald-500 transition-all">
                <h3 className="text-xl font-black text-emerald-500 mb-2">{v.title}</h3>
                <p className="text-slate-400 text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. LEADERSHIP BIOS */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-black text-slate-900 uppercase mb-16 text-center">Institutional Leadership</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Yeama */}
            <div className="bg-white p-8 border-b-4 border-slate-900 shadow-sm">
              <div className="relative w-full aspect-[3/4] mb-6 overflow-hidden bg-slate-100">
                <Image src="/images/ibraknaSec.jpeg" alt="Yeama Thompson" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-black text-slate-900 uppercase">Miss Yeama Thompson</h3>
              <p className="text-emerald-700 font-bold uppercase text-xs tracking-widest mb-4">Managing Director</p>
              <p className="text-sm text-slate-600">Yeama oversees daily operations and service delivery, ensuring that Ibrakan's credit solutions are efficiently distributed to our diverse client base.</p>
            </div>
            {/* Ezikel */}
            <div className="bg-white p-8 border-b-4 border-slate-900 shadow-sm">
              <div className="relative w-full aspect-[3/4] mb-6 overflow-hidden bg-slate-100">
                <Image src="/images/secretary.jpg" alt="Ezikel" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-black text-slate-900 uppercase">Mr. Ezikel</h3>
              <p className="text-emerald-700 font-bold uppercase text-xs tracking-widest mb-4">Organizing Secretary</p>
              <p className="text-sm text-slate-600">Ezikel manages organizational logistics and member relations, acting as the vital link between our institution and the grassroots communities we serve.</p>
            </div>
          </div>
        </div>
      </section>
      {/* FINAL CTA */}
<section className="py-20 bg-slate-900 text-center">
  <div className="max-w-2xl mx-auto px-6">
    <h2 className="text-3xl font-black text-white mb-6 uppercase tracking-tight">Ready to Partner with Ibrakan?</h2>
    <p className="text-slate-400 mb-8">Join the growing community of entrepreneurs and farmers building a sustainable future in Sierra Leone.</p>
    <a href="/apply" className="inline-block px-10 py-4 bg-emerald-600 hover:bg-emerald-700 font-black text-white uppercase tracking-widest transition">
      Apply for a Loan
    </a>
  </div>
</section>
    </main>
  );
}