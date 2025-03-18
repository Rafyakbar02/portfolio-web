import Accordion from "./util/Accordion";
import { experiences } from "../constants";

const Experience = () => {
    return (
        <div id="experience" className="px-6 py-12 sm:px-12 scroll-m-4">
            <h2 className="font-merriweather text-lg text-gray-600 border px-6 py-3 rounded-3xl w-fit">Experience</h2>
            <div className="flex flex-col sm:grid sm:grid-cols-2 gap-8 py-8 text-gray-500">
                <p>I've had numerous opportunities to learn and develop my skills throughout my academic and professional journey. From rigorous university courses and hands-on internships at local companies to a capstone project with a major tech company, each experience has been invaluable.</p>
                <p>These experiences have honed my technical abilities, instilled a strong work ethic, and shaped me into a resilient and resourceful professional. I am committed to continually learning and actively seeking new challenges to further grow and contribute meaningfully.</p>
            </div>
            <div>
                {experiences.map((exp, i) => (
                    // <Accordion company={exp.company} position={exp.position} date={exp.date} jobdesk={exp.jobdesk}/>
                    <div className="py-6 border-b">
                        <h2 className="font-semibold text-lg">{exp.position}</h2>
                        <p>{`${exp.company} | ${exp.date}`}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experience;