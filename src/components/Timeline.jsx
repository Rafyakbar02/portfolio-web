import { experiences, educations } from "../constants";

const Experience = ({ product, index }) => {
  return (
    <div className="bg-white dark:bg-neutral-950 border rounded-3xl p-7 flex flex-col gap-4">
      <h3 className="text-neutral-700 dark:text-neutral-300">{product.date}</h3>
      <h2 className="text-2xl font-bold">{product.title}</h2>
      <p className="text-neutral-700 dark:text-neutral-300">
        {product.location}
      </p>
      {/* <ul className="text-sm list-disc ml-6 text-neutral-700 dark:text-neutral-300">
        {product.content.map((list, i) => (
          <li key={`${product.id}-${index}-${i}`}>{list}</li>
        ))}
      </ul> */}
    </div>
  );
};

const Timeline = ({ heading }) => {
  let products = heading == "Work Experience" ? experiences : educations;
  let timelineID = heading == "Work Experience" ? "experience" : "education";

  return (
    <div
      className="py-12 scroll-mt-12 dark:text-white sm:w-[750px] md:w-[768px] sm:mx-auto"
      id={timelineID}
    >
      <h2 className="text-3xl font-semibold text-center mb-12">{heading}</h2>
      <div className="flex flex-col gap-16">
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
