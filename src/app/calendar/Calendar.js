"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const Calendar = () => {
    const [selectedFestival, setSelectedFestival] = useState(null);

    const festivals = {
        "2026-03-14": {
            name: "Pi Day",
            details: "A celebration of the mathematical constant π.",
            color: "bg-secondary",
        },
        "2026-03-20": {
            name: "Vernal Equinox",
            details: "The first day of spring. Day and night are equal.",
            color: "bg-tertiary",
        },
        "2026-03-28": {
            name: "Neon Lights Gala",
            details: "Modern art festival focusing on light installations.",
            color: "bg-secondary",
        },
    };

    const daysInMonth = Array.from({ length: 31 }, (_, i) => i + 1);

    return (
        <div className="min-h-screen bg-senary text-quinary p-8 selection:bg-secondary/30">
            <div className="max-w-300 mx-auto">

                {/* Header */}
                <header className="flex justify-between items-end mb-12">
                    <div>
                        <h1 className="text-6xl font-extralight tracking-tighter italic">
                            MARCH <span className="font-black not-italic text-secondary">2026</span>
                        </h1>

                        <p className="text-quinary/70 mt-2 tracking-widest uppercase text-xs">
                            Festival Calendar
                        </p>
                    </div>

                    <div className="flex gap-4">
                        <button className="p-4 rounded-full border border-primary/40 hover:bg-primary transition-all">
                            <ChevronLeft size={20} />
                        </button>

                        <button className="p-4 rounded-full border border-primary/40 hover:bg-primary transition-all">
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </header>

                {/* Calendar Grid */}
                <div className="grid grid-cols-7 gap-px bg-primary border border-primary rounded-3xl overflow-hidden shadow-2xl">

                    {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                        <div
                            key={day}
                            className="bg-primary p-6 text-center text-xs font-bold uppercase tracking-widest text-tertiary"
                        >
                            {day}
                        </div>
                    ))}

                    {daysInMonth.map((day) => {
                        const dateStr = `2026-03-${day.toString().padStart(2, "0")}`;
                        const festival = festivals[dateStr];

                        return (
                            <div
                                key={day}
                                className="group min-h-40 bg-senary p-4 hover:bg-primary/40 transition-colors relative"
                            >
                                <span className="text-3xl font-light opacity-40 group-hover:opacity-100 transition-opacity text-tertiary">
                                    {day}
                                </span>

                                {festival && (
                                    <button
                                        onClick={() => setSelectedFestival(festival)}
                                        className={`mt-4 w-full text-left p-3 rounded-xl ${festival.color} text-black shadow-lg transform hover:-translate-y-1 transition-all`}
                                    >
                                        <p className="text-[10px] uppercase font-bold opacity-80 mb-1">
                                            Festival
                                        </p>
                                        <p className="text-sm font-semibold truncate">
                                            {festival.name}
                                        </p>
                                    </button>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Popup */}
            {selectedFestival && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-6 backdrop-blur-xl bg-black/60">

                    <div className="bg-primary border border-secondary/30 w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl relative">

                        <button
                            onClick={() => setSelectedFestival(null)}
                            className="absolute top-6 right-6 z-30 p-2 rounded-full bg-secondary text-black"
                        >
                            <X size={20} />
                        </button>

                        <div
                            className={`h-32 ${selectedFestival.color} opacity-40 blur-3xl absolute -top-10 -left-10 w-64 rounded-full`}
                        />

                        <div className="p-10 relative z-20">
                            <div className="flex items-center gap-3 mb-6">
                                <div className={`w-3 h-3 rounded-full ${selectedFestival.color}`} />
                                <span className="uppercase tracking-[0.3em] text-xs font-bold text-tertiary">
                                    Event Details
                                </span>
                            </div>

                            <h2 className="text-4xl font-bold mb-4 text-quinary">
                                {selectedFestival.name}
                            </h2>

                            <p className="text-quinary/80 leading-relaxed text-lg mb-8">
                                {selectedFestival.details}
                            </p>

                            <button className="w-full py-4 bg-secondary text-black font-bold rounded-2xl hover:bg-tertiary transition-all">
                                Add to Schedule
                            </button>
                        </div>

                    </div>
                </div>
            )}
        </div>
    );
};

export default Calendar;