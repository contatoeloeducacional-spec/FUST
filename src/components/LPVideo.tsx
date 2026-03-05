import { Play, CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function LPVideo() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-emerald-100 selection:text-emerald-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-bottom border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-bold text-xl tracking-tighter flex items-center gap-2">
            <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center text-white">
              <Play size={16} fill="currentColor" />
            </div>
            STREAMLINE
          </div>
          <button className="bg-zinc-900 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-zinc-800 transition-colors">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block py-1 px-3 bg-emerald-50 text-emerald-700 rounded-full text-xs font-bold tracking-widest uppercase mb-6">
                New Release 2026
              </span>
              <h1 className="text-6xl md:text-7xl font-bold tracking-tight leading-[0.95] mb-8">
                Transform your <span className="text-emerald-600 italic">workflow</span> with video.
              </h1>
              <p className="text-xl text-zinc-500 mb-10 max-w-lg leading-relaxed">
                The most powerful platform for creators to build, share, and monetize their video content in minutes.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-emerald-600 text-white px-8 py-4 rounded-2xl font-semibold flex items-center justify-center gap-2 hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-200 group">
                  Start Free Trial
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="bg-white text-zinc-900 border border-zinc-200 px-8 py-4 rounded-2xl font-semibold hover:bg-zinc-50 transition-all">
                  Watch Demo
                </button>
              </div>

              <div className="mt-12 flex items-center gap-8">
                <div className="flex items-center gap-2 text-zinc-500 text-sm">
                  <CheckCircle2 size={18} className="text-emerald-500" />
                  No credit card required
                </div>
                <div className="flex items-center gap-2 text-zinc-500 text-sm">
                  <CheckCircle2 size={18} className="text-emerald-500" />
                  Cancel anytime
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative aspect-video bg-zinc-100 rounded-[2rem] overflow-hidden shadow-2xl border border-zinc-200 group cursor-pointer"
            >
              <img 
                src="https://picsum.photos/seed/video/1200/800" 
                alt="Video Preview" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/30 transition-colors">
                <div className="w-20 h-20 bg-white/90 backdrop-blur rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                  <Play size={32} className="text-emerald-600 ml-1" fill="currentColor" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      {/* Stats Section */}
      <section className="py-20 bg-zinc-50 border-y border-zinc-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            <div>
              <div className="text-4xl font-bold mb-1">10M+</div>
              <div className="text-zinc-500 text-sm uppercase tracking-widest font-medium">Views Daily</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-1">500K</div>
              <div className="text-zinc-500 text-sm uppercase tracking-widest font-medium">Creators</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-1">99.9%</div>
              <div className="text-zinc-500 text-sm uppercase tracking-widest font-medium">Uptime</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-1">24/7</div>
              <div className="text-zinc-500 text-sm uppercase tracking-widest font-medium">Support</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
