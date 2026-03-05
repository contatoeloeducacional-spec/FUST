import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, GraduationCap, Globe, Monitor, ArrowRight, BookOpen, Sparkles } from 'lucide-react';

const LionIcon = ({ size = 24, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {/* Lion Head Silhouette */}
    <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9z" />
    <path d="M12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" />
    <path d="M10 10c0-1.1.9-2 2-2s2 .9 2 2" />
    <path d="M12 14v-2" />
    <path d="M9 15c1 1 2 1.5 3 1.5s2-.5 3-1.5" />
    <path d="M8 8l-1-1" />
    <path d="M16 8l1-1" />
    <path d="M6 12H4" />
    <path d="M20 12h-2" />
    <path d="M12 2v2" />
  </svg>
);

const FUSTLanding = () => {
  const [showLetter, setShowLetter] = useState(false);
  const [isOpening, setIsOpening] = useState(false);

  const handleOpenLetter = () => {
    setIsOpening(true);
    setTimeout(() => {
      setShowLetter(true);
      setIsOpening(false);
    }, 2500); // Animation duration
  };

  return (
    <div className="min-h-screen bg-fust-blue overflow-x-hidden">
      <AnimatePresence mode="wait">
        {!showLetter ? (
          <motion.div
            key="hero"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative min-h-screen flex flex-col"
          >
            {/* Background Layer */}
            <div className="absolute inset-0 z-0">
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-30 grayscale mix-blend-overlay"
                style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1920&q=80")' }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-fust-blue/80 via-fust-blue/40 to-fust-blue" />
              <div className="absolute inset-0 digital-particles opacity-40" />
            </div>

            {/* Navigation */}
            <nav className="relative z-10 px-8 py-6 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 border-2 border-fust-gold rounded-full flex items-center justify-center text-fust-gold shadow-[0_0_15px_rgba(201,165,76,0.3)]">
                  <LionIcon size={24} />
                </div>
                <span className="font-cinzel font-bold text-xl tracking-widest text-fust-gold">FUST</span>
              </div>
              <div className="hidden md:flex gap-8 font-montserrat text-xs uppercase tracking-widest font-semibold">
                <a href="https://fustuniversity.com/" target="_blank" rel="noopener noreferrer" className="hover:text-fust-gold transition-colors no-underline">Programas</a>
                <a href="#" className="hover:text-fust-gold transition-colors no-underline">Sobre</a>
                <a href="https://educacional.usecerbrum.net/inicio.aspx#alunos" target="_blank" rel="noopener noreferrer" className="hover:text-fust-gold transition-colors no-underline">Portal</a>
              </div>
            </nav>

            {/* Hero Content */}
            <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 text-center">
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="mb-6"
              >
                <Sparkles className="text-fust-gold mx-auto mb-4 animate-pulse" size={32} />
                <h2 className="font-cinzel text-fust-gold text-lg md:text-xl tracking-[0.3em] uppercase mb-2">Bem-vindo à FUST</h2>
                <h1 className="font-playfair text-5xl md:text-8xl font-bold leading-tight mb-6">
                  Florida University of <br />
                  <span className="italic text-fust-gold border-b-4 border-fust-crimson pb-2">Science and Theology</span>
                </h1>
                <p className="font-cormorant text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed italic">
                  "Onde fé, ciência e conhecimento se unem para formar líderes preparados para transformar o mundo."
                </p>
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(123, 17, 19, 0.6)" }}
                whileTap={{ scale: 0.95 }}
                onClick={handleOpenLetter}
                className="mt-12 group relative px-10 py-5 bg-fust-crimson text-white font-montserrat font-bold uppercase tracking-widest rounded-full overflow-hidden transition-all border border-fust-gold/30"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Abrir Carta de Boas-Vindas
                  <Mail size={20} className="group-hover:rotate-12 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-fust-gold/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </motion.button>
            </div>

            {/* Floating Particles */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-40">
              <div className="w-[1px] h-20 bg-gradient-to-b from-transparent via-fust-gold to-transparent" />
              <span className="font-montserrat text-[10px] uppercase tracking-[0.5em] text-fust-gold">Explore a Tradição</span>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="letter-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative min-h-screen library-overlay flex items-center justify-center"
          >
            {/* Ambient Light Effects */}
            <div className="absolute inset-0 bg-gradient-to-tr from-fust-crimson/40 via-transparent to-fust-gold/20 pointer-events-none" />
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/dust.png')] opacity-30 pointer-events-none" />
            
            <WelcomeLetter onContinue={() => setShowLetter(false)} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Transition Overlay */}
      <AnimatePresence>
        {isOpening && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-fust-crimson/95 backdrop-blur-md flex items-center justify-center"
          >
            <div className="relative w-80 h-56 perspective-1000">
              {/* Envelope Animation */}
              <motion.div
                initial={{ rotateX: 0, y: 100, opacity: 0 }}
                animate={{ rotateX: 0, y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="relative w-full h-full bg-[#f2e6d0] rounded-lg shadow-2xl border-2 border-fust-gold/30 flex items-center justify-center overflow-hidden"
              >
                {/* Wax Seal */}
                <motion.div
                  initial={{ scale: 0, rotate: -45 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 1, type: "spring" }}
                  className="absolute z-20 w-16 h-16 bg-fust-crimson rounded-full shadow-lg flex items-center justify-center border-2 border-fust-gold"
                >
                  <div className="text-fust-gold flex items-center justify-center">
                    <LionIcon size={32} />
                  </div>
                </motion.div>

                {/* Cracks/Breaking Animation */}
                <motion.div
                  animate={{ scale: [1, 1.2, 0], opacity: [1, 1, 0] }}
                  transition={{ delay: 1.8, duration: 0.5 }}
                  className="absolute z-30 inset-0 flex items-center justify-center"
                >
                  <div className="w-20 h-20 bg-fust-gold/30 rounded-full blur-xl" />
                </motion.div>

                {/* Envelope Flap */}
                <motion.div
                  animate={{ rotateX: -180 }}
                  transition={{ delay: 2, duration: 0.5 }}
                  className="absolute top-0 left-0 w-full h-1/2 bg-[#e6d5b8] origin-top z-10 rounded-t-lg border-b border-fust-gold/10"
                />
                
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-full h-[2px] bg-fust-gold/10 absolute top-1/2" />
                   <div className="h-full w-[2px] bg-fust-gold/10 absolute left-1/2" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* About Section (Only visible when not showing letter) */}
      {!showLetter && (
        <>
          <section className="relative py-32 px-6 bg-fust-blue overflow-hidden">
            <div className="absolute inset-0 opacity-5 pointer-events-none">
              <div 
                className="w-full h-full bg-no-repeat bg-center bg-contain"
                style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/world-map.png")' }}
              />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
              <div className="text-center mb-20">
                <h2 className="font-cinzel text-fust-gold tracking-[0.3em] uppercase mb-4">Excelência Global</h2>
                <h3 className="font-playfair text-4xl md:text-6xl font-bold">Tradição que Transforma</h3>
                <div className="w-24 h-1 bg-fust-crimson mx-auto mt-6" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { icon: GraduationCap, title: "Programas Acadêmicos", desc: "Graduação, pós-graduação e programas internacionais de alto nível." },
                  { icon: Globe, title: "Comunidade Global", desc: "Estudantes de diversos países conectados pelo conhecimento e propósito." },
                  { icon: Monitor, title: "Educação Online", desc: "Aprendizado moderno, flexível e acessível de qualquer lugar do mundo." }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -10 }}
                    className="p-10 bg-white/5 border border-white/10 rounded-[2rem] backdrop-blur-sm hover:border-fust-crimson/50 transition-all group"
                  >
                    <div className="w-16 h-16 bg-fust-crimson/10 rounded-2xl flex items-center justify-center text-fust-crimson mb-8 group-hover:bg-fust-crimson group-hover:text-white transition-colors">
                      <item.icon size={32} />
                    </div>
                    <h4 className="font-cinzel text-xl font-bold mb-4">{item.title}</h4>
                    <p className="font-cormorant text-lg text-white/60 leading-relaxed">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-32 px-6 text-center bg-gradient-to-b from-fust-blue to-fust-crimson/20">
            <div className="max-w-4xl mx-auto">
              <BookOpen className="text-fust-gold mx-auto mb-8" size={48} />
              <h2 className="font-playfair text-4xl md:text-6xl font-bold mb-12">
                "O futuro pertence àqueles que buscam conhecimento."
              </h2>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://fustuniversity.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-10 py-5 bg-fust-crimson text-white font-montserrat font-bold uppercase tracking-widest rounded-full hover:shadow-[0_0_30px_rgba(123, 17, 19, 0.4)] transition-all border border-fust-gold/20 no-underline inline-block"
                >
                  Conhecer Programas
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://educacional.usecerbrum.net/inicio.aspx#alunos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-10 py-5 border border-fust-gold text-fust-gold font-montserrat font-bold uppercase tracking-widest rounded-full hover:bg-fust-gold/10 transition-all no-underline inline-block"
                >
                  Acessar Portal do Aluno
                </motion.a>
              </div>
            </div>
          </section>

          <footer className="py-12 px-8 border-t border-white/5 text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <LionIcon size={24} className="text-fust-gold" />
              <span className="font-cinzel text-sm tracking-[0.3em] text-fust-gold">FUST</span>
            </div>
            <p className="font-cormorant text-white/40 text-sm italic">
              Florida University of Science and Theology &copy; 2026. Todos os direitos reservados.
            </p>
          </footer>
        </>
      )}
    </div>
  );
};

const WelcomeLetter = ({ onContinue }: { onContinue: () => void }) => {
  return (
    <div className="w-full max-w-4xl mx-auto p-6 md:p-12 z-10">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="parchment-texture p-8 md:p-16 rounded-sm shadow-[0_30px_100px_rgba(0,0,0,0.5)] border-4 border-double border-fust-crimson/30 relative overflow-hidden"
      >
        {/* Lion Watermark */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none">
          <LionIcon size={600} />
        </div>

        {/* Decorative Borders */}
        <div className="absolute top-4 left-4 right-4 bottom-4 border border-fust-gold/20 pointer-events-none" />
        <div className="absolute top-6 left-6 right-6 bottom-6 border border-fust-gold/10 pointer-events-none" />

        <header className="text-center mb-12 relative">
          <div className="w-24 h-24 border-2 border-fust-crimson rounded-full flex items-center justify-center text-fust-crimson mx-auto mb-6 shadow-inner bg-white/10 backdrop-blur-sm">
            <LionIcon size={48} />
          </div>
          <h1 className="font-cinzel text-3xl md:text-4xl font-bold text-fust-black tracking-tight mb-2 uppercase">Carta de Boas-Vindas</h1>
          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-fust-crimson to-transparent mx-auto" />
        </header>

        <div className="font-cormorant text-xl md:text-2xl text-fust-black/90 leading-relaxed space-y-6 text-justify relative z-10">
          <p className="font-bold italic text-fust-crimson text-2xl mb-8">Caro(a) estudante,</p>
          
          <p>É com grande alegria que damos as boas-vindas a você na <span className="font-bold text-fust-crimson">Florida University of Science and Theology</span>.</p>
          
          <p>Hoje marca o início de uma nova jornada em sua vida acadêmica e pessoal. Ao ingressar na FUST, você passa a fazer parte de uma comunidade internacional dedicada ao conhecimento, à reflexão e à transformação do mundo por meio da educação.</p>
          
          <p>Nossa universidade nasceu com um propósito claro: unir ciência, fé e sabedoria para formar líderes preparados para enfrentar os desafios da sociedade moderna.</p>
          
          <p>Aqui, você encontrará mais do que cursos e disciplinas. Encontrará um ambiente de crescimento, diálogo e descoberta, onde cada estudante é encorajado a desenvolver seu potencial intelectual, espiritual e humano.</p>
          
          <p>Esperamos que esta jornada seja marcada por aprendizado profundo, novas amizades e conquistas significativas.</p>
          
          <p>Que este seja apenas o primeiro capítulo de uma história extraordinária.</p>
          
          <div className="pt-12 text-center">
            <p className="font-bold italic text-fust-crimson text-2xl">Seja muito bem-vindo(a) à FUST.</p>
          </div>
        </div>

        <footer className="mt-16 pt-8 border-t-2 border-fust-crimson/10 flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
          <div className="text-center md:text-left">
            <p className="font-cinzel font-bold text-sm uppercase tracking-widest text-fust-black">Diretoria Acadêmica</p>
            <p className="font-cormorant italic text-fust-black/60">Florida University of Science and Theology</p>
          </div>
          
          <motion.a
            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(15, 30, 58, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            href="https://wa.me/5583999751577?text=Quero%20fazer%20parte%20da%20FUST"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-10 py-5 bg-fust-blue text-white font-montserrat font-bold uppercase tracking-widest rounded-sm hover:bg-fust-black transition-colors group shadow-2xl no-underline border border-fust-gold/20"
          >
            Iniciar Minha Jornada
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </footer>

        {/* Official Stamp */}
        <div className="absolute bottom-8 right-8 opacity-10 pointer-events-none rotate-12">
          <div className="w-32 h-32 border-4 border-fust-crimson rounded-full flex items-center justify-center">
            <div className="text-fust-crimson font-cinzel font-bold text-center text-xs">
              OFFICIAL SEAL<br/>FUST 2026
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default FUSTLanding;
