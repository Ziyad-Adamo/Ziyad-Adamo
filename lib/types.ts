export interface Experience {
    id: string;
    role: string;
    company: string;
    duration: string;
    description: string;
    skills?: string[];
}

export interface Education {
    id: string;
    degree: string;
    institution: string;
    duration: string;
    description?: string;
}

export interface Project {
    id: string;
    title: string;
    description: string;
    tags: string[];
    link?: string;
    github?: string;
    image?: string;
}

export interface Skill {
    category: string;
    items: string[];
}
