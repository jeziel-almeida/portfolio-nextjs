export interface Image {
    url: string;
    alt: string;
}

export interface Tech {
    tech: string;
    color: string;
    bgcolor: string;
}

export interface AboutMe {
    title: {
        default: string;
        bold: string;
    }
    description: string;
    contact: {
        link: string;
        label: string;
    }
    techs: Tech[];
    pfp: {
        image: Image;
        experience: {
            default: string;
            bold: string;
        }
    }
}

export interface Project {
    slug: string;
    name: string;
    stack: string;
    image: Image;
    techs: string[];
    description: string;
    repository: string;
    deployment?: string;
}

export interface Home {
    aboutMe: AboutMe;
    projects: Project[];
}