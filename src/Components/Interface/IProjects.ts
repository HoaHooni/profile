interface IProjects {
    title: string;
    category: string;
    thumbnail: string;
    url?: string;
    description?: string | React.ReactNode;
    shortDescription?: string;
    teamSize?: number;
    responsible?: string | React.ReactNode;
    languages?: string;
    tools?: string;
    other?: string | React.ReactNode;
    fromDate?: string;
    toDate?: string;
}

export default IProjects;