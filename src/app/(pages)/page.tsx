"use client";
import React from "react";
import Carousel from "@/components/Carousel/Carousel";
import SkipButton from "@/components/SkipButton/SkipButton";
import OverlayCard from "@/components/OverlayCard/OverlayCard";
import NextButton from "@/components/NextButton/NextButton";
import OnBoardingText from "@/components/OnBoardingText/OnBoardingText";

const images = [
  {
    src: '/img/singer.jpg',
    alt: 'Slide 1',
    title: 'Welcome to Space Travel',
    description: 'Explore the universe with us!',
  },
  {
    src: '/img/singer.jpg',
    alt: 'Slide 2',
    title: 'Book Your Next Adventure',
    description: 'Reservations open now for Mars and beyond.',
  },
  {
    src: '/img/singer.jpg',
    alt: 'Slide 3',
    title: 'Experience the Unknown',
    description: 'Join us for a journey beyond the stars.',
  },
];
export default function OnboardingScreen () {
  return (
    <div className="relative h-screen w-full flex items-center justify-center bg-gray-200">
      {/* Carousel integration */}
      <div className="absolute inset-0 z-0 h-full w-full">
        <Carousel images={images}/>
      </div>

      {/* Overlay with content */}
      <OverlayCard>
        <OnBoardingText
          title="Get ready to be Excited"
          description="Millions of people have proven it, now it's your turn!"
        />
        <div className="flex justify-between items-center w-full mt-6">
          <SkipButton/>
          <NextButton/>
        </div>
      </OverlayCard>
    </div>
  );
};



