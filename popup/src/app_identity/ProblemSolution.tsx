import { motion } from 'framer-motion';
import { Library, Zap, ShieldCheck, Lock } from 'lucide-react';

const problems = [
    {
        icon: <Zap className="w-6 h-6 text-yellow-400" />,
        title: "Stop Repetitive Work",
        description: "Don't spend 2 minutes every 10 minutes. Personalize once, and our system handles the data extraction and filling instantly."
    },
    {
        icon: <Library className="w-6 h-6 text-blue-400" />,
        title: "150+ Ready Templates",
        description: "Access a massive library of pre-built high-conversion templates so you never have to generate a new one from scratch."
    },
    {
        icon: <Lock className="w-6 h-6 text-indigo-400" />,
        title: "Local Privacy",
        description: "Your data stays in your own Chrome storage. We never steal your info; it never leaves your local system."
    },
    {
        icon: <ShieldCheck className="w-6 h-6 text-green-400" />,
        title: "Seamless Workflow",
        description: "SesamE-Mail lives where you work. No more tab-switching or lost focus during your professional outreach."
    }
];

export const ProblemSolution = () => {
    return (
        <section className="py-24 px-6 relative bg-slate-950/50 w-full flex flex-col items-center">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Master Your Outreach</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        We built this to eliminate the most frustrating parts of professional networking.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {problems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-8 glass-card hover:bg-white/10 transition-all duration-300 group relative border-white/5"
                        >
                            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-500/10 transition-all duration-500">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProblemSolution;
