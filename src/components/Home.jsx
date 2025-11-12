import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate(); // For navigation on button click

  return (
    <>
      <div className='flex justify-center items-center'>
        <img className="h-83 w-128 flex p-5" src="/images/Logo.png" alt="Logo"/>
      </div>

      <p className='justify-normal px-50'>
        --Authorized by the Iscariot Organization--
      </p>
      <div className='flex justify-center items-center'>
        <img className="h-20 w-21 flex p-3" src="/images/iscariot_logo.png" alt="iscariot"/>
      </div>

      <div className='flex justify-center items-center'>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-5 gap-10'>

          <button className='relative group' onClick={() => navigate('/characters')}>
            <img className="h-32 w-32 rounded-lg" src="/images/Ada.png" alt="Characters"/>
            {/* Overlay for hover effect hai*/}
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-200 rounded-lg"></div>
            <div className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              Characters
            </div>
          </button>
          <button className='relative group'>
            <img className="h-32 w-32 rounded-lg" src="/images/Archimedes.png" alt="Races"/>
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-200 rounded-lg"></div>
            <div className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              Races
            </div>
          </button>
          <button className='relative group'>
            <img className="h-32 w-32 rounded-lg" src="/images/Main_Map.png" alt="Factions"/>
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-200 rounded-lg"></div>
            <div className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              Factions
            </div>
          </button>
          <button className='relative group'>
            <img className="h-32 w-32 rounded-lg" src="/images/Telemouth.png" alt="Fanart"/>
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-200 rounded-lg"></div>
            <div className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              Fanarts
            </div>
          </button>
        </div>
      </div>

      <div className='text-white p-5 m-10 rounded-lg'>
      <h1 className="title">History</h1>
      <p className='justify-normal px-50'>
        In the cold yet newly melted peninsula of Antartica, the sudden spike in the continent's temperature caused it to become rather habitable for humanity. While the common public attributed this event to be the result of black magic or the doing of witches, the cause of this event is still unknown to this day.
        <br/><br/>
        But alongside the sudden and unknown change in climate, monsters have also appeared without warning within the peninsula. These monsters are considered as the entities that are not previously discovered or recorded before the melting. Most taking the form of humanoids with animalistic features.
        <br/><br/>
        Eventually, humanity managed to colonize these lands, expanding their culture and traditions into these uncharted lands. Driving and holding back the chimeras from human territories day by day as they expanded. Wars continued between the races for Antarctica’s lands.
        <br/><br/>
        But in 20 years, heavy lightning storms began forming and surrounding the continent, choking the residents from the outside world with no single mode of transport allowing the entry and exit of the continent as outside communication also begins to dissipate. Slowly but surely, products such as gunpowder and minerals became sparse. 
        <br/><br/>
        Upon extended research and time, the Chimeras were given a chance to settle alongside the humans, albeit with a lower social status. 
        Centuries pass and the local population of the continent resorted to utilizing more conventional weaponry and structures to survive in the harsh cold peninsula together both Humans and Chimeras.
        <br/><br/>
        But soon, they discover a third race that is reported to have been there since the beginning of the continent. They are the primary reason for the magical influx in the region and is suspected to have some connection to the melting and the great storm. The Arcana Demons. Through them the Arcana thrives until eventually Humans and Chimeras were able utilize the influx of magic for themselves. 
        <br/><br/>
        Thus begin the expeditions. A series of campaigns that seek the destruction of the demons, wherein both chimeras and humans are meant to work together and free the continent.
      </p>
      </div>
    </>
  );
};

export default Home;