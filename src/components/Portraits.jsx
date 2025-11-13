import { useNavigate } from 'react-router-dom';

const Portraits = ({ character }) => {
  const navigate = useNavigate();

return (
    <button className='relative group' onClick={() => navigate(`/characters/${character.id}`)}> {/* navigate to character page*/}
      <img
        src={character.image}
        alt={character.name}
        className="w-full h-48 object-cover rounded-t-2xl mb-4"
      />
      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-200 rounded-lg"></div>
      <h2 className="text-xl font-bold mb-2">{character.name}</h2>
    </button>
);
};

export default Portraits;