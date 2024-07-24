import Accordion from "./util/Accordion";
import { experiences } from "../constants";

const Experience = () => {
    return (
        <div id="experience" className="bg-white text-black px-6 py-12 sm:px-12 sm:py-36">
            <div className="flex flex-col gap-8 sm:flex-row sm:gap-12">
                <div className="flex flex-col basis-1/3 justify-center">
                    <h2 className="text-3xl font-semibold">Experience</h2>
                    <p className="mt-4 text-lg">I've had numerous opportunities to learn and develop my skills from internships at local companies to a capstone project with a major tech company.</p>
                </div>
                <div className="basis-2/3 flex flex-col gap-4 justify-center">
                    {experiences.map((exp, i) => (
                        <Accordion position={exp.position} company={exp.company} date={exp.date} jobdesk={exp.jobdesk} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Experience;