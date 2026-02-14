import { motion } from 'framer-motion';
import { Mail, Sparkles, ArrowRight } from 'lucide-react';

export const Hero = () => {
    return (
        <section className="relative min-h-[90vh] w-full flex flex-col items-center justify-center pt-32 pb-20 px-6 overflow-hidden">

            {/* Animated Background Elements */}
            <div className="absolute inset-0 z-0">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                        opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-500/10 blur-[120px] rounded-full"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        rotate: [0, -90, 0],
                        opacity: [0.2, 0.4, 0.2]
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-500/10 blur-[120px] rounded-full"
                />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 text-center max-w-4xl mx-auto"
            >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
                    <Sparkles className="w-4 h-4 text-blue-400" />
                    <span className="text-sm font-medium text-blue-100">Smart Email Automation</span>
                </div>

                <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight mb-8 leading-[1.1]">
                    Open <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500">SesamE-Mail</span>
                </h1>

                <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                    The ultimate Chrome extension for lightning-fast, personalized emails.
                    Stop wasting time on repetitive outreach and start closing more deals.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                        href="https://chromewebstore.google.com/detail/lmmkennfkdipenjicgdajinapippelbo?utm_source=item-share-cb"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-bold text-lg transition-all shadow-lg shadow-blue-500/25 flex items-center gap-2 group"
                    >
                        Get Started Free
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <button className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-full font-bold text-lg transition-all backdrop-blur-sm flex items-center gap-2">
                        Watch Demo
                        <Mail className="w-5 h-5" />
                    </button>
                </div>

                <div className="mt-16 flex flex-col items-center gap-4">
                    <div className="flex flex-wrap items-center justify-center gap-6 px-6 py-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/5 border border-green-500/20 group hover:bg-green-500/10 transition-all duration-300">
                            <span className="flex h-2 w-2 relative">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
                            </span>
                            <a
                                href="https://chromewebstore.google.com/detail/lmmkennfkdipenjicgdajinapippelbo"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-green-400 text-[10px] font-black tracking-widest hover:text-green-300 transition-colors"
                            >
                                CHROME EXTENSION <span className="text-green-500/80">— ACTIVE</span>
                            </a>
                        </div>

                        <div className="w-px h-4 bg-white/10 hidden sm:block"></div>

                        <div className="flex items-center gap-2 opacity-50">
                            <div className="w-2 h-2 rounded-full bg-slate-500"></div>
                            <span className="text-slate-300 text-xs font-bold tracking-wider">
                                MOBILE APPS <span className="text-slate-500">— COMING SOON</span>
                            </span>
                        </div>
                    </div>
                </div>


            </motion.div>

            {/* Floating 3D-like elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden h-full w-full">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="absolute top-[20%] left-[5%] p-4 glass-card rotate-[-12deg]"
                >
                    <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                        <Mail className="text-blue-400" />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7, duration: 1 }}
                    className="absolute bottom-[20%] right-[10%] p-4 glass-card rotate-[15deg]"
                >
                    <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                        <Sparkles className="text-purple-400" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
