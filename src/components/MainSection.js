const MainSection = () => {
    return (
        <>
            <section
                id="home"
                className="relative min-h-[94vh] flex items-center justify-center text-center px-5 py-20 overflow-hidden bg-[#1A0505]"
            >
                {/* Background Image */}
                <div
                    className="absolute inset-0 opacity-[0.22] bg-center bg-cover"
                    style={{
                        backgroundImage: "url('/images/hero-bg.jpg')",
                    }}
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(26,5,5,0.6)_0%,rgba(92,10,10,0.4)_50%,rgba(26,5,5,0.8)_100%)]" />

                {/* Mandala Background */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-1">
                    <svg
                        className="w-150 h-150 md:w-175 md:h-175 opacity-[0.07] animate-mandala"
                        viewBox="0 0 400 400"
                        fill="none"
                    >
                        <circle cx="200" cy="200" r="180" stroke="#FFD700" strokeWidth="1" />
                        <circle cx="200" cy="200" r="150" stroke="#FF6B00" strokeWidth="0.5" />
                        <circle cx="200" cy="200" r="120" stroke="#FFD700" strokeWidth="1" />
                        <circle cx="200" cy="200" r="60" stroke="#FFD700" strokeWidth="1" />
                        <line x1="200" y1="20" x2="200" y2="380" stroke="#FFD700" strokeWidth="0.5" />
                        <line x1="20" y1="200" x2="380" y2="200" stroke="#FFD700" strokeWidth="0.5" />
                        <line x1="73" y1="73" x2="327" y2="327" stroke="#FF6B00" strokeWidth="0.5" />
                        <line x1="327" y1="73" x2="73" y2="327" stroke="#FF6B00" strokeWidth="0.5" />
                    </svg>
                </div>

                {/* Content */}
                <div className="relative z-2 max-w-212.5">
                    {/* Divider */}
                    <div className="flex items-center justify-center gap-3 mb-5">
                        <div className="h-px w-17.5 bg-[linear-gradient(to_right,transparent,#FFD700)]" />
                        <span className="text-[#FFD700] text-[1.3rem]">🪷</span>
                        <div className="h-px w-17.5 bg-[linear-gradient(to_left,transparent,#FFD700)]" />
                    </div>

                    {/* Title */}
                    <h1 className="font-serif text-[clamp(1.5rem,4vw,3.2rem)] text-[#FFD700] leading-[1.2] mb-2 drop-shadow-[2px_4px_20px_rgba(0,0,0,0.8)]">
                        ISKCON Noida Expressway
                    </h1>

                    {/* Subtitle */}
                    <p className="text-[clamp(0.95rem,2.2vw,1.3rem)] text-[#FFF0A0] mb-1 opacity-90">
                        श्री श्री जगन्नाथ बलदेव सुभद्रा मंदिर
                    </p>

                    {/* Tagline */}
                    <p className="italic text-[clamp(0.85rem,1.8vw,1.1rem)] text-[rgba(255,240,160,0.75)] mb-9">
                        "हरे कृष्ण की भक्ति में जीवन को समर्पित करें"
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-wrap justify-center gap-3.5">
                        {/* Primary Button */}
                        <a
                            href="#live"
                            className="inline-flex items-center gap-2 px-7 py-3.25 rounded-[50px] text-[0.95rem] font-bold text-white bg-[linear-gradient(135deg,#FF6B00,#FF4500)] shadow-[0_6px_25px_rgba(255,107,0,0.5)] transition-all duration-300 hover:-translate-y-0.75 hover:shadow-[0_10px_35px_rgba(255,107,0,0.7)]"
                        >
                            🔴 लाइव दर्शन
                        </a>

                        {/* Secondary Button */}
                        <a
                            href="#project"
                            className="inline-flex items-center gap-2 px-7 py-3.25 rounded-[50px] text-[0.95rem] font-semibold text-[#FFD700] border-2 border-[#FFD700] transition-all duration-300 hover:bg-[rgba(255,215,0,0.1)] hover:-translate-y-0.75"
                        >
                            🛕 मंदिर निर्माण
                        </a>

                        {/* WhatsApp Button */}
                        <a
                            href="https://wa.me/91XXXXXXXXXX"
                            className="inline-flex items-center gap-2 px-7 py-3.25 rounded-[50px] text-[0.95rem] font-bold text-white bg-[linear-gradient(135deg,#25D366,#128C7E)] shadow-[0_6px_25px_rgba(37,211,102,0.4)] transition-all duration-300 hover:-translate-y-0.75 hover:shadow-[0_10px_35px_rgba(37,211,102,0.6)]"
                        >
                            💬 WhatsApp
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default MainSection;
