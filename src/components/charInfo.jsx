// THE SPECIFIC CHARACTER PAGE COMPONENT
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

            <div className="flex justify-center">
            <img // image
            src={characterinfo.image} 
            alt={characterinfo.name}
            className="h-96 w-96 rounded-lg mb-4 flex justify-center" />
            </div>

            <h3 className="text-center ">"{characterinfo.quote}"</h3>
            

            <div className="p-2 rounded-lg mb-4 border border-violet-400 inline-block">
            <h5 className="text-lg font-semibold">Gender: {characterinfo.gender}</h5>
            <h5 className="text-lg font-semibold">Race: {characterinfo.race}</h5>
            <h5 className="text-lg font-semibold">Class: {characterinfo.class}</h5>
            <h5 className="text-lg font-semibold">Affiliation: {characterinfo.affiliation}</h5>
            </div>

            <br/>

            <p className="text-lg font-bold flex justify-left">Description</p>
            <div className="p-2 rounded-lg mb-2 border border-violet-400">
            
            <p className="text-lg">{characterinfo.description}</p>
            </div>
        

        </div>
    );
}


export default CharInfo;