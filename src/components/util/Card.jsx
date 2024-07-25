import { catatan } from "../../assets";

const Card = ({ title, languages, preview, link }) => {
    return (
        <div className="p-4 sm:p-8 rounded-2xl border">
          {/* Project Image */}
          <a href={preview.length > 0 ? preview : link}>
            <img className="rounded-2xl hover:brightness-90 transition" src={catatan} alt="" />
          </a>
        
          {/* Name and Tags */}
          <div className="flex flex-col sm:flex-row sm:justify-between mt-4 items-start sm:items-center gap-2 sm:gap-0">
            <a href={preview.length > 0 ? preview : link} className="text-xl font-semibold">{title}</a>
          
            {/* Tags */}
            <ul className="flex gap-2 text-sm text-gray-500">
              {languages.map((lang, i) => (
                <li className="py-1 px-2 bg-gray-200 rounded-lg">{lang}</li>
              ))}
            </ul>
          </div>
        </div>
    );
};

export default Card;