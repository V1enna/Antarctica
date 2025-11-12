import React from 'react';
import { chardata } from "../assets/data/chardata";
import CharList from './charlist';

const characters = () => {
  return (
    <div className="min-h-screen text-white p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Character Catalogue</h1>
      <CharList chardata={chardata} />
    </div>
  );
};

export default characters;