"use client";
import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { History, Library, Compass, Ship } from "lucide-react";

const TheHistory = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Animation for the "Golden Thread" connecting the history
    const pathLength = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
    return (
        <>
            <div ref={containerRef} className="bg-[#FAF7F2] text-stone-900 overflow-x-hidden">
                {/* --- SECTION 1: ETERNAL ORIGINS (5000+ Years) --- */}
                <section className="relative min-h-screen flex items-center pt-20">
                    <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <div className="flex items-center gap-4 text-orange-600 mb-6">
                                <Library className="w-6 h-6" />
                                <span className="uppercase tracking-[0.3em] text-sm font-bold">The Eternal Source</span>
                            </div>
                            <h2 className="text-5xl md:text-7xl font-serif mb-8 text-[#4a3728]">
                                5,000 Years of <br /> <span className="italic text-orange-500">Wisdom</span>
                            </h2>
                            <p className="text-lg text-stone-600 leading-relaxed">
                                The Bhagavad-gita, the principal scripture of our movement, is an eternal teaching. Its
                                written origins date back over 5,000 years, but its heart beats as an oral tradition
                                handed down from time immemorial.
                            </p>
                        </motion.div>

                        <div className="relative h-125 flex justify-center items-center">
                            {/* Abstract "Eternal Circle" animation */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                                className="absolute w-full h-full border-2 border-dashed border-orange-200 rounded-full"
                            />
                            <div className="bg-white p-8 rounded-2xl shadow-2xl z-10">
                                <p className="font-serif italic text-2xl text-center">
                                    "The Science of Self-Realization"
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- SECTION 2: THE SAMPRADAYA (THE LINEAGE) --- */}
                <section className="py-32 bg-stone-900 text-stone-100 relative">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-20">
                            <motion.h2
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                className="text-4xl md:text-5xl font-serif text-orange-400"
                            >
                                The Golden Lineage
                            </motion.h2>
                            <p className="mt-4 text-stone-400 italic">Brahma Madhva Gaudiya Vaishnava Sampradaya</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    year: "1486-1532",
                                    name: "Sri Chaitanya Mahaprabhu",
                                    role: "The Avatar of Bhakti",
                                    desc: "Codified the practices alongside the six Goswamis of Vrindavana.",
                                },
                                {
                                    year: "1838-1914",
                                    name: "Bhaktivinoda Thakura",
                                    role: "The Modern Pioneer",
                                    desc: "Sent the teachings to McGill University in Canada, reaching the first western audience.",
                                },
                                {
                                    year: "1874-1937",
                                    name: "Bhaktisiddhanta Sarasvati",
                                    role: "The Visionary Guru",
                                    desc: "Instructed Srila Prabhupada to spread the message in the English language.",
                                },
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.2 }}
                                    className="p-8 border border-stone-800 rounded-3xl bg-stone-800/50 backdrop-blur-sm hover:border-orange-500/50 transition-all group"
                                >
                                    <span className="text-orange-500 font-mono text-sm">{item.year}</span>
                                    <h3 className="text-2xl font-serif mt-2 mb-4 group-hover:text-orange-400 transition-colors">
                                        {item.name}
                                    </h3>
                                    <p className="text-orange-200/70 text-sm mb-4 tracking-widest uppercase">
                                        {item.role}
                                    </p>
                                    <p className="text-stone-400 leading-relaxed text-sm">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* --- SECTION 3: THE PERILOUS JOURNEY (1965-1966) --- */}
                <section className="py-32 bg-[#FCF9F5]">
                    <div className="container mx-auto px-6">
                        <div className="relative">
                            {/* The Ship Animation */}
                            <motion.div
                                style={{ x: useTransform(scrollYProgress, [0.5, 0.8], [-200, 200]) }}
                                className="absolute top-0 right-0 opacity-10 pointer-events-none"
                            >
                                <Ship size={400} />
                            </motion.div>

                            <div className="max-w-3xl relative z-10">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    className="p-10 md:p-16 bg-white rounded-[3rem] shadow-xl border border-orange-50"
                                >
                                    <Compass className="text-orange-500 mb-6 w-12 h-12" />
                                    <h2 className="text-4xl font-serif mb-6">1965: Across the Atlantic</h2>
                                    <p className="text-stone-600 text-lg leading-relaxed mb-8">
                                        Srila Prabhupada took a{" "}
                                        <span className="text-orange-600 font-bold">perilous journey</span> across the
                                        ocean to the USA. In a mere 11 years, what started in a small NYC storefront
                                        transformed into a global spiritual revolution spanning every major city in the
                                        world.
                                    </p>
                                    <div className="flex items-center gap-6">
                                        <div className="h-px flex-1 bg-orange-200" />
                                        <span className="font-serif italic text-orange-800">
                                            Founded in New York, 1966
                                        </span>
                                        <div className="h-px flex-1 bg-orange-200" />
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- SECTION 4: THE SIX GOSWAMIS (IMAGE GRID) --- */}
                <section className="py-24">
                    <div className="container mx-auto px-6">
                        <h2 className="text-center text-3xl font-serif mb-16 text-stone-500 italic">
                            Preserving the Tradition of the Six Goswamis
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
                            {["Sanatana", "Rupa", "Jiva", "Gopal Bhatta", "Raghunatha Dasa", "Raghunatha Bhatta"].map(
                                (name, i) => (
                                    <motion.div
                                        key={i}
                                        whileHover={{ scale: 1.05 }}
                                        className="aspect-square bg-orange-50 rounded-2xl flex flex-col items-center justify-center p-4 text-center border border-orange-100 shadow-sm"
                                    >
                                        <div className="w-10 h-10 rounded-full bg-white mb-3 shadow-inner flex items-center justify-center text-orange-400 font-bold">
                                            {name[0]}
                                        </div>
                                        <p className="text-xs font-bold text-stone-700 uppercase tracking-tighter">
                                            {name}
                                        </p>
                                        <p className="text-[10px] text-orange-400">Goswami</p>
                                    </motion.div>
                                )
                            )}
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default TheHistory;
