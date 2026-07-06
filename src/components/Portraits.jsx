import { useNavigate } from 'react-router-dom';

const Portraits = ({ character }) => {
  const navigate = useNavigate();

return (
    <button className='relative group bg-slate-900 text-white rounded-2xl overflow-hidden' onClick={() => navigate(`/characters/${character.id}`)}> {/* navigate to character page*/}
      <img
        src={character.image}
        alt={character.name}
        className="w-full h-48 object-cover transition-all duration-200 bg-black"
      />
      <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-0 transition-all duration-200"></div>
      <h2 className="text-xl bottom-2 font-bold text-xl">{character.name}</h2>
    </button>
);
};

export default Portraits;