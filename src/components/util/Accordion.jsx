import { useState } from "react";

const Accordion = ({company, position, date, jobdesk}) => {
    const [accordionOpen, setAccordionOpen] = useState(false);

    return (
        <div className="p-6 border rounded-lg">
            <button onClick={() => setAccordionOpen(!accordionOpen)} className="flex justify-between w-full text-lg text-left gap-2">
                <span>{`${company} | ${position} | ${date}`}</span>
                {accordionOpen ? <span className="flex items-center">-</span> : <span className="flex items-center">+</span>}
                
            </button>
            <div className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 ${
                accordionOpen ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'
            }`} >
                <div className="overflow-hidden">
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