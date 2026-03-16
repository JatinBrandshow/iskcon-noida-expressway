"use client";

import React from "react";
import MainSection from "@/components/MainSection";
import DarshanTimings from "@/components/DarshanTimings";
import TempleDailyActivities from "@/components/TempleDailyActivities";
import TempleProject from "@/components/TempleProject";
import TempleEvents from "@/components/TempleEvents";
import TempleGallery from "@/components/TempleGallery";
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
            {/* <About />
            <EventsSection />
            <Birthday />
            <GratitudeSection /> */}
        </>
    );
};

export default HomePage;
