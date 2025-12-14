"use client";
import React from "react";
import {
    TextRevealCard,
    TextRevealCardDescription,
    TextRevealCardTitle,
} from "./ui/text-reveal-card";

export function TextRevealCardPreview() {
    return (
        <div
            className="flex items-center justify-center bg-[#0E0E10] h-[40rem] rounded-2xl w-full">
            <TextRevealCard text="Future-Ready Skills" revealText="AI • Cybersecurity • IoT • Development">
                <TextRevealCardTitle>
                    Unlock Your Potential
                </TextRevealCardTitle>
                <TextRevealCardDescription>
                    Hover over the card to reveal the core technologies you will master with ThinkSkool.
                </TextRevealCardDescription>
            </TextRevealCard>
        </div>
    );
}
