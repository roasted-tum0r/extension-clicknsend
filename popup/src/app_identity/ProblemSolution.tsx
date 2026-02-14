import { motion } from 'framer-motion';
import { Target, Zap, ShieldCheck } from 'lucide-react';

const problems = [
    {
        icon: <Zap className="w-6 h-6 text-yellow-400" />,
        title: "Slow Outreach",
        description: "Manual emailing is slow. SesamE-Mail automates the boring parts, so you can focus on building relationships."
    },
    {
        icon: <Target className="w-6 h-6 text-blue-400" />,
        title: "Low Personalization",
        description: "Generic templates get ignored. Our AI-driven tokens ensure every email feels tailor-made for the recipient."
    },
    {
        icon: <ShieldCheck className="w-6 h-6 text-green-400" />,
        title: "Broken Workflows",
        description: "Switching tabs breaks focus. SesamE-Mail lives where you work, directly inside your browser."
    }
];

export const ProblemSolution = () => {
    return (
        <section className="py-24 px-6 relative bg-slate-950/50 w-full flex flex-col items-center">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Open SesamE-Mail?</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        We built this to solve the most common frustrations in professional outreach.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {problems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="p-8 glass-card hover:bg-white/10 transition-colors group"
                        >
                            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                            <p className="text-slate-400 leading-relaxed">
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
