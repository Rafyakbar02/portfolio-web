import { experiences, educations } from "../constants";

const Experience = ({ product, index }) => {
  return (
    <div className="bg-white dark:bg-neutral-900 rounded-3xl p-7 h-56 flex flex-col justify-between transform transition-transform hover:scale-105 ease-out shadow-sm">
      <h3 className="text-neutral-700 dark:text-neutral-300">{product.date}</h3>
      <div>
        <h2 className="text-2xl font-bold mb-1">{product.title}</h2>
        <p className="text-neutral-700 dark:text-neutral-300">
          {product.location}
        </p>
      </div>
      {/* <ul className="text-sm list-disc ml-6 text-neutral-700 dark:text-neutral-300">
        {product.content.map((list, i) => (
          <li key={`${product.id}-${index}-${i}`}>{list}</li>
        ))}
      </ul> */}
    </div>
  );
};

const Timeline = ({ heading }) => {
  let products = heading == "Experience" ? experiences : educations;
  let timelineID = heading == "Experience" ? "experience" : "education";

  return (
    <div
      className="py-12 max-[800px]:px-12 scroll-mt-12 dark:text-white min-[800px]:w-[750px] mx-4 min-[800px]:mx-auto"
      id={timelineID}
    >
      <h2 className="font-black text-3xl tracking-tight text-center mb-12">
        {heading}
      </h2>
      <div className="grid grid-cols-1 justify-center min-[800px]:grid-cols-2 gap-6">
        {products.map((product, index) => (
          <Experience
            key={`${product.id}-${index}`}
            product={product}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Timeline;
