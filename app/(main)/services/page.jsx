"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const interventions = [
  {
    category: "Financial Inclusion",
    title: "Prioritized Enterprise Financing",
    desc: "We prioritize financing to micro, small, medium enterprises (MSMEs) and agricultural cooperatives, ensuring that capital reaches the engines of local economic growth.",
    image: "/images/financing.jpg",
    details: ["MSME Focus", "Agricultural Cooperatives", "Direct Capital Injection"]
  },
  {
    category: "Income Generation",
    title: "Empowering the Active Poor",
    desc: "We make it possible for the active poor to increase their household incomes through the extension of affordable financing to both individuals and organized groups.",
    image: "/images/income-growth.jpg",
    details: ["Individual Loans", "Group Solidarity Lending", "Affordable Interest Rates"]
  },
  {
    category: "Job Creation",
    title: "Direct & Indirect Employment",
    desc: "We create employment opportunities across Sierra Leone through strategic financing for individuals and groups engaged in viable small and medium enterprises.",
    image: "/images/employment.jpg",
    details: ["SME Job Growth", "Entrepreneurial Support", "Viable Business Funding"]
  },
  {
    category: "Sustainability",
    title: "Capacity Building & Research",
    desc: "We strengthen the management capacities of our clients through training and conduct rigorous market research to develop products that suit the unique needs of our target clients.",
    image: "/images/research.jpg",
    details: ["Management Training", "Market-Driven Products", "Sustainable Business Coaching"]
  }
];

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function ServicesPage() {
  return (
    <main className="w-full bg-slate-50 overflow-hidden">
      {/* HEADER */}
      <section className="bg-slate-900 text-white py-24 relative border-b-8 border-emerald-600">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-7xl mx-auto px-6 relative z-10">
          <span className="text-emerald-500 font-black tracking-[0.3em] uppercase text-sm mb-4 block">// Our Impact</span>
          <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tight">What We Do</h1>
          <p className="text-slate-300 text-lg md:text-xl max-w-2xl border-l-2 border-emerald-500 pl-6">
            Ibrakan Micro Finance, General Merchandise & Progressive Association is dedicated to transforming lives in Sierra Leone by providing inclusive financial services and the knowledge required to use them effectively.
          </p>
        </motion.div>
      </section>

      {/* INTERVENTIONS GRID */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 space-y-32">
          {interventions.map((item, index) => (
            <motion.div 
              key={index} 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={sectionVariants}
              className={`flex flex-col md:flex-row gap-16 items-center ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
            >
              <div className="w-full md:w-1/2">
                <div className="relative h-[400px] w-full border-r-8 border-b-8 border-emerald-600 overflow-hidden group">
                  <Image src={item.image} alt={item.title} fill className="object-cover" />
                </div>
              </div>

              <div className="w-full md:w-1/2">
                <div className="space-y-6">
                  <span className="text-emerald-700 font-black text-sm uppercase tracking-[0.2em]">{item.category}</span>
                  <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tight">{item.title}</h2>
                  <p className="text-gray-600 text-lg leading-relaxed">{item.desc}</p>
                  
                  <ul className="grid grid-cols-1 gap-4 pt-4">
                    {item.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-center gap-3 text-slate-900 font-bold border-l-2 border-emerald-500 pl-4">
                        {detail}
                      </li>
                    ))}
                  </ul>

                  <div className="pt-8">
                    <Link href="/apply" className="inline-block bg-slate-900 text-white px-8 py-4 font-black uppercase tracking-widest hover:bg-emerald-700 transition-all">
                      Access Service →
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}