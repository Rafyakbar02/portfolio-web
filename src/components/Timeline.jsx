import { experiences, educations } from "../constants";

const Timeline = ({ heading }) => {
  let products = heading == "Work Experience" ? experiences : educations;
  let timelineID = heading == "Work Experience" ? "experience" : "education";

  return (
    <div
      className="p-10 md:py-16 md:px-36 scroll-mt-12 dark:bg-slate-900 dark:text-white"
      id={timelineID}
    >
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16">
        {heading}
      </h2>
      <ul>
        {products.map((product, index) => (
          <li className="mb-16">
            <h3 className="text-sm md:text-base mb-3 text-neutral-700 dark:text-neutral-300">
              {product.date}
            </h3>
            <h2 className="text-lg md:text-2xl font-semibold mb-3">
              {product.title}
            </h2>
            <p className="text-sm md:text-base mb-3 italic text-neutral-700 dark:text-neutral-300">
              {product.location}
            </p>
            <ul className="text-sm md:text-base list-disc ml-6 text-neutral-700 dark:text-neutral-300">
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
