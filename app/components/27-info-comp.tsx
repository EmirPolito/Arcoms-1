
import React from 'react';

// Ensure this import path is correct for your project structure
import SectionWithMockup from "@/app/components/ui/27-info-ui"
// Data for the first section (default layout)
const exampleData1 = {
    title: (
        <>
            Intelligence,
            <br />
            delivered to you.
        </>
    ),
    description: (
        <>
            Get a tailored Monday morning brief directly in
            <br />
            your inbox, crafted by your virtual personal
            <br />
            analyst, spotlighting essential watchlist stories
            <br />
            and earnings for the week ahead.
        </>
    ),
    primaryImageSrc: 'img/c.jpg',
    secondaryImageSrc: 'img/c.jpg',
};

// Changed from 'export default function ...' to 'export function ...'
export function Component27() {
    return (
        <SectionWithMockup
            title={exampleData1.title}
            description={exampleData1.description}
            primaryImageSrc={exampleData1.primaryImageSrc}
            secondaryImageSrc={exampleData1.secondaryImageSrc}
        />
    );
}
