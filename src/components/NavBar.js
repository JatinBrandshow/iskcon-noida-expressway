"use client";

import { useState } from "react";
import AnnouncementSlider from "./AnnouncementSlider";

const links = [
    { name: "दैनिक कार्यक्रम", href: "#program" },
    { name: "मंदिर निर्माण", href: "#project" },
    { name: "उत्सव", href: "#events" },
    { name: "गैलरी", href: "#gallery" },
    { name: "लाइव दर्शन", href: "#live" },
    { name: "सेवा करें", href: "#volunteer" },
    { name: "🏗️ निर्माण", href: "#construction" },
    { name: "📍 स्थान", href: "#location" },
    { name: "संपर्क", href: "#contact" },
];

const NavBar = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <AnnouncementSlider />
            <nav className="bg-temple-gradient border-b-2 border-tertiary shadow-xl sticky top-0 z-50 px-[4%]">
                <div className="max-w-325 mx-auto flex items-center justify-between">
                    {/* Logo */}
                    <a href="/" className="flex items-center gap-2 py-3">
                        <img
                            src="https://iskconnoidaexpressway.com/wp-content/uploads/2020/12/ISKCON-NOIDA-Expressway-logo.png"
                            alt="logo"
                            className="h-12 invert sepia saturate-[4] hue-rotate-[5deg] brightness-125"
                        />
                    </a>

                    {/* Desktop Links */}
                    <ul className="hidden md:flex items-center gap-1 flex-wrap">
                        {links.map((link, i) => (
                            <li key={i}>
                                <a
                                    href={link.href}
                                    className="text-[#FFF0A0] text-[13px] font-semibold px-3 py-2 rounded-md transition-all hover:bg-[#ffd70026] hover:text-tertiary"
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}

                        <li>
                            <a
                                href="#donation"
                                className="ml-2 px-4 py-2 text-white rounded-full bg-[linear-gradient(135deg,#ff6b00,#ff4500)] font-semibold"
                            >
                                🙏 दान
                            </a>
                        </li>
                    </ul>

                    {/* Mobile Hamburger */}
                    <button onClick={() => setOpen(!open)} className="md:hidden flex flex-col gap-1">
                        <span className="w-6 h-0.5 bg-yellow-400"></span>
                        <span className="w-6 h-0.5 bg-yellow-400"></span>
                        <span className="w-6 h-0.5 bg-yellow-400"></span>
                    </button>
                </div>

                {/* Mobile Menu */}
                {open && (
                    <ul className="md:hidden flex flex-col gap-2 pb-4 pt-2">
                        {links.map((link, i) => (
                            <li key={i}>
                                <a
                                    href={link.href}
                                    className="block text-quaternary font-semibold px-3 py-2 rounded-md hover:bg-yellow-500/20"
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}

                        <li>
                            <a
                                href="#donation"
                                className="block text-center mt-2 px-4 py-2 text-white rounded-full bg-linear-to-br bg-[linear-gradient(135deg,#ff6b00,#ff4500)]"
                            >
                                🙏 दान
                            </a>
                        </li>
                    </ul>
                )}
            </nav>
        </>
    );
};

export default NavBar;
