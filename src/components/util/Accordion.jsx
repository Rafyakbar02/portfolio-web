import { useState } from "react";

const Accordion = ({company, position, date, jobdesk}) => {
    const [accordionOpen, setAccordionOpen] = useState(false);

    return (
        <div className="py-6 border-b">
            <button onClick={() => setAccordionOpen(!accordionOpen)} className="grid grid-cols-2 sm:grid-cols-3 w-full text-lg text-left gap-2 items-center">
                <p>{position}</p>
                <p className="text-right sm:text-left font-bold">{company}</p>
                <p className="hidden sm:block text-right">{date}</p>
                {/* <span>{`${company} | ${position} | ${date}`}</span> */}
                {/* {accordionOpen ? <span className="flex items-center">-</span> : <span className="flex items-center">+</span>} */}
                
            </button>
            <div className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 ${
                accordionOpen ? 'grid-rows-[1fr] opacity-100 mt-6' : 'grid-rows-[0fr] opacity-0'
            }`} >
                <div className="overflow-hidden px-2">
                    <ul className="list-disc list-inside flex flex-col gap-2">
                        {jobdesk.map((job, i) => (
                            <li>{job}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Accordion;