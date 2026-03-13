"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const EventDetail = () => {
    const { scrollYProgress } = useScroll();
    const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

    return (
        <div className="bg-senary text-white font-sans selection:bg-secondary selection:text-black">
            {/* HERO SECTION */}
            <motion.section style={{ scale }} className="relative h-[60vh] flex items-end p-8 md:p-20 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://iskconnoida.org/images/tue.webp"
                        className="w-full h-full object-cover opacity-40"
                        alt="Mangala Aarti"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-senary via-transparent to-transparent" />
                </div>

                <div className="relative z-10 max-w-5xl">
                    <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-secondary font-mono tracking-[0.3em] uppercase text-sm"
                    >
                        Daily • 4:30 AM // ISKCON Temple
                    </motion.span>

                    <motion.h1
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-6xl md:text-8xl font-black uppercase leading-[0.9] mt-4"
                    >
                        मंगल आरती <br />
                        <span className="text-tertiary italic">महोत्सव</span>
                    </motion.h1>
                </div>
            </motion.section>

            {/* ABOUT SECTION */}
            <section className="max-w-375 mx-auto py-32 px-8 md:px-20 grid grid-cols-1 md:grid-cols-12 gap-12 border-t border-primary/30">
                <div className="md:col-span-7">
                    <h2 className="text-5xl font-bold mb-8">
                        दिव्य भक्ति का <span className="text-secondary">पावन अवसर</span>
                    </h2>

                    <div className="text-lg text-gray-300 leading-relaxed space-y-6 max-w-2xl">
                        <p>
                            इस्कॉन मंदिर में आयोजित होने वाली मंगल आरती एक अत्यंत पवित्र और आध्यात्मिक अनुभव है, जिसमें
                            भक्तगण प्रभु श्रीकृष्ण और श्री श्री राधा के दिव्य दर्शन के साथ अपने दिन की शुरुआत करते हैं।
                        </p>

                        <p>
                            यह आरती प्रातःकाल ब्रह्ममुहूर्त में की जाती है, जो वैदिक परंपरा में साधना और भक्ति के लिए
                            सबसे शुभ समय माना जाता है। मंदिर का वातावरण इस समय मंत्रोच्चार, घंटियों की मधुर ध्वनि और
                            हरिनाम संकीर्तन से पूर्ण रूप से भक्तिमय हो जाता है।
                        </p>

                        <p>
                            मंगल आरती के दौरान भक्त भगवान के चरणों में दीप, धूप, पुष्प और भक्ति भाव अर्पित करते हैं। यह
                            केवल एक धार्मिक अनुष्ठान ही नहीं बल्कि आत्मा को शांति और सकारात्मकता से भर देने वाला
                            आध्यात्मिक अनुभव है।
                        </p>
                    </div>
                </div>

                {/* EVENT INFO */}
                <div className="md:col-span-5 flex flex-col justify-center space-y-6">
                    <div className="p-6 border border-secondary/40 rounded-2xl bg-secondary/10">
                        <h4 className="font-bold text-secondary">समय</h4>
                        <p className="text-sm text-gray-300 font-mono uppercase">प्रातः 4:30 बजे (ब्रह्ममुहूर्त)</p>
                    </div>

                    <div className="p-6 border border-primary/40 rounded-2xl bg-primary/10">
                        <h4 className="font-bold text-tertiary">स्थान</h4>
                        <p className="text-sm text-gray-300 font-mono uppercase">ISKCON Temple</p>
                    </div>

                    <div className="p-6 border border-primary/40 rounded-2xl bg-primary/10">
                        <h4 className="font-bold text-tertiary">विशेष</h4>
                        <p className="text-sm text-gray-300 font-mono uppercase">हरिनाम संकीर्तन और प्रसाद</p>
                    </div>
                </div>
            </section>

            {/* GALLERY */}
            <section className="max-w-375 mx-auto py-10 px-8 md:px-20">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:h-150">
                    <motion.div
                        whileHover={{ scale: 0.98 }}
                        className="md:col-span-2 bg-primary rounded-3xl overflow-hidden shadow-2xl"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1567593810070-7a3d471af022?q=80&w=2070&auto=format&fit=crop"
                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-500"
                        />
                    </motion.div>

                    <div className="grid grid-rows-2 gap-4 h-full">
                        <div className="bg-secondary rounded-3xl flex items-center justify-center p-6 text-black font-black text-2xl text-center">
                            HARE KRISHNA
                        </div>

                        <div className="bg-primary rounded-3xl overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=2070&auto=format&fit=crop"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    <div className="bg-primary rounded-3xl overflow-hidden relative group">
                        <img
                            src="https://images.unsplash.com/photo-1567593810070-7a3d471af022?q=80&w=2070&auto=format&fit=crop"
                            className="w-full h-full object-cover"
                        />

                        <div className="absolute inset-0 bg-secondary mix-blend-multiply opacity-0 group-hover:opacity-100 transition duration-300" />
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 flex flex-col items-center text-center">
                <h3 className="text-5xl md:text-7xl font-black mb-12 uppercase tracking-tighter">
                    Join the <span className="italic text-secondary">Mangala Aarti</span>
                </h3>

                <motion.button
                    whileHover={{ scale: 1.1, rotate: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="px-12 py-6 bg-secondary text-black font-bold text-xl rounded-full shadow-lg"
                >
                    JOIN THE AARTI
                </motion.button>
            </section>
        </div>
    );
};

export default EventDetail;
