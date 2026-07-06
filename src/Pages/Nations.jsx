import react from "react";


function Nations(){

    return(
        <div className="min-h-screen text-white sm:p-2 lg:p-8">
            <h1 className="text-4xl font-bold mb-6 text-center">Nations Page</h1>
            <div className="grid grid-cols-2 gap-4">
                <img className="mx-auto" src="/images/Main_Map.png" alt="Main Map" />
                <div className="flex flex-col justify-center">
                    <button>
                        <p className="text-2xl mb-4 text-gray-300 hover:text-white">Sunset Isles</p>
                    </button>
                    <p className="text-2xl mb-4 text-gray-300 hover:text-white">United Monarchies</p>
                    <p className="text-2xl mb-4 text-gray-300 hover:text-white">Republic of Astralis</p>
                    <p className="text-2xl mb-4 text-gray-300 hover:text-white">Void's Brink</p>
                    <p className="text-2xl mb-4 text-gray-300 hover:text-white">Kalandra</p>
                    <p className="text-2xl mb-4 text-gray-300 hover:text-white">Neu Velvet</p>
                    <p className="text-2xl mb-4 text-gray-300 hover:text-white">Villa Borealis</p>
                </div>
            </div>
        </div>
    );
}

export default Nations;