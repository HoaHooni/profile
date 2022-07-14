interface IResume {
    skillmessage: string,
    education: IEducation[];
    work: IWork[];
    skills: ISkills[];
}

interface IEducation {
    school: string;
    degree: string;
    graduated: string;
    description: string;
}

interface IWork {
    company: string;
    title: string;
    years: string;
    description: string;
}

interface ISkills {
    name: string;
    level: string;
}

export default IResume;