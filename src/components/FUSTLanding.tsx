import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { Mail, GraduationCap, Globe, Monitor, ArrowRight, BookOpen, Sparkles, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

const FUSTLogo = ({ size = 24, className = "", is3D = false, vibrant = false }) => (
  <div className={`relative inline-flex items-center justify-center ${className}`}>
    <img
      src="https://fustuniversity.com/wp-content/uploads/2024/04/FUST-LOGO-BRANCA-724x1024.png"
      alt="FUST Logo"
      style={{ width: size, height: 'auto' }}
      className={`
        ${is3D ? 'drop-shadow-[0_10px_25px_rgba(0,0,0,0.5)]' : ''}
        ${vibrant ? 'filter brightness-125 contrast-125 drop-shadow-[0_0_15px_rgba(201,165,76,0.6)]' : ''}
        object-contain transition-all duration-500
      `}
      referrerPolicy="no-referrer"
    />
    {is3D && (
      <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-white/5 opacity-30 pointer-events-none mix-blend-overlay" />
    )}
  </div>
);

const FUSTLanding = () => {
  const [showLetter, setShowLetter] = useState(false);
  const [isOpening, setIsOpening] = useState(false);
  const { scrollY } = useScroll();

  const backgroundY = useTransform(scrollY, [0, 500], [0, 150]);
  const particlesY = useTransform(scrollY, [0, 500], [0, -100]);
  const contentY = useTransform(scrollY, [0, 500], [0, 50]);

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
        {isOpening && (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-fust-blue flex flex-col items-center justify-center"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="w-32 h-32 border-4 border-fust-gold/20 border-t-fust-gold rounded-full"
              />
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <FUSTLogo size={60} vibrant />
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-8 text-fust-gold font-cinzel tracking-[0.5em] text-sm uppercase"
            >
              Inicializando Sistema...
            </motion.div>
            <div className="mt-4 w-48 h-1 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-full h-full bg-fust-gold shadow-[0_0_10px_#C9A54C]"
              />
            </div>
          </motion.div>
        )}

        {!showLetter ? (
          <motion.div
            key="hero"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative min-h-screen flex flex-col"
          >
            {/* Background Layer */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              <motion.div 
                style={{ 
                  backgroundImage: 'url("https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1920&q=80")',
                  y: backgroundY 
                }}
                className="absolute inset-0 bg-cover bg-center opacity-30 grayscale mix-blend-overlay scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-fust-blue/80 via-fust-blue/40 to-fust-blue" />
              <motion.div 
                style={{ y: particlesY }}
                className="absolute inset-0 digital-particles opacity-40" 
              />
            </div>

            {/* Navigation */}
            <nav className="relative z-10 px-8 py-6 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 border-2 border-fust-gold rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(201,165,76,0.4)] bg-white/10 backdrop-blur-sm">
                  <FUSTLogo size={32} vibrant />
                </div>
                <span className="font-cinzel font-bold text-xl tracking-widest text-fust-gold">FUST</span>
              </div>
              <div className="hidden md:flex gap-8 font-montserrat text-xs uppercase tracking-widest font-semibold">
                <a href="https://fustuniversity.com/" target="_blank" rel="noopener noreferrer" className="hover:text-fust-gold transition-colors no-underline">Programas</a>
                <a href="https://fustuniversity.com/institucional/" target="_blank" rel="noopener noreferrer" className="hover:text-fust-gold transition-colors no-underline">Sobre</a>
                <a href="https://educacional.usecerbrum.net/inicio.aspx#alunos" target="_blank" rel="noopener noreferrer" className="hover:text-fust-gold transition-colors no-underline">Portal</a>
              </div>
            </nav>

            {/* Hero Content */}
            <motion.div 
              style={{ y: contentY }}
              className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 text-center"
            >
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.2, delayChildren: 0.3 }
                  }
                }}
                className="mb-6 flex flex-col items-center"
              >
                <div className="mb-6" />
                
                <motion.div 
                  variants={{ hidden: { scale: 0.8, opacity: 0 }, visible: { scale: 1, opacity: 1 } }}
                  transition={{ type: "spring", stiffness: 100 }}
                  className="mb-8 relative inline-block"
                >
                  <FUSTLogo size={220} vibrant is3D className="animate-float" />
                  <div className="absolute inset-0 bg-fust-gold/20 blur-[60px] rounded-full -z-10 animate-pulse" />
                </motion.div>

                <motion.h2 
                  variants={{ hidden: { y: 30, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
                  className="font-cinzel text-fust-gold text-lg md:text-xl tracking-[0.3em] uppercase mb-2"
                >
                  Bem-vindo à FUST
                </motion.h2>

                <motion.h1 
                  variants={{ hidden: { y: 40, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
                  className="font-playfair text-5xl md:text-8xl font-bold leading-tight mb-6"
                >
                  Florida University of <br />
                  <span className="italic text-fust-gold border-b-4 border-fust-crimson pb-2">Science and Theology</span>
                </motion.h1>

                <motion.p 
                  variants={{ hidden: { y: 30, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
                  className="font-cormorant text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed italic"
                >
                  "Onde fé, ciência e conhecimento se unem para formar líderes preparados para transformar o mundo."
                </motion.p>
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
            </motion.div>

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
            exit={{ opacity: 0 }}
            className="relative min-h-screen library-overlay flex items-center justify-center py-20"
          >
            {/* Ambient Light Effects */}
            <div className="absolute inset-0 bg-gradient-to-tr from-fust-crimson/40 via-transparent to-fust-gold/20 pointer-events-none" />
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/dust.png')] opacity-30 pointer-events-none" />
            
            <WelcomeLetter onBack={() => setShowLetter(false)} />
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
                  whileHover={{ 
                    scale: 1.05, 
                    backgroundColor: '#8b1416',
                    boxShadow: "0 15px 35px rgba(123, 17, 19, 0.5)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  href="https://fustuniversity.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-10 py-5 bg-fust-crimson text-white font-montserrat font-bold uppercase tracking-widest rounded-full transition-all duration-500 border border-fust-gold/30 no-underline inline-block shadow-lg"
                >
                  Conhecer Programas
                </motion.a>
                <motion.a
                  whileHover={{ 
                    scale: 1.05, 
                    backgroundColor: 'rgba(201, 165, 76, 0.15)',
                    boxShadow: "0 10px 30px rgba(201, 165, 76, 0.25)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  href="https://educacional.usecerbrum.net/inicio.aspx#alunos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-10 py-5 border-2 border-fust-gold text-fust-gold font-montserrat font-bold uppercase tracking-widest rounded-full transition-all duration-500 no-underline inline-block"
                >
                  Acessar Portal do Aluno
                </motion.a>
              </div>
            </div>
          </section>

          <footer className="py-12 px-8 border-t border-white/5 text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <FUSTLogo size={48} vibrant is3D className="animate-pulse-gold" />
              <span className="font-cinzel text-lg tracking-[0.4em] text-fust-gold">FUST</span>
            </div>
            <div className="flex items-center justify-center gap-6 mb-8">
              <motion.a
                whileHover={{ scale: 1.2, color: '#C9A54C' }}
                href="https://www.instagram.com/fustuniversity/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, color: '#C9A54C' }}
                href="https://www.facebook.com/fustuniversity/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, color: '#C9A54C' }}
                href="https://www.linkedin.com/school/fustuniversity/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, color: '#C9A54C' }}
                href="https://www.youtube.com/@fustuniversity"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </motion.a>
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

const WelcomeLetter = ({ onBack }: { onBack: () => void }) => {
  return (
    <div className="w-full max-w-5xl mx-auto p-4 md:p-8 z-10">
      <motion.button
        onClick={onBack}
        whileHover={{ x: -5, color: '#C9A54C' }}
        className="mb-8 flex items-center gap-2 text-white/60 font-montserrat text-xs uppercase tracking-widest transition-colors"
      >
        <ArrowRight size={16} className="rotate-180" />
        Voltar ao Início
      </motion.button>
      
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="glass-card holographic-border p-8 md:p-16 rounded-3xl relative overflow-hidden"
      >
        {/* Futuristic Scanline Effect */}
        <div className="scanline" />

        {/* Animated Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 bg-fust-gold/10 rounded-full blur-[100px] animate-pulse" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-fust-crimson/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full digital-particles opacity-20" />
        </div>

        {/* Decorative Tech Corners */}
        <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-fust-gold/40 rounded-tl-3xl" />
        <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-fust-gold/40 rounded-tr-3xl" />
        <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-fust-gold/40 rounded-bl-3xl" />
        <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-fust-gold/40 rounded-br-3xl" />

        <header className="text-center mb-16 relative">
          <motion.div
            animate={{ 
              rotateY: [0, 360],
              filter: ["brightness(1)", "brightness(1.5)", "brightness(1)"]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="w-40 h-40 border border-fust-gold/30 rounded-full flex items-center justify-center mx-auto mb-8 bg-white/5 backdrop-blur-xl shadow-[0_0_50px_rgba(201,165,76,0.2)] relative group"
          >
            <FUSTLogo size={120} vibrant is3D className="group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-fust-gold/20 animate-[spin_20s_linear_infinite]" />
          </motion.div>
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="font-cinzel text-4xl md:text-5xl font-bold text-white tracking-[0.2em] mb-4 uppercase glow-text"
          >
            Mensagem de Boas-Vindas
          </motion.h1>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-fust-gold to-transparent mx-auto opacity-50" />
        </header>

        <div className="font-montserrat text-lg md:text-xl text-white/80 leading-relaxed space-y-10 text-left relative z-10">
          <motion.p 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="font-playfair italic text-fust-gold text-3xl md:text-4xl mb-12 glow-text"
          >
            Caro(a) estudante,
          </motion.p>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="space-y-8"
          >
            <p className="border-l-4 border-fust-crimson pl-6 py-2 bg-white/5 rounded-r-xl">
              É com imensa honra e alegria que celebramos sua chegada à <span className="text-fust-gold font-bold">Florida University of Science and Theology</span>.
            </p>
            
            <p>
              Hoje, você inicia uma jornada que transcende o convencional. Na FUST, acreditamos que o futuro é construído na intersecção entre a <span className="text-fust-gold italic">ciência rigorosa</span> e a <span className="text-fust-gold italic">fé profunda</span>.
            </p>
            
            <p>
              Você agora faz parte de um ecossistema global de inovação e sabedoria, onde cada descoberta científica é um passo em direção ao entendimento maior da criação, e cada reflexão teológica é uma luz para o progresso humano.
            </p>
            
            <p className="bg-fust-gold/5 p-6 rounded-2xl border border-fust-gold/10 italic">
              "Nosso compromisso é formar não apenas profissionais de excelência, mas líderes íntegros, capazes de harmonizar tecnologia e espiritualidade para o bem comum."
            </p>
            
            <p>
              Prepare-se para ser desafiado, inspirado e transformado. Este é o seu momento de brilhar e deixar sua marca na história.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="pt-12 text-center"
          >
            <p className="font-playfair font-bold italic text-fust-gold text-3xl md:text-4xl glow-text">
              Seja o futuro. Seja FUST.
            </p>
          </motion.div>
        </div>

        <footer className="mt-20 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-10 relative z-10">
          <div className="text-center md:text-left">
            <p className="font-cinzel font-bold text-sm uppercase tracking-[0.3em] text-fust-gold mb-1">Diretoria Executiva</p>
            <p className="font-montserrat text-xs text-white/40 tracking-widest">FLORIDA UNIVERSITY OF SCIENCE AND THEOLOGY</p>
          </div>
          
          <motion.a
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 0 40px rgba(201, 165, 76, 0.4)",
              backgroundColor: "#C9A54C",
              color: "#0F1E3A"
            }}
            whileTap={{ scale: 0.95 }}
            href="https://wa.me/5583999751577?text=Quero%20fazer%20parte%20da%20FUST"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 px-12 py-6 bg-transparent border-2 border-fust-gold text-fust-gold font-montserrat font-bold uppercase tracking-[0.2em] rounded-full transition-all duration-500 group no-underline"
          >
            Iniciar Jornada
            <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
          </motion.a>
        </footer>

        {/* Holographic Seal */}
        <div className="absolute bottom-10 right-10 opacity-30 pointer-events-none group">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="w-32 h-32 border-2 border-dashed border-fust-gold rounded-full flex items-center justify-center"
          >
            <div className="text-fust-gold font-cinzel font-bold text-center text-[10px] tracking-tighter">
              AUTHENTICATED<br/>SYSTEM 2026<br/>FUST GLOBAL
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default FUSTLanding;
