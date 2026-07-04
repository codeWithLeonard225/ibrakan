"use client";

import { motion } from "framer-motion";
import { IoCall, IoMail, IoLocation, IoTime } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";

export default function ContactPage() {
  return (
    <main className="w-full bg-slate-50 overflow-hidden">
      {/* HEADER SECTION */}
      <section className="bg-slate-900 py-24 text-white relative border-b-8 border-emerald-600">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter">Get In Touch</h1>
            <p className="text-xl text-slate-300 max-w-2xl border-l-4 border-emerald-600 pl-6">
              Connect with Ibrakan Financial. Our Freetown team is ready to provide the structural support your business needs.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16">
          
          {/* LEFT COLUMN: CONTACT INFO */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <h2 className="text-3xl font-black text-slate-900 mb-10 uppercase tracking-tighter">Contact Details</h2>
              
              <div className="space-y-10">
                {[
                  { icon: <IoCall />, label: "Call Us", details: ["+232 XX XXX XXX"] },
                  { icon: <IoMail />, label: "Email Us", details: ["info@ibrakan.sl"] },
                  { icon: <IoLocation />, label: "Our Office", details: ["Western Urban HQ", "Freetown, Sierra Leone"] },
                  { icon: <IoTime />, label: "Working Hours", details: ["Mon - Fri: 8:00 AM - 5:00 PM"] }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-6 border-l-4 border-emerald-600 pl-6">
                    <div className="text-emerald-700 text-3xl">{item.icon}</div>
                    <div>
                      <h4 className="font-black text-slate-500 uppercase text-xs tracking-[0.2em] mb-1">{item.label}</h4>
                      {item.details.map((line, lIdx) => (
                        <p key={lIdx} className="text-slate-900 font-bold text-lg">{line}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: CONTACT FORM */}
          <div className="lg:col-span-7">
            <div className="bg-white border-2 border-slate-200 p-12 shadow-sm">
              <h3 className="text-3xl font-black text-slate-900 mb-8 uppercase tracking-tighter">Send a Message</h3>
              <form className="space-y-8" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
                <div className="grid md:grid-cols-2 gap-8">
                  <input name="name" type="text" required className="w-full p-5 bg-slate-100 border-b-4 border-slate-300 focus:border-emerald-600 outline-none" placeholder="Full Name" />
                  <input name="email" type="email" required className="w-full p-5 bg-slate-100 border-b-4 border-slate-300 focus:border-emerald-600 outline-none" placeholder="Email Address" />
                </div>
                <select name="subject" className="w-full p-5 bg-slate-100 border-b-4 border-slate-300 focus:border-emerald-600 outline-none">
                  <option>General Inquiry</option>
                  <option>Loan Support</option>
                  <option>Partnerships</option>
                </select>
                <textarea name="message" rows="5" required className="w-full p-5 bg-slate-100 border-b-4 border-slate-300 focus:border-emerald-600 outline-none" placeholder="Message"></textarea>
                <button type="submit" className="w-full py-6 bg-slate-900 text-white font-black uppercase tracking-widest hover:bg-emerald-700 transition-all flex items-center justify-center gap-4">
                  Send Message <FaArrowRight />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER NOTE */}
      <section className="py-12 bg-slate-100 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-slate-600 font-bold uppercase tracking-widest text-sm">
            We welcome visitors at our Freetown headquarters during business hours.
          </p>
        </div>
      </section>
    </main>
  );
}