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
                className="relative w-full h-full bg-fust-crimson rounded-lg shadow-2xl border-2 border-fust-gold/30 flex items-center justify-center overflow-hidden"
              >
                {/* Wax Seal */}
                <motion.div
                  initial={{ scale: 0, rotate: -45 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 1, type: "spring" }}
                  className="absolute z-20 w-16 h-16 bg-fust-crimson rounded-full shadow-lg flex items-center justify-center border-2 border-fust-gold"
                >
                  <div className="text-fust-gold flex items-center justify-center">
                    <FUSTLogo size={50} vibrant is3D />
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
                  className="absolute top-0 left-0 w-full h-1/2 bg-[#8b1416] origin-top z-10 rounded-t-lg border-b border-fust-gold/10"
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

const WelcomeLetter = ({ onContinue }: { onContinue: () => void }) => {
  return (
    <div className="w-full max-w-4xl mx-auto p-6 md:p-12 z-10">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="parchment-texture p-8 md:p-16 shadow-[0_30px_100px_rgba(0,0,0,0.6)] border-2 border-fust-crimson/40 relative overflow-hidden sepia-[0.15]"
        style={{ 
          borderRadius: '2px 4px 2px 8px / 4px 2px 6px 2px',
          clipPath: 'polygon(0% 2%, 2% 0%, 50% 1%, 98% 0%, 100% 2%, 99% 50%, 100% 98%, 98% 100%, 50% 99%, 2% 100%, 0% 98%, 1% 50%)'
        }}
      >
        {/* Aged Paper Stains */}
        <div className="absolute top-[10%] left-[5%] w-32 h-32 bg-[#8b4513]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-[15%] right-[10%] w-48 h-48 bg-[#8b4513]/10 rounded-full blur-3xl pointer-events-none" />
        
        {/* Lion Watermark */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.08] pointer-events-none select-none mix-blend-multiply invert brightness-0">
          <FUSTLogo size={600} />
        </div>

        {/* Decorative Borders */}
        <div className="absolute top-4 left-4 right-4 bottom-4 border border-fust-crimson/20 pointer-events-none" />
        <div className="absolute top-6 left-6 right-6 bottom-6 border border-fust-crimson/10 pointer-events-none" />

        <header className="text-center mb-12 relative">
          <div className="w-32 h-32 border-2 border-fust-crimson rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_20px_45px_rgba(0,0,0,0.3)] bg-white/60 backdrop-blur-md animate-pulse-gold relative overflow-hidden group">
            <FUSTLogo size={100} vibrant is3D className="group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-tr from-fust-gold/30 to-transparent opacity-40" />
          </div>
          <h1 className="font-cinzel text-3xl md:text-4xl font-bold text-fust-black tracking-tight mb-2 uppercase">Carta de Boas-Vindas</h1>
          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-fust-crimson to-transparent mx-auto" />
        </header>

        <div className="font-crimson text-lg md:text-xl text-[#2c1810] leading-[1.8] space-y-8 text-left relative z-10 tracking-wide">
          <p className="font-cormorant font-bold italic text-[#6a1012] text-2xl md:text-3xl mb-10">Caro(a) estudante,</p>
          
          <p className="indent-8">É com grande alegria que damos as boas-vindas a você na <span className="font-bold text-[#6a1012] font-cormorant">Florida University of Science and Theology</span>.</p>
          
          <p className="indent-8">Hoje marca o início de uma nova jornada em sua vida acadêmica e pessoal. Ao ingressar na FUST, você passa a fazer parte de uma comunidade internacional dedicada ao conhecimento, à reflexão e à transformação do mundo por meio da educação.</p>
          
          <p className="indent-8">Nossa universidade nasceu com um propósito claro: unir ciência, fé e sabedoria para formar líderes preparados para enfrentar os desafios da sociedade moderna.</p>
          
          <p className="indent-8">Aqui, você encontrará mais do que cursos e disciplinas. Encontrará um ambiente de crescimento, diálogo e descoberta, onde cada estudante é encorajado a desenvolver seu potencial intelectual, espiritual e humano.</p>
          
          <p className="indent-8">Esperamos que esta jornada seja marcada por aprendizado profundo, novas amizades e conquistas significativas.</p>
          
          <p className="indent-8">Que este seja apenas o primeiro capítulo de uma história extraordinária.</p>
          
          <div className="pt-12 text-center">
            <p className="font-cormorant font-bold italic text-[#6a1012] text-2xl md:text-3xl">Seja muito bem-vindo(a) à FUST.</p>
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
        <div className="absolute bottom-8 right-8 opacity-20 pointer-events-none rotate-12 mix-blend-multiply">
          <div className="w-32 h-32 border-4 border-[#6a1012] rounded-full flex items-center justify-center">
            <div className="text-[#6a1012] font-cinzel font-bold text-center text-xs">
              OFFICIAL SEAL<br/>FUST 2026
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default FUSTLanding;
