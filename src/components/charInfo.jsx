import { chardata } from "../assets/data/chardata";
import {useParams, useNavigate, Link} from 'react-router-dom';


const CharInfo = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    const characterinfo = chardata.find((c) => c.id === id);

    return (
        <div>
            <h1 className="font-bold text-2xl">{characterinfo.name}</h1>
            <h2 className="italic text-xl mb-4">{characterinfo.alias}</h2>

            <img
            src={characterinfo.image} 
            alt={characterinfo.name}
            className="h-96 w-96 rounded-lg mb-4 flex" />

            <h3 className="text-center">"{characterinfo.quote}"</h3>
        </div>
    );
}


export default CharInfo;