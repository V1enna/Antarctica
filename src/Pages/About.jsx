import React from 'react';

const About = () => {
    return (
        <div className="min-h-screen text-white sm:p-2 lg:p-8">
            <h1 className="text-4xl font-bold mb-6 text-center">About Page</h1>
            <p className="text-lg leading-relaxed max-w-3xl mx-auto">
                Welcome to the Gardens of Antarctica, a work-in-progress wiki site dedicated for
                the Antarctica DND campaign hosted and Dungeon Mastered by V1enna (Julian) for friends
            </p>
            <p className="text-lg leading-relaxed max-w-3xl mx-auto">
            <br />
                This site is meant to give a brief overview of the campaign, its characters, and the world they inhabit. 
                This is to also record the campaign and for the players to reference to keep track of what's happening in the campaign and the characters they meet.
                
            </p>
            <br />
            <p className="text-lg leading-relaxed max-w-3xl mx-auto">
                Campaign started early 2025. This site is still a work in progress, and will be updated as the campaign progresses.
            </p>

        </div>
    );
};


export default About;