"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Leaf, Flame, Book, Users, MapPin } from "lucide-react";

const AboutUs = () => {
    const { scrollYProgress } = useScroll();
    const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

    const sectionFade = {
        initial: { opacity: 0, y: 40 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-100px" },
        transition: { duration: 1, ease: "easeOut" },
    };
    return (
        <>
            <div className="bg-[#FFFDF9] text-stone-800 font-sans selection:bg-orange-200">
                {/* --- GRAIN OVERLAY (Gives it a paper/organic feel) --- */}
                <div className="fixed inset-0 pointer-events-none z-[99] opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]" />

                {/* --- SECTION 1: HERO (THE SACRED PORTAL) --- */}
                <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-[#1a1410]">
                    {/* Background Image with Overlay */}
                    <div className="absolute inset-0 z-0">
                        <img
                            src="https://images.unsplash.com/photo-1544967082-d9d25d867d66?auto=format&fit=crop&q=80"
                            className="w-full h-full object-cover opacity-40 scale-105"
                            alt="Temple Atmosphere"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1a1410]/60 to-[#1a1410]" />
                    </div>

                    <motion.div style={{ opacity }} className="container mx-auto px-6 z-10 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex justify-center mb-6"
                        >
                            <div className="h-px w-12 bg-orange-400 self-center" />
                            <span className="mx-4 text-orange-400 tracking-[0.3em] uppercase text-xs font-bold">
                                Hare Krishna
                            </span>
                            <div className="h-px w-12 bg-orange-400 self-center" />
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-5xl md:text-8xl font-serif text-[#F3E5AB] leading-tight"
                        >
                            A Sanctuary for <br />
                            <span className="italic font-light text-white">The Soul</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="mt-8 text-stone-300 max-w-xl mx-auto font-light leading-relaxed"
                        >
                            Connecting our city to the timeless wisdom of the Vedas and the eternal joy of Bhakti Yoga.
                        </motion.p>
                    </motion.div>
                </section>

                {/* --- SECTION 2: THE FOUNDER (RESPECTFUL & TRADITIONAL) --- */}
                <section className="py-24 relative overflow-hidden">
                    <div className="container mx-auto px-6">
                        <div className="grid md:grid-cols-2 gap-20 items-center">
                            <motion.div {...sectionFade} className="relative group">
                                {/* Decorative Frame */}
                                <div className="absolute -inset-4 border border-orange-200/50 rounded-2xl group-hover:border-orange-400 transition-colors duration-500" />
                                <div className="relative aspect-[3/4] overflow-hidden rounded-xl shadow-2xl">
                                    <img
                                        src="https://images.unsplash.com/photo-1590059391054-73899f899986?auto=format&fit=crop&q=80"
                                        className="w-full h-full object-cover grayscale-[0.2] transition-transform duration-[2s] group-hover:scale-110"
                                        alt="Founder"
                                    />
                                </div>
                            </motion.div>

                            <motion.div {...sectionFade}>
                                <span className="text-orange-500 font-bold tracking-widest text-sm uppercase">
                                    Our Roots
                                </span>
                                <h2 className="text-4xl md:text-5xl font-serif mt-4 mb-8 text-[#4a3728]">
                                    The Journey of Grace
                                </h2>
                                <p className="text-stone-600 leading-relaxed mb-6 text-lg">
                                    ISKCON (The International Society for Krishna Consciousness) was established to
                                    spread the message of peace and love through the chanting of the Holy Names.
                                </p>
                                <p className="text-stone-600 leading-relaxed italic border-l-4 border-orange-400 pl-6 py-2">
                                    "Our mission is to help all people find their natural state of happiness and
                                    spiritual connection."
                                </p>
                                <div className="mt-10 flex gap-8">
                                    <div className="text-center">
                                        <p className="text-3xl font-serif text-orange-600">1966</p>
                                        <p className="text-xs uppercase tracking-widest text-stone-400">Global Start</p>
                                    </div>
                                    <div className="h-12 w-px bg-stone-200" />
                                    <div className="text-center">
                                        <p className="text-3xl font-serif text-orange-600">Citywide</p>
                                        <p className="text-xs uppercase tracking-widest text-stone-400">Community</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* --- SECTION 3: SACRED OFFERINGS (THE HEART) --- */}
                <section className="py-24 bg-[#FAF7F2]">
                    <div className="container mx-auto px-6">
                        <div className="text-center max-w-2xl mx-auto mb-20">
                            <h2 className="text-4xl font-serif text-[#4a3728]">Sacred Offerings</h2>
                            <div className="h-1 w-20 bg-orange-400 mx-auto mt-4 rounded-full" />
                        </div>

                        <div className="grid md:grid-cols-3 gap-12">
                            {[
                                {
                                    icon: <Flame className="w-8 h-8" />,
                                    title: "Daily Arati",
                                    desc: "Experience the mesmerizing lamps and soul-stirring kirtan every morning and evening.",
                                },
                                {
                                    icon: <Book className="w-8 h-8" />,
                                    title: "Gita Classes",
                                    desc: "Deep dive into the Bhagavad Gita and apply its logic to your modern daily life.",
                                },
                                {
                                    icon: <Leaf className="w-8 h-8" />,
                                    title: "Prasadam",
                                    desc: "Savor the taste of pure, karma-free vegetarian food offered with love to the Lord.",
                                },
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ y: -5 }}
                                    className="bg-white p-10 rounded-2xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] text-center group transition-all border border-transparent hover:border-orange-100"
                                >
                                    <div className="mb-6 inline-flex p-4 rounded-full bg-orange-50 text-orange-600 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-xl font-serif mb-4 text-[#4a3728]">{item.title}</h3>
                                    <p className="text-stone-500 text-sm leading-relaxed">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* --- SECTION 4: CALL TO DEVOTION (THE WARM CLOSING) --- */}
                <section className="py-24">
                    <div className="container mx-auto px-6 text-center">
                        <motion.div
                            {...sectionFade}
                            className="bg-[#4a3728] text-[#F3E5AB] rounded-3xl p-12 md:p-24 relative overflow-hidden shadow-2xl"
                        >
                            {/* Decorative Mandala Background (Low Opacity) */}
                            <div className="absolute inset-0 opacity-10 flex items-center justify-center scale-150 pointer-events-none">
                                <div className="w-96 h-96 border-8 border-orange-200 rounded-full flex items-center justify-center">
                                    <div className="w-64 h-64 border-4 border-orange-200 rounded-full rotate-45" />
                                </div>
                            </div>

                            <div className="relative z-10">
                                <h2 className="text-4xl md:text-6xl font-serif mb-8">Come, find your peace.</h2>
                                <p className="text-stone-300 max-w-xl mx-auto mb-10 text-lg font-light">
                                    Whether you're seeking answers, a community, or just a moment of quiet, our doors
                                    are open to all.
                                </p>
                                <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                                    <button className="px-10 py-4 bg-orange-500 text-white font-bold rounded-full hover:bg-orange-400 transition-all flex items-center gap-2">
                                        <MapPin className="w-4 h-4" /> Find the Temple
                                    </button>
                                    <button className="px-10 py-4 border border-orange-400 text-orange-400 font-bold rounded-full hover:bg-orange-400 hover:text-white transition-all">
                                        View Schedule
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default AboutUs;
