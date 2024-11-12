"use client"
import React, { useState, useRef } from 'react';
import Image from "next/image";
import clsx from 'clsx';

import BannerImage from "@/public/fun88/images/banner-bg.png";

const Banner = () => {
    const SLIDES = [
        {
            label: "rescue",
            image: BannerImage
        },
        {
            label: "bonus",
            image: BannerImage
        },
        {
            label: "we are here for you",
            image: BannerImage
        },
    ];

    const [activeIndex, setActiveIndex] = useState(1);
    const [dragStart, setDragStart] = useState(null); // Track drag start position
    const [dragging, setDragging] = useState(false); // Track if dragging is active

    const handleDragStart = (e: any) => {
        setDragStart(e.clientX || e.touches[0].clientX);
        setDragging(true);
    };

    const handleDragMove = (e: any) => {
        if (!dragging) return;
    };

    const handleDragEnd = (e: any) => {
        if (!dragging || !dragStart) return;

        const dragEnd = e.clientX || e.changedTouches[0].clientX;
        const dragDistance = dragStart - dragEnd;

        // Determine slide direction based on drag distance
        if (dragDistance > 50) handleNext(); // Swipe left
        else if (dragDistance < -50) handlePrev(); // Swipe right

        setDragging(false);
    };

    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % SLIDES.length);
    };

    const handlePrev = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + SLIDES.length) % SLIDES.length);
    };

    return (
        <div
            className="relative w-full aspect-video overflow-hidden rounded-md"
            onMouseDown={handleDragStart}
            onMouseMove={handleDragMove}
            onMouseUp={handleDragEnd}
            onTouchStart={handleDragStart}
            onTouchMove={handleDragMove}
            onTouchEnd={handleDragEnd}
        >
            <div className="absolute z-10 left-8 top-0 h-full py-6 grid gap-6 w-32">
                {SLIDES.map((slide, index) => {
                    const btnClassName = clsx(
                        "text-left",
                        activeIndex === index ? "font-bold text-yellow-500" : "text-primary-foreground"
                    );
                    return (
                        <button
                            onClick={() => { setActiveIndex(index) }}
                            key={slide.label}
                            type="button"
                            className={btnClassName}
                        >
                            {slide.label.toUpperCase()}
                        </button>
                    );
                })}
            </div>
            <div className="relative w-full h-full flex items-center justify-center">
                {SLIDES.map((slide, index) => (
                    <div
                        key={slide.label}
                        className={clsx(
                            "absolute transition-opacity duration-700 ease-in-out w-full h-full",
                            activeIndex === index ? "opacity-100" : "opacity-0"
                        )}
                    >
                        <Image src={slide.image} alt={slide.label} fill className="object-cover" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Banner;
