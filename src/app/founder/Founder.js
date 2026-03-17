"use client";
import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Quote, Book, Globe, Heart, Anchor, Users } from "lucide-react";

const Founder = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stays: { stiffness: 100, damping: 30, restDelta: 0.001 },
    });

    const fadeIn = {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.8 },
    };
    return (
        <>
            <div className="bg-[#FCF9F5] text-stone-800 selection:bg-orange-200">
                {/* Progress Bar */}
                <motion.div
                    className="fixed top-0 left-0 right-0 h-1 bg-orange-500 origin-left z-50"
                    style={{ scaleX }}
                />

                {/* --- HERO SECTION --- */}
                <section className="relative h-[70vh] flex items-center justify-center bg-[#1a1410] overflow-hidden">
                    <div className="absolute inset-0 opacity-40">
                        <img
                            src="https://images.unsplash.com/photo-1604881991720-f91add269bed?auto=format&fit=crop&q=80"
                            className="w-full h-full object-cover"
                            alt="Vrindavan Atmosphere"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-[#1a1410] via-transparent to-transparent" />
                    </div>

                    <div className="container mx-auto px-6 z-10 text-center">
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-orange-400 tracking-[0.4em] uppercase text-xs mb-4"
                        >
                            Founder-Acharya of ISKCON
                        </motion.p>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-7xl font-serif text-white leading-tight"
                        >
                            His Divine Grace <br />
                            <span className="text-orange-500 italic">A.C. Bhaktivedanta Swami Prabhupada</span>
                        </motion.h1>
                    </div>
                </section>

                {/* --- INTRODUCTION & QUOTE --- */}
                <section className="py-20 container mx-auto px-6 max-w-4xl">
                    <motion.div {...fadeIn} className="text-center">
                        <Quote className="w-12 h-12 text-orange-200 mx-auto mb-8" />
                        <h2 className="text-2xl md:text-3xl font-serif leading-relaxed italic text-stone-700">
                            "At the age of sixty-nine, when most would consider retirement, Srila Prabhupada embarked on
                            an extraordinary mission that would change the spiritual landscape of the modern world
                            forever."
                        </h2>
                        <div className="h-1 w-20 bg-orange-500 mx-auto mt-8" />
                    </motion.div>
                </section>

                {/* --- BIOGRAPHY TIMELINE SECTION --- */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="grid md:grid-cols-12 gap-12">
                            {/* Left Image - Sticky */}
                            <div className="md:col-span-5">
                                <div className="sticky top-24">
                                    <motion.div {...fadeIn} className="relative group">
                                        <div className="absolute -inset-4 border-2 border-orange-100 rounded-2xl -rotate-2 group-hover:rotate-0 transition-transform" />
                                        <img
                                            src="https://images.unsplash.com/photo-1544967082-d9d25d867d66?auto=format&fit=crop&q=80"
                                            alt="Srila Prabhupada"
                                            className="relative rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
                                        />
                                    </motion.div>
                                </div>
                            </div>

                            {/* Right Content */}
                            <div className="md:col-span-7 space-y-16">
                                <motion.div {...fadeIn}>
                                    <h3 className="text-3xl font-serif mb-6 text-orange-600 flex items-center gap-3">
                                        <Heart className="w-6 h-6" /> Early Life & Awakening
                                    </h3>
                                    <div className="space-y-4 text-stone-600 leading-relaxed text-lg">
                                        <p>
                                            Born on September 1, 1896, in Calcutta, Abhay Charan De met his spiritual
                                            master, Srila Bhaktisiddhanta Sarasvati Thakura, in 1922.
                                        </p>
                                        <p>
                                            This meeting defined his life's mission: to spread the teachings of Lord
                                            Chaitanya in the English language worldwide.
                                        </p>
                                    </div>
                                </motion.div>

                                <motion.div {...fadeIn}>
                                    <h3 className="text-3xl font-serif mb-6 text-orange-600 flex items-center gap-3">
                                        <Anchor className="w-6 h-6" /> The Journey to the West
                                    </h3>
                                    <div className="space-y-4 text-stone-600 leading-relaxed text-lg">
                                        <p>
                                            In 1965, carrying only 40 rupees and a trunk of books, Srila Prabhupada
                                            boarded the cargo ship <strong>Jaladuta</strong>.
                                        </p>
                                        <p>
                                            Arriving in New York City, he lived humbly in storefronts, attracting
                                            seekers disillusioned with materialism, officially founding ISKCON in July
                                            1966.
                                        </p>
                                    </div>
                                </motion.div>

                                {/* ISKCON MISSION LIST */}
                                <motion.div
                                    {...fadeIn}
                                    className="bg-orange-50 p-8 rounded-3xl border-l-8 border-orange-500"
                                >
                                    <h4 className="font-bold text-orange-800 mb-4 uppercase tracking-widest text-sm">
                                        The Mission:
                                    </h4>
                                    <ul className="space-y-3 text-stone-700">
                                        <li className="flex gap-2">
                                            <span>1.</span> Propagate spiritual knowledge systematically.
                                        </li>
                                        <li className="flex gap-2">
                                            <span>2.</span> Educate people in spiritual techniques.
                                        </li>
                                        <li className="flex gap-2">
                                            <span>3.</span> Bring people closer to Krishna.
                                        </li>
                                        <li className="flex gap-2">
                                            <span>4.</span> Establish a society for simple living.
                                        </li>
                                    </ul>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- GLOBAL IMPACT GRID --- */}
                <section className="py-24 bg-stone-900 text-stone-200">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-serif text-white">A Global Spiritual Revolution</h2>
                            <p className="text-orange-400 mt-2 italic">1966 – 1977</p>
                        </div>

                        <div className="grid md:grid-cols-4 gap-8">
                            {[
                                { icon: <Globe />, val: "6", label: "Continents Traversed" },
                                { icon: <Book />, val: "70+", label: "Books Authored" },
                                { icon: <Users />, val: "100+", label: "Temples Established" },
                                { icon: <Heart />, val: "Millions", label: "Meals Served Daily" },
                            ].map((stat, i) => (
                                <motion.div
                                    key={i}
                                    {...fadeIn}
                                    transition={{ delay: i * 0.1 }}
                                    className="text-center p-8 border border-stone-800 rounded-2xl hover:bg-stone-800 transition-colors"
                                >
                                    <div className="text-orange-500 mb-4 flex justify-center">{stat.icon}</div>
                                    <div className="text-4xl font-bold text-white mb-2">{stat.val}</div>
                                    <div className="text-stone-500 text-sm uppercase tracking-tighter">
                                        {stat.label}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* --- THE LEGACY (FINAL CTA) --- */}
                <section className="py-24 relative">
                    <div className="container mx-auto px-6 max-w-3xl text-center">
                        <motion.div {...fadeIn}>
                            <h2 className="text-4xl font-serif mb-8 text-stone-900">
                                "If you want to know me, read my books."
                            </h2>
                            <p className="text-lg text-stone-600 leading-relaxed mb-12">
                                Prabhupada’s words remains a guiding light for seekers of truth, inviting all to
                                discover the eternal joy of Krishna consciousness.
                            </p>

                            <div className="inline-flex flex-col items-center">
                                <p className="text-orange-600 font-serif text-xl mb-6">Come. Discover Krishna.</p>
                                <button className="px-12 py-5 bg-orange-500 text-white font-bold rounded-full shadow-xl hover:bg-orange-600 hover:-translate-y-1 transition-all">
                                    Visit ISKCON Vrindavan
                                </button>
                            </div>
                        </motion.div>
                    </div>

                    {/* Subtle Background Pattern */}
                    <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none z-0 overflow-hidden">
                        <div className="grid grid-cols-6 gap-4 transform -rotate-12 scale-150">
                            {[...Array(24)].map((_, i) => (
                                <span key={i} className="text-8xl font-serif font-bold text-orange-900">
                                    ISKCON
                                </span>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Founder;
