import Portraits from './Portraits';

const CharList = ({ characters = [] }) => {
  const list = Array.isArray(characters) ? characters : [];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"> {/*sm for mobile, md for tab, lg for pc*/}
      {list.map(char => (
        <Portraits key={char.id} character={char} />
      ))}
    </div>
  );
};

export default CharList;