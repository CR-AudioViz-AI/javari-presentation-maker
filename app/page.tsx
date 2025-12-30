'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Presentation, Sparkles, Wand2, Download, Layout, Palette, Image, Type, ChevronRight, Menu, X, ArrowRight, Zap, Clock, FileText, Star } from 'lucide-react';

const TEMPLATES = [
  { name: 'Business Pitch', icon: '💼', slides: 12, color: 'from-blue-500 to-indigo-600' },
  { name: 'Sales Deck', icon: '📈', slides: 10, color: 'from-green-500 to-emerald-600' },
  { name: 'Startup Pitch', icon: '🚀', slides: 15, color: 'from-purple-500 to-violet-600' },
  { name: 'Educational', icon: '📚', slides: 8, color: 'from-amber-500 to-orange-600' },
  { name: 'Portfolio', icon: '🎨', slides: 6, color: 'from-pink-500 to-rose-600' },
  { name: 'Conference', icon: '🎤', slides: 20, color: 'from-cyan-500 to-teal-600' },
];

const FEATURES = [
  { icon: Wand2, title: 'AI-Powered Content', description: 'Describe your topic and let AI generate complete slide content with proper structure.', color: 'from-purple-500 to-indigo-600' },
  { icon: Layout, title: 'Smart Layouts', description: 'Automatically arrange content with professional layouts that adapt to your content.', color: 'from-blue-500 to-cyan-600' },
  { icon: Palette, title: 'Brand Themes', description: 'Apply your brand colors, fonts, and style across all slides with one click.', color: 'from-pink-500 to-rose-600' },
  { icon: Image, title: 'Auto Images', description: 'AI selects and places relevant images that enhance your message.', color: 'from-green-500 to-emerald-600' },
  { icon: Type, title: 'Smart Text', description: 'AI refines your bullet points into compelling, concise presentation text.', color: 'from-amber-500 to-orange-600' },
  { icon: Download, title: 'Export Anywhere', description: 'Download as PPTX, PDF, or share directly with a link.', color: 'from-indigo-500 to-purple-600' },
];

const STATS = [
  { value: '10K+', label: 'Presentations Created' },
  { value: '< 2 min', label: 'Average Creation Time' },
  { value: '50+', label: 'Templates' },
  { value: '5 credits', label: 'Per Presentation' },
];

export default function PresentationMakerPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [prompt, setPrompt] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-indigo-950/20 to-slate-950">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/95 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Presentation className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="font-bold text-white text-lg">Presentation Maker</span>
                <span className="text-indigo-400 text-xs block -mt-1">by Javari AI</span>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#features" className="text-gray-300 hover:text-white">Features</a>
              <a href="#templates" className="text-gray-300 hover:text-white">Templates</a>
              <a href="#pricing" className="text-gray-300 hover:text-white">Pricing</a>
              <a href="/create" className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium rounded-lg">Create Free</a>
            </div>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2 text-gray-300">
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/20 border border-indigo-500/30 rounded-full text-sm text-indigo-300 mb-8">
            <Sparkles className="w-4 h-4" />
            <span>AI-Powered Presentations in Minutes</span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Create Stunning Presentations
            <br />
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">With AI Magic</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            Describe your topic and let Javari AI create a complete, professional presentation. No design skills needed.
          </motion.p>

          {/* Prompt Input */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <input
                type="text"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Describe your presentation... e.g., 'A pitch deck for a sustainable fashion startup'"
                className="w-full px-6 py-4 pr-32 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium rounded-lg flex items-center gap-2">
                <Wand2 className="w-4 h-4" />
                Generate
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-2">5 credits per presentation • Export as PPTX or PDF</p>
          </motion.div>

          {/* Stats */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {STATS.map((stat, i) => (
              <div key={i} className="p-4 bg-white/5 border border-white/10 rounded-xl">
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Templates */}
      <section id="templates" className="py-20 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Start From a Template</h2>
            <p className="text-gray-400">Or let AI generate a custom structure for you</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {TEMPLATES.map((template, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="p-4 bg-white/5 border border-white/10 rounded-xl text-center hover:border-indigo-500/50 transition cursor-pointer group">
                <div className="text-3xl mb-2">{template.icon}</div>
                <div className="font-medium text-white group-hover:text-indigo-400 transition">{template.name}</div>
                <div className="text-xs text-gray-500">{template.slides} slides</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">AI Does the Heavy Lifting</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">Focus on your message, we'll handle the design.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((feature, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-indigo-500/50 transition-all">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.color} mb-4`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Create?</h2>
          <p className="text-xl text-gray-400 mb-8">Your next presentation is just a prompt away.</p>
          <a href="/create" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-xl hover:opacity-90 transition">
            Start Creating <ChevronRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Presentation className="w-6 h-6 text-indigo-400" />
              <span className="text-white font-semibold">Presentation Maker</span>
              <span className="text-gray-500">by CR AudioViz AI</span>
            </div>
            <div className="text-sm text-gray-400">© {new Date().getFullYear()} CR AudioViz AI, LLC.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
