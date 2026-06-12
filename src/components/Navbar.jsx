import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-surface/80 backdrop-blur-md border-b border-outline-variant/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl overflow-hidden flex items-center justify-center shadow-glow transition-transform group-hover:scale-105 bg-white border border-slate-100/50">
            <img src={logo} alt="ProxiJob Logo" className="w-full h-full object-contain p-1" />
          </div>
          <div className="flex flex-col text-left">
            <span className="font-sora font-extrabold text-xl tracking-tight text-slate-900 flex items-center gap-1">
              Proxi<span className="text-primary-container">Job</span>
            </span>
            <span className="font-hanken text-[9px] uppercase tracking-wider text-slate-400 font-extrabold">
              VIỆC LÀM GEN-Z SIÊU GẦN
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 font-hanken font-extrabold text-base text-slate-600">
          <a href="#features" className="hover:text-primary transition-colors">Khám phá</a>
          <a href="#workflow" className="hover:text-primary transition-colors">Quy trình</a>
          <a href="#pricing" className="hover:text-primary transition-colors">Bảng giá</a>
          <a href="#testimonials" className="hover:text-primary transition-colors">Đánh giá</a>
          <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
        </div>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-5">
          <a
            href="#signin"
            className="font-hanken font-extrabold text-base text-slate-600 hover:text-primary transition-colors"
          >
            Đăng nhập
          </a>
          <a
            href="#start"
            className="px-6 py-3 bg-primary-container text-white font-hanken font-extrabold text-base rounded-full shadow-glow hover:bg-primary-container/90 transition-all hover:scale-105 active:scale-95 cursor-pointer"
          >
            Bắt đầu ngay ⚡
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-slate-900 hover:text-primary transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-outline-variant/20 px-6 py-6 flex flex-col gap-6 animate-in fade-in slide-in-from-top-5 duration-200">
          <div className="flex flex-col gap-4 font-hanken font-bold text-base text-slate-600 text-left">
            <a href="#features" onClick={() => setIsOpen(false)} className="hover:text-primary transition-colors">Khám phá</a>
            <a href="#workflow" onClick={() => setIsOpen(false)} className="hover:text-primary transition-colors">Quy trình</a>
            <a href="#pricing" onClick={() => setIsOpen(false)} className="hover:text-primary transition-colors">Bảng giá</a>
            <a href="#testimonials" onClick={() => setIsOpen(false)} className="hover:text-primary transition-colors">Đánh giá</a>
            <a href="#faq" onClick={() => setIsOpen(false)} className="hover:text-primary transition-colors">FAQ</a>
          </div>
          <div className="h-px bg-outline-variant/10 w-full" />
          <div className="flex items-center justify-between gap-4">
            <a
              href="#signin"
              onClick={() => setIsOpen(false)}
              className="w-1/2 text-center font-hanken font-bold text-sm text-slate-600 hover:text-primary transition-colors"
            >
              Đăng nhập
            </a>
            <a
              href="#start"
              onClick={() => setIsOpen(false)}
              className="w-1/2 text-center px-6 py-2.5 bg-primary-container text-white font-hanken font-bold text-sm rounded-full shadow-glow"
            >
              Bắt đầu ngay ⚡
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
