import Portraits from './portraits';

const CharList = ({ characters = [] }) => {
  const list = Array.isArray(characters) ? characters : [];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {list.map(char => (
        <Portraits key={char.id} character={char} />
      ))}
    </div>
  );
};

export default CharList;