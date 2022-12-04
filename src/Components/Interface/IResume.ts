interface IResume {
    skillmessage: string | "",
    educations: IEducation[] | [];
    works: IWork[] | [];
    skills: ISkills[] | [];
}

type IEducation = {
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