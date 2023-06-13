import { experiences, educations } from "../constants";

const Timeline = ({ heading }) => {
  let products = heading == "Work Experience" ? experiences : educations;
  let timelineID = heading == "Work Experience" ? "experience" : "education";

  return (
    <div className="w-full py-16 px-36" id={timelineID}>
      <h2 className="text-4xl font-semibold text-center mb-16">{heading}</h2>
      <ul>
        {products.map((product, index) => (
          <li className="mb-16">
            <h3 className="mb-3">{product.date}</h3>
            <h2 className="text-2xl font-semibold mb-3">{product.title}</h2>
            <p className="mb-3 italic">{product.location}</p>
            <ul className="list-disc ml-6">
              {product.content.map((list, index) => (
                <li>{list}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Timeline;
