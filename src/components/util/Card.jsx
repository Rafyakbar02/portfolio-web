import { catatan } from "../../assets";

const Card = ({ title, language, preview, link }) => {
    return (
        <div className="md:aspect-video aspect-square bg-catatan bg-top bg-cover p-8 flex flex-col justify-between">
          <div>
                <h3 className="text-3xl font-semibold mb-2">{title}</h3>
                <p>{language}</p>
          </div>
          <div className="flex justify-between">
            {preview.length > 0 && <a href={preview} target="_blank">Preview</a>}          
            {link.length > 0 && <a href={link} target="_blank">Github</a>}
          </div>
        </div>
    );
};

export default Card;