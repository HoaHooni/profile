interface IPortfolio {
    projects: IProject[];
}

interface IProject {
    title: string;
    category: string;
    image: string;
    url: string;
}

export default IPortfolio;