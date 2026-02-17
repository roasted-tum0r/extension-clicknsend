import { ExternalLink } from 'lucide-react';
import FacebookIconNew from '../assets/icons/Facebook';
import GithubIconNew from '../assets/icons/Github';
import LinkedInIconNew from '../assets/icons/LinkedIn';

export const Footer = () => {
    return (
        <footer className="py-20 px-6 border-t border-white/5 bg-slate-950/80 backdrop-blur-md">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
                <div className="space-y-4 text-center md:text-left">
                    <div className="text-2xl font-black tracking-tighter text-white">
                        OPEN <span className="text-blue-500">SESAME</span>-MAIL
                    </div>
                    <p className="text-slate-500 text-sm max-w-xs">
                        Built with ❤️ for those who value their time.
                        Automate your outreach, scale your network.
                    </p>
                </div>

                <div className="flex flex-col items-center md:items-end gap-6">
                    <div className="flex gap-4">
                        <a href="https://github.com/roasted-tum0r" target="_blank"
                            rel="noopener noreferrer" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-slate-400 hover:text-white">
                            <GithubIconNew />
                        </a>
                        <a href="https://www.facebook.com/share/1B2mmEYvr1/" target="_blank"
                            rel="noopener noreferrer" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-slate-400 hover:text-white">
                            <FacebookIconNew />
                        </a>
                        <a href="https://www.linkedin.com/in/anirban-samaddar-580173211" target="_blank"
                            rel="noopener noreferrer" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-slate-400 hover:text-white">
                            <LinkedInIconNew />
                        </a>
                    </div>

                    <a
                        href="https://roast-portfolio-smoky.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors font-medium"
                    >
                        Visit My Portfolio
                        <ExternalLink className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                    </a>

                    <div className="text-slate-600 text-xs mt-4">
                        © 2026 Open SesamE-Mail. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
