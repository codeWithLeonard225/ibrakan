import Link from "next/link";
import Image from "next/image";
import { IoLogoFacebook, IoLogoTwitter, IoLogoLinkedin, IoLogoWhatsapp, IoMail, IoCall, IoLocation } from "react-icons/io5";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10 border-t-8 border-emerald-600">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* 1. BRAND & IDENTITY */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="text-3xl font-black tracking-tighter uppercase">Ibrakan</span>
            </div>
            <p className="text-slate-400 leading-relaxed text-sm font-light">
              Providing structural financial integrity and micro-lending solutions for Sierra Leonean businesses.
            </p>
            <div className="flex gap-4">
              <SocialLink href="#" icon={<IoLogoFacebook />} />
              <SocialLink href="#" icon={<IoLogoTwitter />} />
              <SocialLink href="#" icon={<IoLogoLinkedin />} />
              <SocialLink href="#" icon={<IoLogoWhatsapp />} />
            </div>
          </div>

          {/* 2. QUICK LINKS */}
          <div>
            <h4 className="font-black text-lg mb-6 border-l-4 border-emerald-600 pl-3 uppercase tracking-widest text-emerald-500">Navigation</h4>
            <ul className="space-y-4 text-slate-300 text-sm">
              <li><FooterLink href="/about">Our Vision</FooterLink></li>
              <li><FooterLink href="/services">Industrial Products</FooterLink></li>
              <li><FooterLink href="/impact">Success Stories</FooterLink></li>
              <li><FooterLink href="/contact">Support</FooterLink></li>
            </ul>
          </div>

          {/* 3. FINANCE */}
          <div>
            <h4 className="font-black text-lg mb-6 border-l-4 border-emerald-600 pl-3 uppercase tracking-widest text-emerald-500">Finance</h4>
            <ul className="space-y-4 text-slate-300 text-sm">
              <li><FooterLink href="/loan-products">Credit Cycles</FooterLink></li>
              <li><FooterLink href="/loan-products">MSME Loans</FooterLink></li>
              <li><FooterLink href="/loan-products">Asset Financing</FooterLink></li>
              <li><FooterLink href="/apply" className="text-emerald-400 font-black">Apply Now</FooterLink></li>
            </ul>
          </div>

          {/* 4. OFFICE INFO */}
          <div>
            <h4 className="font-black text-lg mb-6 border-l-4 border-emerald-600 pl-3 uppercase tracking-widest text-emerald-500">HQ Office</h4>
            <ul className="space-y-4 text-slate-300 text-sm">
              <li className="flex gap-3">
                <IoLocation className="text-emerald-500 text-xl shrink-0" />
                <span>Western Urban, Freetown</span>
              </li>
              <li className="flex gap-3">
                <IoCall className="text-emerald-500 text-xl shrink-0" />
                <span>+232 7X XXX XXX</span>
              </li>
              <li className="flex gap-3">
                <IoMail className="text-emerald-500 text-xl shrink-0" />
                <span>info@ibrakan.sl</span>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-xs uppercase tracking-widest">
            © {currentYear} Ibrakan Financial. All rights reserved.
          </p>
          <div className="flex gap-8 text-xs text-slate-500 uppercase tracking-widest">
            <Link href="/privacy" className="hover:text-emerald-500 transition">Privacy</Link>
            <Link href="/terms" className="hover:text-emerald-500 transition">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* --- HELPER COMPONENTS --- */

function FooterLink({ href, children, className = "" }) {
  return (
    <Link href={href} className={`hover:text-emerald-400 transition-colors ${className}`}>
      {children}
    </Link>
  );
}

function SocialLink({ href, icon }) {
  return (
    <a href={href} className="w-10 h-10 bg-slate-800 flex items-center justify-center text-lg hover:bg-emerald-600 transition-colors">
      {icon}
    </a>
  );
}