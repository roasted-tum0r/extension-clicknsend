import Hero from './Hero';
import ProblemSolution from './ProblemSolution';
import HowToUse from './HowToUse';
import Footer from './Footer';
import { motion, useScroll, useSpring } from 'framer-motion';

const LandingPage = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 font-inter selection:bg-blue-500/30 dark">
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.08)_0%,transparent_50%)] pointer-events-none" />
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-500 z-[100] origin-left w-full"
        style={{ scaleX }}
      />


      {/* Navigation (Sticky) */}
      <nav className="fixed top-0 left-0 right-0 z-[80] p-6 flex justify-between items-center backdrop-blur-lg bg-[#020617]/50 border-b border-white/5">
        <div className="text-xl font-black tracking-tighter text-white">
          SESAME<span className="text-blue-500">-MAIL</span>
        </div>
        <div className="flex gap-8 items-center text-sm font-medium text-slate-400">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#how" className="hover:text-white transition-colors">How it works</a>
          <a href="#opensource" className="hover:text-white transition-colors">Open Source</a>
          <a
            href="https://chromewebstore.google.com/detail/lmmkennfkdipenjicgdajinapippelbo"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-full transition-all"
          >
            Try Now
          </a>
        </div>
      </nav>

      <main className="w-full">
        <div id="about">
          <Hero />
        </div>
        <ProblemSolution />
        <div id="how">
          <HowToUse />
        </div>

        {/* Open Source Section */}
        <section id="opensource" className="py-24 px-6 w-full flex flex-col items-center bg-slate-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-white">Transparency & Community</h2>
            <p className="text-slate-400 mb-10 leading-relaxed">
              Open SesamE-Mail is an open-source project. We believe in building together.
              Whether you're a developer or a designer, your contributions are welcome.
            </p>
            <div className="inline-flex items-center gap-6 p-1 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
              <div className="px-6 py-3 text-slate-300 font-medium">Want to contribute?</div>
              <a
                href="mailto:anirbansamaddar07@gmail.com"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl transition-all font-bold shadow-lg shadow-blue-500/20"
              >
                Email Me
              </a>
            </div>
          </div>
        </section>
      </main>


      <Footer />
    </div>
  );
};

export default LandingPage;
