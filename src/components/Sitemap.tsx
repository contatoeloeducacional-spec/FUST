import { Link } from 'react-router-dom';
import { Map, Layout, Video, Home, Shield } from 'lucide-react';

export default function Sitemap() {
  return (
    <div className="min-h-screen bg-zinc-50 p-8 font-sans">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12">
          <div className="flex items-center gap-2 text-emerald-600 mb-2">
            <Map size={24} />
            <span className="text-xs font-bold uppercase tracking-widest">Developer Preview</span>
          </div>
          <h1 className="text-4xl font-bold text-zinc-900 tracking-tight">Sitemap</h1>
          <p className="text-zinc-500 mt-2">Navegação rápida para ambiente de desenvolvimento.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link 
            to="/fust" 
            className="group p-6 bg-white border border-zinc-200 rounded-2xl hover:border-fust-crimson transition-all shadow-sm"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-red-50 text-fust-crimson rounded-xl group-hover:bg-fust-crimson group-hover:text-white transition-colors">
                <Shield size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-zinc-900">FUST Landing Page</h3>
                <p className="text-sm text-zinc-500">Página premium da universidade.</p>
              </div>
            </div>
          </Link>

          <Link 
            to="/lp-video" 
            className="group p-6 bg-white border border-zinc-200 rounded-2xl hover:border-emerald-500 transition-all shadow-sm"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <Video size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-zinc-900">Landing Page Vídeo</h3>
                <p className="text-sm text-zinc-500">Acesse a página principal da LP.</p>
              </div>
            </div>
          </Link>

          <Link 
            to="/" 
            className="group p-6 bg-white border border-zinc-200 rounded-2xl hover:border-emerald-500 transition-all shadow-sm"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-zinc-50 text-zinc-600 rounded-xl group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <Home size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-zinc-900">Página Inicial</h3>
                <p className="text-sm text-zinc-500">Redirecionamento dinâmico.</p>
              </div>
            </div>
          </Link>
        </div>

        <footer className="mt-20 pt-8 border-t border-zinc-200 text-zinc-400 text-xs font-mono uppercase tracking-widest">
          Hybrid Routing Architecture &copy; 2026
        </footer>
      </div>
    </div>
  );
}
