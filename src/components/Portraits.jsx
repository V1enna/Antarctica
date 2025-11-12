import { Link } from "react-router-dom";

const Portraits = ({ character }) => {

    return (
    <Link to={`/characters/${character.id}`} className="bg-gray-800 text-white rounded-2xl p-4 shadow-lg hover:scale-105 transition-transform block">
        <img src={character.image} alt={character.name} 
        className="w-full h-48 object-cover rounded-t-2xl mb-4" />

        <h2 className="text-xl font-bold mb-2">{character.name}</h2>
    </Link>
    );

};

export default Portraits;