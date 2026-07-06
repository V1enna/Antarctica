import React from 'react';


const Artworks = () => {
    return (
        <div className="min-h-screen text-white sm:p-2 lg:p-8">
            <h1 className="text-4xl font-bold mb-6 text-center">Artworks Page</h1>
            <div className="grid grid-cols-2 gap-4">
                <img className="mx-auto" src="./images/artworks/ber1.png"/>
            </div>

        </div>
    );
};


export default Artworks;