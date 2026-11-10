// THE SPECIFIC CHARACTER PAGE COMPONENT
import { chardata } from "../assets/data/chardata";
import {useParams, useNavigate, Link} from 'react-router-dom';


const CharInfo = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    const characterinfo = chardata.find((c) => c.id === id);

    return (
        <div className = "grid grid-cols-1 items-start gap-8 md:grid-cols-2">
            
            <section>
            <img
            src={characterinfo.image}
            alt={characterinfo.name}
            className="mx-auto w-full max-w-md rounded-lg object-cover"
            />
            </section>

            <section>
            <h1 className="font-bold text-2xl">{characterinfo.name}</h1>
            <h2 className="italic text-xl mb-4">{characterinfo.alias}</h2>

            <blockquote className="mb-6 border-l-4 border-violet-400 pl-4 italic">
            “{characterinfo.quote}”
            </blockquote>
            

            <div className="p-2 rounded-lg mb-4 border border-violet-400 inline-block">
            <h5 className="text-lg"><strong>Gender:</strong> {characterinfo.gender}</h5>
            <h5 className="text-lg"><strong>Race:</strong> {characterinfo.race}</h5>
            <h5 className="text-lg"><strong>Class:</strong> {characterinfo.class}</h5>
            <h5 className="text-lg"><strong>Affiliation:</strong> {characterinfo.affiliation}</h5>
            </div>
            <br/>

            <p className="text-lg font-bold flex justify-left">Description</p>
            <div className="p-2 rounded-lg mb-2 border border-violet-400">
            <p className="leading-relaxed">{characterinfo.description}</p>
            </div>
            </section>
        </div>
    );
}


export default CharInfo;