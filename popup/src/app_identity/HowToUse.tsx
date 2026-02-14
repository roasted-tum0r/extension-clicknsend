import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, MousePointerClick } from 'lucide-react';
import Application from '../Application';
import type { TemplateTypeNew } from '../features/mail-composer/types';

const steps = [
    {
        title: "Capture the Context",
        description: "Navigate to any job post or email. Simply highlight the text or right-click directly on an email address to activate."
    },
    {
        title: "AI Analysis",
        description: "Our engine instantly identifies key details: roles, companies, and contact info. No manual input required."
    },
    {
        title: "Select your Strategy",
        description: "Choose from our high-conversion template library or let AI craft a personalized response in seconds."
    },
    {
        title: "Hit Send, Stay Productive",
        description: "Review, refine, and launch your outreach. Scale your professional networking without the burnout."
    }
];

export const HowToUse = () => {
    const [activeTemplate, setActiveTemplate] = useState<TemplateTypeNew | undefined>(undefined);
    const [activeEmail, setActiveEmail] = useState<string | undefined>(undefined);

    const triggerCollaboration = () => {
        setActiveTemplate('collaboration_request' as TemplateTypeNew);
        setActiveEmail('anirbansamaddar07@gmail.com');
        const element = document.getElementById('how');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="how" className="py-24 px-6 max-w-7xl mx-auto w-full">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
                {/* Left Side: Instructions */}
                <div className="w-full lg:w-1/2">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight text-white">
                            Ready to automate your <span className="text-blue-400 font-extrabold italic">outreach?</span>
                        </h2>
                        <div className="space-y-8">
                            {steps.map((step, index) => (
                                <div key={index} className="flex gap-4">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/20 border border-blue-500/40 flex items-center justify-center text-blue-400 font-bold">
                                        {index + 1}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2 text-white flex items-center gap-2">
                                            {step.title}
                                            <CheckCircle2 className="w-4 h-4 text-slate-600" />
                                        </h3>
                                        <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 p-6 glass-card border-blue-500/20 bg-blue-500/5 hover:bg-blue-500/10 transition-colors cursor-pointer group" onClick={triggerCollaboration}>
                            <p className="text-slate-300 mb-4 font-medium italic group-hover:text-white transition-colors">
                                "Hey, developers! This is a community project. Want to contribute?"
                            </p>
                            <div
                                className="flex items-center gap-2 text-blue-400 font-bold"
                            >
                                <MousePointerClick className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                Click here (to collaborate)
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Right Side: Embedded App */}
                <div className="w-full lg:w-1/2">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        {/* Decorative Glow */}
                        <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-2xl rounded-3xl" />

                        <div className="relative glass-card overflow-hidden border-white/20 shadow-2xl shadow-blue-500/10 h-[600px] w-full">
                            <div className="absolute top-0 left-0 right-0 h-8 bg-white/5 border-b border-white/10 flex items-center px-4 gap-2 z-[60]">
                                <div className="w-2.5 h-2.5 rounded-full bg-red-400/50" />
                                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/50" />
                                <div className="w-2.5 h-2.5 rounded-full bg-green-400/50" />
                                <div className="ml-2 text-[10px] text-slate-500 font-mono tracking-wider uppercase">Live Preview</div>
                            </div>
                            <div className="pt-8 h-full">
                                <Application initialTemplate={activeTemplate} initialEmail={activeEmail} />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HowToUse;

