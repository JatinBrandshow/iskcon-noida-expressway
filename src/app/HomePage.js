"use client";

import React from "react";
import MainSection from "@/components/MainSection";
import DarshanTimings from "@/components/DarshanTimings";
import TempleDailyActivities from "@/components/TempleDailyActivities";
import TempleProject from "@/components/TempleProject";
import TempleEvents from "@/components/TempleEvents";
import TempleGallery from "@/components/TempleGallery";
import LiveDarshan from "@/components/LiveDarshan";
import TempleDailyProgram from "@/components/TempleDailyProgram";
import TempleCionstructionProject from "@/components/TempleConstructionProject";
import TempleVolunteerSection from "@/components/TempleVolunteerSection";
// import About from "@/components/About";
// import EventsSection from "@/components/EventSection";
// import Birthday from "@/components/Birthday";
// import GratitudeSection from "@/components/GratitudeSection";

const HomePage = () => {
    return (
        <>
            <MainSection />
            <DarshanTimings />
            <TempleDailyActivities />
            <TempleProject />
            <TempleEvents />
            <TempleGallery />
            <LiveDarshan />
            <TempleDailyProgram />
            <TempleCionstructionProject />
            <TempleVolunteerSection />
            {/* <About />
            <EventsSection />
            <Birthday />
            <GratitudeSection /> */}
        </>
    );
};

export default HomePage;
